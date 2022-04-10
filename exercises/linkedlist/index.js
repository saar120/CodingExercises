// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, nextNode = null) {
    this.data = data;
    this.next = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let node = this.head;
    while (node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head ? this.head.next : null;
  }

  removeLast() {
    if (!this.head) return;

    if (!this.head.next) {
      return (this.head = null);
    }

    let prev = this.head;
    let node = this.head.next;

    while (node.next) {
      prev = node;
      node = node.next;
    }

    prev.next = null;
  }

  insertLast(data) {
    const newNode = new Node(data);
    const lastNode = this.getLast();

    if (!lastNode) {
      this.head = newNode;
      return;
    }

    lastNode.next = newNode;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const prev = this.getAt(index - 1);
    if (!prev || !prev.next) return;

    const node = prev.next;

    prev.next = node.next;
  }

  insertAt(data, index) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    const prev = this.getAt(index - 1) || this.getLast();

    const after = prev.next;

    newNode.next = after;

    prev.next = newNode;
  }

  forEach(func) {
    let index = 0;
    let node = this.head;
    while (node) {
      func(node, index);
      index++;
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
