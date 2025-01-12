class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }


    // O(1)
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;  
            this.head = node;
        }

        this.size++
    }

    // O(n)
    append(value){
        const node = new Node(value);

        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node
        }

        this.size++
    }

    insert(value,index){
        if(index<0 || index>= this.size){
            return null
        }

        if(index === 0 ){
            this.prepend(value)
        }else{
            const node = new Node(value);

            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    // O(1)
    removeFrom(index){
        if(index<0 || index >= this.size){
            return null
        }
        let removedNode;
        if(index === 0|| index === undefined){
            removedNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head;
            for(let i = 0;i<index - 1;i++){
                prev = prev.next;
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    //O(n)
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return console.log(`the value ${value} has been deleted`)
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }

            if(prev.next){
                const removedNode = prev.next;
                prev.next = removedNode.next
                this.size--
                return value    
            }
            return null
        }
    }

    search(value){
        if(this.isEmpty()){
            return 'The list is empty'
        }
        let i = 0;
        let curr = this.head;
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next;
            i++
        }
        return -1
    }

    reverse(){
        let prev = null
        let curr = this.head

        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    print(){
        if(this.isEmpty()){
            console.log("The Linked List is Empty")
        }else{
            let curr = this.head;
            let listValues = ''
            while(curr){
                listValues+= `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}

const list = new LinkedList()

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)


list.reverse()




list.print()