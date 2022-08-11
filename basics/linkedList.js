// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


class Node {
    // constructor
    constructor(value) {
        this.val = value;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    insertNode(element) {
        var node = new Node(element);
        var current;
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
}

