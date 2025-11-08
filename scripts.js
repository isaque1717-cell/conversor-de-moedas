const convertButton = document.querySelector(".convetButton")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".inputCurrency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor real
    const currencyValueToConverted = document.querySelector(".currency-value") // Outras moedas

    const dolarToday = 5.2

    const convertedValue = inputCurrencyValue / dolarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency", 
        currency: "BRL"
    }).format(inputCurrencyValue)

    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
       style: "currency",
       currency: "USD" 
    }).format(convertedValue)

    console.log(convertedValue)
}

convertButton.addEventListener("click", convertValues)