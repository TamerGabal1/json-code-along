const pokemon = [
    {
        "base": {
            "hp": 45,
            "atk": 49,
            "def": 49,
            "sp_atk": 65,
            "sp_def": 65,
            "spd": 45
        },
        "name": "Bulbasaur",
        "id": "001",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png"
        ],
        "type":[
            "Grass",
            "Poison"
        ]
    },{
        "base": {
            "hp": 39,
            "atk": 52,
            "def": 43,
            "sp_atk": 60,
            "sp_def": 50,
            "spd": 65
        },
        "name": "Charmander",
        "id": "004",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/4.png"
        ],
        "type":[
            "Fire",
            "none"
        ]
    },{
        "base": {
            "hp": 44,
            "atk": 48,
            "def": 65,
            "sp_atk": 50,
            "sp_def": 64,
            "spd": 43
        },
        "name": "Squirtle",
        "id": "007",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/7.png"
        ],
        "type":[
            "Water",
            "none"
        ]
    },{
        "base": {
            "hp": 45,
            "atk": 49,
            "def": 65,
            "sp_atk": 49,
            "sp_def": 65,
            "spd": 45
        },
        "name": "Chikorita",
        "id": "152",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/152.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/152.png"
        ],
        "type":[
            "Grass",
            "none"
        ]
    },{
        "base": {
            "hp": 39,
            "atk": 52,
            "def": 43,
            "sp_atk": 60,
            "sp_def": 50,
            "spd": 65
        },
        "name": "Cyndaquil",
        "id": "155",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/155.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/155.png"
        ],
        "type":[
            "Fire",
            "none"
        ]
    },{
        "base": {
            "hp": 50,
            "atk": 65,
            "def": 64,
            "sp_atk": 44,
            "sp_def": 48,
            "spd": 43
        },
        "name": "Totodile",
        "id": "158",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/158.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/158.png"
        ],
        "type":[
            "Water",
            "none"
        ]
    },{
        "base": {
            "hp": 40,
            "atk": 45,
            "def": 35,
            "sp_atk": 65,
            "sp_def": 55,
            "spd": 70
        },
        "name": "Treecko",
        "id": "252",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/252.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/252.png"
        ],
        "type":[
            "Grass",
            "none"
        ]
    },{
        "base": {
            "hp": 45,
            "atk": 60,
            "def": 40,
            "sp_atk": 70,
            "sp_def": 50,
            "spd": 45
        },
        "name": "Torchic",
        "id": "255",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/255.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/255.png"
        ],
        "type":[
            "Fire",
            "none"
        ]
    },{
        "base": {
            "hp": 50,
            "atk": 70,
            "def": 50,
            "sp_atk": 50,
            "sp_def": 50,
            "spd": 40
        },
        "name": "Mudkip",
        "id": "258",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/258.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/258.png"
        ],
        "type":[
            "Water",
            "none"
        ]
    },{
        "base": {
            "hp": 55,
            "atk": 68,
            "def": 64,
            "sp_atk": 45,
            "sp_def": 55,
            "spd": 31
        },
        "name": "Turtwig",
        "id": "387",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/387.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/387.png"
        ],
        "type":[
            "Grass",
            "none"
        ]
    },{
        "base": {
            "hp": 44,
            "atk": 58,
            "def": 44,
            "sp_atk": 58,
            "sp_def": 44,
            "spd": 61
        },
        "name": "Chimchar",
        "id": "390",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/390.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/390.png"
        ],
        "type":[
            "Fire",
            "none"
        ]
    },{
        "base": {
            "hp": 53,
            "atk": 51,
            "def": 53,
            "sp_atk": 61,
            "sp_def": 56,
            "spd": 40
        },
        "name": "Piplup",
        "id": "393",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/393.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/393.png"
        ],
        "type":[
            "Water",
            "none"
        ]
    },{
        "base": {
            "hp": 45,
            "atk": 45,
            "def": 55,
            "sp_atk": 45,
            "sp_def": 55,
            "spd": 63
        },
        "name": "Snivy",
        "id": "495",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/495.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/495.png"
        ],
        "type":[
            "Grass",
            "none"
        ]
    },{
        "base": {
            "hp": 65,
            "atk": 63,
            "def": 45,
            "sp_atk": 45,
            "sp_def": 45,
            "spd": 45
        },
        "name": "Tepig",
        "id": "498",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/498.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/498.png"
        ],
        "type":[
            "Fire",
            "none"
        ]
    },{
        "base": {
            "hp": 55,
            "atk": 55,
            "def": 45,
            "sp_atk": 63,
            "sp_def": 45,
            "spd": 45
        },
        "name": "Oshawott",
        "id": "501",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/501.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/501.png"
        ],
        "type":[
            "Water",
            "none"
        ]
    },{
        "base": {
            "hp": 56,
            "atk": 61,
            "def": 65,
            "sp_atk": 48,
            "sp_def": 45,
            "spd": 38
        },
        "name": "Chespin",
        "id": "650",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/650.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/650.png"
        ],
        "type":[
            "Grass",
            "none"
        ]
    },{
        "base": {
            "hp": 40,
            "atk": 45,
            "def": 40,
            "sp_atk": 62,
            "sp_def": 60,
            "spd": 60
        },
        "name": "Fennekin",
        "id": "653",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/653.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/653.png"
        ],
        "type":[
            "Fire",
            "none"
        ]
    },{
        "base": {
            "hp": 41,
            "atk": 56,
            "def": 40,
            "sp_atk": 62,
            "sp_def": 44,
            "spd": 71
        },
        "name": "Froakie",
        "id": "656",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/656.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/656.png"
        ],
        "type":[
            "Water",
            "none"
        ]
    },{
        "base": {
            "hp": 68,
            "atk": 55,
            "def": 55,
            "sp_atk": 50,
            "sp_def": 50,
            "spd": 42
        },
        "name": "Rowlet",
        "id": "722",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/722.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/722.png"
        ],
        "type":[
            "Grass",
            "Flying"
        ]
    },{
        "base": {
            "hp": 45,
            "atk": 65,
            "def": 40,
            "sp_atk": 60,
            "sp_def": 40,
            "spd": 70
        },
        "name": "Litten",
        "id": "725",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/725.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/725.png"
        ],
        "type":[
            "Fire",
            "none"
        ]
    },{
        "base": {
            "hp": 50,
            "atk": 54,
            "def": 54,
            "sp_atk": 66,
            "sp_def": 56,
            "spd": 40
        },
        "name": "Popplio",
        "id": "728",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/728.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/728.png"
        ],
        "type":[
            "Water",
            "none"
        ]
    },{
        "base": {
            "hp": 50,
            "atk": 65,
            "def": 50,
            "sp_atk": 40,
            "sp_def": 40,
            "spd": 65
        },
        "name": "Grookey",
        "id": "810",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/810.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/810.png"
        ],
        "type":[
            "Grass",
            "none"
        ]
    },{
        "base": {
            "hp": 50,
            "atk": 71,
            "def": 40,
            "sp_atk": 40,
            "sp_def": 40,
            "spd": 69
        },
        "name": "Scorbunny",
        "id": "813",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/813.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/813.png"
        ],
        "type":[
            "Fire",
            "none"
        ]
    },{
        "base": {
            "hp": 50,
            "atk": 40,
            "def": 40,
            "sp_atk": 70,
            "sp_def": 40,
            "spd": 70
        },
        "name": "Sobble",
        "id": "816",
        "image":[
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/816.png",
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/816.png"
        ],
        "type":[
            "Water",
            "none"
        ]
    }
];