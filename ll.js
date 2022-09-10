'use strict'

const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null; // the h0ead is null in the beginning
    this.size=0;
    }

    insert(val) {
        const node = new Node(val);
        if (!this.head) {// Means ll is empty
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    append(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }

  // Insert at index
  insertAt(val, index) {
    //  If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.insert(val);
      return;
    }

    const node = new Node(val);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  
}

module.exports = LinkedList;