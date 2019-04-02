class User:
    def __init__(self, username, email_address):    
        self.name = username			           
        self.email = email_address		           
        self.account_balance = 0		    
        
    def make_deposit(self, amount):
    	self.account_balance += amount	            

    # have this method decrease the user's balance by the amount specified
    def make_withdrawal(self, amount):
        self.account_balance -= amount
    
    # have this method print the user's name and account balance to the terminal 
    # eg. "User: Guido van Rossum, Balance: $150
    def display_user_balance(self):
        return f"User: {self.name}, Balance: ${self.account_balance}"

    # have this method decrease the user's balance by the amount and add that amount to other other_user's balance
    def transfer_money(self, other_user, amount):
        self.make_withdrawal(amount)
        other_user.make_deposit(amount)

guido = User("Guido van Rossum", "guido@python.com")
monty = User("Monty Python", "monty@python.com")
nate = User("Nate Dog", "nate@dog.com")

guido.make_deposit(100)
guido.make_deposit(200)
guido.make_deposit(100)
guido.make_withdrawal(100)
print(guido.display_user_balance())	# output: 300

monty.make_deposit(100)
monty.make_deposit(100)
monty.make_withdrawal(100)
monty.make_withdrawal(50)
print(monty.display_user_balance())	# output: 50

nate.make_deposit(1000)
nate.make_withdrawal(100)
nate.make_withdrawal(200)
nate.make_withdrawal(150)
print(nate.display_user_balance())	# output: 550

guido.transfer_money(nate,100)

print(guido.display_user_balance())	# output: 200
print(nate.display_user_balance())	# output: 650
