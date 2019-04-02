from account import BankAccount

class User:
    def __init__(self, username, email_address, int_rate=0.02, balance=0):    
        self.name = username			           
        self.email = email_address		           
        self.accounts = [BankAccount(int_rate, balance)]		    
        
    def make_deposit(self, account=0, amount=0):
        self.accounts[account].deposit(amount)
        return self            

    # have this method decrease the user's balance by the amount specified
    def make_withdrawal(self, account=0, amount=0):
        self.accounts[account].withdraw(amount)
        return self

    # have this method print the user's name and account balance to the terminal 
    # eg. "User: Guido van Rossum, Balance: $150
    def display_user_balance(self, account=0):
        return f"User: {self.name}, {self.accounts[account].display_account_info()}"

    # have this method decrease the user's balance by the amount and add that amount to the other_user's balance
    def transfer_money(self, other_user, account=0, account2=0, amount=0):
        self.make_withdrawal(account, amount)
        other_user.make_deposit(account2, amount)
        return self

    # allow the user to add multiple accounts 
    def add_account(self, int_rate=0.02, balance=0):
        self.accounts.push(BankAccount(int_rate, balance))
