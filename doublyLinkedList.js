class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        let newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length++;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    print() {
        let currNode = this.head;
        let arr = [];

        while (currNode.next != null) {
            arr.push(currNode.value);
            currNode = currNode.next;
        }
        return arr;
    }


}

let MyLinkedList = new DoublyLinkedList(10);

MyLinkedList.append(20);
MyLinkedList.append(30);
console.log(MyLinkedList.print());