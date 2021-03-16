function checkInputValidity(element) {
   const input_value = element.value
   const reg = /^\d+$/
   let button_calculate = document.querySelector('.a-button-calculate')

   button_calculate.disabled = !(reg.test(input_value) == true)
}

function loadData() {
   var settings = {
     "url": "https://api.coincap.io/v2/assets",
     "method": "GET",
     "timeout": 0,
   }

   $.ajax(settings).done(function (response) {
      const currencies = Object.values(response['data'])
      fillSelect(currencies)
      // calculatePrice(currencies)
   })
}

function fillSelect(currencies) {
   let currency_select = document.querySelector('.a-select-currency-calculator')
   currency_select.innerHTML = ''
   for (currency of currencies) {
      const option_value = currency['name']

      let option = document.createElement('option')
      console.log(option)
      option.innerHTML = option_value
      option.classList.add("a-currency")

      currency_select.appendChild(option)
   }
}


// TO FIX
function calculatePrice(data) {
   let name = ''
   let abbr = ''
   let rate = 0
   let sum = 0
   let input_currency = document.querySelector('.a-select-currency-calculator')
   let input_value = document.querySelector('.a-input-amount')
   let a_sum = document.getElementById('a-sum')
   let a_abbr = document.getElementById('a-abbr')
   let a_rate = document.getElementById('a-rate')
   let a_name = document.getElementById('a-name')

   input_value = input_value.value
   input_currency = (input_currency.value).toLowerCase()
   input_currency = input_currency.replace(' ', '-')

   for (element in data) {
      if (data[element]['id'] == input_currency) {
         currency_col = data[element]
         
         name = currency_col['name']
         abbr = currency_col['symbol']
         rate = currency_col['priceUsd']

      }
   }

   sum = input_value / rate
   sum = sum == 0 ? sum : sum.toFixed(5) 

   rate = Number(rate).toFixed(5)

   a_sum.innerHTML = prettify(sum)
   a_abbr.innerHTML = abbr
   a_rate.innerHTML = prettify(rate)
   a_name.innerHTML = name

}

function prettify(num) {
   var n = num.toString()
   return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
}