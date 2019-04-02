from user import User 

guido = User("Guido van Rossum", "guido@python.com")
monty = User("Monty Python", "monty@python.com")
nate = User("Nate Dog", "nate@dog.com")

guido.make_deposit(0, 100).make_deposit(0, 200).make_deposit(0, 100).make_withdrawal(0, 100)
print(guido.display_user_balance())	# output: 300

monty.make_deposit(0, 100).make_deposit(0, 100).make_withdrawal(0, 100).make_withdrawal(0, 50)
print(monty.display_user_balance())	# output: 50

nate.make_deposit(0, 1000).make_withdrawal(0, 100).make_withdrawal(0, 200).make_withdrawal(0, 150)
print(nate.display_user_balance())	# output: 550

guido.transfer_money(nate,0, 0, 100)
print(guido.display_user_balance())	# output: 200
print(nate.display_user_balance())	# output: 650
