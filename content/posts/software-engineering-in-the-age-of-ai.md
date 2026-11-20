+++
date = '2026-11-20T10:00:00-07:00'
draft = true
title = 'Software Engineering in the Age of AI'
tags = ['software-engineering', 'craft', 'judgment', 'ai']
summary = ''
+++

{{< prompt >}}**Expand:** Pick a final title. Options: "The Work, Not the Tools", "Craft Without Judgment Builds the Wrong Thing Well", "AI Amplifies. It Doesn't Replace.", "Code Is a Tool". Write the summary last, in one sentence that states the thesis.{{< /prompt >}}

## The Wrong Question

"Will AI replace software engineers?" is a question I hear constantly. I think it is the wrong question, because it assumes software engineering is the act of writing code.

Writing code has never been most of the work. Fred Brooks put it plainly in 1987: "The hardest single part of building a software system is deciding precisely what to build."[^brooks] Most of the work is deciding what to build, choosing how to build it, checking that it works, and keeping it working.

{{< prompt >}}**Expand:** Open with a hook. It could be a moment when someone asked you this question, a headline, or the time you first watched AI write code you would have written yourself. How did it make you feel about your role? If you used the imposter-syndrome story in "In Pursuit of Excellence", this is a natural follow-on.{{< /prompt >}}

## Why I Wrote It Down

