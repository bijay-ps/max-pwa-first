if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceworker.js')
      .then(function () {
        console.log('Service worker is registered');
      })
}
