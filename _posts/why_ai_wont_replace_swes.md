---
title: Why AI won't replace SWEs
subtitle: A simple observation that tells me we'll be around for a while
date: 2025-06-02
read: PT7M
type: observation
state: draft
---
I am often asked about my opinion on AI and if I think it will replace software engineers anytime soon. In these times, we are flashed with hundreds of AI tools a day. Cursor, chatGPT, VO3, etc. are very present in our minds and, quite frankly, impressive to look at for the first time.

I still remember the first time I tried GPT3's beta back in 2021. I was interning at [Intelygenz](https://intelygenz.com/), a Spanish AI company when I was just a freshman in college. It truly felt like magic. For the first time ever, I could see human-sounding sentences materializing from thin air. Admittedly, GPT3 would have never passed the touring test, but it was only the beginning.

A couple of months later [GitHub copilot](https://github.com/features/copilot) came out. My friends and I got access to the early access program and we felt more productive that we could have ever imagined. However, it was only a couple of months until the enchantment of it all started to fade away. The goal of this blog post is not to share why copilot and other coding agents aren't good. Instead, I think you should read [JJ's blog post](https://deplet.ing/the-copilot-delusion/) which will take you a true adventure to help you understand a feeling many engineers share nowadays.

So... do I think AI will replace SWEs soon? **TLDR: no**. There's quite a beautiful explanation to why I don't believe the AI lords will overtake us that I have not seen expressed anywhere else. It all boils down to a couple facts (at least as of June 2025) about AI. Machine Learning models are:

1. Incredibly good at understanding patterns and generating new similar data
2. Great at following well-structured instructions to generate exact outputs (especially with the introduction of [reasoning models](https://platform.openai.com/docs/guides/reasoning))

Based on these two facts, it is quite easy to explain why AI models are outstanding at generating both creative and mathematical data. For creative content like videos or images these models can learn the patterns in the training data and use it to generate new beautiful designs. A key component to note here is that neither the input nor output of a "creative" model is well defined. There are millions of outputs for "a cowboy riding a frog with Elon's Musk face" I can think of that I'd be more than satisfied with. For mathematical data, the problem space is the opposite. Models like [DeepAI's Math AI](https://deepai.org/chat/mathematics) are exceptional at taking a well-defined problem and producing a well defined result. There is only a single correct answer for the equation $$x^2 + 1 = 2$$ ($$x = \pm1$$).

However, engineering problems have a well defined objective, but no defined path to get there. The set of requirements is usually well defined, and the expected outcome has to work. This means that whatever the model creates must be exactly write. In software engineering, anything deviating from a perfectly working solution means future headaches and production downtime. This is exactly the reason why AI models like Copilot generate seemingly good-looking code full of bugs. Patterns do exist in computer science, but knowing what nouns and verbs are doesn't mean you can speak perfect English.
