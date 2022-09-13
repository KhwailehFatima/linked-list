'use strict'

const Node = require('./node');
 
class LinkedList {
  constructor() {
      this.head = null
      this.tail = null;
      this.length = 0;
  }

  insert(val) {
      const node = new Node(val);
      if (!this.head) { // Means ll is empty
          this.head = node;
      } else { // LL not empty
          node.next = this.head;
          this.head = node
      }
      if (this.length == 0)
          this.tail = node;
      this.length += 1;

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
      this.tail = node;
      this.length += 1;
  }
  printlist() {
      let str = "";
      if (this.length > 0) {
          let currentNode = this.head;

          for (let i = 0; i < this.length; i++) {
              str += `${currentNode.value} -> `
              currentNode = currentNode.next;
          }
          console.log(str)
      }
  }


  deletemiddle() {
      let loc;
      if (this.length != 0) {
          if (this.length === 1) {
              this.head = null;
              this.tail = null;
              this.length = 0
          } else
              if (this.length === 2) {
                  this.head = this.head.next;
                  this.length = 1;
              }
              else {
                  loc = Math.ceil(this.length / 2);
                  let currentNode = this.head;
                  for (let i = 1; i < loc - 1; i++) {
                      currentNode = currentNode.next;
                  }
                  let temp = currentNode.next.next;
                  currentNode.next = temp;
                  this.length -= 1;
              }

      }
  }

  insertat(loc, val) {
      if (loc > this.length) {
          this.append(val)
      }
      else {
          if (this.length == 1 || loc == 0) {
              this.insert(val)
          }
          else {
              const node = new Node(val);
              let currentNode = this.head;
              for (let i = 1; i < loc - 1; i++) {
                  currentNode = currentNode.next;
              }
              node.next = currentNode.next;
              currentNode.next = node;
              this.length += 1;
          }
      }
  }

}

module.exports = LinkedList;