# Q&A Models for specific information extraction

## The power of transformers for obtaining relevant entity extraction from unstructured emails.

```python
from transformers import pipeline
import re

# Instatiate the model from checkpoint
model_checkpoint = "bert-large-uncased-whole-word-masking-finetuned-squad"
model = pipeline(
    'question-answering',
    model=model_checkpoint,
    tokenizer=model_checkpoint
)

email_body = """
Hi Jack,
I'm sorry, I've been distracted by my new Tesla car company, and I'm afraid I'm going to have to delegate the leadership of the bitcoin project to someone else.
I need someone really really skilled. Could you advise me on who to appoint? Elon Musk is too busy already!
Many thanks,
Sat.
P.S.: I've got a Tesla Roadster too!
---
Satoshi Nakamoto
Phone number: +1 (650) 566–1191
Bitcoin: 1GttzecjYm19xu3iC8i8NEuM7mB5uZQbKD
"""

regex_expr = r"(?:[A-Z][a-z]+)+(?:[\- ][A-Z](?:[a-z\.]+)?)+"

questions = [
  "What is his name?",
  "What is her name?",
  "What is their name?",
  "Who sent this?",
  "What is the name of the person who sent this?"
]

answers = model(
    context=email_body,
    question=questions,
    topk=2 # Gives 2 answers per question (change it and try!)
)

# Summing scores for repeated answers
unique_answers = {}

for a in answers:
  if a["answer"] in unique_answers:
    unique_answers[a["answer"]] += a["score"]
  else:
    unique_answers[a["answer"]] = a["score"]

# Converting dict to arr
result = [(a, s) for (a,s) in unique_answers.items()]

# Ordering by most score
result.sort(key=lambda tup: tup[1], reverse=True)

# Filtering answers with RegEx
result = [r for r in result if re.match(regex_expr, r[0])]

# Displaying result
print(result)
```

![Header](Header.png)

##### Image by author

121 per day, 3,751 a month, and 44,165 a year. That is the number of emails the average person receives. I don't know about you, but for me, that is a lot of emails to give my time to…

![Gmail Notifs](gmail.png)

##### Image by author

Only extracting important information about these emails (who I should contact back, what their problem is, what they want…) takes a lot of time out of our lives. Therefore, I have put some information extraction techniques to the test, and here are the results. I have also used a different approach to this task that might not be obvious yet is very powerful.

### The example email

For the sake of being consistent we will use the following example email (mostly generated using GPT-3) to compare and observe the different current solutions to this problem:

> Hi Jack,
>
> I'm sorry, I've been distracted by my new Tesla car company, and I'm afraid I'm going to have to delegate the leadership of the bitcoin project to someone else.
>
> I need someone really really skilled. Could you advise me on who to appoint? Elon Musk is too busy already!
>
> Many thanks,
>
> Sat.
>
> P.S.: I've got a Tesla Roadster too!
>
> --
>
> Satoshi Nakamoto
>
> Phone number: +1 (650) 566–1191
>
> Bitcoin: 1GttzecjYm19xu3iC8i8NEuM7mB5uZQbKD

If you are curious, the input given to GPT-3 was: _"This is an email from Satoshi Nakamoto to Jack explaining how the bitcoin network seems to have disconnected. The email:"_

### Techniques

#### Regular expressions

The oldest of solutions to this problem is regular expressions. We can use these to extract strings from a text that match a certain pattern. For simplicity, we are going to only be extracting the name of who we should contact back.
Let's begin by assuming that a full name can follow these formats:

```bash
Satoshi Nakamoto
Satoshi K. Nakamoto
Satoshi K Nakamoto
Satoshi Nakamoto-Koa
Satoshi Nakamoto Koa
```

So an appropriate regex expression could be:

```regex
r"(?:[A-Z][a-z]+)+(?:[\- ][a-z](?:[a-z\.]+)?)+"
```

Getting all the matches from the email with regex would look like this:

```python
import re

email_body = """
Hi Jack,
I'm sorry, I've been distracted by my new Tesla car company, and I'm afraid I'm going to have to delegate the leadership of the bitcoin project to someone else.
I need someone really really skilled. Could you advise me on who to appoint? Elon Musk is too busy already!
Many thanks,
Sat.
P.S.: I've got a Tesla Roadster too!
---
Satoshi Nakamoto
Phone number: +1 (650) 566–1191
Bitcoin: 1GttzecjYm19xu3iC8i8NEuM7mB5uZQbKD
"""

regex_expr = r"(?:[A-Z][a-z]+)+(?:[\- ][A-Z](?:[a-z\.]+)?)+"

# Finding all matches
result = re.findall(regex_expr, email_body)

# Displaying results
print(result)
```

Which would select the following from our email:

![Regex extraction](regex.png)

##### Regex extraction: Image by author

