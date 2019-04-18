// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class SLL{
//     constructor(){
//         this.head = null;
//     }

//     addToFront(){
//         // code here, return this
//     }
//     contains(val){
//         // code here, return return boolean ture/false
//     }
//     removeFront(){
//         // code here, return this
//     }
// }

// “class-free” object oriented programming
// functions that return object literals with closures 
const Node = value => {
    let val = value, next = null;
    return {
        setVal: function(x) {
            val = x
        }, 
        setNext: function(x) {
            next = x 
        },
        getVal: function() {
            return val;
        },
        getNext: function() {
            return next;
        }
    }
}

const SLL = () => {
    let head = null;
    return {
        getHead: function () {
            return head;
        },
        addToFront: function(val){
            let newNode = Node(val);
            if (head == null) {
                head = newNode;
            } else {
                newNode.setNext(head)
                head = newNode;
            }
        },
        addToBack: function(val){
            let newNode = Node(val);
            if (head == null) {
               head = newNode; 
            } else {
                let runner = head;
                while (runner.getNext() != null) {
                  runner = runner.getNext();  
                }
                runner.setNext(newNode);
            }
        },
        contains: function(val){
            if (head == null) {
                return false;
            } 
            let runner = head;
            while (runner.getNext() != null) {
                if (runner.getVal() == val) {
                    return true; 
                }
                runner = runner.getNext();
            }
            if (runner.getVal() == val) {
                return true; 
            }
            return false;
        },
        removeFront: function(){
            if (head == null) {
                return false;
            }
            head = head.getNext()   
        }, 
        removeBack: function(){
            if (head == null) {
                return false;
            } else if (head.getNext == null) {
                head = null;
            } else {
                let runner = head;
                while (runner.getNext().getNext() != null){
                    runner = runner.getNext();
                }
                runner.setNext(null);
            }
        },
        length: function(){
            let runner = head;
            let count = 0;
            while (runner != null) {
                count++;
                runner = runner.getNext();
            }
            return count;
        },
        display: function(){
            let arr = [];
            let runner = head;
            while (runner != null) {
                arr.push(runner.getVal());
                runner = runner.getNext();
            }
            return arr;
        },
        max: function(){
            if (head == null) {
                return false;
            }
            let runner = head.getNext();
            let max = head.getVal();
            while (runner != null) {
                if (runner.getVal() > max) {
                    max = runner.getVal();
                }
                runner = runner.getNext();
            }
            return max;
        }, 
        min: function(){
            if (head == null) {
                return false;
            }
            let runner = head.getNext();
            let min = head.getVal();
            while(runner != null) {
                if (runner.getVal() < min){
                    min = runner.getVal();
                }
                runner = runner.getNext();
            }
            return min;
        },
        previousPointer: function(val) {
            if (head == null || head.getNext() == null || head.getVal() == val) {
                return false;
            }
            let pointer = head;
            while (pointer.getNext().getVal()!= val && pointer.getNext() != null) {
                pointer = pointer.getNext();
            }
            if (pointer.getNext().getVal() == val) {
                return pointer;
            } else {
                return false; 
            }
        }
    }
}

let myList = SLL();

myList.addToFront(5);

console.log(myList.getHead().getVal());

myList.addToFront(7);

console.log(myList.getHead().getVal());
console.log(myList.getHead().getNext().getVal());

console.log(myList.contains(10));

console.log(myList.contains(7));
console.log(myList.contains(5));

myList.removeFront();

console.log(myList.getHead().getVal());

myList.addToFront(10);
myList.addToFront(12);
myList.addToFront(15);
myList.addToFront(20);

console.log(myList.length());
console.log(myList.display());

console.log(myList.max());
console.log(myList.min());

myList.removeBack();
console.log(myList.display());
myList.addToBack(18);
console.log(myList.display());


// add min to front using previousPointer function
let prev = myList.previousPointer(myList.min());
let min = prev.getNext();
prev.setNext(prev.getNext().getNext());
myList.addToFront(min.getVal());
console.log(`add min to front: ${myList.display()}`);

// add max to back using previousPointer function 
prev = myList.previousPointer(myList.max());
let max = prev.getNext();
prev.setNext(prev.getNext().getNext());
myList.addToBack(max.getVal());
console.log(`add max to back: ${myList.display()}`);

// append a new node with a given value after another specified value
prev = myList.previousPointer(15);
let new_node = Node(8);
new_node.setNext(prev.getNext().getNext());
prev.getNext().setNext(new_node);
console.log(`append after: ${myList.display()}`)
