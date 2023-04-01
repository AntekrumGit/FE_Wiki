//промисы с нуля https://www.youtube.com/watch?v=rJ5u7rsMU6g

console.log('first');

const reTime = new Promise((res, rej) => {
    setTimeout(() => {
        res('True');
    }, 1000);
});

console.log('second');

reTime.then((res) => console.log(res));

// работа с асинхронными запросами из массива
const ids = [1, 2, 3, 4, 5, 6, 7];

const getPost = async (id) => {
    return await (
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    ).json();
};

const getpostsSerialized = async (ids) => {
    await ids.reduce(async (acc, id) => {
        //waits for theprevious item to complete
        await acc; //get next item
        const post = await getPost(id);
        console.log(post);
    }, Promise.resolve());
    console.log('Waiting for code finished');
};
