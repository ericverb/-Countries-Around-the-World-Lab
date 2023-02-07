class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "English", "Hello!", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola!", ["red", "white", "green"]);
let france = new Country("France", "French", "Bonjour!", ["blue", "white", "red"])
let belgium = new Country("Belgium", "Flemish", "Hallo", ["black", "yellow", "red"])
let germany = new Country("Germany", "German", "Hallo!", ["black", "red", "yellow"])


function DisplayColors(Country) {
    document.getElementById('Color1').style.backgroundColor = Country.colors[0]
    document.getElementById('Color3').style.backgroundColor = Country.colors[1]
    document.getElementById('Color2').style.backgroundColor = Country.colors[2]
}


function SwitchCountry(countrySelected) {

    let input = countrySelected;
    document.getElementById('CountryName').style.textAlign = "center";
    document.getElementById('OfficialLanguage').style.textAlign = "center";
    document.getElementById('HelloWorld').style.textAlign = "center";

    switch (input) {
        case 'USA':
            Country = usa;
            document.getElementById('CountryName').innerText = Country.name
            document.getElementById('OfficialLanguage').innerText = Country.lang
            document.getElementById('HelloWorld').innerText = Country.greeting
            document.getElementById('flagImage').setAttribute('src', "https://flagcdn.com/128x96/us.png")
            DisplayColors(Country)
            break;
        case 'Mexico':
            Country = mexico;
            document.getElementById('CountryName').innerText = Country.name
            document.getElementById('OfficialLanguage').innerText = Country.lang
            document.getElementById('HelloWorld').innerText = Country.greeting
            document.getElementById('flagImage').setAttribute('src', "https://flagcdn.com/128x96/mx.png")
            DisplayColors(Country)
            break;
        case 'France':
            Country = france;
            document.getElementById('CountryName').innerText = Country.name
            document.getElementById('OfficialLanguage').innerText = Country.lang
            document.getElementById('HelloWorld').innerText = Country.greeting
            document.getElementById('flagImage').setAttribute('src', "https://flagcdn.com/128x96/fr.png")
            DisplayColors(Country)
            break;
        case 'Belgium':
            Country = belgium;
            document.getElementById('CountryName').innerText = Country.name
            document.getElementById('OfficialLanguage').innerText = Country.lang
            document.getElementById('HelloWorld').innerText = Country.greeting
            document.getElementById('flagImage').setAttribute('src', "https://flagcdn.com/128x96/be.png")
            DisplayColors(Country)
            break;
        case 'Germany':
            Country = germany;
            document.getElementById('CountryName').innerText = Country.name
            document.getElementById('OfficialLanguage').innerText = Country.lang
            document.getElementById('HelloWorld').innerText = Country.greeting
            document.getElementById('flagImage').setAttribute('src', "https://flagcdn.com/128x96/de.png")
            DisplayColors(Country)
            break;
        default:
            document.getElementById('CountryName').innerText = 'Hello'
            document.getElementById('OfficialLanguage').innerText = 'and welcome too'
            document.getElementById('HelloWorld').innerText = 'countries around the world'
            document.getElementById('Color1').style.backgroundColor = 'gray'
            document.getElementById('Color2').style.backgroundColor = 'white'
            document.getElementById('Color3').style.backgroundColor = 'lightgray'
            document.getElementById('flagImage').setAttribute('src', "https://flagcdn.com/128x96/un.png")
            break;
    }
}
