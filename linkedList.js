class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
}

class Linked_list {
    constructor(value) {
        const newNode = new Node(value); // [ value ] --> null
        this.head = newNode; 
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insert(index, value) {
        if (index <= 0) {
            return this.prepend(value);
        } else if (index >= my_Linked_List.length) {
            return this.append(value);
        }

        const newNode = new Node(value);

        let currNode = this.head;
        for (let i = 0; i < index-1; i++) {
            currNode = currNode.next;
        }

        newNode.next = currNode.next;
        currNode.next = newNode;

        this.length++;
    }

    remove(index) {
        
        let currNode = this.head;
        for (let i = 0; i < index-1; i++) {
            currNode = currNode.next;
        }

        currNode.next = currNode.next.next;

        this.length--;
    }

    printList() {
        let currNode = this.head;
        while (currNode != null) {
            console.log(currNode.value);
            console.log("|\nv");
            currNode = currNode.next;
        }
        console.log(null);
    }
}
  
const my_Linked_List = new Linked_list(10);

my_Linked_List.append(20);
my_Linked_List.append(30);
my_Linked_List.append(40);
my_Linked_List.prepend(50);

my_Linked_List.insert(1,15);

my_Linked_List.remove(10);

my_Linked_List.printList();
