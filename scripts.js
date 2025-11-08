const convertButton = document.querySelector(".convertButton")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".inputCurrency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor real
    const currencyValueToConverted = document.querySelector(".currency-value") // Outras moedas
    console.log(currencySelect.value)

    const dolarToday = 5.2
    const euroToDay = 6.2
    const bitcoinToDay =  10.5


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

function changeCurrency (){
   const currencyName = document.getElementById("currency-name")
   const currencyImg = document.querySelector(".currency-img")

   if (currencySelect.value == "dolar") {

    currencyName.innerHTML = "dolar americano"
    currencyImg.src = "assets/estados-unidos (1) 1.png"

   }

      if (currencySelect.value == "euro") {

    currencyName.innerHTML = "Euro"
    currencyImg.src = "assets/euro.png"

   }
      if (currencySelect.value == "bitcoin") {

    currencyName.innerHTML = "bitcoin"
    currencyImg.src = "assets/bitcoin.png"

   }
  
   convertValues()
}

currencySelect.addEventListener("change",changeCurrency )

convertButton.addEventListener("click", convertValues)