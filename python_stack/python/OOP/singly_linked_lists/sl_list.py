from sl_node import SLNode

class SList:
    def __init__(self):
        self.head = None

    def add_to_front(self, val):
        new_node = SLNode(val)
        current_head = self.head
        new_node.next = current_head
        self.head = new_node
        return self	    	

    def print_values(self):
            runner = self.head
            while (runner != None):
                print(runner.value)
                runner = runner.next 
            return self	     

    def add_to_back(self, val):
        if self.head == None:	
            self.add_to_front(val)	
            return self	

        new_node = SLNode(val)
        runner = self.head
        while (runner.next != None):
            runner = runner.next
        runner.next = new_node
        return self  
    
    def remove_from_front(self):
        if self.head == None:
            return self
        temp = self.head 
        self.head = self.head.next
        temp.next = None
        return self

    def remove_from_back(self):
        if self.head == None: 
            return self
        runner = self.head
        while (runner.next.next != None):
            runner = runner.next
        runner.next = None
        return self 

    def remove_val(self, val):
        # no nodes in list 
        if self.head == None: 
            return self

        # value found at first node of list 
        if self.head.value == val:
            self.remove_from_front()

        runner = self.head 
        prev = self.head

        while (runner.value != val and runner.next != None):
            prev = runner
            runner = runner.next

        # value not found in list 
        if runner.value != val:
            return self

        # value found elsewhere 
        prev.next = runner.next
        runner.next = None
        return self

    def length(self):
        count = 0
        runner = self.head
        while (runner != None):
            count+=1
            runner = runner.next
        return count

    def insert_at(self, val, pos):
        # invalid position 
        if pos < 0 or pos > self.length():
            return self 

        # insert into front position 
        if pos == 0:	
            self.add_to_front(val)	
            return self	
        
        # insert into back position 
        if pos == self.length():
            self.add_to_back(val)
            return self
        
        # all other cases
        new_node = SLNode(val)
        runner = self.head
        count = 1 
        while (count < pos):
            runner = runner.next
            count+= 1
        temp = runner.next
        runner.next = new_node
        new_node.next = temp
        return self


        
# create a new instance of a list
my_list = SList()
my_list.add_to_front("are").add_to_front("Linked lists").add_to_back("fun!").print_values()

my_list.remove_from_front().print_values()
my_list.add_to_front("Vacations").remove_from_back().add_to_back("needed").print_values()

my_list.remove_val("Vacations").print_values().add_to_front("Cookies").print_values()

my_list.insert_at("not", 5).print_values()


