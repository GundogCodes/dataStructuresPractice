//LINKED LISTS PRACTICE

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = next
//     }
// }

class LinkedList{
    constructor(head){
        this.head  = head
    }

    getSize(){
        let counter = 0
        let currentNode = this.head
        while(currentNode){ 
            counter++
            currentNode = currentNode.next
        }
        return counter
    }

    getFirst(){ //works (ENQUEUE)
        if(!this.head){
            return null
        } else{
            return this.head
        }
    }

    insertFirst(data){ //works
        const newNode = new Node(data) 
        if(this.head){
            newNode.next = this.head
            this.head = newNode 
        } else{
            this.head = newNode
        }
    }

    removeFirst(){ //works
        if(!this.head){
            return null
        } else{
            const newHead = this.head.next
            this.head = newHead
        }
    }

    insertAt(data,position){ //works
        const newNode = new Node(data)
        let counter = 0
        let currentNode = this.head
        if(position ===1){
            newNode.next = this.head
            this.head = newNode
        } else{

            while(currentNode){
                counter++
                if(counter === (position-1)){
                    newNode.next = currentNode.next
                    currentNode.next = newNode
                }
                currentNode  = currentNode.next
            }
        }
    }

    removeAt(position){ //works
        let counter = 0
        let currentNode = this.head
        if(position ===1){
            const newHead  = this.head.next
            this.head = newHead
        }
        while(currentNode){
            counter++
            if(counter ===(position-1)){
                currentNode.next = currentNode.next.next
            }
            currentNode = currentNode.next
        } 

    }

    getAt(position){ //works (PEEK)
        let counter = 0
        let currentNode = this.head
        while(currentNode){
            counter++
            if(counter === position){
                return currentNode
            }
            currentNode = currentNode.next
        }

    }
    getLast(){ //works
        let currentNode = this.head
        while(currentNode){
            if(currentNode.next === null || currentNode.next === undefined){
                return currentNode
            }
            currentNode = currentNode.next
        }
    }

    removeLast(){ //works (DEQUEUE)
        let lasPos = this.getSize()
        const lastNode = this.getAt(lasPos)
        this.removeAt(lasPos)
    }

    insertLast(data){ //works
        const newNode = new Node(data)
        const lastNode = this.getLast()
        lastNode.next = newNode
    }
}

/*
const list = new LinkedList()
list.insertFirst('1')
list.insertFirst('2')
list.insertFirst('3')
console.log('list.getFirst()',list.getFirst())
console.log('list',list)
console.log('list.getAt(3)', list.getAt(3))
list.removeFirst()
console.log('list.insertAt("wackyNum",2)',list.insertAt("wackyNum",2))
console.log('list.getFirst() AFTER INSERT AT 2',list)
list.removeAt(4)
list.removeLast()
console.log('list.getAt(1)',list.getAt(1))
console.log('list.getAt(2)',list.getAt(2))
console.log('list.getAt(3)',list.getAt(3))
console.log('list.getAt(4)',list.getAt(4))
list.insertLast('LASTONEBABY')
console.log('list.getAt(5)',list.getAt(5))
console.log('list.getSize()', list.getSize())
console.log('list.getLast()', list.getLast())
*/

//QUEUES PRACTICE (FIFO) (With Array)
class Queue{
    constructor(){
        this.data = []
    }
    enqueue(record){// record is the data in a queue
        this.data.unshift(record)
    }
    dequeue(){
        return this.data.pop()
    }
    peek(position){
        return this.data[position-1]

    }
    isEmpty(){
        if(this.data.length===0){
            return true
        } else{
            return false
        }
    }
}
/*
const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log('queue.peek(2) should be 5',queue.peek(2))
console.log('queue.isEmpty should be false',queue.isEmpty())
*/

//STACKS PRACTICE (LIFO) (With Array)
class Stack{
    constructor(){
        this.data = []
    }
    peek(position){
        return this.data[position-1]
    }
    push(record){
        return this.data.push(record)
    }
    //pop
    pop(){
        return this.data.pop()
    }
    isEmpty(){
        if(this.data.length ===0){
            return true
        } else{
            return false
        }
    }
}
/*
const stack = new Stack()
console.log(stack.isEmpty())
console.log(stack.push(1))
console.log(stack.push(2))
console.log(stack.push(3))
console.log(stack.pop())
console.log(stack)
console.log(stack.isEmpty())
*/

//BST PRACTICE
// - each parent has at most 2 children
// - left node is always less than right
// class Node {
//     constructor(value){
//         this.value = value
//         this.right = null
//         this.left = null
//     }
// }

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
        let currentNode = this.root
        if(this.root === null){
            this.root = newNode
            return this
        } else{
            if(newNode.value > this.root.value){
                while(currentNode){
                    if(currentNode.right === null){
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            } else if(newNode.value < this.root.value){
                while(currentNode){
                    if(currentNode.left===null){
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                }
            }
        }
    }
    find(value){
    }
    //contains
    //bfs
    //bfsPreOrder
    //bfsPostOrder
    //bfsInOrder

}

const binaryTree = new BinarySearchTree()
binaryTree.insert(5)
binaryTree.insert(4)
binaryTree.insert(6)
binaryTree.insert(7)
binaryTree.insert(8)
binaryTree.insert(10)
binaryTree.insert(9)
console.log(binaryTree.find(5))

//STACKS WITH LINKEDLISTS

class Node {
    constructor(data){
        this.value = value
        this.next
    }
}

class LinkedStack{
    constructor(){
        this.head = null
    }
    getSize(){
        let counter = 0
        let currentNode = this.head
        while(currentNode){
            counter++
            currentNode = currentNode.next
        }
        return counter
    }
    //push
    push(data){
        const newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
        } else{
            newNode.next = this.head
            this.head = newNode
        }
    }
    //pop
    pop(){
        let currentNode = this.head
        while(currentNode){
            if(currentNode.next === null){
                currentNode = null
            }
            currentNode = currentNode.next
        }
    }
    //peek

}

const stack = new LinkedStack()

stack.push('1')
stack.push('2')
stack.push('3')
console.log(stack)