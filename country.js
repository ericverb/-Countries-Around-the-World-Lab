class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Hello!", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let france = new Country("France", "Arabic and Berber", "Bonjour!", ["blue", "white", "red"])
let belguim = new Country("Belguim", "Dutch and Flemish", "Hallo", ["black", "yellow", "red"])
let germany = new Country("Germany", "German", "Hallo!", ["black", "red", "yellow"])





function SwitchCountry(name) {

    let input = name;
    
    if (input === "USA") {
        Country = usa;
        let CountryName = document.getElementById('CountryName')
        CountryName.innerText = Country.name
        let OfficialLanguage = document.getElementById('OfficialLanguage')
        OfficialLanguage.innerText = Country.lang
        let HelloWorld = document.getElementById('HelloWorld')
        HelloWorld.innerText = Country.greeting
        document.getElementById('Color1').style.backgroundColor = Country.colors[0]
        document.getElementById('Color2').style.backgroundColor = Country.colors[1]
        document.getElementById('Color3').style.backgroundColor = Country.colors[2]
        let img = document.getElementById('flagImage');



        img.setAttribute('src', "https://flagcdn.com/128x96/us.png")
        
    }
    else if (input === "Mexico") {
        Country = mexico;
        let CountryName = document.getElementById('CountryName')
        CountryName.innerText = Country.name
        let OfficialLanguage = document.getElementById('OfficialLanguage')
        OfficialLanguage.innerText = Country.lang
        let HelloWorld = document.getElementById('HelloWorld')
        HelloWorld.innerText = Country.greeting
        document.getElementById('Color1').style.backgroundColor = Country.colors[0]
        document.getElementById('Color2').style.backgroundColor = Country.colors[1]
        document.getElementById('Color3').style.backgroundColor = Country.colors[2]
        let img = document.getElementById('flagImage');
        img.setAttribute('src', "https://flagcdn.com/128x96/mx.png")
    }
    else if (input === "France") {
        Country = france;
        let CountryName = document.getElementById('CountryName')
        CountryName.innerText = Country.name
        let OfficialLanguage = document.getElementById('OfficialLanguage')
        OfficialLanguage.innerText = Country.lang
        let HelloWorld = document.getElementById('HelloWorld')
        HelloWorld.innerText = Country.greeting
        document.getElementById('Color1').style.backgroundColor = Country.colors[0]
        document.getElementById('Color2').style.backgroundColor = Country.colors[1]
        document.getElementById('Color3').style.backgroundColor = Country.colors[2]
        let img = document.getElementById('flagImage');
        img.setAttribute('src', "https://flagcdn.com/128x96/fr.png")      
    }
    else if (input === "Belguim") {
        Country = belguim;
        let CountryName = document.getElementById('CountryName')
        CountryName.innerText = Country.name
        let OfficialLanguage = document.getElementById('OfficialLanguage')
        OfficialLanguage.innerText = Country.lang
        let HelloWorld = document.getElementById('HelloWorld')
        HelloWorld.innerText = Country.greeting
        document.getElementById('Color1').style.backgroundColor = Country.colors[0]
        document.getElementById('Color2').style.backgroundColor = Country.colors[1]
        document.getElementById('Color3').style.backgroundColor = Country.colors[2]
        let img = document.getElementById('flagImage');
        img.setAttribute('src', "https://flagcdn.com/128x96/be.png")       
    }
    else if (input === "Germany") {
        Country = germany;
        let CountryName = document.getElementById('CountryName')
        CountryName.innerText = Country.name
        let OfficialLanguage = document.getElementById('OfficialLanguage')
        OfficialLanguage.innerText = Country.lang
        let HelloWorld = document.getElementById('HelloWorld')
        HelloWorld.innerText = Country.greeting
        document.getElementById('Color1').style.backgroundColor = Country.colors[0]
        document.getElementById('Color2').style.backgroundColor = Country.colors[1]
        document.getElementById('Color3').style.backgroundColor = Country.colors[2]
        let img = document.getElementById('flagImage');
        img.setAttribute('src', "https://flagcdn.com/128x96/de.png")
        
    }
}
