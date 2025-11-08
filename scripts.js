const convertButton = document.querySelector(".convetButton")
const currencySelect = document.querySelector(".currency-select")
function convertValues() {
    const inputCurrencyValue = document.querySelector(".inputCurrency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor real
    const currencyValueToConverted = document.querySelector(".currency-value") // Outras moedas
    console.log(currencySelect.value)

    const dolarToday = 5.2
    const euroToDay = 6.2


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


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

convertButton.addEventListener("click", convertValues)