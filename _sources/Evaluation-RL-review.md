# RL fine-tuning: Outlook

THis session provides an outlook to aspects that are important when evaluating systems which are trained with RL, as well as an outlook to another field of NLP where RL has been used in connection with communication.

In particular, the first part of the session discusses RL from the perspective of **alignment** -- a term referring to, broadly, making a system's behavior and "goals" congruent with a set of human goals. Specifically, RLHF has been commonly discussed as an alignment technique for LLMs in the current literature, by providing a technique for making LLMs, e.g., helpful (which is a goal humans would like the LLMs to follow). However, one important caveat of RL is that its set-up provides a representation of the goal the agent needs to learn to achieve, but *does not* by default provide information on **how** to achieve the goal. This might lead to so-called *reward hacking*, i.e., a phenomenon whereby the agent learns to accumulate high rewards according to the given reward function (i.e., apparently achieve the goal) but does so in the "wrong" way (e.g., an autonomous vehicle could learn to get to its destination as quickly as possible by driving over pedestrians and red lights). 

The notion of alignment and topics around it will be discussed in more detail in the next sessions. In this class we only take a brief outlook at a *process-supervised reward modeling* approach which could help alleviate the issue of achieving the right result in the wrong way. 

The second part of the session (student presentation) provides an outlook to so-called *multi-agent communication* experiments. In this set up, RL is used to train an agent to solve a task (with RL) based on direct interaction with another artificial agent. This can be seen as a generalization of the RLAIF idea which was discussed a few sessiona go.
The focus of this presentation is a phenomenon related to reward hacking but appearing in communication games where agents use natural language -- **language drift**.

The learning goals for this session are:

* think about how to evaluate RL-trained agents,
* understand the issues behind falsely specified RMs
* understand the difference between outcome- and process-superviesd RMs,
* familiarize ourselves with the idea of multi-agent communication experiments.

The slides for the session can be found [here](<https://polina-tsvilodub.github.io/RL4-language-model-training/09a-Advanced-evals-part2.pdf>).

## Student presentations

The paper about language drift in the context of multi-agent communication by [Lee et al., (2019)](https://arxiv.org/pdf/1909.04499.pdf) will be discussed in a student presentation.

## Further paper discussed in the lecture

* [Giullianelli et al. (2023). What Comes Next? Evaluating Uncertainty in Neural Text Generators Against Human Production Variability](https://arxiv.org/pdf/2305.11707.pdf)
* [Lightman et al. (2023). Let's Verify Step by Step](https://cdn.openai.com/improving-mathematical-reasoning-with-process-supervision/Lets_Verify_Step_by_Step.pdf)