const extension = '.css';
const extension2 = '.js';
const extension3 = '.fne';
const lll = 'plov';
const objSwitch = {
    '.json': 'application/json', //||==> вернет стринг
    '.css': () => 'tttt', //||==> вернет функцию, которую нужно дополнительно вызвать
    '.js': (val) => `text/javascript ${val}`, //||==> вернеть функцию с аргументом
    '.fne': (val) => `text/javascript ${val}`,
    gtg: 'rrr', //вызов через точку доступен так как ключ не стринг
    fff: (val) => `selfInvolc with param: ${val}`,
};

console.log(objSwitch[extension]() || 'text/html');
console.log(objSwitch[extension2]('extra') || 'text/html');
console.log(objSwitch[extension3](lll) || 'text/html');
console.log(objSwitch.gtg || 'text/html');
console.log(objSwitch.fff(lll) || 'text/html');
