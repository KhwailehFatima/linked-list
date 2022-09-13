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

describe('Insert to the beginning of the linked list', () => {
    it('Add to an empty LL', () => {
        const ll = new LinkedList();
        ll.insert('a');
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();
        // expect(ll.tail.value).toEqual('a');

    });

    it('Add to a non-empty LL', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        // ll.insert('c');
        expect(ll.head.value).toEqual('b');
        expect(ll.head.next.value).toEqual('a');
        expect(ll.head.next.next).toBeNull();
    })
})

describe('Append to the end of the Linked List', () => {
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

describe('Delete from the middle of Linked List', () => {
    it('delete from empty Linked List', () => {
        const ll = new LinkedList();
        ll.deletemiddle();
        expect(ll.head).toBeNull();
        expect(ll.tail).toBeNull();
        expect(ll.length).toEqual(0);
    })
    it('delete from Linked List with ONE node', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.deletemiddle();
        expect(ll.head).toBeNull();
        expect(ll.tail).toBeNull();
        expect(ll.length).toEqual(0);
    })
    it('delete from Linked List with TWO node', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');

        ll.deletemiddle();
        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();
        expect(ll.tail.value).toEqual('a');
        expect(ll.tail.next).toBeNull();
        expect(ll.length).toEqual(1);
    })

    it('delete from Linked List with more than TWO node" ODD number"', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        ll.deletemiddle();
        expect(ll.head.value).toEqual('c');
        expect(ll.tail.value).toEqual('a');
        expect(ll.tail.next).toBeNull();
        expect(ll.length).toEqual(2);
    })

    it('delete from Linked List with more than TWO node" EVEN number"', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        ll.insert('d');

        ll.deletemiddle();
        expect(ll.head.value).toEqual('d');
        expect(ll.tail.value).toEqual('a');
        expect(ll.tail.next).toBeNull();
        expect(ll.length).toEqual(3);
    })
})

describe('Insert into specific location of Linked List', () => {
    it('insert into a location LARGER from the linked list size', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insertat(3, 'x');
        expect(ll.length).toEqual(3);
        expect(ll.tail.value).toEqual('x');
    })

    it('insert into a location when the linked list have only one node', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insertat(1, 'x');
        expect(ll.length).toEqual(2);
        expect(ll.head.value).toEqual('x');
    })

    it('insert into a location 0 from the linked list ', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        ll.insertat(0, 'x');
        expect(ll.length).toEqual(4);
        expect(ll.head.value).toEqual('x');
    })

    it('insert into any other location from the linked list ', () => {
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');
        ll.insert('c');
        ll.insertat(2, 'x');
        expect(ll.length).toEqual(4); 
        expect(ll.head.next.value).toEqual('x');
        expect(ll.head.next.next.value).toEqual('b');

    })

})