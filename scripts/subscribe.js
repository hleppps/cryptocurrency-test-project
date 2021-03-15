function checkEmail(element) {
   const value = element.value
   const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   const button = document.querySelector('.a-button-submit')

   if (reg.test(value)) {
      button.disabled = false;
   } else {
      button.disabled = true;
   }
}

window.onload = () => {

   $('.m-select-currency-subscribe').selectize({
      sortField: 'text'
   });

}