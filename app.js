console.log('Kvaak kvaak! 🦆');

setInterval(() => {
  const birdElement = document.createElement('span');
  birdElement.innerHTML = 'Kot kot! 🐔';
  document.body.appendChild(birdElement);
}, 1000);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
