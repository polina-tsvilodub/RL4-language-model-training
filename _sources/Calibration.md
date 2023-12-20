# Evaluating LLMs: Part 3

In this session, we look at further aspects that are important when evaluating trained LLMs and when evaluating systems trained with RL. In particular, in the first part of the session we will look at *calibration*, a concept describing how close predictions about probabilities of outcomes (e.g., the retrieved token probability) of the LLM match some 'true' probability of an outcome (e.g., empirical frequency of those tokens). Calibration investigations are used to assess whether LLMs' prediction confidence is plausible.

In the second part we will switch gears and consider possible aspects that matter when evaluating agents that were trained with RL. In particular, we will look at unintentional shortcomings of reward modeling which result in outcomes which elicit high reward and yet would not be judged as good outcomes by humans (e.g., solutions to mathematical problems which are correct but were computed incorrectly), and how this could potentially be alleviated. This topic will be briefly situated in light of the notion of *alignment* of artificial agents and human values.

The learning goals for this session are:

* understanding of the concept of calibration and the methodology used for assessing it,
* gain a high-level understanding of different components of the LLM which could be evaluated with an eye towards calibration.

The slides for the session can be found [here](<https://polina-tsvilodub.github.io/RL4-language-model-training/08a-Advanced-evals.pdf>).

## Student presentations

One core paper about LLM calibration by [Kadavath et al., (2023)](https://arxiv.org/pdf/2207.05221.pdf) will be discussed in a student presentation.

## Further paper discussed in the lecture

* [Giullianelli et al. (2023). What Comes Next? Evaluating Uncertainty in Neural Text Generators Against Human Production Variability](https://arxiv.org/pdf/2305.11707.pdf)