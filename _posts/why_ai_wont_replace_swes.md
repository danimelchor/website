---
title: Why AI won't replace Software Engineers
subtitle: It's a calculator, not a mathematician
date: 2025-06-02
read: PT7M
type: idea
state: published
---

> "Does anyone want a Cursor license to try it out? I heard @dmelchor is a
> staunch anti-AI advocate"
>
> —My manager

### Will AI replace software engineers?

When I go back home to Spain I am often asked about my opinion on AI and
whether I think it will replace me anytime soon. By now I'm not even surprised.
Honestly, in the middle of this AI craze, even my grandma just closed a $20M
seed round for her AI startup. It's everywhere. We're bombarded daily with
flashy AI tools—Cursor, ChatGPT, VO3, and others. They're impressive at first
glance and nearly impossible to ignore.

I still remember the first time I tried GPT-3's beta back in 2021. I was
an intern at [Intelygenz](https://intelygenz.com/), a Spanish AI company, when
I was just a freshman in college. It truly felt like magic. For the first time
ever, I watched human-sounding sentences appear from thin air. Admittedly,
GPT-3 would have never passed the [Turing
test](https://en.wikipedia.org/wiki/Turing_test), but it was only the
beginning.

A few months later [GitHub Copilot](https://github.com/features/copilot) was
released. My friends and I got early access, and we felt more productive than
we could have ever imagined. However, it was only a couple of months until the
enchantment began to fade away. This post isn't about Copilot and similar tools
not being good. Instead, I think you should read [JJ's blog
post](https://deplet.ing/the-copilot-delusion/) which covers that beautifully
and will help you understand a feeling many engineers share nowadays.

So... do I think the AI overlords will replace engineers soon?

**TL;DR: No**.

However, my reasoning goes a bit deeper than the usual talking points. There's
a subtle but important distinction I haven't seen expressed clearly elsewhere,
and I'll try my best to do so here. It all boils down to a couple facts about
AI (at least as of June 2025):

---

### What AI _is_ good at

1. Understanding patterns and generating new data that fits them
2. Following well-structured directions to produce specific outputs

These two strengths explain why AI models are
outstanding at both creative and mathematical tasks. For creative
tasks (videos, images, or writing), neither the input nor output of are well
defined. There is no "right" image corresponding to "a cowboy riding a frog with
Elon's Musk face". In fact, there are countless _weird_ results I'd be satisfied with:

<div class="flex justify-center">
    <div class="grid grid-cols-2 gap-4 w-full lg:w-3/4">
        <img class="w-full" src="/blog/why_ai_wont_replace_swes/musk_frog.png" />
        <img class="w-full" src="/blog/why_ai_wont_replace_swes/musk_frog2.png" />
    </div>
</div>

For math, the problem space is the complete opposite. Tools like [DeepAI's
Math AI](https://deepai.org/chat/mathematics) are exceptional at taking a
well-defined problem and producing a well defined result. There is only a
single correct answer for the following equation and a well-defined set of
instructions to reach that answer.

$$
x^2 + 1 = 2\\
x^2 + 1 - 1 = 2 - 1\\
x^2 = 1\\
x = \pm\sqrt{1}\\
x = \pm1
$$

---

### Why engineering is different

Software engineering sits in an awkward middle ground. The tasks have
clearly defined objective—but rarely a single, clearly defined path to reach
them. Even trickier, the outputs have to be correct, but there's often no
single "correct" output. Unlike creative work, where "good enough" might pass,
in engineering, "good enough" often isn't good enough at all.

Sure, AI can generate boilerplate and recognize code patterns. But real-world
engineering goes far beyond that. LLMs are built to always produce output.
Ideally, that output runs, but that's it. There's no understanding of whether
the code is maintainable, scalable, or fits into a broader system. In the
real-world, this part isn't optional—it's the damn job.

---

### It's a calculator, not a mathematician

AI is great at recognizing and reproducing patterns. It can mimic
code structures, predict your next line, and even generate entire modules that
look right. But software engineering isn't just pattern matching—it's
problem solving under ambiguity, with constraints, trade-offs, and real-world
consequences.

LLMs might autocomplete a function, but they don't
understand the system it's embedded in. It's like knowing all the words in a
sentence without grasping the meaning of the paragraph.

To put it simply:

- Knowing what a hammer is doesn't mean you can build a house.
- Knowing nouns and verbs doesn't mean you can speak English.

In the same way, generating code that looks right doesn't mean you've
engineered a solution that is right. That's why AI won't replace software
engineers anytime soon. Not because it's dumb (sometimes), but because the job
requires more than intelligence, it requires judgment.
