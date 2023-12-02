Search.setIndex({"docnames": ["Behavioral_evals", "LLMs", "LLMs_intro_RL", "RL", "RLHF_PPO", "SOTA-models", "homework1", "intro"], "filenames": ["Behavioral_evals.md", "LLMs.md", "LLMs_intro_RL.md", "RL.md", "RLHF_PPO.md", "SOTA-models.md", "homework1.ipynb", "intro.md"], "titles": ["Evaluating LLMs: Part 1", "Language Models: Introduction", "Language Model Training &amp; Introduction to RL", "Reinforcement Learning (part 2)", "Reinforcement Learning (part 3): RLHF and PPO", "SOTA systems", "Homework 1", "Welcome to \u201cRL for Language Model Training\u201d!"], "terms": {"In": [0, 1, 2, 3, 4, 5, 6, 7], "thi": [0, 1, 2, 3, 4, 5, 6, 7], "session": [0, 1, 2, 3, 4, 5, 6, 7], "we": [0, 1, 2, 5, 6, 7], "begin": [0, 6], "look": [0, 1, 5, 6], "differ": [0, 1, 6], "method": [0, 1, 2, 3, 4, 5, 6, 7], "which": [0, 1, 2, 3, 5, 6], "can": [0, 1, 2, 3, 4, 5, 6, 7], "help": [0, 2, 4, 5, 6], "us": [0, 1, 2, 3, 4, 6, 7], "assess": 0, "understand": [0, 2, 5, 6, 7], "train": [0, 4, 5, 6], "discuss": [0, 1, 2, 4, 6, 7], "particular": [0, 1, 3, 4, 5, 6], "focu": 0, "what": [0, 6], "could": [0, 1], "call": [0, 1, 6, 7], "behavior": [0, 6, 7], "name": [0, 1, 6], "take": [0, 6, 7], "inspir": [0, 5], "from": [0, 1, 2, 4, 5, 6, 7], "psycholog": 0, "cognit": [0, 7], "scienc": [0, 1, 7], "where": [0, 6], "human": [0, 4, 7], "mind": [0, 6], "often": [0, 6], "studi": [0, 6], "experi": [0, 2, 6, 7], "i": [0, 6], "e": [0, 1, 2, 4, 6, 7], "observ": [0, 6], "given": [0, 6], "task": [0, 6], "os": 0, "situat": [0, 2, 6], "similarli": 0, "order": [0, 6], "how": [0, 1, 2, 5, 6], "work": [0, 2, 5, 6, 7], "behav": [0, 6], "input": [0, 6], "output": [0, 6], "Such": 0, "o": 0, "ar": [0, 1, 2, 3, 4, 5, 6, 7], "most": [0, 1, 2, 4, 6, 7], "common": 0, "approach": [0, 4, 7], "It": [0, 1, 6], "make": [0, 6], "larg": [0, 7], "benchmark": [0, 7], "dataset": [0, 6], "design": 0, "test": [0, 1, 6], "model": [0, 3, 4, 5, 6], "perform": 0, "varieti": [0, 1, 5], "an": [0, 1, 2, 3, 4, 6, 7], "autom": 0, "wai": [0, 5], "check": [0, 6], "against": 0, "ground": [0, 6], "truth": [0, 6], "answer": [0, 6], "usual": [0, 6], "more": [0, 1, 2, 3, 4, 7], "technic": [0, 1, 3, 6, 7], "engin": 0, "perspect": [0, 7], "qualiti": [0, 6], "measur": 0, "score": 0, "initi": [0, 6], "were": [0, 4, 5, 6], "linguist": [0, 7], "howev": [0, 2, 6], "recent": [0, 4, 6], "inform": [0, 2, 6], "languag": [0, 3, 4, 6], "process": [0, 1, 3, 6, 7], "ha": [0, 1, 6, 7], "compar": [0, 6], "aspect": [0, 1, 4, 6, 7], "here": [0, 1, 2, 3, 4, 5, 6], "guid": 0, "question": [0, 6, 7], "like": [0, 1, 2, 4, 6, 7], "certain": [0, 1], "its": 0, "final": [0, 6, 7], "have": [0, 1, 6], "shown": 0, "impress": 0, "gener": [0, 1, 2, 6], "seem": [0, 6], "requir": [0, 1, 2, 6, 7], "than": 0, "fluenci": 0, "solv": [0, 3, 6], "math": 0, "reason": 0, "problem": [0, 4, 6], "therefor": [0, 6], "incorpor": 0, "variou": [0, 1, 5], "go": [0, 2, 6], "beyond": [0, 2, 7], "capabl": 0, "sota": [0, 2, 4, 7], "also": [0, 1, 2, 5, 6], "assisst": 0, "embed": [0, 2], "user": [0, 7], "face": 0, "applic": 0, "becam": 0, "crucial": 0, "potenit": 0, "social": [0, 7], "impact": 0, "might": [0, 1, 2, 6], "exhibit": 0, "bias": 0, "toxic": 0, "learn": [0, 1, 2, 5, 6, 7], "goal": [0, 1, 2, 3, 4, 5, 6, 7], "why": 0, "via": [0, 1, 6], "get": [0, 1, 2, 5, 6, 7], "limit": [0, 4, 7], "becom": 0, "familiar": [0, 1, 2, 5, 6, 7], "new": [0, 1, 6], "relev": [0, 1, 5, 6], "increas": 0, "The": [0, 1, 2, 3, 4, 5, 6, 7], "slide": [0, 1, 2, 3, 4, 5, 7], "found": [0, 1, 2, 3, 4, 5, 7], "One": 0, "advanc": [0, 1, 7], "conduct": 0, "perez": 0, "et": [0, 1, 2, 4], "al": [0, 1, 2, 4], "2022": [0, 4], "tbd": [0, 7], "introductori": [1, 7], "motiv": [1, 2, 3, 5], "cours": [1, 2], "cover": [1, 2, 5, 7], "formalia": 1, "start": [1, 5], "recap": [1, 2], "background": [1, 6, 7], "part": [1, 2, 6, 7], "briefli": [1, 2], "introduc": [1, 2, 3, 4], "topic": [1, 6, 7], "throughout": [1, 6], "class": [1, 2, 6, 7], "second": [1, 2, 4], "core": [1, 2, 3, 4, 6], "idea": [1, 6], "behind": 1, "next": [1, 2, 6], "word": 1, "predict": [1, 6], "includ": [1, 4, 6], "bsic": 1, "main": [1, 2], "architectur": [1, 2, 4, 7], "state": [1, 2, 5, 6, 7], "art": [1, 5, 7], "transform": [1, 6], "some": [1, 2, 6, 7], "highlight": [1, 2], "onli": [1, 6], "those": [1, 2, 6], "fine": [1, 2, 3, 4, 5, 6, 7], "tune": [1, 2, 3, 4, 5, 6, 7], "rl": [1, 3, 4, 5, 6], "comprehens": [1, 7], "lm": [1, 2, 5, 6], "see": 1, "below": [1, 2, 3, 4, 5, 6, 7], "langaug": 1, "addition": 1, "resourc": [1, 6], "hand": [1, 2, 6, 7], "provid": [1, 2, 3, 4, 6, 7], "you": [1, 2, 6, 7], "find": [1, 2, 6], "few": 1, "basic": [1, 2, 6], "recommend": 1, "all": [1, 2, 6], "sort": 1, "n": [1, 6], "gram": 1, "recurr": 1, "neural": [1, 2], "network": [1, 2], "etc": [1, 2, 4, 6], "been": [1, 4], "develop": [1, 2, 4, 6, 7], "cl": [1, 6], "nlp": [1, 2, 7], "classic": [1, 2], "paper": [1, 2, 4, 7], "concept": [1, 2, 3, 4, 5, 6, 7], "referenc": 1, "well": [1, 2, 4, 6, 7], "wei": 1, "2023": [1, 4], "chapter": [1, 2], "jurafksi": 1, "martin": 1, "speech": 1, "lectur": [1, 2, 7], "rnn": 1, "stanford": 1, "deep": [1, 2, 4], "lstm": 1, "bert": 1, "one": [1, 4, 6], "befor": [1, 6], "gpt": [1, 4, 6], "addit": [1, 2, 7], "attent": [1, 6, 7], "predecessor": 1, "mechan": 1, "multipl": [1, 6], "current": [1, 2, 4, 6, 7], "deploi": 1, "need": [1, 6], "link": [1, 6], "yourself": [1, 6], "pleas": [1, 2, 6], "note": [1, 2, 6], "access": [1, 6], "fanciest": 1, "creat": [1, 6], "account": [1, 6], "openai": [1, 5], "even": [1, 6], "pai": 1, "api": 1, "onc": 1, "free": [1, 6], "credit": [1, 7], "upon": [1, 6, 7], "sign": 1, "up": [1, 2, 6], "expect": [1, 6], "contact": 1, "me": [1, 6], "do": [1, 6], "ani": [1, 6], "issu": 1, "regard": 1, "first": [1, 2, 4, 6, 7], "graphic": 1, "interfac": 1, "explor": [1, 6], "last": [1, 6, 7], "two": [1, 4, 6], "point": 1, "later": [1, 2], "programmat": 1, "avail": [1, 5, 6, 7], "host": 1, "higgingfac": 1, "librari": [1, 2, 6], "platform": [1, 6], "tool": [1, 5, 6], "other": [1, 2, 6], "machin": [1, 2, 6], "huggingfac": [1, 2, 6], "chatgpt": [1, 4, 5, 7], "chat": 1, "allow": [1, 6], "plai": [1, 6], "around": [1, 2, 6, 7], "nice": 1, "bard": 1, "googl": [1, 6], "handi": [1, 6], "bloom": 1, "open": [1, 4, 7], "sourc": [1, 6], "optim": [1, 2, 4, 6, 7], "multi": 1, "languagu": 1, "hosten": 1, "infer": [1, 2, 6], "openassist": 1, "altern": [1, 2], "s": [1, 6, 7], "base": [1, 2, 6], "foundat": [1, 5], "llama": [1, 2, 5], "meta": 1, "ai": [1, 5, 6], "offer": [1, 6], "flan": 1, "t5": 1, "xxl": 1, "out": [1, 2, 6], "playground": 1, "version": [1, 6], "wa": [1, 4], "fune": 1, "huggingchat": 1, "assist": [1, 4, 5], "latest": 1, "2": [1, 5, 7], "releas": 1, "suit": 1, "size": 1, "7b": 1, "13b": 1, "70b": 1, "paramet": [1, 6], "both": 1, "pretrain": [1, 6], "request": [1, 6], "credenti": 1, "receiv": [1, 6], "token": [1, 6], "download": 1, "instruct": [1, 2, 4], "run": [1, 6], "code": [1, 6], "endpoint": [1, 6], "latter": [1, 6], "separ": 1, "huggigfac": 1, "hub": [1, 6], "warn": [1, 6], "smallest": 1, "local": [1, 6], "least": 1, "24gb": 1, "ram": [1, 6], "python": [1, 2, 6], "packag": [1, 6], "being": 1, "instal": [1, 6], "environ": [1, 2, 6], "strongli": [1, 6], "non": 1, "trivial": 1, "maco": 1, "reach": [1, 6], "If": [1, 5, 6], "your": [1, 5, 6], "dirti": 1, "would": [1, 6], "text": [1, 6, 7], "feel": [1, 6], "either": [1, 6], "20": 1, "when": [1, 3, 5, 6], "save": [1, 6], "payment": 1, "so": [1, 2, 6, 7], "mani": [1, 6], "own": [1, 5, 6], "respons": [1, 6], "There": [1, 6], "sever": [1, 6], "big": 1, "player": 1, "g": [1, 2, 4, 6, 7], "palm": 1, "field": [1, 2, 6], "public": 1, "don": [1, 6], "t": [1, 5, 6, 7], "detail": [1, 2, 7], "follow": [1, 4, 6, 7], "list": [1, 5, 6, 7], "case": [1, 6], "come": [1, 2], "These": [1, 3, 6], "prerequisit": 1, "walk": 1, "through": [1, 2, 6, 7], "import": [1, 2, 6], "Of": 1, "just": [1, 6], "singl": [1, 6], "suggest": [1, 2], "sea": 1, "content": 1, "internet": [1, 6], "meant": [1, 6], "kick": 1, "algorithm": [1, 2, 4, 6], "welcom": 1, "brows": 1, "choos": [1, 6], "favorit": [1, 6], "1h": 1, "data": [1, 6], "50min": 1, "pytorch": [1, 2, 6], "brief": [1, 3], "30": [1, 7], "min": 1, "vaswani": [1, 2], "2017": [1, 4], "A": [1, 2, 6], "origin": 1, "wrap": [2, 6], "shortli": 2, "term": 2, "furthermor": 2, "conceptu": [2, 5, 6, 7], "high": [2, 6], "level": 2, "reinforc": [2, 6, 7], "architecur": 2, "Then": 2, "teacher": 2, "forc": 2, "review": [2, 4, 6], "decod": [2, 6], "scheme": [2, 6], "prompt": 2, "conclud": 2, "context": [2, 5, 7], "action": [2, 6], "polici": [2, 3, 4, 6, 7], "rather": 2, "intuit": [2, 6], "about": [2, 5, 6, 7], "rotatori": 2, "posit": 2, "rope": 2, "popular": [2, 4], "encod": [2, 6], "great": [2, 3, 4, 6], "oon": 2, "wrapper": [2, 6], "goodfellow": 2, "2016": 2, "encyclopaed": 2, "webbook": [2, 7], "relat": 2, "explain": 2, "potenti": 2, "short": 2, "nucleu": 2, "sampl": [2, 6], "techniqu": [2, 4, 7], "sutton": [2, 3, 4], "barto": [2, 3, 4], "2018": [2, 3, 4], "http": [2, 6], "www": 2, "andrew": 2, "cmu": 2, "edu": 2, "10": [2, 7], "703": 2, "textbook": 2, "bartosutton": 2, "pdf": 2, "practic": [2, 5, 6, 7], "youtub": [2, 3, 4], "specif": [2, 6], "commonli": [2, 3], "unless": [2, 7], "want": [2, 6], "mayb": [2, 6], "suffici": 2, "blog": 2, "post": [2, 6], "implement": [2, 6], "presuppos": 2, "towardsdatasci": 2, "com": 2, "da07f7aaca88": 2, "tutori": 2, "gym": 2, "kind": [2, 6], "scope": 2, "essenti": 2, "function": [2, 3, 6], "our": [2, 6], "chanc": 2, "try": [2, 6], "far": 2, "exercis": [2, 7], "sheet": [2, 6, 7], "page": [2, 6, 7], "deeper": 3, "dive": 3, "formal": [3, 6], "framework": [3, 6], "markov": 3, "decis": [3, 6], "mdp": 3, "overview": [3, 4, 7], "valu": [3, 6], "focus": [3, 4], "gradient": [3, 4, 7], "introduct": [3, 4, 7], "underpin": 3, "llm": [3, 4, 5, 7], "video": [3, 4], "seri": [3, 4], "pieter": [3, 4], "abbeel": [3, 4], "consist": 4, "aim": 4, "clarifi": 4, "connect": [4, 6], "between": 4, "especi": [4, 6], "emploi": 4, "system": [4, 7], "feedback": [4, 7], "instructgpt": [4, 5], "compon": [4, 6], "reward": [4, 6, 7], "made": [4, 7], "domain": 4, "advantag": 4, "estim": [4, 6], "varianc": 4, "reduct": 4, "proxim": 4, "literatur": [4, 7], "close": [4, 6], "appli": [4, 5, 6], "outlin": 4, "blogpost": 4, "schulman": 4, "bai": 4, "harmless": [4, 5], "underlyinh": 4, "5": [4, 7], "ouyang": 4, "elicit": 4, "casper": 4, "fundament": 4, "previou": 5, "encount": 5, "equip": 5, "theoret": 5, "now": [5, 6], "ourselv": 5, "critic": 5, "think": [5, 6], "result": [5, 6], "produc": [5, 6], "combin": 5, "evalu": [5, 6, 7], "them": [5, 6], "insight": 5, "project": [5, 6, 7], "toward": [5, 7], "nut": 5, "bolt": 5, "interest": [5, 7], "aren": 5, "sparrrow": 5, "constitut": 5, "had": 5, "variat": 5, "dure": [5, 6], "sparrow": 5, "possibl": [5, 6], "honest": 5, "anthrop": 5, "summar": 5, "sure": 6, "execut": 6, "colab": 6, "agent": [6, 7], "importantli": 6, "intend": [6, 7], "showcas": 6, "space": 6, "solut": 6, "further": 6, "dismai": 6, "lot": 6, "ml": [6, 7], "program": [6, 7], "warmli": [6, 7], "encourag": [6, 7], "ask": 6, "concern": 6, "fellow": 6, "student": [6, 7], "hint": 6, "mai": 6, "week": 6, "complet": [6, 7], "assign": [6, 7], "until": 6, "wed": 6, "novemb": [6, 7], "8th": [6, 7], "12": [6, 7], "30pm": 6, "submit": 6, "each": 6, "without": 6, "full": 6, "activ": [6, 7], "dedic": 6, "forum": [6, 7], "moodl": [6, 7], "particip": [6, 7], "earn": [6, 7], "extra": 6, "grade": 6, "quiz": 6, "correspond": 6, "respect": [6, 7], "number": 6, "difficulti": 6, "consult": 6, "tuesdai": 6, "octob": [6, 7], "31st": [6, 7], "2pm": [6, 7], "4pm": 6, "zoom": 6, "under": 6, "hesit": 6, "email": 6, "struggl": 6, "overwhelm": 6, "easili": 6, "press": 6, "icon": 6, "top": 6, "webook": 6, "option": [6, 7], "avoid": 6, "complic": 6, "To": 6, "speed": 6, "gpu": 6, "For": [6, 7], "navig": 6, "runtim": 6, "chang": 6, "type": 6, "conda": 6, "depend": 6, "keep": 6, "weight": 6, "quit": 6, "bit": 6, "hard": 6, "drive": 6, "6gb": 6, "disc": 6, "8gb": 6, "stabl": 6, "who": [6, 7], "wish": 6, "tensorflow": 6, "abl": 6, "less": 6, "support": 6, "load": 6, "neo": 6, "3b": 6, "continu": 6, "sentenc": 6, "beam": 6, "search": 6, "k": 6, "research": [6, 7], "overal": 6, "uncom": 6, "line": 6, "pip": 6, "pipelin": 6, "eleutherai": 6, "keyboardinterrupt": 6, "traceback": 6, "cell": 6, "4": [6, 7], "6": [6, 7], "file": 6, "opt": 6, "hostedtoolcach": 6, "9": [6, 7], "18": 6, "x64": 6, "lib": 6, "python3": 6, "site": 6, "__init__": 6, "py": 6, "870": 6, "config": 6, "feature_extractor": 6, "image_processor": 6, "revis": 6, "use_fast": 6, "devic": 6, "device_map": 6, "torch_dtyp": 6, "trust_remote_cod": 6, "model_kwarg": 6, "pipeline_class": 6, "kwarg": 6, "868": 6, "isinst": 6, "str": 6, "none": 6, "869": 6, "model_class": 6, "tf": 6, "targeted_task": 6, "pt": 6, "infer_framework_load_model": 6, "871": 6, "872": 6, "873": 6, "874": 6, "875": 6, "876": 6, "hub_kwarg": 6, "877": 6, "878": 6, "880": 6, "model_config": 6, "881": 6, "_commit_hash": 6, "269": 6, "263": 6, "logger": 6, "264": 6, "end": 6, "bin": 6, "265": 6, "266": 6, "268": 6, "from_pretrain": 6, "270": 6, "hasattr": 6, "eval": 6, "271": 6, "auto": 6, "auto_factori": 6, "566": 6, "_baseautomodelclass": 6, "pretrained_model_name_or_path": 6, "model_arg": 6, "564": 6, "elif": 6, "_model_map": 6, "kei": 6, "565": 6, "_get_model_class": 6, "return": 6, "567": 6, "568": 6, "569": 6, "rais": 6, "valueerror": 6, "570": 6, "f": 6, "unrecogn": 6, "configur": 6, "__class__": 6, "automodel": 6, "__name__": 6, "571": 6, "should": 6, "join": 6, "c": [6, 7], "572": 6, "modeling_util": 6, "3037": 6, "pretrainedmodel": 6, "cache_dir": 6, "ignore_mismatched_s": 6, "force_download": 6, "local_files_onli": 6, "use_safetensor": 6, "3022": 6, "3023": 6, "url": 6, "cach": 6, "alreadi": 6, "3024": 6, "cached_file_kwarg": 6, "3025": 6, "3026": 6, "3035": 6, "commit_hash": 6, "3036": 6, "resolved_archive_fil": 6, "cached_fil": 6, "filenam": 6, "3039": 6, "sinc": 6, "set": 6, "_raise_exceptions_for_missing_entri": 6, "fals": 6, "except": 6, "3040": 6, "repo": 6, "exist": 6, "doe": 6, "3041": 6, "_add_vari": 6, "safe_weights_nam": 6, "variant": 6, "3042": 6, "checkpoint": 6, "shard": 6, "grab": 6, "index": 6, "util": 6, "430": 6, "path_or_repo_id": 6, "resume_download": 6, "proxi": 6, "subfold": 6, "repo_typ": 6, "user_ag": 6, "_raise_exceptions_for_connection_error": 6, "deprecated_kwarg": 6, "427": 6, "http_user_ag": 6, "428": 6, "429": 6, "resolved_fil": 6, "hf_hub_download": 6, "431": 6, "432": 6, "433": 6, "len": 6, "0": 6, "els": 6, "434": 6, "435": 6, "436": 6, "437": 6, "438": 6, "439": 6, "440": 6, "441": 6, "442": 6, "443": 6, "444": 6, "gatedrepoerror": 6, "445": 6, "environmenterror": 6, "446": 6, "gate": 6, "nmake": 6, "447": 6, "co": 6, "pass": [6, 7], "permiss": 6, "448": 6, "log": 6, "cli": 6, "login": 6, "your_token": 6, "449": 6, "huggingface_hub": 6, "_valid": 6, "118": 6, "validate_hf_hub_arg": 6, "_inner_fn": 6, "arg": 6, "115": 6, "check_use_auth_token": 6, "116": 6, "smoothly_deprecate_use_auth_token": 6, "fn_name": 6, "fn": 6, "has_token": 6, "file_download": 6, "1461": 6, "repo_id": 6, "library_nam": 6, "library_vers": 6, "local_dir": 6, "local_dir_use_symlink": 6, "force_filenam": 6, "etag_timeout": 6, "legacy_cache_layout": 6, "1458": 6, "1459": 6, "_check_disk_spac": 6, "expected_s": 6, "http_get": 6, "1462": 6, "url_to_download": 6, "1463": 6, "temp_fil": 6, "1464": 6, "1465": 6, "resume_s": 6, "1466": 6, "header": 6, "1467": 6, "1468": 6, "1470": 6, "1471": 6, "debug": 6, "store": 6, "blob_path": 6, "541": 6, "_nb_retri": 6, "539": 6, "new_resume_s": 6, "540": 6, "chunk": 6, "r": 6, "iter_cont": 6, "chunk_siz": 6, "download_chunk_s": 6, "542": 6, "filter": 6, "aliv": 6, "543": 6, "progress": 6, "updat": 6, "816": 6, "814": 6, "self": 6, "raw": 6, "stream": 6, "815": 6, "yield": 6, "decode_cont": 6, "true": 6, "817": 6, "protocolerror": 6, "818": 6, "chunkedencodingerror": 6, "urllib3": 6, "934": 6, "httprespons": 6, "amt": 6, "932": 6, "933": 6, "while": 6, "is_fp_clos": 6, "_fp": 6, "_decoded_buff": 6, "read": 6, "936": 6, "937": 6, "cache_cont": 6, "_raw_read": 6, "879": 6, "flush_decod": 6, "812": 6, "809": 6, "fp_close": 6, "getattr": 6, "811": 6, "_error_catch": 6, "_fp_read": 6, "b": 6, "813": 6, "buggi": 6, "820": 6, "properli": 6, "821": 6, "harm": 6, "redundantli": 6, "822": 6, "792": 6, "790": 6, "791": 6, "break": [6, 7], "buffer": [6, 7], "write": 6, "793": 6, "del": 6, "reduc": 6, "peak": 6, "memori": 6, "usag": 6, "max_chunk_amt": 6, "794": 6, "getvalu": 6, "qa": 6, "coupl": 6, "step": 6, "conveni": 6, "someth": 6, "necessari": 6, "again": 6, "miss": 6, "load_dataset": 6, "torch": 6, "dataload": 6, "tqdm": 6, "matplotlib": 6, "pyplot": 6, "plt": 6, "autotoken": 6, "automodelforcausallm": 6, "truthful_qa": 6, "inspect": 6, "format": 6, "print": 6, "valid": 6, "split": 6, "simplic": 6, "val": 6, "everyth": 6, "dataset_v": 6, "125m": 6, "add": 6, "pad": 6, "pad_token": 6, "eos_token": 6, "easi": 6, "preprocess": 6, "truthfulqadataset": 6, "helper": 6, "prefix": 6, "truncat": 6, "string": 6, "maximum": 6, "length": 6, "thei": 6, "batch": 6, "max_length": 6, "int": 6, "sequenc": 6, "def": 6, "128": 6, "__len__": 6, "__getitem__": 6, "idx": 6, "correct": 6, "mask": 6, "item": 6, "best_answ": 6, "automat": 6, "eo": 6, "return_tensor": 6, "instanti": 6, "train_dataset": 6, "loader": 6, "iter": 6, "exampl": 6, "pair": 6, "batch_siz": 6, "8": [6, 7], "shuffl": 6, "trian": 6, "configut": 6, "epoch": 6, "train_step": 6, "100": 6, "cuda": 6, "is_avail": 6, "backend": 6, "mp": 6, "cpu": 6, "put": 6, "mode": 6, "move": 6, "defin": 6, "rate": 6, "variabl": 6, "accumul": 6, "loss": 6, "over": [6, 7], "rang": 6, "x": 6, "forward": 6, "backward": 6, "append": 6, "purpos": 6, "correctli": 6, "after": 6, "matter": 6, "That": 6, "worri": 6, "input_id": 6, "plot": 6, "xlabel": 6, "ylabel": 6, "holi": 6, "grail": 6, "chess": 6, "map": 6, "onto": 6, "real": 6, "world": 6, "counterpart": 6, "game": 6, "comput": 6, "fill": 6, "veri": 6, "imagin": 6, "town": 6, "restaur": 6, "know": 6, "anyth": 6, "mysteri": 6, "cannot": 6, "she": 6, "herself": 6, "figur": 6, "her": 6, "happiest": 6, "time": 6, "give": 6, "highest": 6, "maxim": 6, "simplifi": 6, "instanc": [6, 7], "arm": 6, "bandit": 6, "avial": 6, "assum": 6, "simplif": 6, "determinist": 6, "doesn": 6, "goe": 6, "prefer": [6, 7], "mean": 6, "assumpt": 6, "simpl": 6, "subject": 6, "degre": 6, "happi": 6, "eat": 6, "q_t": 6, "averag": 6, "wherein": 6, "past": 6, "frac": 6, "sum_": 6, "r_": 6, "a_i": 6, "mathbb": 6, "_": 6, "refer": 6, "th": 6, "decid": 6, "deriv": 6, "strategi": 6, "greedi": 6, "epsilon": 6, "panda": 6, "pd": 6, "numpi": 6, "np": 6, "random": 6, "seed": 6, "food": 6, "thai": 6, "curri": 6, "best": 6, "q_": 6, "r_t": 6, "mid": 6, "a_t": 6, "On": 6, "lower": 6, "neg": 6, "poison": 6, "tpur": 6, "simul": [6, 7], "unknown": 6, "7": [6, 7], "true_restaurant_reward": 6, "normal": 6, "toi": 6, "tri": 6, "dai": 6, "down": 6, "everi": 6, "went": 6, "trial": 6, "town_environ": 6, "associ": 6, "algorith": 6, "track": 6, "accord": 6, "amount": 6, "abov": 6, "select": [6, 7], "proport": 6, "randomli": 6, "chosen": 6, "sample_average_estim": 6, "old_act": 6, "old_reward": 6, "arrai": 6, "taken": 6, "float": 6, "probabl": 6, "best_act": 6, "previous": 6, "old_indic": 6, "uniform": 6, "tie": 6, "sum": 6, "max": 6, "choic": 6, "emb": 6, "loop": 6, "gather": 6, "90": 6, "actions_log": 6, "rewards_list": 6, "average_rewards_list": 6, "itentifi": 6, "optimal_act": 6, "argmax": 6, "cumsum": 6, "arang": 6, "THE": 6, "same": 6, "WITH": 6, "contain": 7, "materi": 7, "taught": 7, "univers": 7, "t\u00fcbingen": 7, "natur": 7, "enabl": 7, "cut": 7, "edg": 7, "intersect": 7, "strive": 7, "mix": 7, "mainli": 7, "interdisciplinari": 7, "present": 7, "partial": 7, "built": 7, "implic": 7, "societi": 7, "gain": 7, "recur": 7, "year": 7, "better": 7, "satisfi": 7, "rlhf": 7, "effect": 7, "societ": 7, "align": 7, "place": 7, "wednesdai": 7, "14": 7, "nauklerstr": 7, "35": 7, "seminar": 7, "room": 7, "1": 7, "master": 7, "bachelor": 7, "strictli": 7, "preliminari": 7, "3": 7, "ppo": 7, "person": 7, "announc": 7, "otherwis": 7, "By": 7, "default": 7, "ect": 7, "mire": 7, "rough": 7, "homework": 7, "poster": 7, "submiss": 7, "group": 7, "websit": 7, "anounc": 7, "share": 7, "date": 7, "18th": 7, "intro": 7, "25th": 7, "1st": 7, "holidai": 7, "trpo": 7, "15th": 7, "22nd": 7, "29th": 7, "comparison": 7, "decemb": 7, "6th": 7, "represent": 7, "13th": 7, "onlin": 7, "20th": 7, "christma": 7, "januari": 7, "10th": 7, "11": 7, "17th": 7, "24th": 7, "classifi": 7, "13": 7, "februari": 7, "7th": 7}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"evalu": 0, "llm": [0, 1], "part": [0, 3, 4], "1": [0, 6], "student": [0, 5], "present": [0, 5], "further": [0, 1, 2, 3, 4, 5], "refer": [0, 5], "languag": [1, 2, 7], "model": [1, 2, 7], "introduct": [1, 2], "larg": 1, "high": 1, "level": 1, "overview": 1, "materi": [1, 2, 3, 4], "option": [1, 2, 3, 4], "where": 1, "try": 1, "prepar": 1, "practic": 1, "program": [1, 2], "task": 1, "train": [2, 7], "rl": [2, 7], "transform": 2, "homework": [2, 6], "reinforc": [3, 4], "learn": [3, 4], "2": [3, 6], "3": [4, 6], "rlhf": 4, "ppo": 4, "sota": 5, "system": 5, "logist": 6, "preliminari": 6, "exercis": 6, "20": 6, "point": 6, "5": 6, "15": 6, "10": 6, "welcom": 7, "cours": 7, "descript": 7, "formalia": 7, "schedul": 7}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})