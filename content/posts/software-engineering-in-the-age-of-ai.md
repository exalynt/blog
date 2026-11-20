+++
date = '2026-11-20T10:00:00-07:00'
draft = true
title = 'The Question Every Engineer Is Asking'
tags = ['software-engineering', 'craft', 'judgment', 'ai']
summary = 'Like a lot of engineers, I feared AI would make my work, and my new company, unnecessary. Defining what software engineering actually is gave me my answer.'
+++

## Why Are Software Engineers Still a Thing?

When AI first came on the scene, I discounted it. I did not think it would ever be able to do what it does today. But I kept using it in my work as it got more capable, and somewhere along the way, how I work changed completely. Today I rarely type my own code.

The fear did not really hit until I voluntarily left my last job to start Exalynt. Suddenly the same question was everywhere. Engineers on LinkedIn were asking it. My family asked it: with what AI can do now, do you think you will still have a career? Are engineers and developers even needed anymore?

Potential clients asked it too, and never maliciously. These were honest questions, usually from people who are not technical. One told me, more or less: "I trust you, but we have a kid in college at our company building tools for us with AI, and they seem pretty legit. Do we actually need a software engineer, or can I just Claude up my own thing?"

Then a friend of mine, another engineer, spent a small amount of time with AI and basically rebuilt GitHub. My first reaction was: wow, this is amazing. My second was: why are software engineers still a thing?

The timing could not have been worse. Exalynt was barely getting started, and I could not shake the feeling that I might be building something worthless. Two questions kept coming back. Is what I do replaceable by AI? And does Exalynt, the company I am building around that work, even matter anymore?

Like most engineers, I love what I do, but for me it was never about the code itself. I enjoy writing code, but I have never been especially attached to it, and I do not mind "coding" in plain English. What scared me was value. If any Joe Blow could pick up an AI and build the same thing I could, what was I actually offering?

Before I could answer anyone else, I needed an answer for myself.

It took me a while to sort out my thoughts and feelings. I went back through my own experience with AI: the times it did remarkably well, and the times it fell short. Somewhere in that reflection, I realized I had been skipping a step. Before I could ask whether AI could do what software engineers do, I had to be clear about what software engineers do in the first place, beyond the coding.

## What Does a Software Engineer Do?

Ask most people what a software engineer does, and they will tell you: they write code. For a long time, we accepted that answer, and it is easy to see why.

I have worn a lot of hats over the years: software engineer, software architect, engineering manager more than once, and even director of technology. How much of my time went to writing code depended on the role, but when I was an engineer, it was probably around 70 percent. When most of your week goes to something, it starts to look like the job itself.

But coding was never the hard part. It was the time-consuming part. Sure, there were times I had to dig into a framework or a tricky integration, but that cost time, not difficulty.

The hard part showed up every time I led a project building something from scratch. Figuring out what we needed to build was hard: understanding the users, how they worked, what pain they were having, and what problem we were solving. Then, once it was built, came the hardest question of all: did it meet that need? Fred Brooks saw this back in 1987: *"The hardest single part of building a software system is deciding precisely what to build."*[^brooks]

Now AI handles the time-consuming part, and I operate somewhere between product owner, designer, and software architect. Building Exalynt, I spent my time on the business model, the problem I was solving, and how the application should work, and far less on code.

That does not mean I stepped away from the code. I am still involved, just at a higher level. I direct a team of AI agents: here is how I want this to work, here is how it should look, here are the patterns we use. And when something comes back wrong, like one tool used where we needed another, I catch it and have it fixed.

Behind any piece of software, there is so much more to the work. A software engineer:

- **Understands the problem.** Talks with the people involved, learns their domain, and digs past the feature they asked for to the need behind it.
- **Decides what to build.** Asks whether software should solve the problem at all, breaks big ideas into small steps, prioritizes, estimates, and says no when no is the right answer.
- **Designs the solution.** Chooses the architecture, data, and technologies, decides what to build and what to buy, weighs the tradeoffs, and plans for failure.
- **Builds it.** Writes code, yes, along with migrations, configuration, infrastructure, and integrations with everything around it.
- **Verifies it.** Tests, hunts for edge cases, reviews and gets reviewed, and checks security, privacy, accessibility, and performance in proportion to the risk.
- **Ships and runs it.** Deploys it, watches how it behaves in the real world, responds when it breaks at the worst possible moment, and learns from every incident.
- **Keeps it healthy.** Refactors, upgrades, patches, pays down shortcuts before they compound, and retires what is no longer needed.
- **Communicates.** Explains tradeoffs to people who are not technical, sets honest expectations, negotiates scope, and shares bad news early.
- **Works with others.** Pairs, mentors, onboards, and helps the team get better, not just the code.
- **Protects people.** Guards their data and privacy, and considers everyone the software affects.
- **Answers for the result.** Stands behind what ships, owns what goes wrong, and fixes it.
- **And so much more.**

