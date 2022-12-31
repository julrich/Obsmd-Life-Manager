author:: Guy Wiener
source:: [PARA+GTD Obsidian setup](https://medium.com/@guywiener/para-gtd-obsidian-setup-d7f30b1dbb0c)
clipped:: [[2022-12-28]]
published:: 2022-03-27

#clippings

# PARA+GTD Obsidian setup

![](https://miro.medium.com/max/700/0*NiCIovLeUaQUcfbj)

Photo by [Glenn Carstens-Peters](https://unsplash.com/@glenncarstenspeters?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

[Obsidian](https://obsidian.md/) is gaining popularity as a platform for implementing a “Second Brain”, much for its versatility and numerous plugins — more than 500. However, such flexibility is also a drawback, as new uses are puzzled by the countless options.

In this blog post I describe my personal Obsidian setup, combining a [PARA](https://fortelabs.co/blog/para/) schema and a [GTD](https://gettingthingsdone.com/) dashboard.  
I came to this setup with these goals in mind:

1.  Simplicity
2.  Keyboard-navigability
3.  Single-glance overview

Let’s dive in

# File organization

My root file is called *Home*. Following the PARA method, it links to four files: Projects, Areas, Resources and Archive.

**\# Home**  
\- \[\[Projects\]\]  
\- \[\[Areas\]\]  
\- \[\[Resources\]\]  
\- \[\[Archive\]\]

Each one of these is a plain Markdown file. The content of each of these top-level files is a list of links to the files from its category: The Projects file contains a list of projects, the Areas file a list of areas, list of resources, etc. For example, a Projects file may look like:

**\# Projects**  
\- \[\[Demo UI\]\]  
\- \[\[Mesh wireless network\]\]  
\- \[\[Recommendations algorithm\]\]

Each project file contains to-do items as checkboxes, links to sub-notes or relevant resources, and any supporting text or external links. Following the GTD method, the next tasks are tagged with #next, and things I am waiting for are tagged with #wait. For example, consider this project file: ^298cc7

**\# Mesh wireless network**  
\- \[ \] Download configuration mobile app #next   
\- \[ \] Set up home network  
\- \[ \] Ordered extra basement unit #wait

Each area file contains links to relevant projects, and any other links and text. Suppose my Areas file contain these entries:

**\# Areas**  
\- \[\[Home office\]\]  
\- \[\[My App\]\]  
\- \[\[Finance\]\]

Then possible area files may be:

**\# Home office**  
\- \[\[Mesh wireless network\]\]**\# My App**  
\- \[\[Demo UI\]\]  
\- \[\[Recommendation Algorithm\]\]

Similarly, the Resources and Archive files are lists of links to resources and archived notes.

The rationale behind plain lists for PARA organization, instead of folder, tags or front-matter fields, is to keep them *Keyboard navigable*. Both the Obsidian Search results and File Explorer are not keyboard-driven by default. Simple markdown files, as shown above, are alway keyboard-navigable, in edit or live-preview modes.

The downside for managing PARA categories using outgoing links is that you cannot create a new note and assign it to a category. You need to link it to one of the category files explicitly. When I want to create a new note that belongs to a top-level PARA category, I first open the category file, write the link, and open it to create the file. The extra step is a bit of a nuisance, but this entire sequence is keyboard-driven, so I find it convenient enough.

Some alternative approaches are:

-   You can use the [Quick Explorer plugin](https://github.com/pjeby/quick-explorer) to navigate folders using keyboard shortcuts, if you want to use a PARA folder structure.
-   The [Core Search Assistant plugin](https://github.com/qawatake/obsidian-core-search-assistant-plugin) creates a cool Notion-like, keyboard-driven cards layout from search result, if you want to use tags for PARA categories. This would allow for assigning a category to a new file by tagging it. However, I personally find these previews too cluttered compared to a plain list.
-   The [Jump to Link plugin](https://github.com/mrjackphil/obsidian-jump-to-link) allows for opening links using the keyboard in *read* mode. This makes rendered results, like from [Folder Notes](https://github.com/aidenlx/alx-folder-note) or [DataView](https://github.com/blacksmithgu/obsidian-dataview), keyboard-navigable. Personally, I find this mode less intuitive than caret browsing.

# Dashboard

In addition to the above PARA setting, I wanted to add a GTD-like dashboard showing:

1.  The next task per project
2.  What am I waiting for
3.  Stuck projects
4.  Areas without projects

Implementing these can be tricky, especially the last two items, that require finding out where links are *missing*. Luckily, the [Dataview plugin](https://github.com/blacksmithgu/obsidian-dataview) comes in handy. Using its [JavaScript API](https://blacksmithgu.github.io/obsidian-dataview/api/intro/) we can render non-trivial queries into tables and lists.

Let’s see the code:

# Next Actions

```js
let projects = dv.pages('outgoing(\[\[Projects\]\])')  
let rows = projects.flatMap(  
  page => page.file.tasks  
    .filter(t => !t.completed && t.text.includes('#next'))  
    .map(task => \[page.file.link, task.text.replace('#next', '')\]  
  )  
)  
dv.table(\['Project', 'Next'\], rows)
```

The query at the first line extracts all pages that are linked from the Projects page. The following statement transform that list to an array of pairs — a link to the project page and the task text without the #next tag. Finally the result is rendered as a Markdown table. Following the toy example above, the result may be something like:

| Project               | Next                              |  
| --------------------- | --------------------------------- |  
| [Demo UI](Demo UI)               | Add new panel                     |  
| [Mesh wireless network](Mesh wireless network) | Download configuration mobile app |

# Stuck projects

This query is more tricky, as it requires filtering out project pages that was any checkbox with a #next or a #wait tag. ^345758

```js
let projects = dv.pages('outgoing(\[\[Projects\]\])')  
let stuck = projects.filter(page =>  
  page.file.tasks.filter(t =>   
    !t.completed && (  
      t.text.includes('#next') ||   
      t.text.includes('#wait')  
    )  
  ).length == 0  
).map(page => page.file.link)  
dv.list(stuck)
```

Continuing the above example, this query may display the Recommendation Algorithm project, if it was no relevant items.

# Areas with not projects

This query is similar to the previous one, only that it looks for area pages with no outgoing link that is also an outgoing link from the Projects page.

```js
let areas = dv.pages('outgoing(\[\[Areas\]\])')  
let projects = dv.pages('outgoing(\[\[Projects\]\])')  
let project\_links = projects.map(p => p.file.link)  
let no\_proj = areas.filter(area =>  
  area.file.outlinks.filter(out =>  
    project\_links.includes(out)  
  ).length == 0  
).map(x => x.file.link)  
dv.list(no\_proj)
```

Continuing the example above, this query may display the Finance area, if it has no link to any project page.

# Conclusion

This post shows:

-   A simple, keyboard-friendly PARA file organization schema for Obsidian
-   Dataview JavaScript queries for rendering a GTD review dashboard

I hope you found it useful — comments welcomed!