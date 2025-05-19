const formFields = [
    { label: "Ім'я персонажа", name: "charname", class: "info"},
    { label: "Клас", name: "class", class: "info"},
    { label: "Підклас", name: "subclass", class: "info"},
    { label: "Передісторія", name: "background", class: "info"},
    { label: "Ім'я гравця", name: "playname", class: "info"},
    { label: "Раса", name: "race", class: "info"},
    { label: "Походження", name: "heritage", class: "info"},
    { label: "Розмір і тип істоти", name: "sizetype", class: "info"},

    { label: "Рівень", name: "levelvalue", class: "level"},
    { label: "Бонус Майстерності", name: "pb", class: "profbonus"},

    { label: "Міць", name: "phymod"},
    { name: "physcore"},
    { label: "Ряткидок", name: "physavemod"},
    { label: "", name: "phyadv", class: "adv"},
    { label: "", name: "phydisadv", class: "disadv"},
    { label: "", name: "physaveprof", class: "prof"},

    { label: "Удача", name: "lp"},

    { label: "", name: "acrobadv", class: "adv"},
    { label: "", name: "acrobdisadv", class: "disadv"},
    { label: "", name: "acrobprof", class: "prof" },
    { label: "Акробатика", name: "acrobmod"}, 
    
    { label: "", name: "initadv", class: "adv"},
    { label: "", name: "initdisadv", class: "disadv"},
    { label: "Ініціатива", name: "init"},

    { label: "Пас. Уважність", name: "passpercmod"},
    { label: "Пас.", name: "passskill"},
    { name: "passskilmod" },
    { label: "Швидкості", name: "speeds"},
    { label: "Відчуття", name: "senses"},

    { label: "КЗ", name: "ac"},
    { label: "Щит", name: "shield"},
    { name: "shieldison"},

    { name: "armor1name", value: "Неброньований"},
    { name: "armor1ac"},
    { name: "armor1ison"},

    { name: "armor2name",},
    { name: "armor2ac"},
    { name: "armor2ison"},
    
    { name: "armor3name",},
    { name: "armor3ac"},
    { name: "armor3ison"},

    { label: "Опори", name: "resistance"},
    { label: "Імунітети", name: "immunity"},

    { label: "Поточні", name: "currenthp"},
    { label: "Тимчасові", name: "temphp"},
    { label: "Макс:", name: "maxhp"},

    { name: "curhds"},
    { label: "Тип:", name: "hdtype"},

    { label: "", name: "deathadv", class: "adv"},
    { label: "", name: "deathdisadv", class: "disadv"},

    { label: "", name: "deathsuccess1", class: "prof" },
    { label: "", name: "deathsuccess2", class: "prof" },
    { label: "", name: "deathsuccess3", class: "prof" },

    { label: "", name: "deathfail1", class: "prof" },
    { label: "", name: "deathfail2", class: "prof" },
    { label: "", name: "deathfail3", class: "prof" },

    { label: "Втома", name: "exhaustion"},
    { label: "Концентрація", name: "concentration"},
    { label: "Стани", name: "conditions"},
];

export default formFields;