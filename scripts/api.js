// function loadData() {

//   $.ajax(settings).done(function (response) {
//     const currencies = Object.values(response['data'])
//     calculatePrice(currencies)
//   })
// }

function request(callback) {
  var settings = {
    "url": "https://api.coincap.io/v2/assets",
    "method": "GET",
    "timeout": 0,
  }

  $.ajax(settings).done(function (response) {
    const currencies = Object.values(response['data'])
    return callback(currencies)
  })
}