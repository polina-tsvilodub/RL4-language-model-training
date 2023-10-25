# Language Model Training & Introduction to RL

In this session, the familiarization with the core concepts around language models is wrapped up. Training of language models is shortly discussed, so as to recap terms which are important for understanding fine-tuning of LMs with RL.
Furthermore, a conceptual motivation and a high-level introduction to reinforcement learning (RL) is provided.

## Transformers, Training and RL

In this session, some additional details of the transformers architecure are discussed. Then, teacher-forcing based training of language models is briefly reviewed. Important concepts around inference with trained LMs (e.g., decoding schemes, prompting) are highlighted. This concludes the basic introduction / recap of core language models.

The second part of the session motivates reinforcement learning in the context of LMs and briefly situates it in the field of machine learning. Then, core concepts of RL like states, actions, policy etc. are introduced. The introduction is rather informal; the main goal is to develop some intuitions about these terms.

Slides for the session can be found [here](<https://polina-tsvilodub.github.io/RL4-language-model-training/02a-LLMs-training-RL.pdf>).

## Further materials (optional)

Below, further materials on transformers, language model training, decoding schemes and basic RL concepts can be found.

* [Rotatory Position Embeddings (RoPE): a popular SOTA positional encoding methods used in, e.g., LLaMA](https://arxiv.org/pdf/2104.09864.pdf)
* [Great lecture by Vaswani about the Transformer architecture](https://www.youtube.com/watch?v=5vcj8kSwBCY)
* [NLP course chapter from HuggingFace oon how to train LMs (using their training wrappers)](https://huggingface.co/learn/nlp-course/chapter7/6#training-a-causal-language-model-from-scratch)
* [Goodfellow et al. (2016). Deep Learning](https://www.deeplearningbook.org/)
  * an encyclopaedic webbook on deep learning working through general concepts related to neural networks, training, optimization etc.
* [Paper explaining potential short-comings of teacher-forcing based training and suggesting an alternative](https://proceedings.neurips.cc/paper_files/paper/2016/file/16026d60ff9b54410b3435b403afd226-Paper.pdf)
* [Classic paper introducing nucleus-sampling](https://arxiv.org/pdf/1904.09751.pdf)
* [Webbook on current prompting techniques](https://www.promptingguide.ai/)
* [**Sutton & Barto (2018). Reinforcement learning: An Introduction.**](https://www.andrew.cmu.edu/course/10-703/textbook/BartoSutton.pdf)

## Homework

The first homework is out! In this homework, you will get a chance to try concepts we discussed so far hands-on. Please find the exercise sheet and all instructions on the next page.