Words like "engineering," "craft," and "judgment" get used so often that they have started to lose their meaning. At Exalynt, I wanted clients and engineers to share one picture of the work, so I wrote down plain-language definitions of [software engineering](https://readme.exalynt.com/how-it-works/software-engineering), [engineering craft](https://readme.exalynt.com/how-it-works/software-engineering#engineering-craft), and [engineering judgment](https://readme.exalynt.com/how-it-works/software-engineering#engineering-judgment). They draw on the international standard, the field's body of knowledge, and decades of writing about engineering,[^exalynt-se] and they are written so anyone can read them.

{{< prompt >}}**Expand:** Why did this matter to you personally? What kept going wrong without shared definitions, such as clients expecting code volume or engineers judged by output? Why now, and what about AI made it urgent?{{< /prompt >}}

## Software Engineering

> **Software engineering** is the discipline of applying [engineering craft](#craft) and [judgment](#judgment) to build software that delivers value to people, consistently behaves as intended, and evolves confidently with proportional effort.[^exalynt-se]

Let's explore each piece of the definition in more detail.

### The Discipline

A discipline is a field of practice with shared knowledge, standards, and ways of working that people learn and hold each other to. Software engineering's are set out in a recognized body of knowledge and international standards. The international standard defines software engineering as "the application of a systematic, disciplined, quantifiable approach to the development, operation, and maintenance of software."[^iso] That last part matters: the discipline covers the software's whole life, not just the moment it is written.

The discipline is applied through two things, engineering craft and engineering judgment, which get their own sections below.

{{< prompt >}}**Expand:** Why call it a discipline instead of a job or a skill? What does it mean to you to "hold each other to" shared standards? Where have you seen software built without the discipline, and what happened over the rest of its life?{{< /prompt >}}

### Delivers Value to People

Software exists to serve people: anyone who uses it, depends on it, or benefits from it. It delivers value when it makes meaningful progress toward something that matters to them, by solving the right problem in the right way. Mary Shaw describes engineering as "creating cost-effective solutions to practical problems by applying codified knowledge, building things in the service of mankind."[^shaw]

{{< prompt >}}**Expand:** Tell a story about software that technically worked but delivered no value, or about choosing *not* to build something. Who were the people it served? What did "meaningful progress" actually look like for them?{{< /prompt >}}

### Consistently Behaves as Intended

It does what it is meant to do and avoids what it isn't, so people can depend on it. When Friedrich Bauer coined the term in 1968, he described software engineering as obtaining "software that is reliable and works on real machines efficiently."[^bauer]

{{< prompt >}}**Expand:** Why does "consistently" matter as much as "as intended"? Give an example of software people learned not to trust. Touch on the "avoids what it isn't meant to do" half, such as security and privacy, and why that matters to the people relying on it.{{< /prompt >}}

### Evolves Confidently with Proportional Effort

Software keeps changing as needs, people, and technology change. It can be fixed, improved, and extended without fear of breaking what already works, and a small change stays a small job. Titus Winters, Tom Manshreck, and Hyrum Wright put it well in *Software Engineering at Google*: "Software engineering is programming integrated over time."[^winters]

This does not mean building for every future need. It means building software that can change safely, with effort in proportion to the change, not guessing at needs nobody has yet.

{{< prompt >}}**Expand:** Describe a codebase where a small change was a big job, and what caused it. What does "confidently" feel like for an engineer making a change? How do you balance changeability against over-engineering for imagined futures?{{< /prompt >}}

### What the Definition Doesn't Say

Notice what the definition leaves out. It says nothing about who or what writes the code.

{{< prompt >}}**Expand:** One or two sentences that set up the rest of the post. This is the seed of the "work, not tools" argument.{{< /prompt >}}

## Craft

> **Engineering craft** is the practiced skill of building quality software with care, using the knowledge, methods, and tools of the field.[^exalynt-se]

Craft is how well the work is done: clear design, sound code, thorough checks, and systems that keep running. Let's explore each piece of the definition in more detail.

### Practiced Skill

Skill built by doing the work, over years, and never finished. Engineers keep learning from each other, from their mistakes, and from changes in the field.

{{< prompt >}}**Expand:** How has your own craft grown over your career? What did you learn from a mistake that you could not have learned from a book? Connect "never finished" to excellence as a pursuit rather than a destination.{{< /prompt >}}

### Quality Software

Software that is clear, simple, secure, dependable, and maintainable, made to a standard that the people who use it, and the engineers who work on it next, can rely on.

{{< prompt >}}**Expand:** What does quality look like to you in practice? Why include "the engineers who work on it next" in the standard? Is quality the same for a quick prototype as for software people depend on every day?{{< /prompt >}}

### With Care

Doing the work well for its own sake, including the parts no one else will see. Richard Sennett describes craftsmanship as "the desire to do a job well for its own sake."[^sennett] Care is what lets people trust work they cannot inspect themselves.

{{< prompt >}}**Expand:** Describe a piece of work you are proud of, especially the parts no one noticed. Why does care matter when most clients will never read the code?{{< /prompt >}}

### The Knowledge, Methods, and Tools of the Field

Everything the field has learned and built: its body of knowledge, practices, patterns, and standards, and its languages, frameworks, and tools, including AI.

Notice that the tools of the field include AI. Using AI well is part of the craft, just as using a compiler, a framework, or a debugger well is.

{{< prompt >}}**Expand:** How has your craft changed since you started working with AI, and what has stayed exactly the same? What does using AI *well* look like, compared to using it poorly?{{< /prompt >}}

## Judgment

> **Engineering judgment** is the practiced ability to evaluate tradeoffs amid uncertainty, decide at the right moment, and take responsibility for the outcomes.[^exalynt-se]

Judgment is what we build and which choices we make along the way. Let's explore each piece of the definition in more detail.

### Practiced Ability

An ability built through experience: making decisions, seeing how they turn out, and learning from them over years.

{{< prompt >}}**Expand:** Judgment cannot be fully taught from a book. How did you build yours? What advice would you give an engineer early in their career who wants to grow theirs, especially now that AI can do much of the typing?{{< /prompt >}}

### Evaluate Tradeoffs

Every option gains something and gives something up, such as speed, cost, flexibility, or simplicity. Evaluating tradeoffs means comparing those gains and costs honestly, on the evidence, against what matters to the people involved.

Judgment shows up everywhere in the work:[^exalynt-se]

- **The problem:** what is actually worth solving, and whether software should solve it at all.
- **The solution:** which approach fits the people, constraints, and budget.
- **The tools:** which tools to use, and when, including AI: what to ask of it, what context to give it, and whether what comes back is right.
- **How much is enough:** how much design, testing, and polish the work needs.
- **When to change course:** when the evidence says the plan is wrong.

{{< prompt >}}**Expand:** Walk through a real tradeoff you made. What did each option gain and give up? Why does "on the evidence" matter, as opposed to trends or "because I said so"?{{< /prompt >}}

### Amid Uncertainty

Some facts cannot be known in advance, and most decisions have more than one reasonable answer. Rules, data, and tools inform the choice, but they cannot settle it.

AI makes judgment calls too, and often reasonable ones. In my experience, though, those calls often lack the circumstances behind a decision: the people involved and what matters to them, the constraints that are real, the system's history, and where the work is heading. A choice that is reasonable in general is not necessarily the right tradeoff for *this* decision.[^exalynt-ai]

{{< prompt >}}**Expand:** Tell a story where AI (or a person) made a choice that was reasonable in general but wrong for the situation. What context was missing, and who had it?{{< /prompt >}}

### Decide at the Right Moment

Recognizing when a decision is needed, and keeping it open until then, so it is made once enough is known and before waiting causes harm. Mary and Tom Poppendieck call this "the last responsible moment."[^poppendieck]

{{< prompt >}}**Expand:** Give an example of deciding too early and getting locked in, and one of deciding too late. How do you tell when the moment has come?{{< /prompt >}}

### Take Responsibility for the Outcomes

Making the reasoning visible, standing behind the choice, and changing course when the evidence shows it was wrong. The ACM/IEEE code of ethics puts it this way: "Software engineers shall maintain integrity and independence in their professional judgment."[^acm]

{{< prompt >}}**Expand:** Why does it matter that a person answers for the result, however the work was produced? Share a time you owned a decision that turned out wrong, and what changed because of it.{{< /prompt >}}

## How They Work Together

Craft is how well we build. Judgment is what we build and which choices we make along the way. Using a tool well is craft; choosing which tool to use, and when, is judgment.

Each needs the other. **Craft without judgment builds the wrong thing well. Judgment without craft chooses the right thing and builds it poorly.**[^exalynt-se] Software engineering is both, applied together over the whole life of the software.

{{< prompt >}}**Expand:** This is a good place for a short contrast. Have you seen both failure modes? A beautifully engineered system nobody needed, or the right idea built so poorly it collapsed? Keep this section short; it is the hinge between the definitions and the argument.{{< /prompt >}}

## Why It Will Always Matter

At Exalynt, our position is simple: [AI amplifies software engineering. It does not replace it.](https://readme.exalynt.com/how-it-works/ai-in-software-engineering)

AI amplifies whatever it is given. In the hands of people who practice the discipline, it gets them to the right place sooner, with software that holds up. Without the discipline, it gets somewhere fast, and too often that turns out to be the wrong place, or software that cannot reliably do what it needs to do.[^exalynt-ai]

I want to be honest here: AI is changing quickly, and I am not the final word on what it will be able to do. Perhaps a future AI will practice more of this discipline on its own. But that is exactly why I think these definitions will always matter. **They describe the work, not the tools.** Whoever or whatever does the work, software still has to deliver value to people, behave as intended, and evolve with proportional effort. Craft and judgment are still what get it there. And someone still answers for the outcome.

{{< prompt >}}**Expand:** This is the heart of the post, so take your time. Make the "work, not tools" argument in your own words. History may help: every jump in abstraction (assembly, high-level languages, frameworks, the cloud) changed who or what did part of the work, and none of them changed what good software is. Then answer the reader directly: what does this mean for an engineer early in their career? For a client deciding whether they need engineers at all?{{< /prompt >}}

## The Pursuit Continues

{{< prompt >}}**Expand:** Close by tying back to [In Pursuit of Excellence](/posts/in-persuit-of-excellence/). Excellence is the ongoing pursuit of doing worthwhile things exceptionally well, and craft and judgment are how that pursuit shows up in software. As AI takes on more of the work, what we bring matters more, not less. End with a line or call to action: keep growing your craft and judgment, use AI to learn faster rather than to skip understanding, and own what you ship.{{< /prompt >}}

If you want to go deeper, the full definitions, along with the standards, books, and research they draw on, are in [What software engineering is](https://readme.exalynt.com/how-it-works/software-engineering), and our full position on AI is in [AI in software engineering](https://readme.exalynt.com/how-it-works/ai-in-software-engineering).

## References

The definitions in this post are Exalynt's own, written in plain language from the sources below. Where a source is quoted, the words are theirs.

[^exalynt-se]: Exalynt, [What software engineering is](https://readme.exalynt.com/how-it-works/software-engineering). Source of the definitions of software engineering, engineering craft, and engineering judgment, the meaning of each part, and where judgment shows up in the work. Its [sources section](https://readme.exalynt.com/how-it-works/software-engineering#where-our-definitions-come-from) lists everything the definitions draw on.

[^exalynt-ai]: Exalynt, [AI in software engineering](https://readme.exalynt.com/how-it-works/ai-in-software-engineering). Source of Exalynt's position that AI amplifies software engineering rather than replacing it.

[^brooks]: Frederick P. Brooks Jr., [No Silver Bullet: Essence and Accidents of Software Engineering](https://doi.org/10.1109/MC.1987.1663532), *IEEE Computer* 20(4), 1987.

[^iso]: ISO/IEC/IEEE 24765:2017, [Systems and software engineering: Vocabulary](https://webstore.iec.ch/publication/61433). Originally IEEE Std 610.12-1990.

[^shaw]: Mary Shaw, as reported by [InfoQ](https://www.infoq.com/news/2015/07/software-engineering-shaw), 2015.

[^bauer]: Friedrich L. Bauer, "Software Engineering," *Information Processing 71*, 1972, as quoted on [Wikipedia](https://en.wikipedia.org/wiki/Friedrich_L._Bauer).

[^winters]: Titus Winters, Tom Manshreck, and Hyrum Wright, [Software Engineering at Google](https://abseil.io/resources/swe-book/html/ch01.html), O'Reilly, 2020, chapter 1.

[^sennett]: Richard Sennett, [The Craftsman](https://search.worldcat.org/oclc/171287612), Yale University Press, 2008, p. 9.

[^poppendieck]: Mary and Tom Poppendieck, [Lean Software Development: An Agile Toolkit](https://ptgmedia.pearsoncmg.com/images/9780321150783/samplepages/0321150783.pdf), Addison-Wesley, 2003.

[^acm]: ACM/IEEE-CS, [Software Engineering Code of Ethics and Professional Practice](https://www.acm.org/code-of-ethics/software-engineering-code), version 5.2, principle 4.
