author:: Daryl Manning
source:: [My Obsidian GTD setup](https://daryl.wakatara.com/my-obsidian-gtd-setup/)
clipped:: [[2022-12-28]]
published:: 2022-05-12

#clippings

May 12, 2022

7 min read

# My Obsidian GTD setup

I mentioned a [few posts back](/text-thug-life) that I’m convinced the underlying database for my life really needs to be plain text files. Simplicty works. But, it’s surprising how few tools seem to be based on this idea.

I’d ignored Obsidian after initially checking it out because it had no live preview feature and having two panes open on a laptop took up too much real estate. Them adding the single in-editor live preview feature has completely changed my experience since I’ve hit a sweet spot between writing experience, bi-directional linking, and task management along with it being simple markdown files I control. Things painful or messy in other apps work smoothly. I’m also shocked at how good thier plugin ecosystem is already, allowing me to layer on functionality I want and not have any bloat I don’t need.

Porting was a bit of a pain, but I have a setup I am finding seems to let me do everything I wanted to, and quite happy with it. Less fiddling, more GTD. Shockingly, I’d realized after a couple weeks, I’ve moved completely off logseq and emacs and doubled down on obsidian.

## Structure and Setup[](#structure-and-setup)

Despite experimenting extensively with Zettelkasten for several months, I found creating larger notes and then linking them to ideas and other things rather than “atomic” concepts worked better for me. It allows me to go back and refactor them and re-organize things in ways that make more sense to me (folders, areas, topics, projects). Also, graph views and backlinks show me interesting linkages which may be more appropriate, so I feel I get the same benefits. I have not yet extensively tried this with academic work yet, connecting reseearch and ideas, but for things revolving around GTD, writing, and organizing, I have to say I am feeling very on top of things and seem to be abel to excute at both the task and big picture level.

So, organization-wise, this looks more like a hybrid zettel and Tiago Forte’s PARA system (Projects, Areas, Resources, and Archives) to try to optimize for actionablity while not compromising discovery and serendipity.

Basically, I organize my folders in a PARA form (so, big folders for `Areas` and `Projects`) but also include a `/Logs` which organizes my daily, weekly, monthly and quarterly notes and checkins.

I also have a large `Refs` folder (which Forte calls Resources) containing material “feeding” actions and organization in Areas, Projects, and my Task list.

To illustrate a couple of examples:

1.  `Refs/Rez` - a folder for a file for each piece of media I consume which feeds my Resonance Calendar and GTD actions
2.  `Refs/Peeps` - a directory which contains a file for each person I interact with to link events and actions to them, and
3.  `Refs/Astro` - the directory which is dump all my research and learning on astronomy and astrophysics. So, for example an md file on the M1 Crab Nebula would be in there as a zettel “permanent note”, its aliases and all linked information about it from either book notes, papers, courses, or my own musings. Same with concepts like Herbig-Haro objects or the like.

To help focus on actionability, I have two major items in the right topbar besides the Calendar I’ve created which end up acting as dynamic sidebars.

## AIC[](#aic)

The AIC (Action Info Centre) allows me with one CMD-click will take me to the various PARA Areas, Projects, Planning, or Tracking/Tasks I want. To be honest, this is somethign I took from Notion where I felt it really helped me maintain a high-level organizational control and not get lost in the weeds. Notion always seemed better for planning, and I find using this proxy org structure gets me the same benefit.

![Obsidian AIC Sidebar](https://daryl.wakatara.com/images/2022-05-12-Obsidian-AIC-sidebar.778f791d391ef94fb13f5c0dcde07876edd904b74bc18db2125aff89c3d3971f.png)

Key things I want to focus stay in there, like my blog queue, resonance calendar, experiments and life areas like Money, Peeps, Health, and Travel and such.

I (try to) put information where it will be the most actionable, so things are generally linked from Projects and Areas to where it actually lives in the folder hierarchy (which Obsidian abstracts in its links).

The nice thing about this is I can have it live in the right pane and flip between backlinks, calendar, CIC, and my GTD view depending on what is needed.

## GTD[](#gtd)

The other right topbar button is my Tasks which I reduce to GTD. I use the [Obsidian Tasks plugin](https://github.com/obsidian-tasks-group/obsidian-tasks) which enhances the basic markdown checkbox functionality with dates, tags, scheduling, starts and repeats. I also have it hotkeyed to CMD-t which makes using it quick as thought. The killer feature though is it makes your tasks across your Obsidian vault queryable: you can craft views of your tasks and dashboard which works for you.

My GTD Dashboard uses the Tasks query functionality and Dataview queries (another plugin) to give me the following sections.

-   Inbox (all incoming tasks that have not been scheduled or processed)
-   Milestones (largely, birthdays and anniversaries and past events I note annually ie. anniversary of moving to Asia or selling my house and nomading).
-   WIP (work in process items. I keep an eye on number of WIP items to not get whlemed.)
-   Due (stuff that is due or past due today)
-   Next 10 Days (looks at items due, starting, or scheduled over the next 10 days)
-   Pings (I have a lightweight system I use for making sure I am checking in with friends, colleagues, and business or academic contacts on a regular basis. This lets me know who I should be pinging any particular week.)
-   Someday (probably should not be in this list since this GTD is for actions, but a long list of `#someday` tagged items I hope to somedaymaybe get to.)

So something like Milestones has a query like the following:

```
not done
is recurring
due before in 4 weeks
tags include #ann
sort by due
```

which scans over the next 4 weeks to show any recurring tasks that are tagged with #ann (for anniversary). In my template for all the peeps I keep in the `Refs/Peeps` folder, I have a standard line to uncomment on their birthdays or anniversaries to make sure I see these coming up and can do something nice or at least remember to call folks on their days.

My page with queries looks like:

### Milestones[](#milestones)

```tasks
not done
is recurring
due before in 4 weeks
tags include #ann
sort by due
```

### WIP[](#wip)

```tasks
not done
tags include #wip
```

### Due[](#due)

```tasks
not done
happens before tomorrow
```

### Next 10 Days[](#next-10-days)

```tasks
not done
happens after today
happens before in 10 days
```

### Pings[](#pings)

```dataview
table without ID file.link AS "Name", ping As "Ping"
from "Obsidian/Refs/Peeps"
where ping = "2022w29"
sort "Name" desc
```

### Inbox[](#inbox)

```tasks
not done
no happens date
tags do not include #wip
tags do not include #blog
tags do not include #someday
```

### Someday[](#someday)

```tasks
not done
tags include #someday
```

So, far it’s working far, far better than I thought it would when looking at Obsidian originally. It would be nice if it handled nested items to proxy projects, but so far, it’s working very well (and this is a problem every line-based task management system seems ot have, even emacs whose org-mode task management is probably best in class.).

## Resonance Calendar[](#resonance-calendar)

Probably one of the biggest challenges I had I felt got handled a lot better over covid was running across the idea of Ali Abdaal’s [Resonance Calendar](https://www.youtube.com/watch?v=lKYBB-Uw1IM) which is effectively a listing of all the things he’s exposed to and consumes and has an effect on him which he wants to note, reflect on, and extend to action or further exploration. Notion was actually pretty good for this because of its excellent web clipper and mobile app which could just throw things in the database, but I wanted something more extensible, though trying to get this working in logseq and emacs was painful, and did not make it easy to work with.

Obsidian probably really won me over on how ridiculsouly easy it was to get this working (compared to say the work required in logseq). It has two components, the Dataview plugin (wich allows querying of structured yaml data in markdown files) and a directory of template standardized entries for books, movies, series, papers, youtube, and online posts I run across. I have to say it is working great so far, and I love being able to also effortlessly enter notes on the mobile app while I’m reading my Kindle or thinking about things and and have them feed into this. :chef’s kiss:

The query is pretty simple:

```
table type, start, end, rating
from "Obsidian/Refs/Rez"
sort start desc
```

which simply takes all the files I have in the References folder under Rez and llists them by title, type, start date, end date, and rating and has a link to the more expansive notes and information.

This is what the standard template looks like if you want to do the same thing:

```markdown
---
type: 
start: 
end: 
killed: 
rating: 
digested: 
creator: 
url:
---

## Actions
        
## Review
        
## Quotes
        
## Key Ideas
        
## Notes
```

*(please feel free to suggest improvements to it, but I find this works well for most things, though trying to find a way to link my Readwise higlighting into it automagically. I already ahve added a Contents section for where my web clipper takes the whole web article and inserts it.)*

And this is what it ends up looking like.

![Obsidian Resonance Calendar](https://daryl.wakatara.com/images/2022-05-12-Obsidian-Resonance-Calendar.cea7a28045088bcda4c5b764e10cc55552ab730af619667f10ebd9d0103c49ab.png)

Simple looking at the moment (I limited the items returned). I have not played with css for it (widening it a bit, for example), and apparently themes like Minimalist will also do such things as provide ordinal numbers down the left hand side to get an idea of how many books you’ve read in a year or similar. The real strength of this approach is the pseudo-SQL you use to query the directory yaml fields allows you to get the info you want out of your consumption.

Clicking through on a link takes you (of course) to the source file so, you can see backlinks and all further information on the media there.

Explanation on the fields:

1.  Type is book, series, movie, paper, blog post etc,
2.  Killed is an optional date field in case I’ve decided to abandon something. I like this to be explicit.
3.  Rating is a simple out-of-5-stars score I give everything
4.  Digested let’s me know if I’ve actually reviewed the information *after* I have completed it and summarized and actioned it. It’s reflected in my weekly workflows so that things don’t fall off the edge of the table (and since my key objective in the Res Cal is to retain and action more of the material I do absorb.).

## Peeps[](#peeps)

^258619

I always feel a bit bad I don’t keep in touch with far-flung friends and colleagues often enough. Like everyone, I get busy and probably don’t keep in contact with people outside my immedaite circle enough.

I created a lightweight system which keeps people I haven’t spoken to in a while as a form of a “ping” task and also tracks my communications with them that I’ve logged or referred to. The other nice thing here is that this same system also helps track tasks that may be assigned to my directors or other people in the organization for when I’m tracking where things are or need to follow up on promised completions.

Strangely, this system actually extended from a more basic system in emacs to give me advanced warning on peoples’ birthdays so I do not get surprised on the day of and have time to plan something cool for them.

Again, much like the Resonance Calendar, each markdown file is a “record” in the database, and contains yaml fields that give it meaning as well as provide an anchor for bidirectional links to the person and tasks.

```markdown
---
aliases: 
Full Name: 
tags: 
ping: yyyyw##
contact:
- email: 
- phone: 
- whatsApp: 
- telegram: 
- twitter: 
location: 
---

**Birthday:** yyyy-mm-dd
%% - [ ] #Someone's Birthday (yyyy-mm-dd) #ann 🔁 every year 📅 yyyy-mm-dd %%

**Company**
Details - role

#### How We Met
```

This is shockingly useful. Obsidians backlinks make sure whenever I record a reference to a person in my daily notes or projects, I can go back and look at things like the last time I talked to them, notes about conversations or meetings with them, or tasks that are assigned to them.

Need to see what that meeting with Pete was about? Check the backlinks on Pete for the date and then look at your dailies and the meeting in question. Need to see what tasks are assigned to your direct report Anna? Use a tasks block query to check for her name before your weekly 1:1 to see what may need to be talked about.

For checking things like birthdays, anniversaries, and my own life milestones (I tend to try to remembe reach year when I did something cool or new for the first time - also prompts me to plan new trips and upskilling ideas). I use the following query which is largely driven by the #ann (for anniversary) tag. ^cb4dce

```taskss
not done
is recurring
due before in 4 weeks
tags include #ann
sort by due
```

This generally gives me 4 weeks notice if I want to plan something for someone’s birthday, do something special for Mother’s Day, or book a trip because I’m mourning the fact my life has gotten so dull and worky since moving to Singapore.

So, looking at this right now in my right sidebar, I can see three people’s birthdays coming up (one which I should book a dinner for), an anniversary I should remind someone of, and the fact that, in a couple of a days, it’s been 20 years (!!!) since I was at a small oasis in Tunisia with the vast Sahara stretching to the West before me.

I’m sure there are ways to extend this to make it even *more* useful, but I like the lightweight nature of this approach, it’s ease of use, and fact it focuses on what’s important to me, which is the people.

## Experiments[](#experiments)

I use the same approach from the previous two items to also track “experiments” I’m running every quarter. I am always trying something new and seeing if it improves or otherwise changes my life to figure out if I want to adapt it.

Each experiment has a page with a dataview query, and a yaml frontmatter markdown template that describes “database fields” for it and some headers on things like hypothesis, plan, treatment, contraindications, and outcomes so I am methodically dealing with things.

To make sure I’m “checking in” on these, there’s also a monthly recurring task to review them.

## Blog Queue[](#blog-queue)

One thing I really missed from Notion when trying to bend emacs and logseq to my will was Notion’s excellent Kanban functionality.

I had been using this for my queue of blog ideas and posts that I wanted to write and logseq and emacs just do not have a nice mechanic for this.

One of the first things that sold me on Obsidian after seeing hthey’d finalyl implemeted live previews was the fact kanban functionality is seriously nice and I could link cards to a post (as I’m doing with this.).

You do need to use the Kanban plugin and I have a directory in Areas dedicated to blog posts, but the really nice thing about this is the writing experience is excellent, and because the files are straight up markdown, I use the same template I use in Hugo when I get to the Pub stage, I simply move a copy of the file directly to hugo to publish it (in fact, I could probably even find a way to make my Hugo directory a vault or plug it directly into Obsidian with a little work but this works really well right now.). The markdown avoids the need to export or otherwise translate from Notion, logseq, or emacs so pretty happy with it since I’ve been using it.

And, as mentioned, with live preview the writing experience in Obsidian is improved so much I am super happy with using it for posts. It’s beautiful and easy to write in. I had noticed the subtle effect or trying to write blog posts in emacs and logseq meant I was writing less and I’d fallen behind on my twice monthly goal, which I seem to be making up quickly. Don’t *ever* under-estimate the effect of writing experience na dUX on your ability to pump out quality content (or feel like writing!)

![Obsidian Blog Queue](https://daryl.wakatara.com/images/2022-05-12-Obsidian-Blog-Queue.387e54b7ab8e36cc47541c95bf7222e181451880165d8c7c0fe4f869e140003c.png)

As cards are effectively a task, I use two tags “#blog” and “#wip” to also further isolate these. Blog posts don’t show up in my inbox for processing due to the query there, but they do show up in my WIP queue when I am working on stuff, so I can keep to my WIP llimit on things.

## Dailes and Weekly Review[](#dailes-and-weekly-review)

I use the Periodic Notes plugin to get my Daily Notes to fire up from the template I have for them every day (nicely, with the calendar plugin, you can also get it to create future notes for you which is super handy.).

The Daily Template looks lik this (note the links for giving backlinks to a page so I can look back at stuff over time if I choose).

```markdown

## Daily Plan
    
## Log
- 

- => ToDos

- => Pings


## Perso

### [[Morning Pages]]

### [[Storyworthy]]

### Meta
-  Where: ???
-  Weather: ???
-  Music: ???
-  Sleep: 7h?
-  Weight: ???
-  [[Exercise]]: ???
-  [[TIL]]: ??
-  [[Highlights]]:
-  [[Lowlights]]:
-  Energy: L/M/H
-  Effectiveness L/M/H
-  Emotions: ???
-  Eats:
    -   Breakie: ???
    -   Lunch: ???
    -   Dinner: ???

### [[Gratitude]]
1. 
2.   
3. 
```

I keep thinking I should extend some of the sections (like ToDos and Pings) with basic queries though their function is generally to add things that happen that day into the system (ie new tasks or things that happen with people) and I like the daily note being “indelible” rather than dynamic.

Under Log, I also use a simple meeting template to let me know who was in a meeting, what the agenda was, the takeaways from it, and if there were any actions I need to get into my tasks (or were assigned to other people I might need to chase up on or are deependenices for me.).

My Weekly template is extremely similar to the one I’ve talked about in other places though trying to figure a nice way to have 4 OKR quad I have talkaed about in previous quotes and trying to boil it down to the bare essentials more, so probably a future post on revisiting weekly reviews.

As well, I do Monthly and Quarterly OKR reviews though those are simply talking about how the month (or quarter) went and if I got down what I said I was going to do, and what I will be doing or changing next period.

## Mobile[](#mobile)

I’m using the mobile app on my iPhone and have to say it’s been surprisingly great for on-the-go. While it is much more mature than logseq’s, I have to say I am really impressed with the usability as well as ability to just get stuff done on the go with it. Big fan. I’m currently using it with Apple iCloud for syncing (which sometimes goes awry due to iCloud not actualyl snycing) so would love to see this with Dropbox so I can have cross Apple and Linux syncing.

Mobile was one of the edges that Notion had on every other tool, but I kinda don’t even miss it at all with Obsidian’s mobile client which is saying something. Try it out if you haven’t. I was quite surprised at how great it was.

## Academia and Deep Geekery[](#academia-and-deep-geekery)

I have to admit to being very impressed at how smooth things like complex math in Obsidian render and how nice the experience was when taking things from complex papers and the like.

My academic notes look great and strangely that just makes it so much easier to extract key points and information from them. I find refactoring notes to make the m more euccinct and memorable a pleasure and I’m just enjoying the process so much more.

While I havenm’t had to pull together a publishable paper yet with Obsidian, I’m kinda looking forward to the process as well as what the “zettelkasten” form of my notes may yield when I am coming up with new ideas to investigate and explore.

There is a plugin that takes highlights from a pdf and extracts them for you, which I’m looking forward to checking out but so far I’m still easiing into how to use Obsidian for serious academia. I would note though that there are a bunc hof plugins and blog posts on how to also integrate it with Zotero for citations support and the like. Stay tuned for a future post on that.

For coding as well, I’m finding taking notes and code snippets super easy. The syntax highlighting and standard markdown fenced code block approach is implmented well and just makes it a pleasure to work with.

## Web Clipping[](#web-clipping)

While there is no dedicated web clipper for Obsidian there is an easy to use bookmarklet which is easily hackable to get the template formats I’ve described above and which is working extremely well for me.

Do note the js boomarklet is actually better than many of the extensions available for Chrome and Firefox, I found.

## Porting[](#porting)

By far the biggest hurdle I had, but one which I have to say made Obsidian less painful, was moving everything *over* to Obsidian. Staright up and idiomatic markdown is probably the secret there.

The usual issue is getting things over from other systems which have “extended” markdown or otherwise jigged around it in order to support features they have which are not really supported within the markdown spec (yeah, looking at you Notion and logseq).

I also like the way that the links are simple `[[link]]` markers rather than some esoteric index like many Zettelkasten systems. It makes context so much easier (one of the issues I had with emacs’ org-roam).

## Conclusion[](#conclusion)

Weirdly, more than any of the other programs I’ve looked at in the last two years, Obsidian has managed to get itself into a state wh