Code is the medium for much of that work, but it was never the work itself.[^exalynt-se]

## Putting the Work Into Words

No list will ever be complete. To answer my question, I needed a few concise definitions of the work itself, ones that hold no matter who or what is doing the work, how it gets done, or which tools are used to do it.

I spent a lot of time thinking, opening up references here and there as my brain chewed on it: the international standard, the field's body of knowledge, and the many books on software craftsmanship I have read over the years. Take your pick; there are plenty.

As I worked through it, three concepts kept surfacing. The first is [software engineering](https://readme.exalynt.com/how-it-works/software-engineering) itself: a discipline, just like mechanical, chemical, or civil engineering. Within that discipline are the two things it depends on: [craft](https://readme.exalynt.com/how-it-works/software-engineering#engineering-craft) and [judgment](https://readme.exalynt.com/how-it-works/software-engineering#engineering-judgment). This is not the only way to split it. It is just the way that made sense to me as I thought it through. I wrote the results in plain language as Exalynt's definitions.[^exalynt-se]

Writing them down gave me an anchor: here is what it means to be a software engineer. With it, I could hold AI up against each part of each definition and see, from my own experience, where it meets the bar and where it falls short.

## Software Engineering

> **Software engineering** is the discipline of applying [engineering craft](#craft) and [judgment](#judgment) to build software that delivers value to people, consistently behaves as intended, and evolves gracefully.[^exalynt-se]

**The discipline.** A discipline is a field of practice with shared knowledge, standards, and ways of working that people learn and hold each other to. It is what separates caring about the result, taking responsibility for it, and building quality into it, from "I sent one prompt to an AI, it gave me this output, so it must be perfect."

**Delivers value to people.** Software exists to serve people by solving the right problem in the right way. I have been part of projects where we spent months and months building something that never met the users' needs the way it had to. That is a huge amount of waste, and no amount of good code would have fixed it.

**Consistently behaves as intended.** It does what it is meant to do and avoids what it is not, so people can depend on it. I have also been on projects where the discipline was never applied. A group of "programmers" kept throwing code at the problem, and the result was a buggy mess. It never provided the value it was meant to, and eventually it had to be shut down.

**Evolves gracefully.** Software keeps changing as needs, people, and technology change. Titus Winters, Tom Manshreck, and Hyrum Wright put it well in *Software Engineering at Google*: *"Software engineering is programming integrated over time."*[^winters] I really like the word "gracefully." Without the discipline, software easily becomes more and more code piled on top of itself. On that buggy project, that is exactly what happened—small changes turned into nightmares, and the effort to change anything became monumental. Evolving gracefully does not mean change takes no effort. It means the effort is proportional to the change.

The definition says nothing about who or what writes the code, or which tools they use. Every failure I just described happened before AI, at the hands of people. It was never the tools. It was the missing discipline.

So where does AI stand? In my experience, it does very well at writing code and doing the implementation, and I use it constantly as a sounding board for ideas. I have seen senior engineers who apply the discipline use AI to magnify their output in a huge way and still produce amazing, quality software. I have also seen junior engineers, and people who are not engineers at all, who do not know the craft or the discipline and do not apply it. What they produce falls over as soon as someone has to change it, depend on it, or build on it.

## Craft

> **Engineering craft** is the practiced skill of building quality software with care, using the knowledge, methods, and tools of the field.[^exalynt-se]

Craft is how well the work is done: clear design, sound code, thorough checks, and systems that keep running.

**Practiced skill.** My craft developed the way most engineers' does. I studied full-stack web development at a technical college, then earned a bachelor's degree in software development. That was only a foundation. Everything since has been practice—mentors, experience, and a lot of books. *Clean Code*[^cleancode] and *The Pragmatic Programmer*[^pragprog] in particular shaped how I see myself as an engineer.

**Quality software.** To me, quality comes back to the definition of software engineering itself. Software no one finds valuable has no reason to exist. Software no one can depend on might theoretically solve my problem, but it does not solve my problem. And software that cannot change when my needs or my business change is a boat anchor, and there is no point having it. Quality also means not over-engineering. The tradeoffs are explicit: we chose this way because it met the need at the time, while keeping in mind what the future might hold. There is no crystal ball, so finding the balance between keeping it simple and leaving room to grow is genuinely tough.

**With care.** Richard Sennett describes craftsmanship as *"the desire to do a job well for its own sake."*[^sennett] As an engineer, it is your duty to put care into the work, whether or not the client ever sees it. It is like trusting a doctor to wash their hands—you should not have to tell them to do it.

**The knowledge, methods, and tools of the field.** Those tools include AI, and directing AI agents is still a craft. Using AI well means you still understand, and take responsibility for, what it produces, and you make sure everything that went into quality software before AI still goes in. Turning a blind eye because "AI has it" is no different from turning a blind eye to code another engineer contributes. It does matter.

AI's output has definitely met my quality bar. Some models I have used were terrible, and some were exceptional—good enough to send me right back to questioning my existence. But even with the best models, someone still has to know what good looks like and check for it.

## Judgment

> **Engineering judgment** is the practiced ability to evaluate tradeoffs amid uncertainty, decide at the right moment, and take responsibility for the outcomes.[^exalynt-se]

If craft is how well we build, judgment is what we build, when, and which choices we make along the way.

**Practiced ability.** Honestly, it is really hard to replace experience as the main teacher of judgment. I have read a lot of books, and they are full of good patterns, practices, and conventions, but they cannot give you that.

**Evaluate tradeoffs.** Every option gains something and gives something up. I have worked with teams who took principles that are correct in theory, like abstraction or "don't repeat yourself," and applied them to the nth degree, until the principle itself became the problem. Good conventions matter, but someone still has to decide how far to take them here.

**Amid uncertainty, at the right moment.** Some things cannot be known in advance, so so much of judgment is deciding what matters now, what matters later, and what will potentially never matter at all. Mary and Tom Poppendieck call this deciding at *"the last responsible moment."*[^poppendieck]

**Take responsibility for the outcomes.** Responsibility comes back to care. As engineers, we should care about what we put into the world and whether it helps people, and we should own it.

AI makes plenty of judgment calls on its own, and sometimes they are right. But any time I have handed my judgment over to it entirely, the outcome was never what I needed. I have had times where I kept iterating, building and building and letting AI make every call, until the software was no longer easy to change, extend, or even understand, and every new addition brought problem after problem. It turns into what people now call "AI slop."

That does not mean you have to read every character AI types. It does mean you need to understand the patterns, principles, and practices it is using as it builds. And what is funny is that the person driving the AI has a massive influence on the tradeoffs it makes. Its calls often lack the circumstances behind a decision—the people involved, the constraints that are real, the system's history, where the work is heading—and the driver is the one who brings them.[^exalynt-ai]

Craft and judgment need each other. **Craft without judgment builds the wrong thing well. Judgment without craft chooses the right thing and builds it poorly.**[^exalynt-se] I have seen craft without judgment many times: software built beautifully, at a cost that grew exponentially, because someone put in a six-lane freeway when a dirt road would have sufficed.

## The Answer I Came To

So, back to my friend's GitHub rebuild. He is a really good engineer, and honestly, I do not know how much of it worked. That is the tricky part with AI. It is easy to look at a beautiful interface and be impressed. But unless you dig into the guts of it, you do not know the quality behind it, how it was built, or how far you can trust it.

I had been asking the wrong question. It was never human versus AI. It was whether the discipline gets applied.

So, is what I do replaceable by AI? As it stands right now, based on my experience: no, not fully. AI does not replace a really good engineer who has the craft and the judgment. That is Exalynt's position too: [AI amplifies software engineering. It does not replace it.](https://readme.exalynt.com/how-it-works/ai-in-software-engineering) AI amplifies whatever it is given. In the hands of people who practice the discipline, it gets them to the right place sooner, with software that holds up. Without the discipline, it gets somewhere fast, and too often that turns out to be the wrong place.[^exalynt-ai]

That does not mean the gaps will never close. AI keeps getting better, and someday it might meet the whole definition on its own. But I am skeptical there will ever be a world where the discipline of software engineering is not needed, because **the definitions describe the work, not the tools.** Whoever or whatever does the work, software still has to deliver value to people, behave as intended, and evolve gracefully. Someone, or something, has to exercise the craft and judgment that get it there. Today, that is usually a software engineer.

## What This Means

### For Me

Understanding what software engineering is, and everything it involves, gave me an anchor point. AI does most of the typing; I bring the discipline. And I keep working on my craft and judgment, because that is what I am actually offering.

### For Exalynt

So, does Exalynt still matter? Yes. What clients need from us was never lines of code. It is someone who brings the discipline to their problem and stands behind the result, whoever or whatever wrote the code.

So my answer to the client with the kid in college is: keep building. A prototype like that often shows what you need better than any description could. But before you bet the business on it, someone needs to dig into the guts and decide honestly whether to build on it, harden it, or start fresh.[^exalynt-clients-ai]

### For You

If you are feeling the fear I felt, you are not alone, and it is an honest question to ask. Your value was never the typing. It was understanding the problem, making the right calls, and owning the result. So use AI every day, keep growing your craft and judgment, and do not stop understanding what you ship.[^exalynt-engineers-ai]

In [In Pursuit of Excellence](/posts/in-persuit-of-excellence/), I said I wanted to explore what it means to be an excellent software engineer—craftsmanship, judgment, and the responsibility to build software that genuinely serves people. Working through this question is where that started for me.

So, why are software engineers still a thing? Because whether a person or an AI is doing the work, quality software still takes the discipline of software engineering: craft and judgment, applied. Someone has to bring that discipline.

I still do not know what AI will do next. But I know what the work is, and I am not afraid anymore.

## References

The definitions in this post are Exalynt's own, written in plain language from the sources below. Where a source is quoted, the words are theirs. For the full definitions and every source they draw on, see [What software engineering is](https://readme.exalynt.com/how-it-works/software-engineering), and for our full position on AI, see [AI in software engineering](https://readme.exalynt.com/how-it-works/ai-in-software-engineering).

[^exalynt-se]: Exalynt, [What software engineering is](https://readme.exalynt.com/how-it-works/software-engineering). Source of the definitions of software engineering, craft, and judgment, and the meaning of each part. Its [sources section](https://readme.exalynt.com/how-it-works/software-engineering#where-our-definitions-come-from) lists everything the definitions draw on.

[^exalynt-ai]: Exalynt, [AI in software engineering](https://readme.exalynt.com/how-it-works/ai-in-software-engineering). Source of Exalynt's position that AI amplifies software engineering rather than replacing it, and of what the engineer brings that AI does not.

[^exalynt-clients-ai]: Exalynt, [Using AI with Exalynt](https://readme.exalynt.com/clients/using-ai).

[^exalynt-engineers-ai]: Exalynt, [Using AI to amplify value](https://readme.exalynt.com/engineers/using-ai).

[^brooks]: Frederick P. Brooks Jr., [No Silver Bullet: Essence and Accidents of Software Engineering](https://doi.org/10.1109/MC.1987.1663532), *IEEE Computer* 20(4), 1987.

[^winters]: Titus Winters, Tom Manshreck, and Hyrum Wright, [Software Engineering at Google](https://abseil.io/resources/swe-book/html/ch01.html), O'Reilly, 2020, chapter 1.

[^cleancode]: Robert C. Martin, *Clean Code: A Handbook of Agile Software Craftsmanship*, Prentice Hall, 2008.

[^pragprog]: Andrew Hunt and David Thomas, *The Pragmatic Programmer: From Journeyman to Master*, Addison-Wesley, 1999.

[^sennett]: Richard Sennett, [The Craftsman](https://search.worldcat.org/oclc/171287612), Yale University Press, 2008, p. 9.

[^poppendieck]: Mary and Tom Poppendieck, [Lean Software Development: An Agile Toolkit](https://ptgmedia.pearsoncmg.com/images/9780321150783/samplepages/0321150783.pdf), Addison-Wesley, 2003.
