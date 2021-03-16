function loadData() {
   var settings = {
     "url": "https://api.coincap.io/v2/assets",
     "method": "GET",
     "timeout": 0,
   }

   $.ajax(settings).done(function (response) {
      calculatePrice(response)
   })
}

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

   data = data['data']

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