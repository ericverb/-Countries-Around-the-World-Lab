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
        document.getElementById('CountryName').innerText = Country.name
        document.getElementById('OfficialLanguage').innerText = Country.lang
        document.getElementById('HelloWorld').innerText = Country.greeting
        document.getElementById('flagImage').setAttribute('src', "https://flagcdn.com/128x96/us.png")
        DisplayColors(Country)
    }
    else if (input === "Mexico") 
    {
        Country = mexico;
        document.getElementById('CountryName').innerText = Country.name
        document.getElementById('OfficialLanguage').innerText = Country.lang
        document.getElementById('HelloWorld').innerText = Country.greeting
        document.getElementById('flagImage').setAttribute('src', "https://flagcdn.com/128x96/mx.png")
        DisplayColors(Country)
    }
    else if (input === "France")
     {
        Country = france;
        document.getElementById('CountryName').innerText = Country.name
        document.getElementById('OfficialLanguage').innerText = Country.lang
        document.getElementById('HelloWorld').innerText = Country.greeting
        document.getElementById('flagImage').setAttribute('src', "https://flagcdn.com/128x96/fr.png")
        DisplayColors(Country)    
    }
    else if (input === "Belguim") 
    {
        Country = belguim;
        document.getElementById('CountryName').innerText = Country.name
        document.getElementById('OfficialLanguage').innerText = Country.lang
        document.getElementById('HelloWorld').innerText = Country.greeting
        document.getElementById('flagImage').setAttribute('src', "https://flagcdn.com/128x96/be.png")
        DisplayColors(Country)     
    }
    else if (input === "Germany") 
    {
        Country = germany;
        document.getElementById('CountryName').innerText = Country.name
        document.getElementById('OfficialLanguage').innerText = Country.lang
        document.getElementById('HelloWorld').innerText = Country.greeting
        document.getElementById('flagImage').setAttribute('src', "https://flagcdn.com/128x96/de.png")
        DisplayColors(Country)
        
    }
    else
    {
        document.getElementById('CountryName').innerText = ''
        document.getElementById('OfficialLanguage').innerText = ''
        document.getElementById('HelloWorld').innerText = ''
        document.getElementById('Color1').style.backgroundColor = 'gray'
        document.getElementById('Color2').style.backgroundColor = 'white'
        document.getElementById('Color3').style.backgroundColor = 'lightgray'
        document.getElementById('flagImage').setAttribute('src', "https://flagcdn.com/128x96/un.png")
        
    }
}
