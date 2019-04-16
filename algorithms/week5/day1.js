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
myList.addToFront(2);

console.log(myList.length());
console.log(myList.display());

console.log(myList.max());
console.log(myList.min());

let myList2 = SLL();

console.log(myList2.removeFront())
console.log(myList2.contains(7));
console.log(myList2.length());
console.log(myList2.display());
console.log(myList2.max());
console.log(myList2.min());
