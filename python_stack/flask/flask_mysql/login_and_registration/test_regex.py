import re
NAME_REGEX = re.compile(r'^[A-Za-z]{2,50}$')
PASS_REGEX = re.compile(r'^(?=.*[A-Z])(?=.*\d)(.{8,15})$')

name="Albert2"
pswrd = "Password2"

if not NAME_REGEX.match(name):
	print("name does not match")
else:
    print("name matches")

if not PASS_REGEX.match(pswrd):
	print("password does not match")
else:
    print("password matches")