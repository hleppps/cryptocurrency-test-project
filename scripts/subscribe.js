let is_email_verified = false;

function checkEmail(element) {
   const value = element.value
   const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
   const select_currency_value = document.querySelector('.m-select-currency-subscribe').value

   is_email_verified = reg.test(value) ? true : false
   isSubsribeable()
}

function isSubsribeable() {
   button = document.querySelector('.a-button-submit')
   button.disabled = is_email_verified && is_currency_selected ? false : true
}