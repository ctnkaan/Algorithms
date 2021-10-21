class Node {
    constructor (value) {
        this.data = value;
        this.next = null;
    }
}

class Stack {
    constructor (value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.bottom = this.top;
        this.size = 1;
    }

    push(value){
        const newNode = new Node(value);
        this.top.next = newNode;
        this.top = newNode;
        this.size++;
    }

    pop(){
        const popped = this.top.data;

        let currNode = this.bottom;
        for (let i = 0; i < this.size-2; i++) {
            currNode = currNode.next;
        }

        currNode.next = null;
        this.top = currNode;

        return (`popped: ${popped}`);
    }

    peek() {
        console.log(this.top.data);
    }

    showStack() {

        let currNode = this.bottom;

        for (let i = 0; i < this.size-1; i++) {
            console.log(i+" : "+ currNode.data);
            currNode = currNode.next;
        }
    }
}


const my_stack = new Stack(10);

my_stack.peek();
my_stack.push(11);
my_stack.push(12);
my_stack.push(13);
my_stack.push(14);
my_stack.peek();
console.log(my_stack.pop());
my_stack.peek();
my_stack.showStack();