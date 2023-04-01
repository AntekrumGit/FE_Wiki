function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, time);
    });
}

const myPromiseAll = (promises) => {
    const allpromises = [];
    let promisesCounter = 0;
    return new Promise((resolve, reject) => {
        promises.forEach((p, indx) => {
            p.then((res) => {
                allpromises[indx] = res;
                promisesCounter++;
                if (promisesCounter === promises.length) {
                    resolve(allpromises);
                }
            }).catch((err) => reject(err));
        });
    });
};

// Promise.all([
myPromiseAll([
    showText('hello', 3000),
    showText('tttt', 2000),
    // Promise.resolve("hi"),
    // Promise.reject("bye"),
]).then((value) => console.log(value));
