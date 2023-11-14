# A detailed guide to PyTorch’s nn.Transformer() module.

## A step-by-step guide to fully understand how to implement, train, and infer the innovative transformer model.

I have recently been getting more involved in the world of machine learning. When I’ve had a problem understanding a complex issue or coding a neural network, the internet has seemed to have all the answers: from a simple linear regression to complex convolutional networks. At least that is what I thought…
Once I began getting better at this Deep Learning thing, I stumbled upon the all-glorious transformer. The original paper: “[Attention is all you need](https://arxiv.org/abs/1706.03762)”, proposed an innovative way to construct neural networks. No more convolutions! The paper proposes an encoder-decoder neural network made up of repeated encoder and decoder blocks. The structure is the following:

![Transformer structure](structure.png)

##### Transformer structure: [https://arxiv.org/abs/1706.03762](https://arxiv.org/abs/1706.03762)

The left block is the encoder, and the right block is the decoder. If you don’t understand the parts of this model yet, I highly recommend going over Harvard’s “[The Annotated Transformer](https://nlp.seas.harvard.edu/2018/04/03/attention.html)” guide where they code the transformer model in PyTorch **from scratch**. I will not be covering important concepts like “multi-head attention” or “feed-forward layers” in this tutorial, so you should know them before you continue reading. If you have already taken a look at the code from scratch, you are probably wondering if you are going to have to copy-paste that code all over the place for every project you make. Thankfully, **no**. Modern python libraries like PyTorch and Tensorflow already include easily accessible transformer models through an import. However, there is more to it than just importing the model and plugging it in. Today I will explain how to use and tune PyTorch _nn.Transformer()_ module. I personally struggled trying to find information about how to implement, train, and infer from it, so I decided to create my own guide for all of you.

### First steps

#### Imports

To start, we need to import PyTorch and some other libraries we are going to be using:

```python
import torch
import torch.nn as nn
import torch.optim as optim

import math
import numpy as np
```

#### Basic transformer structure

Now, let’s take a closer look at the transformer module. I recommend starting by reading over [PyTorch’s documentation about it](https://pytorch.org/docs/stable/generated/torch.nn.Transformer.html#torch.nn.Transformer). As they explain, there are no mandatory parameters. The module comes with the “Attention is all you need” model hyperparameters. To use it, let’s begin by creating a simple PyTorch model. I will only change some of the default parameters so our model doesn’t take unnecessarily long to train. I made those parameters part of our class:

```python
class Transformer(nn.Module):
    def __init__(
        self,
        num_tokens,
        dim_model,
        num_heads,
        num_encoder_layers,
        num_decoder_layers,
        dropout_p,
    ):
        super().__init__()

        # Layers
        self.transformer = nn.Transformer(
            d_model=dim_model,
            nhead=num_heads,
            num_encoder_layers=num_encoder_layers,
            num_decoder_layers=num_decoder_layers,
            dropout=dropout_p,
        )

    def forward(self):
        pass
```

#### Positional encoding

The transformer blocks don’t care about the order of the input sequence. This, of course, is a problem. Saying “I ate a pizza with pineapple” is not the same as saying “a pineapple ate I with pizza”. Thankfully, we have a solution: positional encoding. This is a way to “give importance” to elements depending on their position. A detailed explanation of how it works can be found [here](https://kazemnejad.com/blog/transformer_architecture_positional_encoding/), but a quick explanation is that we create a vector for each element representing its position with regard to every other element in the sequence. Positional encoding follows this very complicated-looking formula which, in practice, we won’t really need to understand:

![Positional encoding formula](pos_encoding.png)

##### Positional Encoding Formula: Image by author

For the sake of organization and reusability, let’s create a separate class for the positional encoding layer (it looks hard but it is really just the formula, dropout, and a [residual connection](https://towardsdatascience.com/residual-blocks-building-blocks-of-resnet-fd90ca15d6ec)):

```python
class PositionalEncoding(nn.Module):
    def __init__(self, dim_model, dropout_p, max_len):
        super().__init__()
        # Modified version from: https://pytorch.org/tutorials/beginner/transformer_tutorial.html
        # max_len determines how far the position can have an effect on a token (window)

        # Info
        self.dropout = nn.Dropout(dropout_p)

        # Encoding - From formula
        pos_encoding = torch.zeros(max_len, dim_model)
        positions_list = torch.arange(0, max_len, dtype=torch.float).view(-1, 1) # 0, 1, 2, 3, 4, 5

        # 1000^(2i/dim_model)
        division_term = torch.exp(torch.arange(0, dim_model, 2).float() * (-math.log(10000.0)) / dim_model)

        # PE(pos, 2i) = sin(pos/1000^(2i/dim_model))
        pos_encoding[:, 0::2] = torch.sin(positions_list * division_term)

        # PE(pos, 2i + 1) = cos(pos/1000^(2i/dim_model))
        pos_encoding[:, 1::2] = torch.cos(positions_list * division_term)

        # Saving buffer (same as parameter without gradients needed)
        pos_encoding = pos_encoding.unsqueeze(0).transpose(0, 1)
        self.register_buffer("pos_encoding",pos_encoding)

    def forward(self, token_embedding: torch.tensor) -> torch.tensor:
        # Residual connection + pos encoding
        return self.dropout(token_embedding + self.pos_encoding[:token_embedding.size(0), :])
```

#### Completing our model

Now that we have the only layer not included in PyTorch, we are ready to finish our model. Before adding the positional encoding, we need an [embedding layer](https://pytorch.org/docs/stable/generated/torch.nn.Embedding.html) so that each element in our sequences is converted into a vector we can manipulate (instead of a fixed integer). We will also need a final linear layer so that we can convert the model’s output into the dimensions of our desired output. The final model should look something like this:

```python
class Transformer(nn.Module):
    """
    Model from "A detailed guide to Pytorch's nn.Transformer() module.", by
    Daniel Melchor: hhttps://danielmelchor.com/blog/blog/pytorch-nntransformer
    """
    # Constructor
    def __init__(
        self,
        num_tokens,
        dim_model,
        num_heads,
        num_encoder_layers,
        num_decoder_layers,
        dropout_p,
    ):
        super().__init__()

        # INFO
        self.model_type = "Transformer"
        self.dim_model = dim_model

        # LAYERS
        self.positional_encoder = PositionalEncoding(
            dim_model=dim_model, dropout_p=dropout_p, max_len=5000
        )
        self.embedding = nn.Embedding(num_tokens, dim_model)
        self.transformer = nn.Transformer(
            d_model=dim_model,
            nhead=num_heads,
            num_encoder_layers=num_encoder_layers,
            num_decoder_layers=num_decoder_layers,
            dropout=dropout_p,
        )
        self.out = nn.Linear(dim_model, num_tokens)

    def forward(
        self,
        src,
        tgt,
    ):
        # Src size must be (batch_size, src sequence length)
        # Tgt size must be (batch_size, tgt sequence length)

        # Embedding + positional encoding - Out size = (batch_size, sequence length, dim_model)
        src = self.embedding(src) * math.sqrt(self.dim_model)
        tgt = self.embedding(tgt) * math.sqrt(self.dim_model)
        src = self.positional_encoder(src)
        tgt = self.positional_encoder(tgt)

        # we permute to obtain size (sequence length, batch_size, dim_model),
        src = src.permute(1, 0, 2)
        tgt = tgt.permute(1, 0, 2)

        # Transformer blocks - Out size = (sequence length, batch_size, num_tokens)
        transformer_out = self.transformer(src, tgt)
        out = self.out(transformer_out)

        return out
```

I know… It looks very intimidating, but if you understand what each part does, it is actually a pretty simple model to implement.

#### Refreshing some important information: target masking

You may recall there was a special block in the model structure called “**masked** multi-head attention”:

![Masked Multi-head Attention](masked_multihead.png)

##### Masked Multi-head Attention: [https://arxiv.org/abs/1706.03762](https://arxiv.org/abs/1706.03762)

So… what is masking? Before I can explain it to you, let’s quickly recapitulate what is going on with our tensors when we feed them into our model. First, we embed and encode (positional encoding) our **source** tensor. Then, our source tensor is encoded into an unintelligible encoded tensor that we feed into our **decoder** with our embedded and encoded (positionally) **target** vector. For our model to learn, we can’t just show it the whole target tensor! This would just give him the answer straight up.
The solution to this is a masking tensor. This tensor is made up of size (sequence length x sequence length) since for every element in the sequence, we show the model one more element. This matrix will be added to our target vector, so the matrix will be made up of zeros in the positions where the transformer can have access to the elements, and minus infinity where it can’t. An illustrated explanation might help you a bit more:

![Target Vector Masking](input_masking.png)

##### Target Vector Masking: Image by author

#### Refreshing some important information: padding masking

In case you didn’t know, tensors are matrices that can be stored in a GPU, and since they are matrices, all dimensions must have elements of the same size. Of course, this won’t happen when treating with tasks like NLP or different-sized images. Therefore, we use the so-called “**special tokens**”. These tokens allow our model to know where the start of the sentence is (<SOS>), where the end of the sentence is (<EOS>) and what elements are just there to fill up the remaining space so that our matrices have the sam sequence size (<PAD>). These tokens must also be converted into their corresponding integer id (In our example they will be 2, 3, and 4 respectively). Padding a sequence looks something like this:

![Padding](padding_mask.png)

##### Padding a batch of sequences: Image by author

To tell our model that these tokens should be irrelevant, we use a binary matrix where there is a True value on the positions where the padding token is and False where it isn’t:

![Padding Mask](padding_masking.png)

##### Padding masking: Image by author

#### Creating the masking methods

To create the two masking matrices we talked about, we need to extend our transformer model. If you know a bit of NumPy, you will have no problem understanding what these methods do. If you can’t understand it, I recommend opening a [Jupyter notebook](https://jupyter.org/) and going step by step to understand what they do.
The full extended model looks like this (note the change in the forward method as well):

```python
class Transformer(nn.Module):
    """
    Model from "A detailed guide to Pytorch's nn.Transformer() module.", by
    Daniel Melchor: https://danielmelchor.com/blog/blog/pytorch-nntransformer
    """
    # Constructor
    def __init__(
        self,
        num_tokens,
        dim_model,
        num_heads,
        num_encoder_layers,
        num_decoder_layers,
        dropout_p,
    ):
        super().__init__()

        # INFO
        self.model_type = "Transformer"
        self.dim_model = dim_model

        # LAYERS
        self.positional_encoder = PositionalEncoding(
            dim_model=dim_model, dropout_p=dropout_p, max_len=5000
        )
        self.embedding = nn.Embedding(num_tokens, dim_model)
        self.transformer = nn.Transformer(
            d_model=dim_model,
            nhead=num_heads,
            num_encoder_layers=num_encoder_layers,
            num_decoder_layers=num_decoder_layers,
            dropout=dropout_p,
        )
        self.out = nn.Linear(dim_model, num_tokens)

    def forward(self, src, tgt, tgt_mask=None, src_pad_mask=None, tgt_pad_mask=None):
        # Src size must be (batch_size, src sequence length)
        # Tgt size must be (batch_size, tgt sequence length)

        # Embedding + positional encoding - Out size = (batch_size, sequence length, dim_model)
        src = self.embedding(src) * math.sqrt(self.dim_model)
        tgt = self.embedding(tgt) * math.sqrt(self.dim_model)
        src = self.positional_encoder(src)
        tgt = self.positional_encoder(tgt)

        # We could use the parameter batch_first=True, but our KDL version doesn't support it yet, so we permute
        # to obtain size (sequence length, batch_size, dim_model),
        src = src.permute(1,0,2)
        tgt = tgt.permute(1,0,2)

        # Transformer blocks - Out size = (sequence length, batch_size, num_tokens)
        transformer_out = self.transformer(
            src,
            tgt,
            tgt_mask=tgt_mask,
            src_key_padding_mask=src_pad_mask,
            tgt_key_padding_mask=tgt_pad_mask
        )
        out = self.out(transformer_out)

        return out

    def get_tgt_mask(self, size) -> torch.tensor:
        # Generates a squeare matrix where the each row allows one word more to be seen
        mask = torch.tril(torch.ones(size, size) == 1) # Lower triangular matrix
        mask = mask.float()
        mask = mask.masked_fill(mask == 0, float('-inf')) # Convert zeros to -inf
        mask = mask.masked_fill(mask == 1, float(0.0)) # Convert ones to 0

        # EX for size=5:
        # [[0., -inf, -inf, -inf, -inf],
        #  [0.,   0., -inf, -inf, -inf],
        #  [0.,   0.,   0., -inf, -inf],
        #  [0.,   0.,   0.,   0., -inf],
        #  [0.,   0.,   0.,   0.,   0.]]

        return mask

    def create_pad_mask(self, matrix: torch.tensor, pad_token: int) -> torch.tensor:
        # If matrix = [1,2,3,0,0,0] where pad_token=0, the result mask is
        # [False, False, False, True, True, True]
        return (matrix == pad_token)
```

### Getting our data

For the sake of this project, I am going to create a set of fake data we can use to train our model. This data will be made up of sequences like:

- 1, 1, 1, 1, 1, 1, 1, 1 → 1, 1, 1, 1, 1, 1, 1, 1
- 0, 0, 0, 0, 0, 0, 0, 0 → 0, 0, 0, 0, 0, 0, 0, 0
- 1, 0, 1, 0, 1, 0, 1, 0 → 1, 0, 1, 0, 1, 0, 1, 0
- 0, 1, 0, 1, 0, 1, 0, 1 → 0, 1, 0, 1, 0, 1, 0, 1

Feel free to skip to the next section if you aren’t interested in the data creation part.
I won’t bother explaining what these functions do since they are pretty easy to understand with basic NumPy knowledge. I’ll create all the sentences of size 8 so I don’t need padding, and I’ll organize them randomly into batches of size 16:

```python
def generate_random_data(n):
    SOS_token = np.array([2])
    EOS_token = np.array([3])
    length = 8

    data = []

    # 1,1,1,1,1,1 -> 1,1,1,1,1
    for i in range(n // 3):
        X = np.concatenate((SOS_token, np.ones(length), EOS_token))
        y = np.concatenate((SOS_token, np.ones(length), EOS_token))
        data.append([X, y])

    # 0,0,0,0 -> 0,0,0,0
    for i in range(n // 3):
        X = np.concatenate((SOS_token, np.zeros(length), EOS_token))
        y = np.concatenate((SOS_token, np.zeros(length), EOS_token))
        data.append([X, y])

    # 1,0,1,0 -> 1,0,1,0,1
    for i in range(n // 3):
        X = np.zeros(length)
        start = random.randint(0, 1)

        X[start::2] = 1

        y = np.zeros(length)
        if X[-1] == 0:
            y[::2] = 1
        else:
            y[1::2] = 1

        X = np.concatenate((SOS_token, X, EOS_token))
        y = np.concatenate((SOS_token, y, EOS_token))

        data.append([X, y])

    np.random.shuffle(data)

    return data


def batchify_data(data, batch_size=16, padding=False, padding_token=-1):
    batches = []
    for idx in range(0, len(data), batch_size):
        # We make sure we dont get the last bit if its not batch_size size
        if idx + batch_size < len(data):
            # Here you would need to get the max length of the batch,
            # and normalize the length with the PAD token.
            if padding:
                max_batch_length = 0

                # Get longest sentence in batch
                for seq in data[idx : idx + batch_size]:
                    if len(seq) > max_batch_length:
                        max_batch_length = len(seq)

                # Append X padding tokens until it reaches the max length
                for seq_idx in range(batch_size):
                    remaining_length = max_bath_length - len(data[idx + seq_idx])
                    data[idx + seq_idx] += [padding_token] * remaining_length

            batches.append(np.array(data[idx : idx + batch_size]).astype(np.int64))

    print(f"{len(batches)} batches of size {batch_size}")

    return batches


train_data = generate_random_data(9000)
val_data = generate_random_data(3000)

train_dataloader = batchify_data(train_data)
val_dataloader = batchify_data(val_data)
```

### Training & Validation

#### Training

Now that we have data to work with, we can get to training our model. Let’s begin by creating an instance of our model, loss function, and optimizer. We will use the [Stochastic Gradient Descent optimizer](https://pytorch.org/docs/stable/generated/torch.optim.SGD.html), the [Cross-Entropy Loss function](https://pytorch.org/docs/stable/generated/torch.nn.CrossEntropyLoss.html), and a learning rate of 0.01. I will also use my graphics card for this training since it will take less time, but it is not necessary.

```python
device = "cuda" if torch.cuda.is_available() else "cpu"
model = Transformer(
    num_tokens=4, dim_model=8, num_heads=2, num_encoder_layers=3, num_decoder_layers=3, dropout_p=0.1
).to(device)
opt = torch.optim.SGD(model.parameters(), lr=0.01)
loss_fn = nn.CrossEntropyLoss()
```

An important concept we need to understand before continuing is that the target tensor we give as an input to the transformer must be shifted by one to the right (compared to the target output tensor). In other words, the tensor we want to give the model for training must have one extra element at the beginning and one less element at the end, and the tensor we compute the loss function with must be shifted in the other direction. This is so that if we give the model an element during inference, it gives us the next one.

![Target vector shifting](shifting.png)

##### Target vector shifting: Image by author

Now that we have grasped this concept, let’s get to coding! The training loop is a standard training loop except:

- The target tensor is passed to the model during the prediction
- A target mask is generated to hide the next words
- A padding mask might be generated and passed to the model as well

```python
def train_loop(model, opt, loss_fn, dataloader):
    """
    Method from "A detailed guide to Pytorch's nn.Transformer() module.", by
    Daniel Melchor: https://danielmelchor.com/blog/blog/pytorch-nntransformer
    """

    model.train()
    total_loss = 0

    for batch in dataloader:
        X, y = batch[:, 0], batch[:, 1]
        X, y = torch.tensor(X).to(device), torch.tensor(y).to(device)

        # Now we shift the tgt by one so with the <SOS> we predict the token at pos 1
        y_input = y[:,:-1]
        y_expected = y[:,1:]

        # Get mask to mask out the next words
        sequence_length = y_input.size(1)
        tgt_mask = model.get_tgt_mask(sequence_length).to(device)

        # Standard training except we pass in y_input and tgt_mask
        pred = model(X, y_input, tgt_mask)

        # Permute pred to have batch size first again
        pred = pred.permute(1, 2, 0)
        loss = loss_fn(pred, y_expected)

        opt.zero_grad()
        loss.backward()
        opt.step()

        total_loss += loss.detach().item()

    return total_loss / len(dataloader)
```

#### Validation

The validation loop is exactly the same as our training loop except we don’t read or update gradients:

```python
def validation_loop(model, loss_fn, dataloader):
    """
    Method from "A detailed guide to Pytorch's nn.Transformer() module.", by
    Daniel Melchor: https://danielmelchor.com/blog/blog/pytorch-nntransformer
    """

    model.eval()
    total_loss = 0

    with torch.no_grad():
        for batch in dataloader:
            X, y = batch[:, 0], batch[:, 1]
            X, y = torch.tensor(X, dtype=torch.long, device=device), torch.tensor(y, dtype=torch.long, device=device)

            # Now we shift the tgt by one so with the <SOS> we predict the token at pos 1
            y_input = y[:,:-1]
            y_expected = y[:,1:]

            # Get mask to mask out the next words
            sequence_length = y_input.size(1)
            tgt_mask = model.get_tgt_mask(sequence_length).to(device)

            # Standard training except we pass in y_input and src_mask
            pred = model(X, y_input, tgt_mask)

            # Permute pred to have batch size first again
            pred = pred.permute(1, 2, 0)
            loss = loss_fn(pred, y_expected)
            total_loss += loss.detach().item()

    return total_loss / len(dataloader)
```

Executing the training and validation
In this example, I am training the model for 10 epochs. To simplify the training I created a fit function that calls the train and validation loop every epoch and prints the loss:

```python
def fit(model, opt, loss_fn, train_dataloader, val_dataloader, epochs):
    """
    Method from "A detailed guide to Pytorch's nn.Transformer() module.", by
    Daniel Melchor: https://danielmelchor.com/blog/blog/pytorch-nntransformer
    """

    # Used for plotting later on
    train_loss_list, validation_loss_list = [], []

    print("Training and validating model")
    for epoch in range(epochs):
        print("-"*25, f"Epoch {epoch + 1}","-"*25)

        train_loss = train_loop(model, opt, loss_fn, train_dataloader)
        train_loss_list += [train_loss]

        validation_loss = validation_loop(model, loss_fn, val_dataloader)
        validation_loss_list += [validation_loss]

        print(f"Training loss: {train_loss:.4f}")
        print(f"Validation loss: {validation_loss:.4f}")
        print()

    return train_loss_list, validation_loss_list

train_loss_list, validation_loss_list = fit(model, opt, loss_fn, train_dataloader, val_dataloader, 10)
```

This produces the following out

```bash

Training and validating model
------------------------- Epoch 1 -------------------------
Training loss: 0.5878
Validation loss: 0.4172
------------------------- Epoch 2 -------------------------
Training loss: 0.4384
Validation loss: 0.3981
------------------------- Epoch 3 -------------------------
Training loss: 0.4155
Validation loss: 0.3852
------------------------- Epoch 4 -------------------------
Training loss: 0.4003
Validation loss: 0.3700
------------------------- Epoch 5 -------------------------
Training loss: 0.3842
Validation loss: 0.3443
------------------------- Epoch 6 -------------------------
Training loss: 0.3592
Validation loss: 0.3069
------------------------- Epoch 7 -------------------------
Training loss: 0.3291
Validation loss: 0.2652
------------------------- Epoch 8 -------------------------
Training loss: 0.2956
Validation loss: 0.2195
------------------------- Epoch 9 -------------------------
Training loss: 0.2684
Validation loss: 0.1947
------------------------- Epoch 10 -------------------------
Training loss: 0.2501
Validation loss: 0.1930

```

### Results

After training we obtain the following losses per epoch:

![Training results](results.png)

##### Training results: Image by author

### Inference

As we can see, our model seems to have learned something. It is time to check if it has, but… how do we check it? We don’t have target tensors for data we have never seen. Here is where shifting our input target and output target tensor has an effect. As we saw before, our model learned to predict the next token when given an element. Therefore, we should be able to give our model the input tensor and the start token, and it should give us back the next element. If when the model predicts a token, we concatenate it with our previous input, we should slowly be able to add words to our output until our model predicts the <EOS> token.
Here is the code for that process:

```python
def predict(model, input_sequence, max_length=15, SOS_token=2, EOS_token=3):
    """
    Method from "A detailed guide to Pytorch's nn.Transformer() module.", by
    Daniel Melchor: https://danielmelchor.com/blog/blog/pytorch-nntransformer
    """
    model.eval()

    y_input = torch.tensor([[SOS_token]], dtype=torch.long, device=device)

    num_tokens = len(input_sequence[0])

    for _ in range(max_length):
        # Get source mask
        tgt_mask = model.get_tgt_mask(y_input.size(1)).to(device)

        pred = model(input_sequence, y_input, tgt_mask)

        next_item = pred.topk(1)[1].view(-1)[-1].item() # num with highest probability
        next_item = torch.tensor([[next_item]], device=device)

        # Concatenate previous input with predicted best word
        y_input = torch.cat((y_input, next_item), dim=1)

        # Stop if model predicts end of sentence
        if next_item.view(-1).item() == EOS_token:
            break

    return y_input.view(-1).tolist()


# Here we test some examples to observe how the model predicts
examples = [
    torch.tensor([[2, 0, 0, 0, 0, 0, 0, 0, 0, 3]], dtype=torch.long, device=device),
    torch.tensor([[2, 1, 1, 1, 1, 1, 1, 1, 1, 3]], dtype=torch.long, device=device),
    torch.tensor([[2, 1, 0, 1, 0, 1, 0, 1, 0, 3]], dtype=torch.long, device=device),
    torch.tensor([[2, 0, 1, 0, 1, 0, 1, 0, 1, 3]], dtype=torch.long, device=device),
    torch.tensor([[2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 3]], dtype=torch.long, device=device),
    torch.tensor([[2, 0, 1, 3]], dtype=torch.long, device=device)
]

for idx, example in enumerate(examples):
    result = predict(model, example)
    print(f"Example {idx}")
    print(f"Input: {example.view(-1).tolist()[1:-1]}")
    print(f"Continuation: {result[1:-1]}")
    print()
```

The output of running this code is:

```bash

Example 0
Input: [0, 0, 0, 0, 0, 0, 0, 0]
Continuation: [0, 0, 0, 0, 0, 0, 0, 0, 0]
Example 1
Input: [1, 1, 1, 1, 1, 1, 1, 1]
Continuation: [1, 1, 1, 1, 1, 1, 1, 1, 1]
Example 2
Input: [1, 0, 1, 0, 1, 0, 1, 0]
Continuation: [1, 0, 1, 0, 1, 0, 1, 0]
Example 3
Input: [0, 1, 0, 1, 0, 1, 0, 1]
Continuation: [1, 0, 1, 0, 1, 0, 1, 0]
Example 4
Input: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
Continuation: [0, 1, 0, 1, 0, 1, 0, 1, 0]
Example 5
Input: [0, 1]
Continuation: [0, 1, 0, 1, 0, 1, 0]

```

So the model has indeed gotten the gist of our sequences, but it still makes some mistakes when trying to predict the continuation. For example, in “Example 4”, the model should predict a 1 as the first token, since the ending of the input is a 0. We can also see how during inference our sentences don’t need to have the same length, and the outputs will also not have the same length (see “Example 5”).

### Conclusion

I believe this article can help a lot of beginner/intermediate machine learning developers learn how to work with transformer models in PyTorch, and, since the structure is the same in other languages, this tutorial is probably also useful for other frameworks like Tensorflow (hopefully).
If you have any suggestions or find any bugs feel free to leave a comment and I will fix it ASAP.

**Full Colab Notebook**: [https://drive.google.com/file/d/15gyTrsd-OU6YZVyjwis48ysrXFPEcv9r/view?usp=sharing](https://drive.google.com/file/d/15gyTrsd-OU6YZVyjwis48ysrXFPEcv9r/view?usp=sharing)

```

```
