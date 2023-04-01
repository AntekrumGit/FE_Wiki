//you have X holes and rabbit, <<adjacent hole>>
//first you pick one hole and see if the rabbot is there, if not rabbit will jump to nearest (adjacent) (+1/-1) hole
//so rabbit cant stay in one place and he can jump to the jole which you just checked (if he was not there) and you will not going to catch him evenif you just checked this hole

let len = 30; // holes q-ty
let pos = Math.floor(Math.random() * len); //start rabbit
console.log('Rabbit started', pos);
function step() {
    let prev = pos;
    if (pos === len) {
        pos--;
    } else if (pos === 0) {
        pos++;
    } else {
        if (Math.random() > 0.5) {
            pos++;
        } else {
            pos--;
        }
    }

    console.log('Rabbit jumped from', prev, 'to', pos);
}

let found = false;
for (let i = 0; i < len; i++) {
    let attempt = i;
    console.log('Going to check', attempt);
    if (attempt === pos) {
        console.log('Found the rabbit at', pos);
        found = true;
        break;
    }
    step();
}
if (!found) {
    for (let i = 1; i < len; i++) {
        let attempt = i;
        console.log('Going to check', attempt);
        if (attempt === pos) {
            console.log('Found the rabbit at', pos);
            found = true;
            break;
        }
        step();
    }
}
if (!found) {
    console.log('Didnt Find');
}
