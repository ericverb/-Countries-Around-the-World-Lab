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


function DisplayColors(Country)
{
    document.getElementById('Color1').style.backgroundColor = Country.colors[0]
    document.getElementById('Color2').style.backgroundColor = Country.colors[1]
    document.getElementById('Color3').style.backgroundColor = Country.colors[2]
}


function SwitchCountry(name) {

    let input = name;
    document.getElementById('CountryName').style.textAlign = "center";
    document.getElementById('OfficialLanguage').style.textAlign = "center";
    document.getElementById('HelloWorld').style.textAlign = "center";
    
    if (input === "USA") 
    {
        Country = usa;
        let CountryName = document.getElementById('CountryName')
        CountryName.innerText = Country.name
        let OfficialLanguage = document.getElementById('OfficialLanguage')
        OfficialLanguage.innerText = Country.lang
        let HelloWorld = document.getElementById('HelloWorld')
        HelloWorld.innerText = Country.greeting
        DisplayColors(Country)
        let img = document.getElementById('flagImage');
        img.setAttribute('src', "https://flagcdn.com/128x96/us.png")
        
    }
    else if (input === "Mexico") 
    {
        Country = mexico;
        let CountryName = document.getElementById('CountryName')
        CountryName.innerText = Country.name
        let OfficialLanguage = document.getElementById('OfficialLanguage')
        OfficialLanguage.innerText = Country.lang
        let HelloWorld = document.getElementById('HelloWorld')
        HelloWorld.innerText = Country.greeting
        DisplayColors(Country)
        let img = document.getElementById('flagImage');
        img.setAttribute('src', "https://flagcdn.com/128x96/mx.png")
    }
    else if (input === "France")
     {
        Country = france;
        let CountryName = document.getElementById('CountryName')
        CountryName.innerText = Country.name
        let OfficialLanguage = document.getElementById('OfficialLanguage')
        OfficialLanguage.innerText = Country.lang
        let HelloWorld = document.getElementById('HelloWorld')
        HelloWorld.innerText = Country.greeting
        DisplayColors(Country)
        let img = document.getElementById('flagImage');
        img.setAttribute('src', "https://flagcdn.com/128x96/fr.png")      
    }
    else if (input === "Belguim") 
    {
        Country = belguim;
        let CountryName = document.getElementById('CountryName')
        CountryName.innerText = Country.name
        let OfficialLanguage = document.getElementById('OfficialLanguage')
        OfficialLanguage.innerText = Country.lang
        let HelloWorld = document.getElementById('HelloWorld')
        HelloWorld.innerText = Country.greeting
        DisplayColors(Country)
        let img = document.getElementById('flagImage');
        img.setAttribute('src', "https://flagcdn.com/128x96/be.png")       
    }
    else if (input === "Germany") 
    {
        Country = germany;
        let CountryName = document.getElementById('CountryName')
        CountryName.innerText = Country.name
        let OfficialLanguage = document.getElementById('OfficialLanguage')
        OfficialLanguage.innerText = Country.lang
        let HelloWorld = document.getElementById('HelloWorld')
        HelloWorld.innerText = Country.greeting
        DisplayColors(Country)
        let img = document.getElementById('flagImage');
        img.setAttribute('src', "https://flagcdn.com/128x96/de.png")
        
    }
    else
    {
        let CountryName = document.getElementById('CountryName')
        CountryName.innerText = ''
        let OfficialLanguage = document.getElementById('OfficialLanguage')
        OfficialLanguage.innerText = ''
        let HelloWorld = document.getElementById('HelloWorld')
        HelloWorld.innerText = ''
        document.getElementById('Color1').style.backgroundColor = 'gray'
        document.getElementById('Color2').style.backgroundColor = 'white'
        document.getElementById('Color3').style.backgroundColor = 'lightgray'
        let img = document.getElementById('flagImage');
        img.setAttribute('src', "https://flagcdn.com/128x96/un.png")
        
    }
}
