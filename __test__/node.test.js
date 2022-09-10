'use strict'

const Node = require('../node');

describe('Testing node class', () => {
    it('Test creating a new node', () => {
        const val = 'fatima';
        const node = new Node(val);
        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual(val);
        expect(node.next).toBeNull();
    })
})