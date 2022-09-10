'use strict'

const LinkedList = require('../ll');

describe('Testing linked list', () => {
    it('Test creating a linked list', () => {
        const ll = new LinkedList();
        expect(ll).toBeDefined();
        expect(ll).toBeInstanceOf(LinkedList);
        expect(ll.head).toBeNull();
    })
})
describe('Insert at the beginning of linked list', () => {
    it('Add to an empty LL', () => {
        const ll = new LinkedList();
        ll.insert('a');// a new instance from the class, so i can access the methods insode the class
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();
    })

    it('Add to non-empty LL', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        // ll.insert('c');
        expect(ll.head.value).toEqual('b');
        expect(ll.head.next.value).toBe('a');
        expect(ll.head.next.next).toBeNull();
    })
})

describe('Append to the end of the LL', () => {
    it('Append to an empty LL', () => {
        const ll = new LinkedList();
        ll.append('a');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();
    })

    it('Append to non-empty LL', () => {
        const ll = new LinkedList();
        ll.append('a');
        ll.append('b');
        ll.append('c');

        expect(ll.head.value).toEqual('a');
        expect(ll.head.next.value).toEqual('b');
        expect(ll.head.next.next.value).toEqual('c');
        expect(ll.head.next.next.next).toBeNull();

    })
})