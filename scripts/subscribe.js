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
   alert('q')
   is_currency_selected = true
   isSubsribeable()
}

function fillSubscribeSelect(currencies) {
   let currency_searcher = document.querySelector('.m-currency-searcher-subscribe').value
   let currencies_container = document.querySelector('.m-currencies-container-subscribe')

   for (currency of currencies) {
      const li_value = currency['name']

      let li = document.createElement('li')
      li.innerHTML = li_value
      li.classList.add('a-currency-name')

      currencies_container.appendChild(li)
   }
}

function isSubsribeable() {
   button = document.querySelector('.a-button-submit')
   button.disabled = is_email_verified && is_currency_selected ? false : true
}

