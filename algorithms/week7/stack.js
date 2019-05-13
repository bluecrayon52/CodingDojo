const Stack = () => {
    let data = [];
    return {
        pop: function() {
            if (!data.length) {
                return false;
            }
            let val = data[data.length - 1];
            data.length = data.length - 1;
            return val;
        },
        push: function(val) {
            data[data.length] = val;
        },
        contains: function(val) {
            for(el of data) {
                if (el == val) {
                    return true;
                }
            }
            return false;
        }, 
        size: function() {
            return data.length;
        },
        top: function() {
            return data[data.length - 1];
        },
        isEmpty: function() {
            if (!data.length) {
                return true;
            } 
            return false; 
        }
    }
}

class Test{
    constructor(){
        this.testing = 'Helloooo!';
    }
}

let stack = Stack();
stack.push(1);
stack.push(3);
stack.push(5);

// this has no effect on the object element
stack.data = [];

console.log(stack.top()); 
console.log(stack.pop());
console.log(stack.top());
console.log(stack.contains(3));
console.log(stack.contains(7));
console.log(stack.size());
console.log(stack.isEmpty());


var test = new Test();
// this line changes the value of a class element
test.testing = 'Goodbyeeeeee';
console.log(test);