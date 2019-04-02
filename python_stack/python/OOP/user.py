class User:
    def __init__(self, username, email_address):    
        self.name = username			           
        self.email = email_address		           
        self.account_balance = 0		    
        
    def make_deposit(self, amount):
        self.account_balance += amount
        return self            

    # have this method decrease the user's balance by the amount specified
    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    # have this method print the user's name and account balance to the terminal 
    # eg. "User: Guido van Rossum, Balance: $150
    def display_user_balance(self):
        print(f"User: {self.name}, Balance: ${self.account_balance}")
        return self

    # have this method decrease the user's balance by the amount and add that amount to the other_user's balance
    def transfer_money(self, other_user, amount):
        self.make_withdrawal(amount)
        other_user.make_deposit(amount)
        return self

guido = User("Guido van Rossum", "guido@python.com")
monty = User("Monty Python", "monty@python.com")
nate = User("Nate Dog", "nate@dog.com")

guido.make_deposit(100).make_deposit(200).make_deposit(100).make_withdrawal(100).display_user_balance()	# output: 300

monty.make_deposit(100).make_deposit(100).make_withdrawal(100).make_withdrawal(50).display_user_balance()	# output: 50

nate.make_deposit(1000).make_withdrawal(100).make_withdrawal(200).make_withdrawal(150).display_user_balance()	# output: 550

guido.transfer_money(nate,100).display_user_balance()	# output: 200
nate.display_user_balance()	# output: 650
