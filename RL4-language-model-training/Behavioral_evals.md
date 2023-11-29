# Evaluating LLMs: Part 1

In this session, we begin to look at different methods which can helps us assess and understand trained LLMs -- we will discuss different evaluation methods for LLMs.
In particular, we will focus on what could be called "behavioral evaluations". This name takes inspiration from psychology and cognitive science where the human mind is often studied with the help of behavioral experiments, i.e., experiments where human behavior is observed given particular tasks os situations.
Similarly, in order to assess how trained LLMs work (or, behave) on different tasks (or, with different inputs), we can look at their outputs. 

Such I/O evaluations are the most common approach to LLM evaluation. It makes use of large *benchmark datasets* which are designed to test models' performance on a variety of tasks
in an automated way by checking the models' outputs against ground truth answers. Usually, from a more technical and engineering perspective, quality of LLMs is measured by their scores on these benchmarks. Initially, these benchmarks were designed to test LLMs' linguistic performance.
However, more recently, work more informed by human language use and processing has compared LLMs' performance to aspects of human behavior. Here, the assessment of LLMs is guided more by the question of how human-like certain aspects of its performance are.
Finally, recent LLMs have shown impressive generalization to tasks which seem to require more than linguistic fluency, like solving math and reasoning problems. Therefore, more recent benchmarks incorporate tests of various tasks going beyond linguistic capability.
Given that SOTA LLMs are also often designed as assisstants and embedded in user-facing applications, it also became crucial to evaluate potenital social impacts that LLMs might exhibit with their outputs, like assessing biases and toxicity of the generations.

Therefore, the learning goals for this session are:

* understand why and how LLMs are evaluated via I/O,
* get an impression of common evaluation benchmarks,
* understand limitations of common evaluation approaches,
* become familiar with the assessment of new aspects of performance and new evaluation methods which became relevant with increasing generalization capabilities of SOTA LLMs.

The slides for the session can be found [here](<https://polina-tsvilodub.github.io/RL4-language-model-training/06a-Behavioral-evals.pdf>).

## Student presentation

One particular approach to advanced evaluations of LLMs, with the help of LLMs, conducted by [Perez et al. (2022)](https://arxiv.org/pdf/2212.09251.pdf) will be discussed in a student presentation.

## Further references

* TBD.