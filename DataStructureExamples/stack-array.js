class Stack {
    constructor() {
        this.arr = [];
    }

    push(value){
        this.arr[this.arr.length] = value;
    }

    pop(){
        this.arr[this.arr.length-1] = null;
    }

    peek() {
        console.log(this.arr[this.arr.length-1]);
    }

    showStack() {
        console.log("*****STACK******");
        console.log(this.arr);
    }
}

const stack = new Stack();

stack.push(10);
stack.push(11);
stack.peek();
stack.showStack();
stack.push(12);
stack.showStack();
stack.push(13);
stack.push(14);
stack.peek();
stack.pop();
stack.showStack();