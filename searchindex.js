Search.setIndex({"docnames": ["LLMs", "LLMs_intro_RL", "RL", "RLHF_PPO", "homework1", "intro"], "filenames": ["LLMs.md", "LLMs_intro_RL.md", "RL.md", "RLHF_PPO.md", "homework1.ipynb", "intro.md"], "titles": ["Language Models: Introduction", "Language Model Training &amp; Introduction to RL", "Reinforcement Learning (part 2)", "Reinforcement Learning (part 3): RLHF and PPO", "Homework 1", "Welcome to \u201cRL for Language Model Training\u201d!"], "terms": {"The": [0, 1, 2, 3, 4, 5], "goal": [0, 1, 2, 3, 4, 5], "introductori": [0, 5], "session": [0, 1, 2, 3, 4, 5], "motiv": [0, 1, 2], "cours": [0, 1], "cover": [0, 1, 5], "formalia": 0, "start": 0, "recap": [0, 1], "relev": [0, 4], "background": [0, 4, 5], "part": [0, 1, 4, 5], "slide": [0, 1, 2, 3, 5], "briefli": [0, 1], "introduc": [0, 1, 2, 3], "topic": [0, 4, 5], "throughout": [0, 4], "class": [0, 1, 4, 5], "In": [0, 1, 2, 3, 4, 5], "second": [0, 1, 3], "core": [0, 1, 2, 3, 4], "idea": [0, 4], "behind": 0, "ar": [0, 1, 2, 3, 4, 5], "particular": [0, 2, 3, 4], "name": [0, 4], "next": [0, 1, 4], "word": 0, "predict": [0, 4], "includ": [0, 3, 4], "bsic": 0, "main": [0, 1], "architectur": [0, 1, 3, 5], "us": [0, 1, 2, 3, 4, 5], "state": [0, 1, 4, 5], "art": [0, 5], "transform": [0, 4], "some": [0, 1, 4, 5], "technic": [0, 2, 4, 5], "aspect": [0, 3, 4, 5], "discuss": [0, 1, 3, 4, 5], "highlight": [0, 1], "onli": [0, 4], "those": [0, 1, 4], "which": [0, 1, 2, 4], "most": [0, 1, 3, 4, 5], "fine": [0, 1, 2, 3, 4, 5], "tune": [0, 1, 2, 3, 4, 5], "rl": [0, 2, 3, 4], "more": [0, 1, 2, 3, 5], "comprehens": [0, 5], "lm": [0, 1, 4], "gener": [0, 1, 4], "see": [0, 4], "can": [0, 1, 2, 3, 4, 5], "found": [0, 1, 2, 3, 5], "here": [0, 1, 2, 3, 4], "below": [0, 1, 2, 3, 4, 5], "langaug": 0, "addition": 0, "resourc": [0, 4], "hand": [0, 1, 4, 5], "provid": [0, 1, 2, 3, 4, 5], "you": [0, 1, 4, 5], "find": [0, 1, 4], "few": 0, "basic": [0, 1, 4], "recommend": 0, "all": [0, 1, 4], "sort": 0, "n": [0, 4], "gram": 0, "recurr": 0, "neural": [0, 1], "network": [0, 1], "etc": [0, 1, 3, 4], "have": [0, 4], "been": [0, 3], "develop": [0, 1, 3, 4, 5], "cl": [0, 4], "nlp": [0, 1, 5], "classic": [0, 1], "paper": [0, 1, 3, 5], "also": [0, 1, 4], "concept": [0, 1, 2, 3, 4, 5], "referenc": 0, "well": [0, 1, 3, 4, 5], "wei": 0, "et": [0, 1, 3], "al": [0, 1, 3], "2023": [0, 3], "an": [0, 1, 2, 3, 4, 5], "chapter": [0, 1], "from": [0, 1, 3, 4, 5], "jurafksi": 0, "martin": 0, "speech": 0, "process": [0, 2, 4, 5], "lectur": [0, 1, 5], "rnn": 0, "stanford": 0, "deep": [0, 1, 3], "learn": [0, 1, 4, 5], "lstm": 0, "bert": 0, "one": [0, 3, 4], "befor": [0, 4], "gpt": [0, 3, 4], "addit": [0, 1, 5], "attent": [0, 4, 5], "predecessor": 0, "mechan": 0, "multipl": [0, 4], "current": [0, 1, 3, 4, 5], "deploi": 0, "need": [0, 4], "link": [0, 4], "could": 0, "yourself": [0, 4], "pleas": [0, 1, 4], "note": [0, 1, 4], "access": 0, "fanciest": 0, "requir": [0, 1, 4, 5], "creat": [0, 4], "account": [0, 4], "openai": 0, "might": [0, 1, 4], "even": [0, 4], "pai": 0, "api": 0, "onc": 0, "free": [0, 4], "credit": [0, 5], "get": [0, 1, 4, 5], "upon": [0, 4, 5], "sign": 0, "up": [0, 1, 4], "expect": [0, 4], "thi": [0, 1, 2, 3, 4, 5], "contact": 0, "me": [0, 4], "do": [0, 4], "ani": [0, 4], "issu": [0, 4], "regard": 0, "first": [0, 1, 3, 4, 5], "graphic": 0, "interfac": 0, "explor": [0, 4], "last": [0, 4, 5], "two": [0, 3, 4], "point": 0, "later": [0, 1], "programmat": 0, "avail": [0, 4, 5], "host": 0, "higgingfac": 0, "librari": [0, 1, 4], "platform": 0, "tool": [0, 4], "other": [0, 1, 4], "machin": [0, 1, 4], "we": [0, 1, 4, 5], "huggingfac": [0, 1, 4], "chatgpt": [0, 3, 5], "chat": 0, "allow": [0, 4], "plai": [0, 4], "around": [0, 1, 4, 5], "nice": 0, "bard": 0, "googl": [0, 4], "It": [0, 4], "handi": [0, 4], "bloom": 0, "open": [0, 3, 5], "sourc": 0, "optim": [0, 1, 3, 4, 5], "multi": 0, "languagu": 0, "test": [0, 4], "via": [0, 4], "hosten": 0, "infer": [0, 1, 4], "openassist": 0, "altern": [0, 1], "s": [0, 4, 5], "base": [0, 1, 4], "foundat": 0, "llama": [0, 1], "meta": 0, "ai": [0, 4], "offer": [0, 4], "flan": 0, "t5": 0, "xxl": 0, "out": [0, 1, 4], "playground": 0, "varieti": 0, "like": [0, 1, 3, 4, 5], "version": 0, "call": [0, 4, 5], "wa": [0, 3], "fune": 0, "huggingchat": 0, "assist": [0, 3], "latest": 0, "advanc": [0, 5], "2": [0, 5], "ha": [0, 4, 5], "releas": [0, 4], "suit": 0, "new": [0, 4], "differ": [0, 4], "size": 0, "7b": 0, "13b": 0, "70b": 0, "paramet": [0, 4], "both": 0, "pretrain": [0, 4], "request": 0, "credenti": 0, "receiv": [0, 4], "token": [0, 4], "download": 0, "instruct": [0, 1, 3], "run": [0, 4], "code": [0, 4], "endpoint": 0, "latter": [0, 4], "separ": 0, "huggigfac": 0, "hub": 0, "warn": [0, 4], "smallest": 0, "local": [0, 4], "least": 0, "24gb": 0, "ram": [0, 4], "certain": 0, "python": [0, 1, 4], "packag": [0, 4], "being": 0, "instal": [0, 4], "environ": [0, 1, 4], "strongli": [0, 4], "non": 0, "trivial": 0, "maco": 0, "reach": [0, 4], "If": [0, 4], "familiar": [0, 1, 4, 5], "your": [0, 4], "dirti": 0, "would": [0, 4], "text": [0, 4, 5], "feel": [0, 4], "look": [0, 4], "either": [0, 4], "20": 0, "when": [0, 2, 4], "save": [0, 4], "payment": 0, "method": [0, 1, 2, 3, 4, 5], "so": [0, 1, 4, 5], "how": [0, 1, 4], "mani": [0, 4], "own": [0, 4], "respons": [0, 4], "There": [0, 4], "sever": [0, 4], "big": 0, "player": 0, "e": [0, 1, 3, 4, 5], "g": [0, 1, 3, 4, 5], "palm": 0, "field": [0, 1, 4], "public": 0, "don": [0, 4], "t": [0, 4, 5], "detail": [0, 1, 4, 5], "follow": [0, 3, 4, 5], "list": [0, 4, 5], "case": [0, 4], "variou": 0, "come": [0, 1], "These": [0, 2, 4], "prerequisit": 0, "walk": 0, "through": [0, 1, 4, 5], "import": [0, 1, 4], "Of": 0, "just": [0, 4], "singl": [0, 4], "suggest": [0, 1], "sea": 0, "content": 0, "internet": 0, "meant": [0, 4], "kick": 0, "algorithm": [0, 1, 3, 4], "welcom": 0, "brows": 0, "choos": [0, 4], "favorit": [0, 4], "1h": 0, "data": [0, 4], "scienc": [0, 5], "50min": 0, "pytorch": [0, 1, 4], "brief": [0, 2], "30": [0, 5], "min": 0, "vaswani": [0, 1], "2017": [0, 3], "A": [0, 1, 4], "origin": 0, "wrap": [1, 4], "shortli": 1, "term": 1, "understand": [1, 4, 5], "furthermor": 1, "conceptu": [1, 4, 5], "high": [1, 4], "level": 1, "reinforc": [1, 4, 5], "architecur": 1, "Then": 1, "teacher": 1, "forc": 1, "review": [1, 3, 4], "decod": [1, 4], "scheme": [1, 4], "prompt": 1, "conclud": 1, "context": [1, 5], "situat": [1, 4], "action": [1, 4], "polici": [1, 2, 3, 4, 5], "rather": 1, "inform": [1, 4], "intuit": [1, 4], "about": [1, 4, 5], "rotatori": 1, "posit": 1, "embed": [1, 4], "rope": 1, "popular": [1, 3], "sota": [1, 3], "encod": [1, 4], "great": [1, 2, 3, 4], "oon": 1, "wrapper": [1, 4], "goodfellow": 1, "2016": 1, "encyclopaed": 1, "webbook": [1, 5], "work": [1, 4, 5], "relat": 1, "explain": 1, "potenti": 1, "short": 1, "nucleu": 1, "sampl": [1, 4], "techniqu": [1, 3, 5], "sutton": [1, 2, 3], "barto": [1, 2, 3], "2018": [1, 2, 3], "http": [1, 4], "www": 1, "andrew": 1, "cmu": 1, "edu": 1, "10": [1, 5], "703": 1, "textbook": 1, "bartosutton": 1, "pdf": 1, "practic": [1, 4, 5], "howev": [1, 4], "youtub": [1, 2, 3], "specif": [1, 4], "commonli": [1, 2], "unless": [1, 5], "want": [1, 4], "mayb": 1, "suffici": 1, "blog": 1, "post": [1, 4], "implement": [1, 4], "presuppos": 1, "towardsdatasci": 1, "com": [1, 4], "da07f7aaca88": 1, "tutori": 1, "gym": 1, "kind": [1, 4], "go": [1, 4], "beyond": [1, 5], "scope": 1, "essenti": 1, "function": [1, 2, 4], "our": [1, 4], "experi": [1, 4, 5], "help": [1, 3, 4], "chanc": 1, "try": [1, 4], "far": 1, "exercis": [1, 5], "sheet": [1, 4, 5], "page": [1, 4, 5], "deeper": 2, "dive": 2, "formal": [2, 4], "framework": [2, 4], "markov": 2, "decis": [2, 4], "mdp": 2, "overview": [2, 3, 5], "valu": [2, 4], "solv": [2, 4], "focus": [2, 3], "gradient": [2, 3, 5], "languag": [2, 3, 4], "model": [2, 3, 4], "introduct": [2, 3, 5], "underpin": 2, "llm": [2, 3, 5], "video": [2, 3], "seri": [2, 3], "pieter": [2, 3], "abbeel": [2, 3], "consist": 3, "aim": 3, "clarifi": 3, "connect": 3, "between": 3, "especi": [3, 4], "emploi": 3, "recent": [3, 4], "system": 3, "human": [3, 5], "feedback": [3, 5], "approach": [3, 5], "train": [3, 4], "instructgpt": 3, "compon": [3, 4], "reward": [3, 4, 5], "were": [3, 4], "made": [3, 5], "domain": 3, "advantag": 3, "estim": [3, 4], "varianc": 3, "reduct": 3, "proxim": 3, "literatur": [3, 5], "close": 3, "appli": [3, 4], "outlin": 3, "blogpost": 3, "schulman": 3, "bai": 3, "2022": 3, "harmless": 3, "underlyinh": 3, "5": [3, 5], "ouyang": 3, "elicit": 3, "casper": 3, "problem": [3, 4], "fundament": 3, "limit": [3, 5], "make": 4, "sure": 4, "execut": 4, "colab": 4, "order": 4, "them": 4, "agent": [4, 5], "importantli": 4, "intend": [4, 5], "showcas": 4, "space": 4, "solut": 4, "further": 4, "dismai": 4, "therefor": 4, "lot": 4, "ml": [4, 5], "program": [4, 5], "warmli": [4, 5], "encourag": [4, 5], "take": [4, 5], "task": 4, "ask": 4, "question": [4, 5], "concern": 4, "fellow": 4, "student": [4, 5], "hint": 4, "mai": 4, "week": 4, "complet": [4, 5], "assign": [4, 5], "until": 4, "wed": 4, "novemb": [4, 5], "8th": [4, 5], "12": [4, 5], "30pm": 4, "submit": 4, "each": 4, "without": 4, "full": 4, "activ": [4, 5], "dedic": 4, "forum": [4, 5], "moodl": [4, 5], "particip": [4, 5], "earn": [4, 5], "extra": 4, "grade": 4, "quiz": 4, "answer": 4, "correspond": 4, "respect": [4, 5], "number": 4, "difficulti": 4, "i": 4, "consult": 4, "tuesdai": 4, "octob": [4, 5], "31st": [4, 5], "2pm": [4, 5], "4pm": 4, "zoom": 4, "under": 4, "usual": 4, "hesit": 4, "email": 4, "struggl": 4, "overwhelm": 4, "easili": 4, "press": 4, "icon": 4, "top": 4, "webook": 4, "option": [4, 5], "avoid": 4, "complic": 4, "To": 4, "speed": 4, "gpu": 4, "For": [4, 5], "navig": 4, "runtim": 4, "chang": 4, "type": 4, "conda": 4, "depend": 4, "keep": 4, "mind": 4, "weight": 4, "quit": 4, "bit": 4, "hard": 4, "drive": 4, "6gb": 4, "disc": 4, "8gb": 4, "stabl": 4, "who": [4, 5], "wish": 4, "final": [4, 5], "project": [4, 5], "tensorflow": 4, "abl": 4, "less": 4, "support": 4, "load": 4, "neo": 4, "3b": 4, "produc": 4, "continu": 4, "sentenc": 4, "beam": 4, "search": 4, "k": 4, "research": [4, 5], "overal": 4, "result": 4, "uncom": 4, "line": 4, "pip": 4, "pipelin": 4, "eleutherai": 4, "keyboardinterrupt": 4, "traceback": 4, "cell": 4, "4": [4, 5], "6": [4, 5], "file": 4, "opt": 4, "hostedtoolcach": 4, "9": [4, 5], "18": 4, "x64": 4, "lib": 4, "python3": 4, "site": 4, "__init__": 4, "py": 4, "870": 4, "config": 4, "feature_extractor": 4, "image_processor": 4, "revis": 4, "use_fast": 4, "devic": 4, "device_map": 4, "torch_dtyp": 4, "trust_remote_cod": 4, "model_kwarg": 4, "pipeline_class": 4, "kwarg": 4, "868": 4, "isinst": 4, "str": 4, "none": 4, "869": 4, "model_class": 4, "tf": 4, "targeted_task": 4, "pt": 4, "infer_framework_load_model": 4, "871": 4, "872": 4, "873": 4, "874": 4, "875": 4, "876": 4, "hub_kwarg": 4, "877": 4, "878": 4, "880": 4, "model_config": 4, "881": 4, "_commit_hash": 4, "269": 4, "263": 4, "logger": 4, "264": 4, "end": 4, "bin": 4, "265": 4, "266": 4, "268": 4, "from_pretrain": 4, "270": 4, "hasattr": 4, "eval": 4, "271": 4, "auto": 4, "auto_factori": 4, "566": 4, "_baseautomodelclass": 4, "pretrained_model_name_or_path": 4, "model_arg": 4, "564": 4, "elif": 4, "_model_map": 4, "kei": 4, "565": 4, "_get_model_class": 4, "return": 4, "567": 4, "568": 4, "569": 4, "rais": 4, "valueerror": 4, "570": 4, "f": 4, "unrecogn": 4, "configur": 4, "__class__": 4, "automodel": 4, "__name__": 4, "571": 4, "should": 4, "join": 4, "c": [4, 5], "572": 4, "modeling_util": 4, "3236": 4, "pretrainedmodel": 4, "cache_dir": 4, "ignore_mismatched_s": 4, "force_download": 4, "local_files_onli": 4, "use_safetensor": 4, "3233": 4, "_check_and_enable_flash_attn_2": 4, "3235": 4, "contextmanag": 4, "init_context": 4, "3238": 4, "sinc": 4, "copi": 4, "3239": 4, "gpt_neo": 4, "modeling_gpt_neo": 4, "659": 4, "gptneoforcausallm": 4, "self": 4, "657": 4, "def": 4, "658": 4, "super": 4, "gptneomodel": 4, "660": 4, "lm_head": 4, "nn": 4, "linear": 4, "hidden_s": 4, "vocab_s": 4, "bia": 4, "fals": 4, "662": 4, "initi": 4, "481": 4, "479": 4, "wpe": 4, "max_position_embed": 4, "embed_dim": 4, "480": 4, "drop": 4, "dropout": 4, "float": 4, "embed_dropout": 4, "h": 4, "modulelist": 4, "gptneoblock": 4, "layer_id": 4, "rang": 4, "num_lay": 4, "482": 4, "ln_f": 4, "layernorm": 4, "ep": 4, "layer_norm_epsilon": 4, "484": 4, "gradient_checkpoint": 4, "listcomp": 4, "0": 4, "315": 4, "313": 4, "attn": 4, "gptneoattent": 4, "314": 4, "ln_2": 4, "mlp": 4, "gptneomlp": 4, "inner_dim": 4, "294": 4, "intermediate_s": 4, "292": 4, "293": 4, "c_fc": 4, "295": 4, "c_proj": 4, "296": 4, "act": 4, "act2fn": 4, "activation_funct": 4, "torch": 4, "modul": 4, "101": 4, "in_featur": 4, "out_featur": 4, "dtype": 4, "99": 4, "els": 4, "100": 4, "register_paramet": 4, "reset_paramet": 4, "107": 4, "103": 4, "104": 4, "set": 4, "sqrt": 4, "kaiming_uniform": 4, "same": 4, "105": 4, "uniform": 4, "106": 4, "github": 4, "57109": 4, "init": 4, "kaiming_uniform_": 4, "math": 4, "108": 4, "109": 4, "fan_in": 4, "_": 4, "_calculate_fan_in_and_fan_out": 4, "419": 4, "tensor": 4, "mode": 4, "nonlinear": 4, "417": 4, "bound": 4, "std": 4, "calcul": 4, "standard": 4, "deviat": 4, "418": 4, "no_grad": 4, "uniform_": 4, "truth": 4, "qa": 4, "dataset": 4, "coupl": 4, "step": 4, "conveni": 4, "alreadi": 4, "where": 4, "someth": 4, "necessari": 4, "again": 4, "miss": 4, "load_dataset": 4, "util": 4, "dataload": 4, "tqdm": 4, "matplotlib": 4, "pyplot": 4, "plt": 4, "autotoken": 4, "automodelforcausallm": 4, "truthful_qa": 4, "inspect": 4, "format": 4, "print": 4, "valid": 4, "split": 4, "simplic": 4, "val": 4, "everyth": 4, "dataset_v": 4, "125m": 4, "add": 4, "pad": 4, "pad_token": 4, "eos_token": 4, "easi": 4, "preprocess": 4, "truthfulqadataset": 4, "helper": 4, "prefix": 4, "truncat": 4, "string": 4, "given": 4, "maximum": 4, "length": 4, "thei": 4, "batch": 4, "max_length": 4, "int": 4, "input": 4, "output": 4, "sequenc": 4, "128": 4, "__len__": 4, "len": 4, "__getitem__": 4, "idx": 4, "index": 4, "item": 4, "best_answ": 4, "mask": 4, "NOT": 4, "perform": 4, "TO": 4, "confus": 4, "correct": 4, "after": 4, "submiss": [4, 5], "deadlin": 4, "input_id": 4, "return_tensor": 4, "true": 4, "answer_id": 4, "instanti": 4, "train_dataset": 4, "loader": 4, "automat": 4, "iter": 4, "exampl": 4, "pair": 4, "batch_siz": 4, "8": [4, 5], "shuffl": 4, "trian": 4, "configut": 4, "epoch": 4, "train_step": 4, "cuda": 4, "is_avail": 4, "backend": 4, "mp": 4, "cpu": 4, "put": 4, "move": 4, "defin": 4, "rate": 4, "variabl": 4, "accumul": 4, "loss": 4, "over": [4, 5], "x": 4, "y": 4, "ground": 4, "squeez": 4, "forward": 4, "pass": [4, 5], "backward": 4, "append": 4, "updat": 4, "purpos": 4, "correctli": 4, "qualiti": 4, "doe": 4, "matter": 4, "That": 4, "worri": 4, "seem": 4, "evalu": 4, "plot": 4, "xlabel": 4, "ylabel": 4, "holi": 4, "grail": 4, "chess": 4, "map": 4, "onto": 4, "real": 4, "world": 4, "counterpart": 4, "game": 4, "comput": 4, "fill": 4, "veri": 4, "imagin": 4, "town": 4, "restaur": 4, "know": 4, "anyth": 4, "begin": 4, "mysteri": 4, "cannot": 4, "she": 4, "herself": 4, "figur": 4, "her": 4, "happiest": 4, "dure": 4, "time": 4, "give": 4, "highest": 4, "maxim": 4, "simplifi": 4, "instanc": [4, 5], "arm": 4, "bandit": 4, "avial": 4, "studi": 4, "assum": 4, "simplif": 4, "determinist": 4, "doesn": 4, "goe": 4, "prefer": [4, 5], "what": 4, "mean": 4, "assumpt": 4, "simpl": 4, "think": 4, "subject": 4, "degre": 4, "happi": 4, "eat": 4, "q_t": 4, "averag": 4, "wherein": 4, "past": 4, "frac": 4, "sum_": 4, "r_": 4, "a_i": 4, "mathbb": 4, "refer": 4, "th": 4, "decid": 4, "deriv": 4, "strategi": 4, "behavior": [4, 5], "greedi": 4, "epsilon": 4, "panda": 4, "pd": 4, "numpi": 4, "np": 4, "random": 4, "seed": 4, "food": 4, "thai": 4, "curri": 4, "best": 4, "q_": 4, "r_t": 4, "mid": 4, "a_t": 4, "On": 4, "lower": 4, "neg": 4, "poison": 4, "tpur": 4, "simul": [4, 5], "unknown": 4, "possibl": 4, "7": [4, 5], "true_restaurant_reward": 4, "normal": 4, "toi": 4, "tri": 4, "dai": 4, "write": 4, "down": 4, "everi": 4, "went": 4, "trial": 4, "town_environ": 4, "associ": 4, "algorith": 4, "track": 4, "behav": 4, "accord": 4, "amount": 4, "abov": 4, "select": [4, 5], "proport": 4, "randomli": 4, "chosen": 4, "sample_average_estim": 4, "old_act": 4, "old_reward": 4, "arrai": 4, "taken": 4, "probabl": 4, "best_act": 4, "previous": 4, "observ": 4, "old_indic": 4, "tie": 4, "break": [4, 5], "sum": 4, "max": 4, "choic": 4, "emb": 4, "loop": 4, "gather": 4, "90": 4, "log": 4, "actions_log": 4, "rewards_list": 4, "average_rewards_list": 4, "itentifi": 4, "check": 4, "often": 4, "optimal_act": 4, "argmax": 4, "cumsum": 4, "arang": 4, "now": 4, "THE": 4, "WITH": 4, "contain": 5, "materi": 5, "taught": 5, "univers": 5, "t\u00fcbingen": 5, "natur": 5, "enabl": 5, "cut": 5, "edg": 5, "intersect": 5, "larg": 5, "strive": 5, "mix": 5, "mainli": 5, "toward": 5, "interdisciplinari": 5, "present": 5, "partial": 5, "built": 5, "implic": 5, "linguist": 5, "cognit": 5, "societi": 5, "gain": 5, "recur": 5, "year": 5, "better": 5, "satisfi": 5, "user": 5, "rlhf": 5, "effect": 5, "societ": 5, "align": 5, "perspect": 5, "place": 5, "wednesdai": 5, "14": 5, "nauklerstr": 5, "35": 5, "seminar": 5, "room": 5, "1": 5, "master": 5, "bachelor": 5, "interest": 5, "strictli": 5, "preliminari": 5, "3": 5, "ppo": 5, "person": 5, "announc": 5, "otherwis": 5, "By": 5, "default": 5, "ect": 5, "mire": 5, "rough": 5, "homework": 5, "poster": 5, "group": 5, "websit": 5, "anounc": 5, "share": 5, "date": 5, "18th": 5, "intro": 5, "25th": 5, "1st": 5, "holidai": 5, "trpo": 5, "15th": 5, "22nd": 5, "29th": 5, "benchmark": 5, "comparison": 5, "decemb": 5, "6th": 5, "represent": 5, "13th": 5, "tbd": 5, "onlin": 5, "20th": 5, "buffer": 5, "christma": 5, "januari": 5, "10th": 5, "social": 5, "11": 5, "17th": 5, "24th": 5, "classifi": 5, "13": 5, "februari": 5, "7th": 5}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"languag": [0, 1, 5], "model": [0, 1, 5], "introduct": [0, 1], "larg": 0, "llm": 0, "high": 0, "level": 0, "overview": 0, "further": [0, 1, 2, 3], "materi": [0, 1, 2, 3], "option": [0, 1, 2, 3], "where": 0, "try": 0, "prepar": 0, "practic": 0, "program": [0, 1], "task": 0, "train": [1, 5], "rl": [1, 5], "transform": 1, "homework": [1, 4], "reinforc": [2, 3], "learn": [2, 3], "part": [2, 3], "2": [2, 4], "3": [3, 4], "rlhf": 3, "ppo": 3, "1": 4, "logist": 4, "preliminari": 4, "exercis": 4, "20": 4, "point": 4, "5": 4, "15": 4, "10": 4, "welcom": 5, "cours": 5, "descript": 5, "formalia": 5, "schedul": 5}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})