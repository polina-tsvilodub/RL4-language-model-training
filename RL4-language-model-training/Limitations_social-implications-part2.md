# Limitations & Implications of LLMs: Part 2

We continue the discussion of potential socially relevant implications connected to large-scale deployment of current LLMs. 
Furthermore, we continue discussing important limitations and critical perspectives on LLMs and RL. Specifically, one topic that is increasingly under discussion with the use of RL on top of powerful foundation models (e.g., RLHF) is *alignment*. Roughly, alignment is both the area of research and the process of making AI systems congruent with (‘good’) human goals and values. For instance, we have seen that RL is used to make LLMs harmless, helpful and honest, and RL has been said to be *the* tool for alignment. However, AI alignment is a far from trivial task; next to the difficulty of specifying the goals the systems should be aligned to in the first place, the correct and reliable technical realization can be quite tricky. For instance, models could learn to find loopholes and collect rewards while behaving in a way that humans would not consider aligned (so-called reward hacking). These questions are an active area of research.
Members of the community who work with / around AI (safety), foundation models and alignment have called for more research on this topic, extrapolating current technology to potentially high-risk scenarios (in particular, e.g., [paperclip problem](https://en.wikipedia.org/wiki/Instrumental_convergence)).

Two papers within the broad topic of limitations of RL will be presented by students (see below). One of the presentations is concerned with *curiosity* which is arguably a component of biological agents' exploratory behavior which is not accounted for in the standard RL framework.

The slides for the session can be found [here](<https://polina-tsvilodub.github.io/RL4-language-model-training/11a-Social-implications-part2.pdf>).

## Student presentations

* [Santurkar et al. (2023). Whose Opinions Do Language Models Reflect?](https://arxiv.org/pdf/2303.17548.pdf)
* [Shah et al. (2022). Goal Misgeneralization: Why Correct Specifications Aren’t Enough For Correct Goals](https://arxiv.org/pdf/2210.01790.pdf)
* [Pathak et al. (2017). Curiosity-driven Exploration by Self-supervised Prediction](https://arxiv.org/pdf/1705.05363.pdf)