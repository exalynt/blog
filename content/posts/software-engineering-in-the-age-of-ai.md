+++
date = '2026-11-20T10:00:00-07:00'
draft = true
title = 'Why Are Software Engineers Still a Thing?'
tags = ['software-engineering', 'craft', 'judgment', 'ai']
summary = 'Once AI could write code, fellow business owners, family, and other engineers all asked me the same question. Working out what software engineering actually is gave me the answer.'
+++

## The Fear

"I trust you, but we have a kid in college at our company building tools for us with AI, and they seem pretty legit. Do we actually need a software engineer, or can I just Claude up my own thing?"

A fellow business owner told me that, more or less, not long after I left my last job to start Exalynt. It was an honest question, asked without any malice, and it was not the first time I had heard it. Engineers on LinkedIn were asking it. My family asked it: with what AI can do now, will you still have a career?

When AI first came on the scene, I discounted it. But I kept using it in my work as it got more capable, and somewhere along the way, how I work changed completely. Today I rarely type my own code. I could not wave the question away.

Then a friend of mine, another engineer, spent a short time with AI and rebuilt the core of GitHub, the site engineers use to store and review code. My first reaction was: wow, this is amazing. My second was: why are software engineers still a thing?

Exalynt was barely getting started, and two questions kept coming back. Is what I do replaceable by AI? And does Exalynt, the company I am building around that work, even matter anymore?

I was never attached to the code itself. I enjoy writing it, but I am just as happy "coding" in plain English. What scared me was value. If anyone could pick up an AI and build what I could, what was I actually offering?

A couple of months earlier, in [In Pursuit of Excellence](/posts/in-persuit-of-excellence/), I wrote that I wanted to explore what it means to be an excellent software engineer. I did not expect the first question to be whether software engineers are needed at all.

Before I could answer anyone else, I needed an answer for myself. I went back through my own experience with AI: the times it did remarkably well, and the times it fell short. Somewhere in there, I realized I had been skipping a step. To know whether AI could do what software engineers do, I first had to be clear about what software engineers actually do, beyond the coding. The answer turned out to matter as much to that business owner as it did to me.

## What Does a Software Engineer Do?

Ask most people what a software engineer does, and they will tell you: they write code. For a long time, we accepted that answer, and it is easy to see why.

I have worn a lot of hats over the years: software engineer, software architect, engineering manager more than once, and even director of technology. How much of my time went to writing code depended on the role, but when I was an engineer, it was probably around 70 percent. When most of your week goes to something, it starts to look like the job itself.

But coding was rarely the hard part. It was the time-consuming part. Code had its hard moments, but those were not what sank projects.

The hard part showed up every time I led a project building something from scratch. Figuring out what we needed to build was hard: understanding the users, how they worked, what pain they were having, and what problem we were actually solving. Just as hard, once it was built, was the question of whether it met that need.

Fred Brooks drew this line back in 1987. He split the difficulty of software into two kinds. The essential is working out what the software must do and how it should work. The accidental is the effort of expressing all of that in code. *"The hardest single part of building a software system,"* he wrote, *"is deciding precisely what to build."*[^brooks] He also argued that no single development would make building software even ten times easier. AI may be the closest anything has come to proving him wrong, but only on the accidental side. The essential part is still ours.

Now AI handles the time-consuming part. My job looks more like a mix of product lead, designer, and architect: deciding what the product should do, how it should work, and how it all fits together. Building Exalynt, I spent my time on the business model and the problem I was solving, and far less on code.

That does not mean I stepped away from the code. I am still involved, just at a higher level. I direct a team of AI agents: here is how I want this to work, here is how it should look, here are the patterns we use. And when something comes back wrong, like the wrong tool picked for the job, I catch it and have it fixed.

AI took over most of the typing, but the rest of the job did not go anywhere. When I tried to write down everything a software engineer actually does, the list got away from me:

