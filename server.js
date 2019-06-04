const prerender = require('prerender');
const chromeLocation = require('puppeteer').executablePath();
console.log(chromeLocation);

const server = prerender({
    chromeLocation,
    chromeFlags: ['--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars', '--no-sandbox']
});

server.use(require('prerender-memory-cache'))

server.start();
