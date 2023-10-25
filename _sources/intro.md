# Welcome to "RL for Language Model Training"!

This page contains materials for the course "Reinforcement Learning for Language Model Training" taught at the University of Tübingen.

The goal of this course is to provide some conceptual and technical background on selected topics in reinforcement learning (RL) and Natural Language Processing (NLP), so as to enable participants to follow cutting-edge research at the intersection of large language model development and RL. The course strives to provide a mix of introductory lectures, hands-on exercises and discussions of current research around training language models with reinforcement learning. The topics are mainly optimized towards enabling interdisciplinary discussions; the course is *not* intended as a comprehensive introduction to NLP or RL. Presented class materials are partially built on materials of the class ["LLMs: implications for linguistics, cognitive science and society"](https://cogsciprag.github.io/LLM-implications/). Most session will provide lecture slides, texts and / or exercises, as well as additional optional materials in this webbook.

## Course description

Reinforcement learning (RL) has gained recurring attention in the context of large language models (LLMs) over the last years. For instance, state-of-the-art LLMs like ChatGPT are fine-tuned to better satisfy users’ preferences with a technique called reinforcement learning from human feedback (RLHF).

In the class “RL for language model training”, we will discuss practical and technical aspects of RL fine-tuning (e.g., RLHF), cutting-edge research on the effects and limitations of RL in the context of LLM training, as well as open societal questions like alignment. The goal of the class is to get a more detailed understanding of RL fine-tuning of LLMs from an interdisciplinary perspective. 

The course will take place on **Wednesdays, 12:30--14 (s.t.), in  Nauklerstr. 35, seminar room 1**. The course is intended for master students or advanced bachelor students who are interested in linguistics / NLP / ML / interdisciplinary approaches to technical advances in development of LLMs. Familiarity with language models and programming is encouraged but not strictly required. Familiarity with reinforcement learning is *not* required.

More details about the covered topics and the preliminary schedule can be found below, as well as in the introductory slides for the first session.

```{tableofcontents}
```

## Formalia

The course will take place **in-person** (unless announced otherwise) on Wednesdays, 12-2pm (c.t.). By default, participation is rewarded with 3 ECTS, but mire credits can be earned upon completing additional work. The rough respective requirements are listed below.

* 3 ECTS: active participation in class, completion of 3 homework exercise sheets, passing a poster submission.
* 6 ECTS: active participation in class, completion of 3 homework exercise sheets, passing a poster submission, hands-on project in groups.
* 9 ECTS: active participation in class, completion of 3 homework exercise sheets, passing a poster submission, hands-on project in groups, in-class presentation.

Course materials will mainly be made available through this class website. The course Moodle page will be used for anouncements and sharing papers. You are warmly encouraged to use the forum for active discussions beyond class sessions.

## Schedule

The course schedule below is *preliminary*.

| session    | date          | topic                                                                                                 |
|------------|---------------|-------------------------------------------------------------------------------------------------------|
| 1          | October 18th  | Overview & intro to Large Language Models: Concepts and architecture (part 1)                         |
| 2          | October 25th  | Large Language Models: Training (part 2) & intro to RL (part 1)                                       |
|            | November 1st  | **holiday** (hands-on exercises)                                                                      |
| 3          | November 8th  | Reinforcement learning (part 2): Discussing hands-on exercises & Policy gradient methods (TRPO, PPO)  |
| 4          | November 15th | Reinforcement learning (part 3): Policy gradient methods & RLHF (reward model training)               |
| 5          | November 22nd | Discussion of literature (RL in LLM training)                                     |
| 6          | November 29th | Hands-on: Effects of RL: 'behavioral' experiments; benchmark comparisons                              |
| 7          | December 6th  | Hands-on: Effects of RL: representational comparisons                                                 |
| 8          | December 13th | Hands-on: TBD                                                                                         |
| 9 (online) | December 20th | buffer                                                                                                |
| --         | --            | **Christmas break**                                                                                   |
| 10         | January 10th  | Effects of RL: Social implications                                                                    |
| 11         | January 17th  | Limitations of RL for language model training                                                         |
| 12         | January 24th  | LLMs as a concept: simulators, agents, classifiers                                                    |
| 13         | January 31st  | Final session (final assignment)                                                                                  |
|            | February 7th  | **no class**                                                                                          |