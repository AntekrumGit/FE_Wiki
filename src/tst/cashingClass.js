class Queue {
    constructor(max){
        this.max = max;
        this. cache = new Map();
    }

    getElByKey(key) {
        let item = this.cache.get(key)
        if(item){
            this.cache.delete(key)
            this.cache.set(key, item)
       }
    }

    setNewEl(key, value){
        if(this.cache.has(key)){
            this.cache.delete(key)
       } else if (this.cache.size === this.max){
        this.cache.delete(this.first())
       }

       this.cache.set(key, value)

    }

    first(){
        console.log("F", this.cache.keys())
        console.log("KF", this.cache.keys().next())
        console.log("S", this.cache.keys().next().value)
        console.log("T", this.cache.keys().next().next().value)
        return this.cache.keys().next().value
    }


}

const q = new Queue(3)

q.setNewEl("one", 1)
q.setNewEl("two", 2)
q.setNewEl("zero", 0)

console.log(q.cache)

q.first()