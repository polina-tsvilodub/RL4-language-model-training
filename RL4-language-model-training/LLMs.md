# Language Models: Introduction

The goal of the introductory session is to motivate the course, cover formalia and start a recap of relevant background on (large) language models (LLMs).


## Large Language Models (LLMs): a high-level overview

The introductory part of the slides briefly introduces topics that will be covered throughout the class.

In the second part, the core ideas behind language models are introduced. In particular, the slides cover the core idea behind language models, namely, the *next-word prediction task*. Further, the slides include a bsic introduction to the main architecture used in state-of-the-art language models, the *transformer*. Some further technical aspects of language models are discussed. The session highlights only those technical aspects of language models which are most relevant for models which are fine-tuned with RL; for more comprehensive materials on LMs in general, see [further materials on LMs.](content:materials:lms)

Slides for the session can be found [here](<https://polina-tsvilodub.github.io/RL4LMT/01a-intro-LLMs.pdf>).

## Further materials (optional)

Below, further background materials on langauge models can be found. Additionally, resources for trying language models hands-on and preparing for the practical parts of the class are provided.

(content:materials:lms)=
### Language models

Below you can find a few basic optional recommendations for resources on all sort of LMs (including n-gram models, recurrent neural networks, etc) which have been developed in CL and NLP. Classical papers (also introducing concepts which are covered on the class) are referenced, as well.

* [Wei et al. (2023) An overview of language models.](https://arxiv.org/pdf/2303.05759.pdf)
* [Chapter on n-gram LMs from Jurafksy & Martin. (2023) *Speech and Language Processing.*](https://web.stanford.edu/~jurafsky/slp3/3.pdf)
* [Lecture on RNNs from Stanford class "NLP with Deep Learning"](https://www.youtube.com/watch?v=PLryWeHPcBs&list=PLoROMvodv4rOSH4v6133s9LFPRHjEmbmJ&index=5)
* [Lecture on LSTMs from Stanford class "NLP with Deep Learning"](https://www.youtube.com/watch?v=0LixFSa7yts&list=PLoROMvodv4rOSH4v6133s9LFPRHjEmbmJ&index=6)
* [Paper introducing LSTMs](https://www.bioinf.jku.at/publications/older/2604.pdf)
* [Paper introducing the BERT model (one of the most-used architectures before GPT et al.)](https://aclanthology.org/N19-1423.pdf)
* [Paper introducing additive attention (predecessor attention mechanism to multiplicative attention used in current transformers)](https://arxiv.org/pdf/1409.0473.pdf)
* [Paper introducing the transformer architecture as it is currently deployed ("Attention is all you need")](https://arxiv.org/pdf/1706.03762.pdf)

### Where to try LLMs

Below you can find links where you could try state-of-the-art LLMs yourself. Please note that accessing the fanciest models requires creating accounts. The use of some models by OpenAI might even require to pay. Using the OpenAI API for accessing the models also requires to pay once the free credits one gets upon signing up are used up. Please note that **you are not expected to pay** for using these models in this class. Please contact me if you do have any issues  regarding model use. The first options provide a graphical interface for exploration; the last two points require programming. Later sessions of the class will also cover some basics of programmatic access of available models. Some of the referenced models are hosted on HiggingFace, a library and platform providing tools for using LMs (and other machine learning models). We will be using HuggingFace throughout the class; for an introduction, see [practical materials](content:materials:practical)

* [ChatGPT](https://chat.openai.com/): This chat model provided by OpenAI requires an account, but allows you to play around for free using the nice graphical chat interface.
* [BARD](https://bard.google.com/chat): This chat model is provided by Google and requires a Google account. It is also free and provides a handy graphical chat interface.
* [BLOOM](https://huggingface.co/bigscience/bloom): This is an open-source LM optimized for multi-languagual use. You can test it via the graphical hosten inference API on HuggingFace.
* [OpenAssistant](https://open-assistant.io/chat): This is an open source alternative to OpenAI's GPT based models, based on the foundation model LLaMA provided by Meta AI. Using it requires a free account and it also offers a nice graphical chat interface.
* [FLAN-T5-XXL](https://huggingface.co/google/flan-t5-xxl): Huggingface hosts a try-out playground for a large variety of other 'more classical' open-source models like BERT and T5. This is a link to trying out a fine-tuned version of T5, called FLAN-T5. It is also a transformer model (like GPT) which was fune-tuned on a variety of tasks.
* [HuggingChat](https://huggingface.co/chat/): Free alternative to chatGPT based on Open Assistant's latest model.
* [advanced] [LLaMA-2](https://huggingface.co/blog/llama2): Meta has released a suite of new LLMs of different sizes (7B, 13B, 70B parameters), both in pretraining-only and fine-tuned (with RL) versions. Trying the model requires requesting credentials from Meta [here](https://ai.meta.com/resources/models-and-libraries/llama-downloads/). Upon receiving an access token and download instructions, you can try to run the model using the code provided by Meta, or by using the [HuggingFace library endpoint](https://huggingface.co/blog/llama2#inference). The latter requires requesting a separate access token to the HuggigFace version of LLaMA-2 and a HuggingFace Hub account.
  * **Warning**: running the smallest (7B) model locally requires at least 24GB RAM as well as certain Python packages being installed. Installing packages in a separate environment only is strongly recommended. Running the model locally might be non-trivial on MacOS. Please reach out to me if you run into issues.
* [advanced] [OpenAI API](https://platform.openai.com/docs/api-reference/introduction): If you are familiar with getting your hands dirty with LMs and would like to generate some text from the latest GPT models, feel free to have a look at the OpenAI API which allows you to generate predictions from the latest non open-source models. **WARNING:** you have to pay for using their API (either with the $20 free credit you receive when signing up or via your saved payment method), so please pay attention to how many tokens you generate and note that this is your own responsibility.

There are several other big players (e.g., PALM by Google) in the field of LLMs which are not available for public testing or don't have graphical test interfaces. We will discuss currently main models in the next sessions in more detail.

(content:materials:practical)=
### Preparing for practical programming tasks

The following is a list of additional material, in case you would like to recap various topics (at different levels) which will come in handy in the next sessions. These are not a prerequisite for the next classes and we will walk through all the important concepts in class. Of course, these are just single suggestions in the sea of content on the internet meant to kick start the recommendation algorithm -- you are welcome to browse and choose your own favorites.

* [Basic Python recap (1h)](https://www.youtube.com/watch?v=kqtD5dpn9C8)
* [Python for machine learning & data science in general (50min)](https://www.youtube.com/watch?v=7eh4d6sabA0)
* [Introduction to neural networks](https://youtu.be/aircAruvnKk)
* [PyTorch for deep learning, a brief introduction (30 min)](https://youtu.be/IC0_FRiX-sw)
* [High level introduction to the transformers architecture in general](https://youtu.be/SZorAJ4I-sA)
* [Vaswani et al (2017): Attention is all you need. A walk through of one of the original papers on the transformers architecture](https://youtu.be/iDulhoQ2pro)
* [Introduction to the Huggingface library](https://www.youtube.com/watch?v=QEaBAZQCtwE)
