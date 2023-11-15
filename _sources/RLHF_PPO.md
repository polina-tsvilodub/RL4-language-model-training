# Reinforcement Learning (part 3): RLHF and PPO

This session consists of two parts and aims to clarify the connection between reinforcement learning and language model fine-tuning, especially as it was been employed in recent systems like ChatGPT. 

In particular, the first part of the session introduces the Reinforcement Learning from Human Feedback (RLHF) approach as it was used for training ChatGPT and InstructGPT. Core components of the approaches are discussed, especially focusing on the reward modeling aspect.
The second part provides an overview of developments that were made in the domain of *policy-gradient methods* (e.g., advantage estimation, gradient variance reduction techniques etc). The session focuses on Proximal Policy Optimization (PPO), one of the most popular deep RL algorithms in the current literature.

The goal of the session is to connect more closely algorithms from RL and approaches that are applied to fine-tune LLMs, as well as to outline core concepts in SOTA policy-gradient algorithms.

Slides for the session can be found [here](<https://polina-tsvilodub.github.io/RL4-language-model-training/04a-PG-RMs.pdf>).

## Further materials (optional)

Below, further materials on RL, algorithms discussed in the session as well as materials introducing and reviewing reward modeling from human feedback can be found.

* [ChatGPT blogpost](https://openai.com/blog/chatgpt)
* [Schulman et al. (2017) Proximal Policy Optimization Algorithms](https://arxiv.org/pdf/1707.06347.pdf)
* [Bai et al. (2022) Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback](https://arxiv.org/pdf/2204.05862.pdf)
* [InstructGPT (architecture underlyinh ChatGPT and Gpt-3.5): Ouyang et al. (2022) Training language models to follow instructions with human feedback](https://arxiv.org/pdf/2203.02155.pdf)
* [Paper including a review of methods of eliciting human feedback: Casper et al. (2023) Open Problems and Fundamental Limitations of Reinforcement Learning from Human Feedback](https://arxiv.org/pdf/2307.15217.pdf)
* [Sutton & Barto (2018). Reinforcement learning: An Introduction.](https://www.andrew.cmu.edu/course/10-703/textbook/BartoSutton.pdf)
* [Great YouTube video series on RL by Pieter Abbeel](https://youtu.be/2GwBez0D20A?si=D4toGoTbQu01qP5j)