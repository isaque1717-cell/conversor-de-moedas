const convertButton = document.querySelector(".convertButton")
const currencySelectFirst = document.querySelector(".currency-select-first")
const currencySelect = document.querySelector(".currency-select-second")
const currencyReal = document.querySelector(".currency")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".inputCurrency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor real
    const currencyValueToConverted = document.querySelector(".currency-value") // Outras moedas
    console.log(currencySelect.value)

   const realToDay = 1.0
    const dolarToday = 5.2
    const euroToDay = 6.2
    const bitcoinToDay = 10.5


    if (currencySelect.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToDay)

    }

    if (currencySelect.value == "bitcoin") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToDay)

    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyNameFirst = document.querySelector(".currency-name-first")
    const currencyImgFirst = document.querySelector(".currency-img-first")


    const currencyNameSecond = document.querySelector(".currency-name-second")
    const currencyImgSecond = document.querySelector(".currency-img-second")

    if (currencySelectFirst.value == "real") {

        currencyNameFirst.innerHTML = "Real Brasileiro"
        currencyImgFirst.src = "assets/Brasil.png"

    }

    if (currencySelectFirst.value == "dolar") {

        currencyNameFirst.innerHTML = "dolar americano"
        currencyImgFirst.src = "assets/estados-unidos (1) 1.png"

    }

    if (currencySelectFirst.value == "euro") {

        currencyNameFirst.innerHTML = "Euro"
        currencyImgFirst.src = "assets/euro.png"

    }
    if (currencySelectFirst.value == "bitcoin") {

        currencyNameFirst.innerHTML = "bitcoin"
        currencyImgFirst.src = "assets/bitcoin.png"

    }



    if (currencySelect.value == "dolar") {

        currencyNameSecond.innerHTML = "dolar americano"
        currencyImgSecond.src = "assets/estados-unidos (1) 1.png"


    }
    if (currencySelect.value == "real") {

        currencyNameSecond.innerHTML = "Real Brasileiro"
        currencyImgSecond.src = "assets/Brasil.png"

    }

    if (currencySelect.value == "euro") {

        currencyNameSecond.innerHTML = "Euro"
        currencyImgSecond.src = "assets/euro.png"

    }
    if (currencySelect.value == "bitcoin") {

        currencyNameSecond.innerHTML = "bitcoin"
        currencyImgSecond.src = "assets/bitcoin.png"

    }

    convertValues()
}

currencySelectFirst.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)