class BankAccount:
    def __init__(self, int_rate=0.01, balance=0): 
        self.int_rate = int_rate
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        self.balance -= amount
        return self 

    def display_account_info(self):
        print(f"Account Balance: {self.balance}, Interest Rate: ${self.int_rate}")
        return self

    def yield_interest(self):
        self.balance += self.balance * self.int_rate
        return self

test = BankAccount(0.07,100)
test.deposit(100).deposit(100).deposit(100).withdraw(50).yield_interest().display_account_info()

test2 = BankAccount()
test2.deposit(100).deposit(300).withdraw(100).withdraw(50).withdraw(30).withdraw(20).yield_interest().display_account_info()
