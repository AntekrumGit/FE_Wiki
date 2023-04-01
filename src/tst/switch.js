///switch alternatives
const extension = '.css';
function traditSwitch(val) {
    let contentType;
    switch (val) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        default:
    }
}
//#1
const objSwitch = {
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
};
console.log(objSwitch['.css'] || 'text/html');
console.log(objSwitch[extension] || 'text/html');

//#2
const switchMap = new Map();
switchMap.set('.css', 'text/css');
switchMap.set('.js', 'text/javascript');
console.log(switchMap[extension] || 'text/html');