As you can see, this method is good to lower the number of options to choose from, but we still get strings that aren't names and we don't have an efficient way to choose which one is the important one (we can't just always get the last one).

#### Using entity detection

A common way to fix the previous issue (detecting strings that aren't names) is using spaCy. 
spaCy is an open-source software library for advanced natural language processing, written in the programming languages Python and Cython.
spaCy will allow us to quickly set up an entity detector model, that will hopefully help us extract the information we want from the email. To download your preferred model you need to run:

```bash
python -m spacy download <MODELNAME>
```

And since we are going to use spaCy 3.1's transformer model, we need to run:

```bash
python -m spacy download en_core_web_trf
```

The full code for this looks like this:

```python
import spacy
import re

email_body = """
Hi Jack,
I'm sorry, I've been distracted by my new Tesla car company, and I'm afraid I'm going to have to delegate the leadership of the bitcoin project to someone else.
I need someone really really skilled. Could you advise me on who to appoint? Elon Musk is too busy already!
Many thanks,
Sat.
P.S.: I've got a Tesla Roadster too!
---
Satoshi Nakamoto
Phone number: +1 (650) 566–1191
Bitcoin: 1GttzecjYm19xu3iC8i8NEuM7mB5uZQbKD
"""

# Loading spaCy 3.1 transformer model ('en_core_web_sm','en_core_web_md',
# 'en_core_web_lg') for lower versions
nlp = spacy.load('en_core_web_trf')
doc = nlp(email_body)

# Selecting only person entities
result = [ent.text for ent in doc.ents if ent.label_ == "PERSON"]

# Displaying result
print(result)
```

Which would select the following from our email:

![spaCy extraction](spacy.png)

##### spaCy extraction: Image by author

As you can see, this model did much better than regex! We ignored cases like _"Tesla Roadster"_ or _"Hi Jack"_, but now we didn't get the correct name: _"Satoshi Nakamoto"_! This is likely due to spaCy never encountering this name before inside its training data.

This doesn't really change the outcome though… Even if spaCy had detected _"Satoshi Nakamoto"_ we still wouldn't know which of the person entities is the important one!

How can we do it? Is it even possible? So many questions! Mmmm… questions. What if we just ask the computer which name is the important one?! Let's try that!

#### Q&A Transformer models

Using a transformer that has been fine-tuned with a question-answering dataset like SQuAD will allow us to ask it any question about the context it receives (in this case the email).

Thankfully, the HuggingFace library includes lots of pre-trained models ready to be used out of the box! For the sake of simplicity, we will be using one of these, since not everyone can afford a TPU ready-to-train models as big as BERT. Feel free to take a look at their model catalog and choose the model that you like the most, but I will use the "bert-large-uncased-whole-word-masking-finetuned-squad" model which achieves an F1 score of 93.15.

Like spaCy, HuggingFace has an API that allows to quickly interact with the pre-trained models for specific tasks: pipelines.

Before we do that, we first need to know which questions to ask! Here are the five questions I could think about to ask the model:

- What is his name?
- What is her name?
- What is their name?
- Who sent this?
- What is the name of the person who sent this?

We also have to keep in mind that answers are sometimes strange. At the end of the day, these models aren't human, so they don't fully understand what a name means and the format it should follow. Therefore, if we combine our previous regex expression to filter only the answers that follow our format, we should be set!

Now that we have our questions and filter, our code looks like this:

```python

from transformers import pipeline
import re

# Instatiate the model from checkpoint
model_checkpoint = "bert-large-uncased-whole-word-masking-finetuned-squad"
model = pipeline(
    'question-answering',
    model=model_checkpoint,
    tokenizer=model_checkpoint
)

email_body = """
Hi Jack,
I'm sorry, I've been distracted by my new Tesla car company, and I'm afraid I'm going to have to delegate the leadership of the bitcoin project to someone else.
I need someone really really skilled. Could you advise me on who to appoint? Elon Musk is too busy already!
Many thanks,
Sat.
P.S.: I've got a Tesla Roadster too!
---
Satoshi Nakamoto
Phone number: +1 (650) 566–1191
Bitcoin: 1GttzecjYm19xu3iC8i8NEuM7mB5uZQbKD
"""

regex_expr = r"(?:[A-Z][a-z]+)+(?:[\- ][A-Z](?:[a-z\.]+)?)+"

questions = [
  "What is his name?",
  "What is her name?",
  "What is their name?",
  "Who sent this?",
  "What is the name of the person who sent this?"
]

answers = model(
    context=email_body,
    question=questions,
    topk=2 # Gives 2 answers per question (change it and try!)
)

# Summing scores for repeated answers
unique_answers = {}

for a in answers:
  if a["answer"] in unique_answers:
    unique_answers[a["answer"]] += a["score"]
  else:
    unique_answers[a["answer"]] = a["score"]

# Converting dict to arr
result = [(a, s) for (a,s) in unique_answers.items()]

# Ordering by most score
result.sort(key=lambda tup: tup[1], reverse=True)

# Filtering answers with RegEx
result = [r for r in result if re.match(regex_expr, r[0])]

# Displaying result
print(result)
```

Which outputs the following probabilities for each answer:

![Q&A Model extraction](qamodel.png)

##### Q&A Model extraction: Image by author

And there we go! Thinking out of the box we were able to extract relevant information from a text. Think about it: if you have a question about the email, just ask the computer! ;) 
Here are other questions I asked the model that I found interesting. Try changing them and seeing the output, but remember to remove the regex checking if it's not about names!

```bash
Q: What is his phone number?
A: +1 (650) 566–1191 -- 91.74% Sure

Q: What does he need?
A: someone really really skilled -- 42.43% Sure

Q: What is his bitcoin wallet address?
A: 1GttzecjYm19xu3iC8i8NEuM7mB5uZQbKD -- 1.72% Sure

Q: What car does he have?
A: Tesla Roadster -- 75.22% Sure

Q: Who doesn't have time?
A: Elon Musk -- 95.99% Sure
```

### Conclusion

Trying non-traditional methods can sometimes give you better results! Even though there are datasets to extract relevant information like the Enron person name annotations dataset, none of them contain enough relevant information to be used for this purpose.

I am excited to see what the future holds for the machine learning community and how some of these super-powerful models are used for everyday purposes.

**Full Colab Notebook**: [https://colab.research.google.com/drive/1nCTYA2QWxov77GzBFuA9nndv3QUZInns?usp=sharing](https://colab.research.google.com/drive/1nCTYA2QWxov77GzBFuA9nndv3QUZInns?usp=sharing)
