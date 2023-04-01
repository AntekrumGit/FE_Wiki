const fetchUrl = (url) => {
    console.log(`fetching ${url}...`)
}

const user = {
    firstName : 'Bob'
}

const debounce = (callback, delay)=> {
    let timer = null
    return (...args) => {
        if(timer){
            clearInterval(timer)
        }
       timer = setTimeout(()=>{
            callback(...args)
        },delay)
    }
}

const fetching = debounce(fetchUrl, 300)

fetching(1)
fetching(2)
fetching(3)
fetching(4)
fetching(5)

//with context
// const fetchUrl = function(url) {
//     console.log(`fetching ${url}...`,
//     this.firstName)
// }

// const user = {
//     firstName : 'Bob'
// }

// const debounce = (callback, delay)=> {

//     let timer = null
//     return (...args) => {

//         if(timer){
//             clearInterval(timer)
//         }

//        timer = setTimeout(()=>{
//             callback(...args)
//         },delay)
//     }

// }

// const fetching = debounce(fetchUrl.bind(user), 300)

// fetching(1)
// fetching(2)
// fetching(3)
// fetching(4)
// fetching(5)

