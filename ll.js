'use strict'

const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null; // the head is null in the beginning
    }

    insert(val) {
        const node = new Node(val);
        if (!this.head) {// Means ll is empty
            this.head = node;
        } else {
           node.next=this.head;
           this.head=node; 
        }
    }
}

module.exports = LinkedList;