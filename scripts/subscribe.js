let is_email_verified = false
let is_currency_selected = false

function checkEmailValidity(element) {
   const value = element.value
   const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
   const select_currency_value = document.querySelector('.m-select-currency-subscribe').value

   is_email_verified = reg.test(value) ? true : false
   isSubsribeable()
}

function checkCurrencySelection() {
   is_currency_selected = true
   isSubsribeable()
}

function fillSubscribeSelect(currencies) {
   let currency_select = document.querySelector('.m-select-currency-subscribe')
   let empty_option = document.createElement('option')
   currency_select.innerHTML = ''

   empty_option.value = ''
   empty_option.innerHTML = 'Enter currency'
   currency_select.appendChild(empty_option)

   for (currency of currencies) {
      const option_value = currency['name']

      let option = document.createElement('option')
      option.innerHTML = option_value

      currency_select.appendChild(option)
   }

   $('.ui.dropdown').dropdown();
}

function isSubsribeable() {
   button = document.querySelector('.a-button-submit')
   button.disabled = is_email_verified && is_currency_selected ? false : true
}