{{< wall >}}Interviewing users and stakeholders, shadowing how they really work, mapping workflows, untangling requirements, writing user stories and acceptance criteria, slicing big ideas into small increments, estimating, prioritizing the backlog, saying no, deciding what to build versus buy, designing the architecture, modeling the data, designing APIs and database schemas, choosing languages, frameworks, and cloud services, threat modeling, planning for failure, writing code, writing migrations, defining infrastructure as code, building CI/CD pipelines, integrating third-party services, writing unit, integration, and end-to-end tests, hunting edge cases, reviewing pull requests, profiling performance, auditing accessibility, managing secrets, patching vulnerable dependencies, meeting privacy and compliance requirements, deploying, rolling out behind feature flags, setting up logging, monitoring, and alerts, carrying the pager, debugging production at 2 a.m., writing postmortems, refactoring, paying down technical debt, upgrading frameworks, retiring systems no one needs anymore, documenting decisions, explaining tradeoffs to people who are not technical, negotiating scope, delivering bad news early, pairing, mentoring, onboarding, interviewing candidates, and owning the result when something goes wrong.{{< /wall >}}

No list like that will ever be complete. I needed something more durable: a few concise definitions of the work itself, ones that hold no matter who or what does the work, or which tools they use. I drew on the international standard (ISO/IEC/IEEE 24765), the field's body of knowledge (SWEBOK), and the craftsmanship books I have leaned on for years. I landed on three, which became Exalynt's definitions.[^exalynt-se] The first is [software engineering](https://readme.exalynt.com/how-it-works/software-engineering) itself, a discipline just like civil, mechanical, or chemical engineering. The other two are what it rests on: [craft](https://readme.exalynt.com/how-it-works/software-engineering#engineering-craft) and [judgment](https://readme.exalynt.com/how-it-works/software-engineering#engineering-judgment). With them, I could hold AI up against each part and see, from my own experience, where it meets the bar and where it falls short.

## Software Engineering

> **Software engineering** is the discipline of applying [engineering craft](#craft) and [judgment](#judgment) to build software that delivers value to people, consistently behaves as intended, and evolves gracefully.

Software engineering is the whole of the work. A discipline is a field of practice with shared knowledge, standards, and ways of working that people learn and hold each other to. This one rests on two things, craft and judgment, and it exists to produce three outcomes:

- **Delivers value to people.** It solves the right problem, in the right way, for the people who use it, depend on it, or benefit from it.
- **Consistently behaves as intended.** It does what it is meant to do and avoids what it is not, so people can depend on it.
- **Evolves gracefully.** It can be fixed, improved, and extended with confidence as needs change, and a small change stays a small job.

The discipline is the difference between producing code and being responsible for software. It means caring about the result, owning it, and building quality in on purpose instead of hoping it shows up.

I have seen what happens without it. On one project, we spent months and months building something that never met the users' needs the way it had to. It failed the first outcome, and no amount of good code would have saved it. On another, a team kept throwing code at the problem without the discipline behind it. The result was a buggy mess that never behaved the way anyone needed. Small changes turned into nightmares, and the effort to change anything became monumental. It never delivered the value it was meant to, and eventually it had to be shut down.

That second project is why "gracefully" is in the definition. Titus Winters, Tom Manshreck, and Hyrum Wright put it well in *Software Engineering at Google*: *"Software engineering is programming integrated over time."*[^winters] In other words, the real test is not whether the code works today, but whether it keeps working as it changes over the years. Without the discipline, software easily becomes more and more code piled on top of itself. Evolving gracefully does not mean change takes no effort. It means the effort is proportional to the change.

The definition says nothing about who or what writes the code, or which tools they use. Every failure I just described happened before AI, at the hands of people. It was never the tools. It was the missing discipline.

So where does AI stand? In my experience, it does very well at writing code and doing the implementation, and I use it constantly as a sounding board for ideas. I have seen amazing, quality software built at lightning speed with AI. I have also seen absolute garbage built with the same tools, the kind of "AI slop" that falls over as soon as someone has to change it, depend on it, or build on it. The difference was never the AI. It was whether someone applied the discipline of software engineering.

### Craft

> **Engineering craft** is the practiced skill of building quality software with care, using the knowledge, methods, and tools of the field.

Craft is how well the work is done. It is a practiced skill, built by doing the work over years, and it is never finished. School gave me a foundation, but my craft came from practice, mentors, and a lot of books. *Clean Code*[^cleancode] and *The Pragmatic Programmer*[^pragprog] in particular shaped how I see myself as an engineer.

Above all, they taught me what quality software looks like: clear, simple, secure, dependable, and maintainable. Now that I run a business myself, I see why that matters. Software that delivers no value has no reason to exist. Software I cannot depend on solves my problem only on paper. And software that cannot change when my business changes is a boat anchor.

Knowing what quality looks like is only half of it, though. Craft also takes care. Richard Sennett describes craftsmanship as *"the desire to do a job well for its own sake."*[^sennett] Whoever builds software owes that care to the people who depend on it, including in the parts they will never see. Doctors once had to be told to wash their hands, and medicine made it non-negotiable. Care should be just as non-negotiable in software.

None of that goes away with AI. The models I have used have ranged from terrible to exceptional. The best have met my quality bar, good enough to send me right back to questioning my existence. But even the best model does not know what good looks like for your situation, and it does not care whether it got there.

That is why directing AI agents is still craft. Someone still has to know what good looks like, check for it, and care about the result. AI is one of the tools of the field, and everything that went into quality software before AI still has to go in. "AI has it" is no more an excuse than "another engineer wrote it."

### Judgment

> **Engineering judgment** is the practiced ability to evaluate tradeoffs amid uncertainty, decide at the right moment, and take responsibility for the outcomes.

If craft is how well we build, judgment is what we build, when, and which choices we make along the way. Every option gains something and gives something up, and most decisions have more than one reasonable answer. Judgment weighs those tradeoffs against what matters to the people involved. It makes the call once enough is known, before waiting causes harm, at what Mary and Tom Poppendieck call *"the last responsible moment."*[^poppendieck] Then it owns the call, and changes course when the evidence shows it was wrong.

Like craft, judgment is practiced, and experience is its main teacher. Books are full of good patterns, practices, and conventions. What they cannot tell you is how far to take them in the situation in front of you.

I have worked with teams who took principles that are correct in theory and applied them to the nth degree, until the principle itself became the problem. "Don't repeat yourself" is a classic example. It tells engineers to keep each piece of knowledge in one place, so a change only has to be made once. Its authors meant duplicated knowledge, not every pair of lines that happen to look alike. Even so, I have watched teams tangle their code trying to stamp out every repeated line, until every change got slower and riskier.

The same is true of the software as a whole. Quality does not mean over-engineering, building for problems you do not have yet. I have seen software built beautifully, at a cost far beyond what the need justified, because someone put in a six-lane freeway when a dirt road would have done the job. There is no crystal ball, so finding the balance between keeping it simple and leaving room to grow is genuinely tough. So much of judgment is deciding what matters now, what matters later, and what may never matter at all.

Those are exactly the calls AI will make for you if you let it, and sometimes it gets them right. But any time I have handed my judgment over to it entirely, the outcome was never what I needed. There were times I kept iterating, letting AI make every call as I built and built. Eventually the software was no longer easy to change, extend, or even understand. Every new addition brought problem after problem. That is AI slop, and I made it myself. Being an engineer did not save me. Going back to the discipline did.

Looking back, the problem was not that AI lacked skill. It was weighing tradeoffs without the circumstances behind them: the people involved, the constraints that are real, the system's history, and where the work is heading. Only the person driving it can bring those, which gives the driver a massive influence on the tradeoffs AI makes.[^exalynt-ai] That does not mean reading every character AI types. It means understanding the patterns, principles, and practices it is using, and steering it with what it cannot see.

{{< callout >}}
Craft and judgment need each other. **Craft without judgment builds the wrong thing well. Judgment without craft chooses the right thing and builds it poorly.** The discipline is both, applied together.
{{< /callout >}}

## The Answer I Came To

Somewhere in all of that, I realized I had been asking the wrong question. It was never really human versus AI. It was whether the discipline gets applied.

{{< callout >}}
**Whoever or whatever writes the code, quality software still requires the discipline of software engineering.**
{{< /callout >}}

AI is remarkable at the time-consuming part, but the hard part has not gone anywhere. Someone still has to decide what is worth building. Someone has to weigh the tradeoffs. Someone has to know what good looks like, check for it, and answer for the result. That is the discipline. It turns AI's speed into software that holds up, not software that gets somewhere fast and turns out to be the wrong place. Today, the people who carry it are software engineers.

My friend's GitHub rebuild is the perfect example. The AI was fast, but he is an engineer. He knew what he was building, how it should fit together, and whether what came back was right. The speed was the AI's. The discipline was his.

If one engineer with AI can do that much, will the world need as many engineers as it does today? I do not know, and it will certainly change how teams look. But fewer hands on the keyboard does not mean less need for the discipline.

Maybe AI will carry the whole discipline someday. It keeps getting better, and it might meet every part of the definition on its own. Even then, the discipline would not go away, because **the definitions describe the work, not the tools.** Software will still have to deliver value to people, behave as intended, and evolve gracefully.

## What This Means

AI is amazing. It has changed how I work, and it opens up possibilities that were out of reach for most people just a few years ago. Use it, build with it, and try things you never would have tried before. Just remember that speed is not the same as quality. Software people can depend on still takes the discipline of software engineering, and someone has to bring it.

That is the answer I owed the business owner with the kid in college, and the one I needed for myself. It was never about whether a person or an AI writes the code. It is about whether someone brings the discipline, be it the kid or someone else. My value was never the typing. It is the discipline I bring, and AI lets it reach further than it ever has.[^exalynt-engineers-ai] That is why I keep sharpening my craft and judgment, and why Exalynt offers software engineering as a service.

I do not know what AI will do next, and no one really does. But I know what the work is, and I know it is not going away. Whether a person, an AI, or both apply it, quality software will always take the discipline of software engineering.

## References

The definitions in this post are Exalynt's own, written in plain language from the sources below. Where a source is quoted, the words are theirs. For the full definitions and every source they draw on, see [What software engineering is](https://readme.exalynt.com/how-it-works/software-engineering), and for our full position on AI, see [AI in software engineering](https://readme.exalynt.com/how-it-works/ai-in-software-engineering).

[^exalynt-se]: Exalynt, [What software engineering is](https://readme.exalynt.com/how-it-works/software-engineering). Source of the definitions of software engineering, craft, and judgment, and the meaning of each part. Its [sources section](https://readme.exalynt.com/how-it-works/software-engineering#where-our-definitions-come-from) lists everything the definitions draw on.

[^exalynt-ai]: Exalynt, [AI in software engineering](https://readme.exalynt.com/how-it-works/ai-in-software-engineering). Source of Exalynt's position that AI amplifies software engineering rather than replacing it, and of what the engineer brings that AI does not.

[^exalynt-engineers-ai]: Exalynt, [Using AI to amplify value](https://readme.exalynt.com/engineers/using-ai).

[^brooks]: Frederick P. Brooks Jr., [No Silver Bullet: Essence and Accidents of Software Engineering](https://doi.org/10.1109/MC.1987.1663532), *IEEE Computer* 20(4), 1987.

[^winters]: Titus Winters, Tom Manshreck, and Hyrum Wright, [Software Engineering at Google](https://abseil.io/resources/swe-book/html/ch01.html), O'Reilly, 2020, chapter 1.

[^cleancode]: Robert C. Martin, *Clean Code: A Handbook of Agile Software Craftsmanship*, Prentice Hall, 2008.

[^pragprog]: Andrew Hunt and David Thomas, *The Pragmatic Programmer: From Journeyman to Master*, Addison-Wesley, 1999.

[^sennett]: Richard Sennett, [The Craftsman](https://search.worldcat.org/oclc/171287612), Yale University Press, 2008, p. 9.

[^poppendieck]: Mary and Tom Poppendieck, [Lean Software Development: An Agile Toolkit](https://ptgmedia.pearsoncmg.com/images/9780321150783/samplepages/0321150783.pdf), Addison-Wesley, 2003.
