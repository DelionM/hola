if('serviceWorker' in navigator){
console.log('si ');
}
else
console.log('no');

navigator.serviceWorker.register('/sw.js');