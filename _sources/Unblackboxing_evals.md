# Evaluating LLMs: Part 2

In this session, we look at more advanced approaches to understanding trained LLMs -- we will discuss methods which focus on evaluating representations and certain mechanisms in the models, with the goal of understanding their role for models' predictions. More broadly, the goal of such methods is often both better understanding what matters for building performant models, and better understanding how exactly LLMs arrive at their predictions. The latter aspect is also reffered to as (mehcanistic) *interpretability* of models.

The learning goals for this session are:

* gain a high-level understanding why and how LLMs' representations are evaluated,
* gain a high-level understanding of model evaluations via *interventions*,
* understand additional evaluation dimensions which matter for RL fine-tuned models (e.g., evaluating reward models).

In particular, the first part of the session introduces methods which have been commonly applied to "classical" LMs. Embedding evaluation methods have been heavily applied to word embeddings like GloVe or word2vec. However, modern LLMs do not use such pretrained word-level embeddings but rather subword token representations; methods for extraction of comparable information and similar analyses of LLMs are an active area of research. Furthermore, both embedding and probing analyses focus on "core LLMs". It remains an open question how fine-tuning affects the functional role of different mechanisms, especially in later model layers which are mostly used during fine-tuning.

The slides for the session can be found [here](<https://polina-tsvilodub.github.io/RL4-language-model-training/07a-Mechanistic-evals.pdf>).

## Student presentations

One approach to *mechanistic interpretability of LLMs in the context of relational tasks*, showcased by [Merullo, Eickhoff and Pavlick (2023)](https://arxiv.org/pdf/2305.16130.pdf) will be discussed in a student presentation.

When evaluating the quality of systems which utilize fine-tuning with an additional model -- the *reward model* -- it is critical to scrutinize all components of the system. One phenomenon that can be observed for the reward model is *reward collapse*, identified by [Song et al. (2023)](https://arxiv.org/pdf/2305.17608.pdf) will also be discussed in a student presentation.