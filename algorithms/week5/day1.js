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



