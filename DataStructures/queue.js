class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.unshift()
    }

    isEmpty(){
        return this.items.length === 0
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}

const queue = new Queue()


queue.enqueue('hello')
queue.enqueue(20)
queue.enqueue(10)
queue.enqueue(30)
console.log(queue.print())
