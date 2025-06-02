---
title: Why AI won't replace SWEs
subtitle: A simple observation that tells me we'll be around for a while
date: 2025-06-02
read: PT7M
type: observation
state: draft
---

### Will AI Replace Software Engineers?

Being a software engineer in the US, I am often asked about my opinion on AI
and whether I think it will replace us anytime soon. In AI craze, we are
constantly bombarded with hundreds of AI tools. Cursor, chatGPT, VO3, wand
others are impressive at first glance and hard to ignore.

I still remember the first time I tried GPT-3's beta back in 2021. I was
interning at [Intelygenz](https://intelygenz.com/), a Spanish AI company, when
I was just a freshman in college. It truly felt like magic. For the first time
ever, I could watch human-sounding sentences appear from thin air. Admittedly,
GPT3 would have never passed the [Turing
test](https://en.wikipedia.org/wiki/Turing_test), but it was only the
beginning.

A few months later [GitHub Copilot](https://github.com/features/copilot) was
released. My friends and I got early access, and we felt more productive than
we could have ever imagined. However, it was only a couple of months until the
enchantment began to fade away. This post isn't about copilot and similar tools
aren't good. Instead, I think you should read [JJ's blog
post](https://deplet.ing/the-copilot-delusion/) which covers that beautifully
and will help you understand a feeling many engineers share nowadays.

So... do I think AI will replace SWEs soon?

**TL;DR: No**.

However, my reasoning goes a bit deeper than the usual talking points. There's
an subtle but important distinction I haven't seen expressed clearly elsewhere,
and it all boils down to a couple facts about AI (at least as of June 2025):

---

### What AI _is_ good at:
1. Understanding patterns and generating new data that fits them
2. Following well-structured directions to produce specific outputs

---

These two strengths explain why AI models are
outstanding at both creative and mathematical tasks. For creative
requests (videos, images, or writing), neither the input nor output of are well
defined. There is no "right" image corresponding to "a cowboy riding a frog with Elon's
Musk face". In fact, there are countless weird results I'd be satisfied with:

<div class="flex justify-center">
    <div class="grid grid-cols-2 gap-4 w-3/4">
        <img class="w-full" src="/blog/why_ai_wont_replace_swes/musk_frog.png" />
        <img class="w-full" src="/blog/why_ai_wont_replace_swes/musk_frog2.png" />
    </div>
</div>

For math, the problem space is the complete opposite. Tools like [DeepAI's
Math AI](https://deepai.org/chat/mathematics) are exceptional at taking a
well-defined problem and producing a well defined result. There is only a
single correct answer for the following equation and a well-defined set of
instructions to help you reach that answer.


$$
x^2 + 1 = 2\\
x^2 + 1 - 1 = 2 - 1\\
x^2 = 1\\
x = \pm\sqrt{1}\\
x = \pm1
$$

---

On the other hand, engineering problems have a well defined objective, but no
defined path to get there. The set of requirements is usually well defined, and
the expected outcome has to work. This means that whatever the model creates
must be exactly right. In software engineering, anything deviating from a
perfectly working solution means future headaches and production downtime. This
is exactly the reason why AI models like Copilot generate seemingly
good-looking code that is full of bugs. Patterns do exist in computer science.
Every freshman college student knows about control flow, variables, functions,
etc. but, like with English, learning what nouns and verbs are and how they're
used doesn't mean you will speak perfect English.
