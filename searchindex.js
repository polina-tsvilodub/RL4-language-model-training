Search.setIndex({"docnames": ["Behavioral_evals", "LLMs", "LLMs_intro_RL", "RL", "RLHF_PPO", "SOTA-models", "homework1", "homework2", "intro"], "filenames": ["Behavioral_evals.md", "LLMs.md", "LLMs_intro_RL.md", "RL.md", "RLHF_PPO.md", "SOTA-models.md", "homework1.ipynb", "homework2.ipynb", "intro.md"], "titles": ["Evaluating LLMs: Part 1", "Language Models: Introduction", "Language Model Training &amp; Introduction to RL", "Reinforcement Learning (part 2)", "Reinforcement Learning (part 3): RLHF and PPO", "SOTA systems", "Homework 1", "Homework 2", "Welcome to \u201cRL for Language Model Training\u201d!"], "terms": {"In": [0, 1, 2, 3, 4, 5, 6, 7, 8], "thi": [0, 1, 2, 3, 4, 5, 6, 7, 8], "session": [0, 1, 2, 3, 4, 5, 6, 7, 8], "we": [0, 1, 2, 5, 6, 7, 8], "begin": [0, 6], "look": [0, 1, 5, 6, 7], "differ": [0, 1, 6, 7], "method": [0, 1, 2, 3, 4, 5, 6, 7, 8], "which": [0, 1, 2, 3, 5, 6, 7], "can": [0, 1, 2, 3, 4, 5, 6, 7, 8], "help": [0, 2, 4, 5, 6, 7], "us": [0, 1, 2, 3, 4, 6, 7, 8], "assess": 0, "understand": [0, 2, 5, 6, 7, 8], "train": [0, 4, 5, 6], "discuss": [0, 1, 2, 4, 6, 7, 8], "particular": [0, 1, 3, 4, 5, 6, 7], "focu": [0, 7], "what": [0, 6, 7], "could": [0, 1], "call": [0, 1, 6, 7, 8], "behavior": [0, 6, 8], "name": [0, 1, 6, 7], "take": [0, 6, 7, 8], "inspir": [0, 5, 7], "from": [0, 1, 2, 4, 5, 6, 7, 8], "psycholog": 0, "cognit": [0, 8], "scienc": [0, 1, 8], "where": [0, 6, 7], "human": [0, 4, 7, 8], "mind": [0, 6, 7], "often": [0, 6], "studi": [0, 6, 7], "experi": [0, 2, 6, 7, 8], "i": [0, 6, 7], "e": [0, 1, 2, 4, 6, 7, 8], "observ": [0, 6, 7], "given": [0, 6, 7], "task": [0, 6, 7], "os": 0, "situat": [0, 2, 6], "similarli": 0, "order": [0, 6, 7], "how": [0, 1, 2, 5, 6, 7], "work": [0, 2, 5, 6, 7, 8], "behav": [0, 6], "input": [0, 6, 7], "output": [0, 6, 7], "Such": 0, "o": 0, "ar": [0, 1, 2, 3, 4, 5, 6, 7, 8], "most": [0, 1, 2, 4, 6, 7, 8], "common": [0, 7], "approach": [0, 4, 7, 8], "It": [0, 1, 6, 7], "make": [0, 6, 7], "larg": [0, 8], "benchmark": [0, 7, 8], "dataset": [0, 6, 7], "design": 0, "test": [0, 1, 6, 7], "model": [0, 3, 4, 5, 6], "perform": [0, 7], "varieti": [0, 1, 5], "an": [0, 1, 2, 3, 4, 6, 7, 8], "autom": 0, "wai": [0, 5, 7], "check": [0, 6, 7], "against": 0, "ground": [0, 6, 7], "truth": [0, 6, 7], "answer": [0, 6, 7], "usual": [0, 6], "more": [0, 1, 2, 3, 4, 7, 8], "technic": [0, 1, 3, 6, 7, 8], "engin": 0, "perspect": [0, 7, 8], "qualiti": [0, 6], "measur": 0, "score": [0, 7], "initi": [0, 6, 7], "were": [0, 4, 5, 6, 7], "linguist": [0, 8], "howev": [0, 2, 6, 7], "recent": [0, 4, 6, 7], "inform": [0, 2, 6, 7], "languag": [0, 3, 4, 6, 7], "process": [0, 1, 3, 6, 8], "ha": [0, 1, 6, 7, 8], "compar": [0, 6, 7], "aspect": [0, 1, 4, 6, 7, 8], "here": [0, 1, 2, 3, 4, 5, 6, 7], "guid": 0, "question": [0, 6, 7, 8], "like": [0, 1, 2, 4, 6, 7, 8], "certain": [0, 1, 7], "its": [0, 7], "final": [0, 6, 7, 8], "have": [0, 1, 6, 7], "shown": [0, 7], "impress": 0, "gener": [0, 1, 2, 6, 7], "seem": [0, 6], "requir": [0, 1, 2, 6, 7, 8], "than": [0, 7], "fluenci": 0, "solv": [0, 3, 6, 7], "math": [0, 6], "reason": 0, "problem": [0, 4, 6], "therefor": [0, 6, 7], "incorpor": [0, 7], "variou": [0, 1, 5], "go": [0, 2, 6, 7], "beyond": [0, 2, 8], "capabl": 0, "sota": [0, 2, 4, 7, 8], "also": [0, 1, 2, 5, 6, 7], "assisst": 0, "embed": [0, 2, 6], "user": [0, 8], "face": 0, "applic": 0, "becam": 0, "crucial": 0, "potenit": 0, "social": [0, 8], "impact": 0, "might": [0, 1, 2, 6, 7], "exhibit": 0, "bias": 0, "toxic": 0, "learn": [0, 1, 2, 5, 6, 7, 8], "goal": [0, 1, 2, 3, 4, 5, 6, 7, 8], "why": 0, "via": [0, 1, 6, 7], "get": [0, 1, 2, 5, 6, 7, 8], "limit": [0, 4, 8], "becom": [0, 7], "familiar": [0, 1, 2, 5, 6, 7, 8], "new": [0, 1, 6, 7], "relev": [0, 1, 5, 6, 7], "increas": 0, "The": [0, 1, 2, 3, 4, 5, 6, 7, 8], "slide": [0, 1, 2, 3, 4, 5, 7, 8], "found": [0, 1, 2, 3, 4, 5, 7, 8], "One": 0, "advanc": [0, 1, 7, 8], "conduct": 0, "perez": 0, "et": [0, 1, 2, 4], "al": [0, 1, 2, 4], "2022": [0, 4], "tbd": [0, 8], "introductori": [1, 8], "motiv": [1, 2, 3, 5], "cours": [1, 2, 7], "cover": [1, 2, 5, 8], "formalia": 1, "start": [1, 5, 7], "recap": [1, 2], "background": [1, 6, 7, 8], "part": [1, 2, 6, 7, 8], "briefli": [1, 2, 7], "introduc": [1, 2, 3, 4, 7], "topic": [1, 6, 7, 8], "throughout": [1, 6, 7], "class": [1, 2, 6, 7, 8], "second": [1, 2, 4, 7], "core": [1, 2, 3, 4, 6], "idea": [1, 6], "behind": [1, 7], "next": [1, 2, 6, 7], "word": [1, 7], "predict": [1, 6, 7], "includ": [1, 4, 6, 7], "bsic": 1, "main": [1, 2, 7], "architectur": [1, 2, 4, 7, 8], "state": [1, 2, 5, 6, 7, 8], "art": [1, 5, 8], "transform": [1, 6, 7], "some": [1, 2, 6, 7, 8], "highlight": [1, 2], "onli": [1, 6, 7], "those": [1, 2, 6, 7], "fine": [1, 2, 3, 4, 5, 6, 7, 8], "tune": [1, 2, 3, 4, 5, 6, 7, 8], "rl": [1, 3, 4, 5, 6, 7], "comprehens": [1, 8], "lm": [1, 2, 5, 6, 7], "see": [1, 6, 7], "below": [1, 2, 3, 4, 5, 6, 7, 8], "langaug": 1, "addition": 1, "resourc": [1, 6, 7], "hand": [1, 2, 6, 7, 8], "provid": [1, 2, 3, 4, 6, 7, 8], "you": [1, 2, 6, 7, 8], "find": [1, 2, 6, 7], "few": [1, 7], "basic": [1, 2, 6], "recommend": 1, "all": [1, 2, 6, 7], "sort": [1, 7], "n": [1, 6], "gram": 1, "recurr": 1, "neural": [1, 2], "network": [1, 2], "etc": [1, 2, 4, 6, 7], "been": [1, 4, 7], "develop": [1, 2, 4, 6, 8], "cl": [1, 6], "nlp": [1, 2, 8], "classic": [1, 2], "paper": [1, 2, 4, 7, 8], "concept": [1, 2, 3, 4, 5, 6, 7, 8], "referenc": [1, 7], "well": [1, 2, 4, 6, 8], "wei": 1, "2023": [1, 4], "chapter": [1, 2], "jurafksi": 1, "martin": 1, "speech": 1, "lectur": [1, 2, 7, 8], "rnn": 1, "stanford": 1, "deep": [1, 2, 4, 7], "lstm": 1, "bert": [1, 7], "one": [1, 4, 6, 7], "befor": [1, 6, 7], "gpt": [1, 4, 6, 7], "addit": [1, 2, 7, 8], "attent": [1, 6, 7, 8], "predecessor": 1, "mechan": [1, 7], "multipl": [1, 6], "current": [1, 2, 4, 6, 7, 8], "deploi": 1, "need": [1, 6, 7], "link": [1, 6, 7], "yourself": [1, 6, 7], "pleas": [1, 2, 6, 7], "note": [1, 2, 6, 7], "access": [1, 7], "fanciest": 1, "creat": [1, 6, 7], "account": [1, 6, 7], "openai": [1, 5], "even": [1, 6, 7], "pai": 1, "api": 1, "onc": [1, 7], "free": [1, 6, 7], "credit": [1, 8], "upon": [1, 6, 8], "sign": 1, "up": [1, 2, 6, 7], "expect": [1, 6, 7], "contact": 1, "me": [1, 6, 7], "do": [1, 6, 7], "ani": [1, 6, 7], "issu": [1, 6, 7], "regard": 1, "first": [1, 2, 4, 6, 7, 8], "graphic": 1, "interfac": 1, "explor": [1, 6], "last": [1, 6, 8], "two": [1, 4, 6, 7], "point": 1, "later": [1, 2, 7], "programmat": 1, "avail": [1, 5, 6, 7, 8], "host": 1, "higgingfac": 1, "librari": [1, 2, 6, 7], "platform": 1, "tool": [1, 5, 6, 7], "other": [1, 2, 6, 7], "machin": [1, 2, 6, 7], "huggingfac": [1, 2, 6, 7], "chatgpt": [1, 4, 5, 8], "chat": 1, "allow": [1, 6, 7], "plai": [1, 6], "around": [1, 2, 6, 7, 8], "nice": 1, "bard": 1, "googl": [1, 6, 7], "handi": [1, 6], "bloom": 1, "open": [1, 4, 7, 8], "sourc": [1, 6, 7], "optim": [1, 2, 4, 6, 7, 8], "multi": 1, "languagu": 1, "hosten": 1, "infer": [1, 2, 6, 7], "openassist": 1, "altern": [1, 2, 7], "s": [1, 6, 7, 8], "base": [1, 2, 6, 7], "foundat": [1, 5], "llama": [1, 2, 5], "meta": 1, "ai": [1, 5, 6], "offer": [1, 6], "flan": 1, "t5": 1, "xxl": 1, "out": [1, 2, 6, 7], "playground": 1, "version": [1, 6, 7], "wa": [1, 4, 7], "fune": 1, "huggingchat": 1, "assist": [1, 4, 5], "latest": 1, "2": [1, 5, 8], "releas": [1, 7], "suit": 1, "size": 1, "7b": 1, "13b": 1, "70b": 1, "paramet": [1, 6, 7], "both": [1, 7], "pretrain": [1, 6, 7], "request": 1, "credenti": 1, "receiv": [1, 6], "token": [1, 6, 7], "download": [1, 7], "instruct": [1, 2, 4, 7], "run": [1, 6, 7], "code": [1, 6, 7], "endpoint": 1, "latter": [1, 6, 7], "separ": [1, 7], "huggigfac": 1, "hub": 1, "warn": [1, 6], "smallest": 1, "local": [1, 6, 7], "least": 1, "24gb": 1, "ram": [1, 6, 7], "python": [1, 2, 6, 7], "packag": [1, 6, 7], "being": [1, 7], "instal": [1, 6, 7], "environ": [1, 2, 6, 7], "strongli": [1, 6, 7], "non": 1, "trivial": [1, 7], "maco": 1, "reach": [1, 6, 7], "If": [1, 5, 6, 7], "your": [1, 5, 6, 7], "dirti": [1, 7], "would": [1, 6, 7], "text": [1, 6, 7, 8], "feel": [1, 6, 7], "either": [1, 6, 7], "20": [1, 7], "when": [1, 3, 5, 6, 7], "save": [1, 6], "payment": 1, "so": [1, 2, 6, 7, 8], "mani": [1, 6, 7], "own": [1, 5, 6, 7], "respons": [1, 6, 7], "There": [1, 6, 7], "sever": [1, 6], "big": 1, "player": 1, "g": [1, 2, 4, 6, 7, 8], "palm": 1, "field": [1, 2, 6, 7], "public": 1, "don": [1, 6, 7], "t": [1, 5, 6, 7, 8], "detail": [1, 2, 6, 7, 8], "follow": [1, 4, 6, 7, 8], "list": [1, 5, 6, 7, 8], "case": [1, 6, 7], "come": [1, 2], "These": [1, 3, 6], "prerequisit": [1, 7], "walk": 1, "through": [1, 2, 6, 7, 8], "import": [1, 2, 6, 7], "Of": 1, "just": [1, 6, 7], "singl": [1, 6, 7], "suggest": [1, 2], "sea": 1, "content": [1, 7], "internet": [1, 7], "meant": [1, 6, 7], "kick": 1, "algorithm": [1, 2, 4, 6, 7], "welcom": 1, "brows": 1, "choos": [1, 6, 7], "favorit": [1, 6], "1h": 1, "data": [1, 6, 7], "50min": 1, "pytorch": [1, 2, 6, 7], "brief": [1, 3], "30": [1, 8], "min": 1, "vaswani": [1, 2], "2017": [1, 4], "A": [1, 2, 6], "origin": 1, "wrap": [2, 6, 7], "shortli": 2, "term": 2, "furthermor": 2, "conceptu": [2, 5, 6, 7, 8], "high": [2, 6, 7], "level": 2, "reinforc": [2, 6, 7, 8], "architecur": 2, "Then": [2, 7], "teacher": [2, 7], "forc": 2, "review": [2, 4, 6, 7], "decod": [2, 6, 7], "scheme": [2, 6], "prompt": [2, 7], "conclud": 2, "context": [2, 5, 7, 8], "action": [2, 6, 7], "polici": [2, 3, 4, 6, 7, 8], "rather": [2, 7], "intuit": [2, 6], "about": [2, 5, 6, 7, 8], "rotatori": 2, "posit": [2, 7], "rope": 2, "popular": [2, 4], "encod": [2, 6], "great": [2, 3, 4, 6, 7], "oon": 2, "wrapper": [2, 6, 7], "goodfellow": 2, "2016": 2, "encyclopaed": 2, "webbook": [2, 8], "relat": 2, "explain": 2, "potenti": 2, "short": 2, "nucleu": 2, "sampl": [2, 6, 7], "techniqu": [2, 4, 8], "sutton": [2, 3, 4], "barto": [2, 3, 4], "2018": [2, 3, 4], "http": [2, 6, 7], "www": 2, "andrew": 2, "cmu": 2, "edu": 2, "10": [2, 8], "703": 2, "textbook": 2, "bartosutton": 2, "pdf": 2, "practic": [2, 5, 6, 7, 8], "youtub": [2, 3, 4], "specif": [2, 6, 7], "commonli": [2, 3, 7], "unless": [2, 8], "want": [2, 6, 7], "mayb": 2, "suffici": 2, "blog": 2, "post": [2, 6, 7], "implement": [2, 6, 7], "presuppos": 2, "towardsdatasci": 2, "com": [2, 6, 7], "da07f7aaca88": 2, "tutori": 2, "gym": 2, "kind": [2, 6], "scope": 2, "essenti": 2, "function": [2, 3, 6, 7], "our": [2, 6, 7], "chanc": 2, "try": [2, 6, 7], "far": [2, 7], "exercis": [2, 8], "sheet": [2, 6, 7, 8], "page": [2, 6, 7, 8], "deeper": 3, "dive": 3, "formal": [3, 6, 7], "framework": [3, 6], "markov": 3, "decis": [3, 6], "mdp": 3, "overview": [3, 4, 8], "valu": [3, 6, 7], "focus": [3, 4, 7], "gradient": [3, 4, 7, 8], "introduct": [3, 4, 7, 8], "underpin": 3, "llm": [3, 4, 5, 7, 8], "video": [3, 4, 7], "seri": [3, 4], "pieter": [3, 4], "abbeel": [3, 4], "consist": [4, 7], "aim": 4, "clarifi": 4, "connect": [4, 7], "between": [4, 7], "especi": [4, 6, 7], "emploi": 4, "system": [4, 7, 8], "feedback": [4, 7, 8], "instructgpt": [4, 5], "compon": [4, 6], "reward": [4, 6, 7, 8], "made": [4, 7, 8], "domain": 4, "advantag": 4, "estim": [4, 6], "varianc": [4, 7], "reduct": [4, 7], "proxim": 4, "literatur": [4, 7, 8], "close": 4, "appli": [4, 5, 6], "outlin": 4, "blogpost": [4, 7], "schulman": 4, "bai": 4, "harmless": [4, 5], "underlyinh": 4, "5": [4, 8], "ouyang": 4, "elicit": 4, "casper": 4, "fundament": 4, "previou": [5, 7], "encount": 5, "equip": 5, "theoret": [5, 7], "now": [5, 6, 7], "ourselv": 5, "critic": [5, 7], "think": [5, 6], "result": [5, 6, 7], "produc": [5, 6], "combin": 5, "evalu": [5, 6, 7, 8], "them": [5, 6, 7], "insight": 5, "project": [5, 6, 7, 8], "toward": [5, 8], "nut": 5, "bolt": 5, "interest": [5, 8], "aren": 5, "sparrrow": 5, "constitut": 5, "had": [5, 7], "variat": 5, "dure": [5, 6, 7], "sparrow": [5, 7], "possibl": [5, 6], "honest": 5, "anthrop": [5, 7], "summar": [5, 7], "sure": [6, 7], "execut": [6, 7], "colab": [6, 7], "agent": [6, 8], "importantli": 6, "intend": [6, 7, 8], "showcas": [6, 7], "space": [6, 7], "solut": [6, 7], "further": [6, 7], "dismai": [6, 7], "lot": [6, 7], "ml": [6, 7, 8], "program": [6, 7, 8], "warmli": [6, 7, 8], "encourag": [6, 7, 8], "ask": [6, 7], "concern": [6, 7], "fellow": [6, 7], "student": [6, 7, 8], "hint": [6, 7], "mai": [6, 7], "week": [6, 7], "complet": [6, 7, 8], "assign": [6, 7, 8], "until": [6, 7], "wed": 6, "novemb": [6, 8], "8th": [6, 8], "12": [6, 8], "30pm": 6, "submit": [6, 7], "each": [6, 7], "without": [6, 7], "full": [6, 7], "activ": [6, 7, 8], "dedic": [6, 7], "forum": [6, 7, 8], "moodl": [6, 7, 8], "particip": [6, 7, 8], "earn": [6, 7, 8], "extra": [6, 7], "grade": [6, 7], "quiz": [6, 7], "correspond": [6, 7], "respect": [6, 7, 8], "number": [6, 7], "difficulti": [6, 7], "consult": 6, "tuesdai": 6, "octob": [6, 8], "31st": [6, 8], "2pm": [6, 8], "4pm": 6, "zoom": 6, "under": [6, 7], "hesit": [6, 7], "email": [6, 7], "struggl": [6, 7], "overwhelm": [6, 7], "easili": [6, 7], "press": [6, 7], "icon": [6, 7], "top": [6, 7], "webook": [6, 7], "option": [6, 7, 8], "avoid": [6, 7], "complic": [6, 7], "To": [6, 7], "speed": [6, 7], "gpu": [6, 7], "For": [6, 7, 8], "navig": [6, 7], "runtim": [6, 7], "chang": [6, 7], "type": [6, 7], "conda": [6, 7], "depend": [6, 7], "keep": [6, 7], "weight": [6, 7], "quit": [6, 7], "bit": [6, 7], "hard": [6, 7], "drive": [6, 7], "6gb": 6, "disc": 6, "8gb": 6, "stabl": 6, "who": [6, 7, 8], "wish": [6, 7], "tensorflow": [6, 7], "abl": [6, 7], "less": [6, 7], "support": [6, 7], "load": [6, 7], "neo": 6, "3b": 6, "continu": [6, 7], "sentenc": [6, 7], "beam": 6, "search": 6, "k": 6, "research": [6, 7, 8], "overal": 6, "uncom": [6, 7], "line": [6, 7], "pip": [6, 7], "pipelin": [6, 7], "eleutherai": 6, "keyboardinterrupt": 6, "traceback": 6, "cell": [6, 7], "4": [6, 7, 8], "6": [6, 8], "file": [6, 7], "opt": 6, "hostedtoolcach": 6, "9": [6, 7, 8], "18": 6, "x64": 6, "lib": 6, "python3": 6, "site": 6, "__init__": [6, 7], "py": 6, "870": 6, "config": 6, "feature_extractor": 6, "image_processor": 6, "revis": 6, "use_fast": 6, "devic": [6, 7], "device_map": 6, "torch_dtyp": 6, "trust_remote_cod": 6, "model_kwarg": 6, "pipeline_class": 6, "kwarg": 6, "868": 6, "isinst": 6, "str": [6, 7], "none": [6, 7], "869": 6, "model_class": 6, "tf": 6, "targeted_task": 6, "pt": [6, 7], "infer_framework_load_model": 6, "871": 6, "872": 6, "873": 6, "874": 6, "875": 6, "876": 6, "hub_kwarg": 6, "877": 6, "878": 6, "880": 6, "model_config": 6, "881": 6, "_commit_hash": 6, "269": 6, "263": 6, "logger": 6, "264": 6, "end": [6, 7], "bin": 6, "265": 6, "266": 6, "268": 6, "from_pretrain": [6, 7], "270": 6, "hasattr": 6, "eval": [6, 7], "271": 6, "auto": 6, "auto_factori": 6, "566": 6, "_baseautomodelclass": 6, "pretrained_model_name_or_path": 6, "model_arg": 6, "564": 6, "elif": 6, "_model_map": 6, "kei": 6, "565": 6, "_get_model_class": 6, "return": [6, 7], "567": 6, "568": 6, "569": 6, "rais": 6, "valueerror": 6, "570": 6, "f": [6, 7], "unrecogn": 6, "configur": 6, "__class__": 6, "automodel": 6, "__name__": 6, "571": 6, "should": [6, 7], "join": 6, "c": [6, 8], "572": 6, "modeling_util": 6, "3236": 6, "pretrainedmodel": 6, "cache_dir": 6, "ignore_mismatched_s": 6, "force_download": 6, "local_files_onli": 6, "use_safetensor": 6, "3233": 6, "_check_and_enable_flash_attn_2": 6, "3235": 6, "contextmanag": 6, "init_context": 6, "3238": 6, "sinc": [6, 7], "copi": 6, "3239": 6, "gpt_neo": 6, "modeling_gpt_neo": 6, "659": 6, "gptneoforcausallm": 6, "self": [6, 7], "657": 6, "def": [6, 7], "658": 6, "super": 6, "gptneomodel": 6, "660": 6, "lm_head": 6, "nn": [6, 7], "linear": 6, "hidden_s": 6, "vocab_s": [6, 7], "bia": 6, "fals": 6, "662": 6, "481": 6, "479": 6, "wpe": 6, "max_position_embed": 6, "embed_dim": 6, "480": 6, "drop": 6, "dropout": 6, "float": 6, "embed_dropout": 6, "h": 6, "modulelist": 6, "gptneoblock": 6, "layer_id": 6, "rang": [6, 7], "num_lay": 6, "482": 6, "ln_f": 6, "layernorm": 6, "ep": 6, "layer_norm_epsilon": 6, "484": 6, "gradient_checkpoint": 6, "listcomp": 6, "0": [6, 7], "315": 6, "313": 6, "attn": 6, "gptneoattent": 6, "314": 6, "ln_2": 6, "mlp": 6, "gptneomlp": 6, "inner_dim": 6, "294": 6, "intermediate_s": 6, "292": 6, "293": 6, "c_fc": 6, "295": 6, "c_proj": 6, "296": 6, "act": 6, "act2fn": 6, "activation_funct": 6, "torch": [6, 7], "modul": 6, "101": 6, "in_featur": 6, "out_featur": 6, "dtype": [6, 7], "99": 6, "els": [6, 7], "100": 6, "register_paramet": 6, "reset_paramet": 6, "107": 6, "103": 6, "104": 6, "set": [6, 7], "sqrt": 6, "kaiming_uniform": 6, "same": 6, "105": 6, "uniform": 6, "106": 6, "github": [6, 7], "57109": 6, "init": 6, "kaiming_uniform_": 6, "108": 6, "109": 6, "fan_in": 6, "_": 6, "_calculate_fan_in_and_fan_out": 6, "419": 6, "tensor": [6, 7], "mode": 6, "nonlinear": 6, "417": 6, "bound": 6, "std": 6, "calcul": 6, "standard": [6, 7], "deviat": 6, "418": 6, "no_grad": [6, 7], "uniform_": 6, "qa": 6, "coupl": 6, "step": [6, 7], "conveni": [6, 7], "alreadi": [6, 7], "someth": 6, "necessari": 6, "again": [6, 7], "miss": 6, "load_dataset": [6, 7], "util": [6, 7], "dataload": [6, 7], "tqdm": 6, "matplotlib": [6, 7], "pyplot": [6, 7], "plt": [6, 7], "autotoken": [6, 7], "automodelforcausallm": [6, 7], "truthful_qa": 6, "inspect": [6, 7], "format": [6, 7], "print": [6, 7], "valid": [6, 7], "split": [6, 7], "simplic": 6, "val": 6, "everyth": [6, 7], "dataset_v": 6, "125m": 6, "add": 6, "pad": [6, 7], "pad_token": [6, 7], "eos_token": [6, 7], "easi": 6, "preprocess": [6, 7], "truthfulqadataset": 6, "helper": [6, 7], "prefix": 6, "truncat": [6, 7], "string": 6, "maximum": [6, 7], "length": [6, 7], "thei": [6, 7], "batch": [6, 7], "max_length": [6, 7], "int": 6, "sequenc": [6, 7], "128": [6, 7], "__len__": [6, 7], "len": [6, 7], "__getitem__": [6, 7], "idx": [6, 7], "index": [6, 7], "updat": [6, 7], "correct": [6, 7], "mask": [6, 7], "item": [6, 7], "best_answ": 6, "automat": 6, "eo": 6, "return_tensor": [6, 7], "true": [6, 7], "instanti": [6, 7], "train_dataset": 6, "loader": 6, "iter": [6, 7], "exampl": [6, 7], "pair": [6, 7], "batch_siz": [6, 7], "8": [6, 8], "shuffl": [6, 7], "trian": 6, "configut": 6, "epoch": [6, 7], "train_step": 6, "cuda": [6, 7], "is_avail": [6, 7], "backend": 6, "mp": 6, "cpu": [6, 7], "put": [6, 7], "move": 6, "defin": [6, 7], "rate": [6, 7], "variabl": 6, "accumul": 6, "loss": [6, 7], "over": [6, 7, 8], "x": 6, "forward": 6, "pass": [6, 7, 8], "backward": [6, 7], "append": [6, 7], "purpos": [6, 7], "correctli": 6, "after": [6, 7], "doe": 6, "matter": 6, "That": 6, "worri": [6, 7], "input_id": [6, 7], "plot": [6, 7], "xlabel": 6, "ylabel": 6, "holi": 6, "grail": 6, "chess": 6, "map": 6, "onto": 6, "real": 6, "world": [6, 7], "counterpart": 6, "game": 6, "comput": [6, 7], "fill": 6, "veri": [6, 7], "imagin": 6, "town": 6, "restaur": 6, "know": 6, "anyth": 6, "mysteri": 6, "cannot": [6, 7], "she": [6, 7], "herself": 6, "figur": 6, "her": [6, 7], "happiest": 6, "time": [6, 7], "give": 6, "highest": 6, "maxim": [6, 7], "simplifi": 6, "instanc": [6, 8], "arm": 6, "bandit": [6, 7], "avial": 6, "assum": [6, 7], "simplif": 6, "determinist": 6, "doesn": [6, 7], "goe": [6, 7], "prefer": [6, 8], "mean": [6, 7], "assumpt": [6, 7], "simpl": 6, "subject": [6, 7], "degre": 6, "happi": 6, "eat": 6, "q_t": 6, "averag": [6, 7], "wherein": [6, 7], "past": 6, "frac": 6, "sum_": 6, "r_": 6, "a_i": 6, "mathbb": 6, "refer": 6, "th": 6, "decid": 6, "deriv": 6, "strategi": 6, "greedi": 6, "epsilon": 6, "panda": [6, 7], "pd": [6, 7], "numpi": [6, 7], "np": [6, 7], "random": 6, "seed": 6, "food": 6, "thai": 6, "curri": 6, "best": 6, "q_": 6, "r_t": 6, "mid": [6, 7], "a_t": 6, "On": 6, "lower": 6, "neg": [6, 7], "poison": 6, "tpur": 6, "simul": [6, 8], "unknown": 6, "7": [6, 8], "true_restaurant_reward": 6, "normal": 6, "toi": 6, "tri": [6, 7], "dai": 6, "write": 6, "down": 6, "everi": [6, 7], "went": 6, "trial": [6, 7], "town_environ": 6, "associ": 6, "algorith": 6, "track": [6, 7], "accord": 6, "amount": 6, "abov": [6, 7], "select": [6, 7, 8], "proport": 6, "randomli": 6, "chosen": 6, "sample_average_estim": 6, "old_act": 6, "old_reward": 6, "arrai": 6, "taken": [6, 7], "probabl": [6, 7], "best_act": 6, "previous": 6, "old_indic": 6, "tie": 6, "break": [6, 8], "sum": 6, "max": 6, "choic": 6, "emb": 6, "loop": [6, 7], "gather": [6, 7], "90": 6, "log": [6, 7], "actions_log": 6, "rewards_list": [6, 7], "average_rewards_list": 6, "itentifi": 6, "optimal_act": 6, "argmax": 6, "cumsum": [6, 7], "arang": 6, "THE": 6, "WITH": 6, "gain": [7, 8], "rlhf": [7, 8], "publich": 7, "finetun": 7, "actual": 7, "small": 7, "reinfroc": 7, "futur": 7, "intention": 7, "spell": 7, "hidden": 7, "saturdai": 7, "decemb": [7, 8], "16th": 7, "6pm": 7, "german": 7, "re": 7, "improtantli": 7, "persist": 7, "long": 7, "mount": 7, "job": 7, "hh": 7, "structur": 7, "materi": [7, 8], "movi": 7, "partial": [7, 8], "reivew": 7, "imdb": 7, "half": 7, "my": 7, "film": 7, "recoomend": 7, "friend": 7, "promin": 7, "william": 7, "1992": 7, "area": 7, "preced": 7, "ppo": [7, 8], "seen": 7, "still": 7, "todai": 7, "baselin": 7, "similar": 7, "directli": 7, "parameter": 7, "rule": 7, "theta_": 7, "alpha": 7, "r": 7, "nabla": 7, "pi": 7, "episod": 7, "sometim": 7, "b": 7, "instead": 7, "rollout": 7, "p": 7, "approxim": 7, "sequenti": 7, "categor": 7, "mont": 7, "carlo": 7, "supervis": 7, "lvwerra": 7, "gpt2": 7, "As": 7, "sentiment": 7, "classifi": [7, 8], "distilbert": 7, "label": 7, "he": 7, "higher": 7, "better": [7, 8], "boilerpl": 7, "object": 7, "minim": 7, "grid": 7, "automodelforsequenceclassif": 7, "imdb_d": 7, "rent": 7, "am": 7, "curiou": 7, "yellow": 7, "store": 7, "becaus": 7, "controversi": 7, "surround": 7, "1967": 7, "heard": 7, "seiz": 7, "u": 7, "custom": 7, "ever": 7, "enter": 7, "countri": 7, "fan": 7, "consid": 7, "realli": 7, "myself": 7, "br": 7, "center": 7, "young": 7, "swedish": 7, "drama": 7, "lena": 7, "life": 7, "documentari": 7, "swede": 7, "thought": 7, "polit": 7, "vietnam": 7, "war": 7, "race": 7, "unit": 7, "politician": 7, "ordinari": 7, "denizen": 7, "stockholm": 7, "opinion": 7, "sex": 7, "classmat": 7, "marri": 7, "men": 7, "kill": 7, "40": 7, "year": [7, 8], "ago": 7, "pornograph": 7, "nuditi": 7, "scene": 7, "shot": 7, "cheapli": 7, "porno": 7, "while": 7, "countrymen": 7, "shock": 7, "realiti": 7, "major": 7, "stapl": 7, "cinema": 7, "ingmar": 7, "bergman": 7, "arguabl": 7, "good": 7, "old": 7, "boi": 7, "john": 7, "ford": 7, "hi": 7, "commend": 7, "filmmak": 7, "fact": 7, "artist": 7, "peopl": 7, "monei": 7, "theater": 7, "america": 7, "anyon": 7, "meat": 7, "potato": 7, "pun": 7, "But": 7, "much": 7, "policy_token": 7, "reward_token": 7, "reward_model": 7, "espceial": 7, "test_txt": 7, "do_sampl": 7, "temperatur": 7, "return_dict_in_gener": 7, "output_scor": 7, "renormalize_logit": 7, "icki": 7, "bore": 7, "stori": 7, "gui": 7, "input_reward": 7, "out_reward": 7, "raw": 7, "logit": 7, "softmax": 7, "dim": 7, "sequenceclassifieroutput": 7, "4397": 7, "7132": 7, "grad_fn": 7, "addmmbackward0": 7, "hidden_st": 7, "7600": 7, "2400": 7, "softmaxbackward0": 7, "suppli": 7, "64": 7, "imdbdataset": 7, "done": 7, "snippet": 7, "max_len": 7, "manual": 7, "prepend": 7, "bo": 7, "somehow": 7, "endoftext": 7, "squeez": 7, "attention_mask": 7, "compute_reward": 7, "shape": 7, "hyperparamet": 7, "signal": 7, "entir": 7, "intermedi": 7, "saniti": 7, "trainin": 7, "padding_s": 7, "left": 7, "padding_sid": 7, "num_epoch": 7, "learning_r": 7, "num_step": 7, "adam": 7, "lr": 7, "syntaxerror": 7, "invalid": 7, "syntax": 7, "enumer": 7, "max_new_token": 7, "48": 7, "out_decod": 7, "batch_decod": 7, "skip_special_token": 7, "prob": 7, "retriev": 7, "out_scor": 7, "stack": 7, "log_prob": 7, "log_softmax": 7, "reshap": 7, "sequence_s": 7, "permut": 7, "sequence_id": 7, "log_probs_continuations_token": 7, "unsqueez": 7, "log_probs_continuations_sent": 7, "detach": 7, "formula": 7, "zero": 7, "zero_grad": 7, "erxercis": 7, "author": 7, "unfortun": 7, "displai": 7, "doubl": 7, "inde": 7, "contain": [7, 8], "loos": 7, "skip": 7, "directori": 7, "symbol": 7, "panel": 7, "right": 7, "click": 7, "FOR": 7, "save_pretrain": 7, "gpt2_imdb_polici": 7, "TO": 7, "OR": 7, "dynam": 7, "per": 7, "superglu": 7, "natur": [7, 8], "nli": 7, "rte": 7, "whether": 7, "entail": 7, "boolq": 7, "ye": 7, "copa": 7, "plausibl": 7, "subset": 7, "With": 7, "special": 7, "vs": 7, "iff": 7, "p_": 7, "incorrect": 7, "represent": [7, 8], "count": 7, "wasn": 7, "indic": 7, "three": 7, "repositori": 7, "unzip": 7, "view": 7, "metric": 7, "wget": 7, "polina": 7, "tsvilodub": 7, "rl4": 7, "blob": 7, "homework2": 7, "zip": 7, "unzup": 7, "upload": 7, "get_log_prob_of_complet": 7, "incorr": 7, "input_ids_complet": 7, "fit": 7, "window": 7, "1024": 7, "input_ids_prompt": 7, "togeth": 7, "cat": 7, "id": 7, "eos_token_id": 7, "int64": 7, "position_id": 7, "shift": 7, "logits_complet": 7, "log_completion_token": 7, "except": 7, "completion_log_prob": 7, "path": 7, "super_glue_formatted_": 7, "csv": 7, "read": 7, "df": 7, "read_csv": 7, "accuraci": 7, "taught": 8, "univers": 8, "t\u00fcbingen": 8, "enabl": 8, "cut": 8, "edg": 8, "intersect": 8, "strive": 8, "mix": 8, "mainli": 8, "interdisciplinari": 8, "present": 8, "built": 8, "implic": 8, "societi": 8, "recur": 8, "satisfi": 8, "effect": 8, "societ": 8, "align": 8, "place": 8, "wednesdai": 8, "14": 8, "nauklerstr": 8, "35": 8, "seminar": 8, "room": 8, "1": 8, "master": 8, "bachelor": 8, "strictli": 8, "preliminari": 8, "3": 8, "person": 8, "announc": 8, "otherwis": 8, "By": 8, "default": 8, "ect": 8, "mire": 8, "rough": 8, "homework": 8, "poster": 8, "submiss": 8, "group": 8, "websit": 8, "anounc": 8, "share": 8, "date": 8, "18th": 8, "intro": 8, "25th": 8, "1st": 8, "holidai": 8, "trpo": 8, "15th": 8, "22nd": 8, "29th": 8, "comparison": 8, "6th": 8, "13th": 8, "onlin": 8, "20th": 8, "buffer": 8, "christma": 8, "januari": 8, "10th": 8, "11": 8, "17th": 8, "24th": 8, "13": 8, "februari": 8, "7th": 8}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"evalu": 0, "llm": [0, 1], "part": [0, 3, 4], "1": [0, 6, 7], "student": [0, 5], "present": [0, 5], "further": [0, 1, 2, 3, 4, 5], "refer": [0, 5], "languag": [1, 2, 8], "model": [1, 2, 7, 8], "introduct": [1, 2], "larg": 1, "high": 1, "level": 1, "overview": 1, "materi": [1, 2, 3, 4], "option": [1, 2, 3, 4], "where": 1, "try": 1, "prepar": 1, "practic": 1, "program": [1, 2], "task": 1, "train": [2, 7, 8], "rl": [2, 8], "transform": 2, "homework": [2, 6, 7], "reinforc": [3, 4], "learn": [3, 4], "2": [3, 6, 7], "3": [4, 6, 7], "rlhf": 4, "ppo": 4, "sota": 5, "system": 5, "logist": [6, 7], "preliminari": [6, 7], "exercis": [6, 7], "20": 6, "point": [6, 7], "5": 6, "15": [6, 7], "10": [6, 7], "25": 7, "save": 7, "welcom": 8, "cours": 8, "descript": 8, "formalia": 8, "schedul": 8}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})