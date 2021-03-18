function checkCalculatorInputValidity(element) {
   const input_value = element.value
   const reg = /^\d+$/
   let button_calculate = document.querySelector('.a-button-calculate')

   button_calculate.disabled = !(reg.test(input_value) == true)
}

function fillCalculatorSelect(currencies) {
   let currency_select = document.querySelector('.a-select-currency-calculator')
   currency_select.innerHTML = ''
   for (currency of currencies) {
      const option_value = currency['name']

      let option = document.createElement('option')

      option.innerHTML = option_value
      option.classList.add("a-currency")

      currency_select.appendChild(option)
   }

   request(calculatePrice)
}

function calculatePrice(currencies) {

   let selected_currency_name = document.querySelector('.a-select-currency-calculator').value
   let input_money_amount = document.querySelector('.a-input-amount').value

   let a_label_in_currency = document.querySelector('.a-label-in-currency')
   let a_label_currency_abbr = document.querySelector('.a-label-currency-abbr')
   let a_label_rate = document.querySelector('.a-label-rate')
   let a_label_currency_name = document.querySelector('.a-label-currency-name')

   for (currency of currencies) {
      console.log()
      if (currency['name'] === selected_currency_name) {

         let total_sum = input_money_amount / currency['priceUsd']
         total_sum = total_sum === 0 ? 0 : prettifyNumber(total_sum.toFixed(5))

         let rate = prettifyNumber((+currency['priceUsd']).toFixed(5))


         a_label_in_currency.innerHTML = total_sum
         a_label_rate.innerHTML = rate
         a_label_currency_abbr.innerHTML = currency['symbol']
         a_label_currency_name.innerHTML = currency['name']

      }
   }
}

function prettifyNumber(num) {
   var n = num.toString()
   return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
}