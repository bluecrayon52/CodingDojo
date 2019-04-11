from datetime import datetime 
import time

time1 = datetime.now()
print(time1)
time.sleep(5)

time2 = datetime.now()
print(time2)

dif = time2 - time1
dif_in_seconds = dif.total_seconds()
# seconds
print(dif_in_seconds)
# minutes
print(dif_in_seconds/60) 
# hours
print(dif_in_seconds/3600)
# days
print(dif_in_seconds/86400) 
# weeks
print(dif_in_seconds/604800) 
# months 
print(dif_in_seconds/2628000)
# years
print(dif_in_seconds/31540000)
