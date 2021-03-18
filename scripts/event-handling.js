function handleEvent() {
   let check_email_validity = document.querySelector('.a-input-email')
   check_email_validity.addEventListener('keyup', checkEmailValidity)

   let check_calculator_input_validity = document.querySelector('.a-input-amount')
   check_calculator_input_validity.addEventListener('keyup', checkCalculatorInputValidity)
}