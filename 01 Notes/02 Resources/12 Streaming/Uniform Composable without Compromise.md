## Info
Stream URL: https://streamyard.com/hi688ezq94
YouTube URL: https://youtube.com/live/DvqvXGgnp5Q

## Questions
### 1.  _What is an unexpected or surprising outcome of transitioning from a monolithic to a composable architecture?_

- In the context of transitioning: Why transition? Often means other team structure and expectations, too. Account for overhead to align different teams, instead of (often) more hierarchical top down structures in a monolith
	- Also anticipate pushback, as changing the structure most of the time also means taking something away from someone (responsibility, freedom of choice, etc)
- Integration of stakeholders can get more challenging, as the surface area of systems can increase... while also increasing the potential of new blind spots and misunderstandings, because of a more focussed view on the whole by every single member

### 2.  _If you had to advise agency or SaaS company execs, what would it be?_

- Carefully evaluate offerings against your real customer needs. It's easy to underestimate the "new", with all the obvious benefits it might bring along
- If done right, this can really unlock production capacity and effiency by emporing your teams, and their specific needs, much more directly
- Also keep an eye out for new opportunities unlocked by thinking in a composable way. These can be non-obvious, but can also often carry the most value (re-think your approach when using new paradigms)
	- Experience Engine: unlocked the potential for stakeholders to own and change the whole eCommerce journey by composing and packaging complex systems for this specific use
	- Uses a Design System (kickstartDS obviously) to unlock scalability (add a new tenant in minutes through Design Tokens, customize to your hearts content with the capabilities offered by React and kickstartDS)

### 3.  _If you could wave a magic wand and change something in our space, what would it be?_

- More long term-thinking (read: standardization and collaboration) in the Frontend space. Lots of that on the "backend" side of things (with stuff like e.g. GraphQL and its tooling), but not much for frontend re-use. A lot of work gets repeated every time, still
- Manifest a tool / spec that can be used to map arbitrary JSON objects to another (bonus: make it have a GUI that can be used in a low-code way by power users)

### 4.  _What bottlenecks have you seen in composable architectures? This could be any bottleneck, from tech to process._

- Staffing and knowledge transfer. In most cases we've seen it has been a struggle to get an internal team set up which has the required knowledge to a) start work on the transition and b) on-board the rest of the org to it (arguably the harder and more important part)
- Frontend quality: often all-over-the-place, highly dependent on circumstance (who's actually building the stuff in your org), lots of reinvention. Not much support from SaaS vendors here, either.

### 5.  _What feature from old technology would you like to bring back to today?_

- Decentralization: More user-run, self-owned communities... phpBB, IRC, etc
- "Classic" frontend engineering focus (BEM, Vanilly JavaScript, et al)

### 6.  _How would you explain composable architectures to a digitally native 15 year old?_

- Compare it to classroom assignments:
	- Monolith:
		- Everybody gets assigned exact tasks to do
		- There's a detailed plan beforehand, "everything is known"
		- Coordinated by one person, hierarchically (the teacher)
	- Composable:
		- Class builds groups by themselves
		- The plan is given roughly, with room for interpretation on how the solution could look
		- Groups coordinate themselves to solve specific parts
	- You'll need someone coordinating in the composable scenario, too. How do you organize that?
	- How do you ensure the end result is fit for purpose, how do you actually monitor progress?
	- Pro: teams can organize based on skillset, interest and motivation... potentially unlocking way better results 