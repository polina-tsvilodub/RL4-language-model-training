Search.setIndex({"docnames": ["LLMs", "LLMs_intro_RL", "RL", "homework1", "intro"], "filenames": ["LLMs.md", "LLMs_intro_RL.md", "RL.md", "homework1.ipynb", "intro.md"], "titles": ["Language Models: Introduction", "Language Model Training &amp; Introduction to RL", "Reinforcement Learning (part 2)", "Homework 1", "Welcome to \u201cRL for Language Model Training\u201d!"], "terms": {"The": [0, 1, 2, 3, 4], "goal": [0, 1, 2, 3, 4], "introductori": [0, 4], "session": [0, 1, 2, 3, 4], "motiv": [0, 1, 2], "cours": [0, 1], "cover": [0, 1, 4], "formalia": 0, "start": 0, "recap": [0, 1], "relev": [0, 3], "background": [0, 3, 4], "part": [0, 1, 3, 4], "slide": [0, 1, 2, 4], "briefli": [0, 1], "introduc": [0, 1, 2], "topic": [0, 3, 4], "throughout": [0, 3], "class": [0, 1, 3, 4], "In": [0, 1, 2, 3, 4], "second": [0, 1], "core": [0, 1, 2, 3], "idea": [0, 3], "behind": 0, "ar": [0, 1, 2, 3, 4], "particular": [0, 2, 3], "name": [0, 3], "next": [0, 1, 3], "word": 0, "predict": [0, 3], "includ": [0, 3], "bsic": 0, "main": [0, 1], "architectur": [0, 1, 4], "us": [0, 1, 2, 3, 4], "state": [0, 1, 3, 4], "art": [0, 4], "transform": [0, 2, 3], "some": [0, 1, 3, 4], "technic": [0, 2, 3, 4], "aspect": [0, 3, 4], "discuss": [0, 1, 3, 4], "highlight": [0, 1], "onli": [0, 3], "those": [0, 1, 3], "which": [0, 1, 2, 3], "most": [0, 1, 3, 4], "fine": [0, 1, 2, 3, 4], "tune": [0, 1, 2, 3, 4], "rl": [0, 2, 3], "more": [0, 1, 2, 4], "comprehens": [0, 4], "lm": [0, 1, 3], "gener": [0, 1, 3], "see": [0, 3], "can": [0, 1, 2, 3, 4], "found": [0, 1, 2, 4], "here": [0, 1, 2, 3], "below": [0, 1, 2, 3, 4], "langaug": 0, "addition": 0, "resourc": [0, 3], "hand": [0, 1, 3, 4], "provid": [0, 1, 2, 3, 4], "you": [0, 1, 3, 4], "find": [0, 1, 3], "few": 0, "basic": [0, 1, 2, 3], "recommend": 0, "all": [0, 1, 3], "sort": 0, "n": [0, 3], "gram": 0, "recurr": 0, "neural": [0, 1], "network": [0, 1], "etc": [0, 1, 3], "have": [0, 3], "been": 0, "develop": [0, 1, 3, 4], "cl": [0, 3], "nlp": [0, 1, 4], "classic": [0, 1], "paper": [0, 1, 4], "also": [0, 1, 3], "concept": [0, 1, 2, 3, 4], "referenc": 0, "well": [0, 1, 3, 4], "wei": 0, "et": [0, 1], "al": [0, 1], "2023": 0, "an": [0, 1, 2, 3, 4], "chapter": [0, 1], "from": [0, 1, 3, 4], "jurafksi": 0, "martin": 0, "speech": 0, "process": [0, 2, 3, 4], "lectur": [0, 1, 4], "rnn": 0, "stanford": 0, "deep": [0, 1], "learn": [0, 1, 3, 4], "lstm": 0, "bert": 0, "one": [0, 3], "befor": [0, 3], "gpt": [0, 3], "addit": [0, 1, 4], "attent": [0, 3, 4], "predecessor": 0, "mechan": 0, "multipl": [0, 3], "current": [0, 1, 3, 4], "deploi": 0, "need": [0, 3], "link": [0, 3], "could": 0, "yourself": [0, 3], "pleas": [0, 1, 3], "note": [0, 1, 3], "access": 0, "fanciest": 0, "requir": [0, 1, 3, 4], "creat": [0, 3], "account": [0, 3], "openai": 0, "might": [0, 1, 3], "even": [0, 3], "pai": 0, "api": 0, "onc": 0, "free": [0, 3], "credit": [0, 4], "get": [0, 1, 3, 4], "upon": [0, 3, 4], "sign": 0, "up": [0, 1, 3], "expect": [0, 3], "thi": [0, 1, 2, 3, 4], "contact": 0, "me": [0, 3], "do": [0, 3], "ani": [0, 3], "issu": [0, 3], "regard": 0, "first": [0, 1, 3, 4], "graphic": 0, "interfac": 0, "explor": [0, 3], "last": [0, 3, 4], "two": [0, 3], "point": 0, "later": [0, 1], "programmat": 0, "avail": [0, 3, 4], "host": 0, "higgingfac": 0, "librari": [0, 1, 3], "platform": 0, "tool": [0, 3], "other": [0, 1, 3], "machin": [0, 1, 3], "we": [0, 1, 3, 4], "huggingfac": [0, 1, 3], "chatgpt": [0, 4], "chat": 0, "allow": [0, 3], "plai": [0, 3], "around": [0, 1, 3, 4], "nice": 0, "bard": 0, "googl": [0, 3], "It": [0, 3], "handi": [0, 3], "bloom": 0, "open": [0, 4], "sourc": 0, "optim": [0, 1, 3, 4], "multi": 0, "languagu": 0, "test": [0, 3], "via": [0, 3], "hosten": 0, "infer": [0, 1, 3], "openassist": 0, "altern": [0, 1], "s": [0, 3, 4], "base": [0, 1, 3], "foundat": 0, "llama": [0, 1], "meta": 0, "ai": [0, 3], "offer": [0, 3], "flan": 0, "t5": 0, "xxl": 0, "out": [0, 1, 3], "playground": 0, "varieti": 0, "like": [0, 1, 3, 4], "version": 0, "call": [0, 3, 4], "wa": 0, "fune": 0, "huggingchat": 0, "assist": 0, "latest": 0, "advanc": [0, 4], "2": [0, 4], "ha": [0, 3, 4], "releas": [0, 3], "suit": 0, "new": [0, 3], "differ": [0, 3], "size": 0, "7b": 0, "13b": 0, "70b": 0, "paramet": [0, 3], "both": 0, "pretrain": [0, 3], "request": 0, "credenti": 0, "receiv": [0, 3], "token": [0, 3], "download": 0, "instruct": [0, 1], "run": [0, 3], "code": [0, 3], "endpoint": 0, "latter": [0, 3], "separ": 0, "huggigfac": 0, "hub": 0, "warn": [0, 3], "smallest": 0, "local": [0, 3], "least": 0, "24gb": 0, "ram": [0, 3], "certain": 0, "python": [0, 1, 3], "packag": [0, 3], "being": 0, "instal": [0, 3], "environ": [0, 1, 3], "strongli": [0, 3], "non": 0, "trivial": 0, "maco": 0, "reach": [0, 3], "If": [0, 3], "familiar": [0, 1, 3, 4], "your": [0, 3], "dirti": 0, "would": [0, 3], "text": [0, 3, 4], "feel": [0, 3], "look": [0, 3], "either": [0, 3], "20": 0, "when": [0, 2, 3], "save": [0, 3], "payment": 0, "method": [0, 1, 2, 3, 4], "so": [0, 1, 3, 4], "how": [0, 1, 3], "mani": [0, 3], "own": [0, 3], "respons": [0, 3], "There": [0, 3], "sever": [0, 3], "big": 0, "player": 0, "e": [0, 1, 3, 4], "g": [0, 1, 3, 4], "palm": 0, "field": [0, 1, 3], "public": 0, "don": [0, 3], "t": [0, 3, 4], "detail": [0, 1, 3, 4], "follow": [0, 3, 4], "list": [0, 3, 4], "case": [0, 3], "variou": 0, "come": [0, 1], "These": [0, 2, 3], "prerequisit": 0, "walk": 0, "through": [0, 1, 3, 4], "import": [0, 1, 3], "Of": 0, "just": [0, 3], "singl": [0, 3], "suggest": [0, 1], "sea": 0, "content": 0, "internet": 0, "meant": [0, 3], "kick": 0, "algorithm": [0, 1, 3], "welcom": 0, "brows": 0, "choos": [0, 3], "favorit": [0, 3], "1h": 0, "data": [0, 3], "scienc": [0, 4], "50min": 0, "pytorch": [0, 1, 3], "brief": [0, 2], "30": [0, 4], "min": 0, "vaswani": [0, 1], "2017": 0, "A": [0, 1, 3], "origin": 0, "wrap": [1, 3], "shortli": 1, "term": 1, "understand": [1, 3, 4], "furthermor": 1, "conceptu": [1, 3, 4], "high": [1, 3], "level": 1, "reinforc": [1, 3, 4], "architecur": 1, "Then": 1, "teacher": 1, "forc": 1, "review": [1, 3], "decod": [1, 2, 3], "scheme": [1, 2, 3], "prompt": 1, "conclud": 1, "context": [1, 4], "situat": [1, 3], "action": [1, 3], "polici": [1, 2, 3, 4], "rather": 1, "inform": [1, 3], "intuit": [1, 3], "about": [1, 3, 4], "rotatori": 1, "posit": 1, "embed": [1, 3], "rope": 1, "popular": 1, "sota": 1, "encod": [1, 3], "great": [1, 2, 3], "oon": 1, "wrapper": [1, 3], "goodfellow": 1, "2016": 1, "encyclopaed": 1, "webbook": [1, 4], "work": [1, 3, 4], "relat": 1, "explain": 1, "potenti": 1, "short": 1, "nucleu": 1, "sampl": [1, 3], "techniqu": [1, 4], "sutton": [1, 2], "barto": [1, 2], "2018": [1, 2], "http": [1, 3], "www": 1, "andrew": 1, "cmu": 1, "edu": 1, "10": [1, 4], "703": 1, "textbook": 1, "bartosutton": 1, "pdf": 1, "practic": [1, 3, 4], "howev": [1, 3], "youtub": [1, 2], "specif": [1, 3], "commonli": [1, 2], "unless": [1, 4], "want": [1, 3], "mayb": 1, "suffici": 1, "blog": 1, "post": [1, 3], "implement": [1, 3], "presuppos": 1, "towardsdatasci": 1, "com": [1, 3], "da07f7aaca88": 1, "tutori": 1, "gym": 1, "kind": [1, 3], "go": [1, 3], "beyond": [1, 4], "scope": 1, "essenti": 1, "function": [1, 2, 3], "our": [1, 3], "experi": [1, 3, 4], "help": [1, 3], "chanc": 1, "try": [1, 3], "far": 1, "exercis": [1, 4], "sheet": [1, 3, 4], "page": [1, 3, 4], "deeper": 2, "dive": 2, "formal": [2, 3], "framework": [2, 3], "markov": 2, "decis": [2, 3], "mdp": 2, "overview": [2, 4], "valu": [2, 3], "solv": [2, 3], "focus": 2, "gradient": [2, 4], "languag": [2, 3], "model": [2, 3], "introduct": [2, 4], "underpin": 2, "llm": [2, 4], "train": [2, 3], "video": 2, "seri": 2, "pieter": 2, "abbeel": 2, "make": 3, "sure": 3, "execut": 3, "colab": 3, "order": 3, "them": 3, "agent": [3, 4], "importantli": 3, "intend": [3, 4], "showcas": 3, "space": 3, "solut": 3, "problem": 3, "further": 3, "dismai": 3, "therefor": 3, "lot": 3, "ml": [3, 4], "program": [3, 4], "warmli": [3, 4], "encourag": [3, 4], "take": [3, 4], "task": 3, "ask": 3, "question": [3, 4], "concern": 3, "fellow": 3, "student": [3, 4], "hint": 3, "mai": 3, "week": 3, "complet": [3, 4], "assign": [3, 4], "until": 3, "wed": 3, "novemb": [3, 4], "8th": [3, 4], "12": [3, 4], "30pm": 3, "submit": 3, "each": 3, "without": 3, "full": 3, "activ": [3, 4], "dedic": 3, "forum": [3, 4], "moodl": [3, 4], "particip": [3, 4], "earn": [3, 4], "extra": 3, "grade": 3, "quiz": 3, "answer": 3, "correspond": 3, "respect": [3, 4], "number": 3, "difficulti": 3, "i": 3, "consult": 3, "tuesdai": 3, "octob": [3, 4], "31st": [3, 4], "2pm": [3, 4], "4pm": 3, "zoom": 3, "under": 3, "usual": 3, "hesit": 3, "email": 3, "struggl": 3, "overwhelm": 3, "easili": 3, "press": 3, "icon": 3, "top": 3, "webook": 3, "option": [3, 4], "avoid": 3, "complic": 3, "To": 3, "speed": 3, "especi": 3, "gpu": 3, "For": [3, 4], "navig": 3, "runtim": 3, "chang": 3, "type": 3, "conda": 3, "depend": 3, "keep": 3, "mind": 3, "weight": 3, "quit": 3, "bit": 3, "hard": 3, "drive": 3, "6gb": 3, "disc": 3, "8gb": 3, "stabl": 3, "who": [3, 4], "wish": 3, "final": [3, 4], "project": [3, 4], "tensorflow": 3, "abl": 3, "less": 3, "support": 3, "load": 3, "neo": 3, "3b": 3, "produc": 3, "continu": 3, "sentenc": 3, "beam": 3, "search": 3, "k": 3, "research": [3, 4], "overal": 3, "result": 3, "uncom": 3, "line": 3, "pip": 3, "pipelin": 3, "eleutherai": 3, "keyboardinterrupt": 3, "traceback": 3, "recent": 3, "cell": 3, "4": [3, 4], "6": [3, 4], "file": 3, "opt": 3, "hostedtoolcach": 3, "9": [3, 4], "18": 3, "x64": 3, "lib": 3, "python3": 3, "site": 3, "__init__": 3, "py": 3, "870": 3, "config": 3, "feature_extractor": 3, "image_processor": 3, "revis": 3, "use_fast": 3, "devic": 3, "device_map": 3, "torch_dtyp": 3, "trust_remote_cod": 3, "model_kwarg": 3, "pipeline_class": 3, "kwarg": 3, "868": 3, "isinst": 3, "str": 3, "none": 3, "869": 3, "model_class": 3, "tf": 3, "targeted_task": 3, "pt": 3, "infer_framework_load_model": 3, "871": 3, "872": 3, "873": 3, "874": 3, "875": 3, "876": 3, "hub_kwarg": 3, "877": 3, "878": 3, "880": 3, "model_config": 3, "881": 3, "_commit_hash": 3, "269": 3, "263": 3, "logger": 3, "264": 3, "end": 3, "bin": 3, "265": 3, "266": 3, "268": 3, "from_pretrain": 3, "270": 3, "hasattr": 3, "eval": 3, "271": 3, "auto": 3, "auto_factori": 3, "566": 3, "_baseautomodelclass": 3, "pretrained_model_name_or_path": 3, "model_arg": 3, "564": 3, "elif": 3, "_model_map": 3, "kei": 3, "565": 3, "_get_model_class": 3, "return": 3, "567": 3, "568": 3, "569": 3, "rais": 3, "valueerror": 3, "570": 3, "f": 3, "unrecogn": 3, "configur": 3, "__class__": 3, "automodel": 3, "__name__": 3, "571": 3, "should": 3, "join": 3, "c": [3, 4], "572": 3, "modeling_util": 3, "3236": 3, "pretrainedmodel": 3, "cache_dir": 3, "ignore_mismatched_s": 3, "force_download": 3, "local_files_onli": 3, "use_safetensor": 3, "3233": 3, "_check_and_enable_flash_attn_2": 3, "3235": 3, "contextmanag": 3, "init_context": 3, "3238": 3, "sinc": 3, "copi": 3, "3239": 3, "gpt_neo": 3, "modeling_gpt_neo": 3, "659": 3, "gptneoforcausallm": 3, "self": 3, "657": 3, "def": 3, "658": 3, "super": 3, "gptneomodel": 3, "660": 3, "lm_head": 3, "nn": 3, "linear": 3, "hidden_s": 3, "vocab_s": 3, "bia": 3, "fals": 3, "662": 3, "initi": 3, "appli": 3, "481": 3, "479": 3, "wpe": 3, "max_position_embed": 3, "embed_dim": 3, "480": 3, "drop": 3, "dropout": 3, "float": 3, "embed_dropout": 3, "h": 3, "modulelist": 3, "gptneoblock": 3, "layer_id": 3, "rang": 3, "num_lay": 3, "482": 3, "ln_f": 3, "layernorm": 3, "ep": 3, "layer_norm_epsilon": 3, "484": 3, "gradient_checkpoint": 3, "listcomp": 3, "0": 3, "315": 3, "313": 3, "attn": 3, "gptneoattent": 3, "314": 3, "ln_2": 3, "mlp": 3, "gptneomlp": 3, "inner_dim": 3, "295": 3, "intermediate_s": 3, "293": 3, "294": 3, "c_fc": 3, "c_proj": 3, "296": 3, "act": 3, "act2fn": 3, "activation_funct": 3, "297": 3, "resid_dropout": 3, "torch": 3, "modul": 3, "101": 3, "in_featur": 3, "out_featur": 3, "dtype": 3, "99": 3, "els": 3, "100": 3, "register_paramet": 3, "reset_paramet": 3, "107": 3, "103": 3, "104": 3, "set": 3, "sqrt": 3, "kaiming_uniform": 3, "same": 3, "105": 3, "uniform": 3, "106": 3, "github": 3, "57109": 3, "init": 3, "kaiming_uniform_": 3, "math": 3, "108": 3, "109": 3, "fan_in": 3, "_": 3, "_calculate_fan_in_and_fan_out": 3, "419": 3, "tensor": 3, "mode": 3, "nonlinear": 3, "417": 3, "bound": 3, "std": 3, "calcul": 3, "standard": 3, "deviat": 3, "418": 3, "no_grad": 3, "uniform_": 3, "truth": 3, "qa": 3, "dataset": 3, "compon": 3, "coupl": 3, "step": 3, "conveni": 3, "alreadi": 3, "where": 3, "someth": 3, "necessari": 3, "again": 3, "miss": 3, "load_dataset": 3, "util": 3, "dataload": 3, "tqdm": 3, "matplotlib": 3, "pyplot": 3, "plt": 3, "autotoken": 3, "automodelforcausallm": 3, "truthful_qa": 3, "inspect": 3, "format": 3, "print": 3, "valid": 3, "split": 3, "simplic": 3, "val": 3, "everyth": 3, "dataset_v": 3, "125m": 3, "add": 3, "pad": 3, "pad_token": 3, "eos_token": 3, "easi": 3, "preprocess": 3, "truthfulqadataset": 3, "helper": 3, "prefix": 3, "truncat": 3, "string": 3, "given": 3, "maximum": 3, "length": 3, "thei": 3, "batch": 3, "max_length": 3, "int": 3, "input": 3, "output": 3, "sequenc": 3, "128": 3, "__len__": 3, "len": 3, "__getitem__": 3, "idx": 3, "index": 3, "item": 3, "best_answ": 3, "mask": 3, "NOT": 3, "perform": 3, "TO": 3, "confus": 3, "correct": 3, "after": 3, "submiss": [3, 4], "deadlin": 3, "input_id": 3, "return_tensor": 3, "true": 3, "answer_id": 3, "instanti": 3, "train_dataset": 3, "loader": 3, "automat": 3, "iter": 3, "exampl": 3, "pair": 3, "batch_siz": 3, "8": [3, 4], "shuffl": 3, "trian": 3, "configut": 3, "epoch": 3, "train_step": 3, "cuda": 3, "is_avail": 3, "backend": 3, "mp": 3, "cpu": 3, "put": 3, "move": 3, "defin": 3, "rate": 3, "variabl": 3, "accumul": 3, "loss": 3, "over": [3, 4], "x": 3, "y": 3, "ground": 3, "squeez": 3, "forward": 3, "pass": [3, 4], "backward": 3, "append": 3, "updat": 3, "purpos": 3, "correctli": 3, "qualiti": 3, "doe": 3, "matter": 3, "That": 3, "worri": 3, "seem": 3, "evalu": 3, "plot": 3, "xlabel": 3, "ylabel": 3, "holi": 3, "grail": 3, "chess": 3, "map": 3, "onto": 3, "real": 3, "world": 3, "counterpart": 3, "game": 3, "comput": 3, "fill": 3, "veri": 3, "imagin": 3, "town": 3, "restaur": 3, "know": 3, "anyth": 3, "begin": 3, "mysteri": 3, "cannot": 3, "she": 3, "herself": 3, "figur": 3, "her": 3, "happiest": 3, "dure": 3, "time": 3, "give": 3, "highest": 3, "reward": [3, 4], "maxim": 3, "simplifi": 3, "instanc": [3, 4], "arm": 3, "bandit": 3, "avial": 3, "studi": 3, "assum": 3, "simplif": 3, "determinist": 3, "doesn": 3, "goe": 3, "prefer": [3, 4], "what": 3, "mean": 3, "assumpt": 3, "simpl": 3, "estim": 3, "think": 3, "subject": 3, "degre": 3, "happi": 3, "eat": 3, "q_t": 3, "averag": 3, "wherein": 3, "were": 3, "past": 3, "frac": 3, "sum_": 3, "r_": 3, "a_i": 3, "mathbb": 3, "refer": 3, "th": 3, "decid": 3, "deriv": 3, "strategi": 3, "behavior": [3, 4], "greedi": 3, "epsilon": 3, "panda": 3, "pd": 3, "numpi": 3, "np": 3, "random": 3, "seed": 3, "food": 3, "thai": 3, "curri": 3, "best": 3, "q_": 3, "r_t": 3, "mid": 3, "a_t": 3, "On": 3, "lower": 3, "neg": 3, "poison": 3, "tpur": 3, "simul": [3, 4], "unknown": 3, "possibl": 3, "7": [3, 4], "true_restaurant_reward": 3, "normal": 3, "toi": 3, "tri": 3, "dai": 3, "write": 3, "down": 3, "everi": 3, "went": 3, "trial": 3, "town_environ": 3, "associ": 3, "algorith": 3, "track": 3, "behav": 3, "accord": 3, "amount": 3, "abov": 3, "select": [3, 4], "proport": 3, "randomli": 3, "chosen": 3, "sample_average_estim": 3, "old_act": 3, "old_reward": 3, "arrai": 3, "taken": 3, "probabl": 3, "best_act": 3, "previous": 3, "observ": 3, "old_indic": 3, "tie": 3, "break": [3, 4], "sum": 3, "max": 3, "choic": 3, "emb": 3, "loop": 3, "gather": 3, "90": 3, "log": 3, "actions_log": 3, "rewards_list": 3, "average_rewards_list": 3, "itentifi": 3, "check": 3, "often": 3, "optimal_act": 3, "argmax": 3, "cumsum": 3, "arang": 3, "now": 3, "THE": 3, "WITH": 3, "contain": 4, "materi": 4, "taught": 4, "univers": 4, "t\u00fcbingen": 4, "natur": 4, "enabl": 4, "cut": 4, "edg": 4, "intersect": 4, "larg": 4, "strive": 4, "mix": 4, "mainli": 4, "toward": 4, "interdisciplinari": 4, "present": 4, "partial": 4, "built": 4, "implic": 4, "linguist": 4, "cognit": 4, "societi": 4, "gain": 4, "recur": 4, "year": 4, "better": 4, "satisfi": 4, "user": 4, "human": 4, "feedback": 4, "rlhf": 4, "effect": 4, "limit": 4, "societ": 4, "align": 4, "perspect": 4, "place": 4, "wednesdai": 4, "14": 4, "nauklerstr": 4, "35": 4, "seminar": 4, "room": 4, "1": 4, "master": 4, "bachelor": 4, "interest": 4, "approach": 4, "strictli": 4, "preliminari": 4, "person": 4, "announc": 4, "otherwis": 4, "By": 4, "default": 4, "3": 4, "ect": 4, "mire": 4, "rough": 4, "homework": 4, "poster": 4, "group": 4, "made": 4, "websit": 4, "anounc": 4, "share": 4, "date": 4, "18th": 4, "intro": 4, "25th": 4, "1st": 4, "holidai": 4, "trpo": 4, "ppo": 4, "15th": 4, "5": 4, "22nd": 4, "literatur": 4, "29th": 4, "benchmark": 4, "comparison": 4, "decemb": 4, "6th": 4, "represent": 4, "13th": 4, "tbd": 4, "onlin": 4, "20th": 4, "buffer": 4, "christma": 4, "januari": 4, "10th": 4, "social": 4, "11": 4, "17th": 4, "24th": 4, "classifi": 4, "13": 4, "februari": 4, "7th": 4}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"languag": [0, 1, 4], "model": [0, 1, 4], "introduct": [0, 1], "larg": 0, "llm": 0, "high": 0, "level": 0, "overview": 0, "further": [0, 1, 2], "materi": [0, 1, 2], "option": [0, 1, 2], "where": 0, "try": 0, "prepar": 0, "practic": 0, "program": [0, 1], "task": 0, "train": [1, 4], "rl": [1, 4], "transform": 1, "homework": [1, 3], "reinforc": 2, "learn": 2, "part": 2, "2": [2, 3], "1": 3, "logist": 3, "preliminari": 3, "exercis": 3, "20": 3, "point": 3, "5": 3, "15": 3, "10": 3, "3": 3, "welcom": 4, "cours": 4, "descript": 4, "formalia": 4, "schedul": 4}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})