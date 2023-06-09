import axios from 'axios';
// import api from './api/posts';

export default axios.create({
    baseURL: 'http://localhost:3500',
});

const fetchPosts = async () => {
    try {
        // const response = await api.get('/posts');
        // setPosts(response.data);
    } catch (err) {
        if (err.response) {
            // Not in the 200 response range
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else {
            console.log(`Error: ${err.message}`);
        }
    }
};

//аксиос дает возможность более понятных запросов через api.get/post/delete
//в отличие от фетча возвращает дату уже в джейсон формате (не нужно делать res.json() как в фетч)
//из коробки дает различные ошибки если респонс не в 200 рендж
//так как возварщает ошибки БЕСТПРАКТИС оборочивать ахиос в ТРАЙ/КЕТЧ блок
//принимает 3 аргумента 1 - урл, 2 - боди, 3 - обьект где можно прописывать хедеры

// AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// GET REQUEST
function getTodos() {
    // axios({
    //   method: 'get',
    //   url: 'https://jsonplaceholder.typicode.com/todos',
    //   params: {
    //     _limit: 5
    //   }
    // })
    //   .then(res => showOutput(res))
    //   .catch(err => console.error(err));

    axios
        .get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
            timeout: 5000,
        })
        .then((res) => showOutput(res))
        .catch((err) => console.error(err));
}

// POST REQUEST
function addTodo() {
    axios
        .post('https://jsonplaceholder.typicode.com/todos', {
            title: 'New Todo',
            completed: false,
        })
        .then((res) => showOutput(res))
        .catch((err) => console.error(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
    axios
        .patch('https://jsonplaceholder.typicode.com/todos/1', {
            title: 'Updated Todo',
            completed: true,
        })
        .then((res) => showOutput(res))
        .catch((err) => console.error(err));
}

// DELETE REQUEST
function removeTodo() {
    axios
        .delete('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => showOutput(res))
        .catch((err) => console.error(err));
}

// SIMULTANEOUS DATA
function getData() {
    axios
        .all([
            axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
            axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5'),
        ])
        .then(axios.spread((todos, posts) => showOutput(posts)))
        .catch((err) => console.error(err));
}

// CUSTOM HEADERS
function customHeaders() {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'sometoken',
        },
    };

    axios
        .post(
            'https://jsonplaceholder.typicode.com/todos',
            {
                title: 'New Todo',
                completed: false,
            },
            config
        )
        .then((res) => showOutput(res))
        .catch((err) => console.error(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
    const options = {
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
            title: 'Hello World',
        },
        transformResponse: axios.defaults.transformResponse.concat((data) => {
            data.title = data.title.toUpperCase();
            return data;
        }),
    };

    axios(options).then((res) => showOutput(res));
}

// ERROR HANDLING
function errorHandling() {
    axios
        .get('https://jsonplaceholder.typicode.com/todoss', {
            // validateStatus: function(status) {
            //   return status < 500; // Reject only if status is greater or equal to 500
            // }
        })
        .then((res) => showOutput(res))
        .catch((err) => {
            if (err.response) {
                // Server responded with a status other than 200 range
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);

                if (err.response.status === 404) {
                    alert('Error: Page Not Found');
                }
            } else if (err.request) {
                // Request was made but no response
                console.error(err.request);
            } else {
                console.error(err.message);
            }
        });
}

// CANCEL TOKEN
function cancelToken() {
    const source = axios.CancelToken.source();

    axios
        .get('https://jsonplaceholder.typicode.com/todos', {
            cancelToken: source.token,
        })
        .then((res) => showOutput(res))
        .catch((thrown) => {
            if (axios.isCancel(thrown)) {
                console.log('Request canceled', thrown.message);
            }
        });

    if (true) {
        source.cancel('Request canceled!');
    }
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
    (config) => {
        console.log(
            `${config.method.toUpperCase()} request sent to ${
                config.url
            } at ${new Date().getTime()}`
        );

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// AXIOS INSTANCE
const axiosInstance = axios.create({
    // Other custom settings
    baseURL: 'https://jsonplaceholder.typicode.com',
});
// axiosInstance.get('/comments').then(res => showOutput(res));

// Show output in browser
function showOutput(res) {} //clg()
