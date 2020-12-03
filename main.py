import random
import hashlib
import sys
import copy


sys.setrecursionlimit(362890)
# # local trace function which returns itself 
# def my_tracer(frame, event, arg = None): 
#     # extracts frame code 
#     code = frame.f_code 
  
#     # extracts calling function name 
#     func_name = code.co_name 
  
#     # extracts the line number 
#     line_no = frame.f_lineno 
  
#     print(f"A {event} encountered in {func_name}() at line number {line_no} ") 
  
#     return my_tracer 

def check_solubility(N, state):
	inversions = 0
	aux_arr = []
	for i in state:
		for j in i:
			aux_arr.append(j)

	i=0
	for i in range(len(aux_arr)):
		j = i
		while j < len(aux_arr)-1:
			j = j + 1
			print(aux_arr[i],aux_arr[j])
			if(aux_arr[i]==0):
				break
			if(aux_arr[j] !=0 and 
			   aux_arr[i] > aux_arr[j]):
				inversions = inversions + 1
	print("inversions ", inversions)
	if(inversions%2!=0 and N%2==1):
		return False
	elif(inversions%2==0 and N%2==1):
		return True
	return True


def create_ended_hash(N):
	cont = 1
	arr = []
	for i in range(N):
		aux = []
		for j in range(N):
			aux.append(cont)
			cont = cont + 1
		arr.append(aux)
	arr[N-1][N-1] = 0
	print("Final Positions should be:")
	print(arr)
	print("\n\n")
	return hash(arr)

def hash(state):
	return hashlib.md5(str(state).encode('utf-8')).hexdigest()

def find_zero(state):
	position = [(index, row.index(0)) for index, row in enumerate(state) if 0 in row]
	return position[0][0], position[0][1]

def check_movements(N, x, y):
	limit = N-1

	arr = []

	if((x == 0) and (y == 0)):
		arr.append([0,1])
		arr.append([1,0])
	elif((x == limit)  and (y == limit)):
		arr.append([limit,limit-1])
		arr.append([limit-1,limit])
	elif(x == 0):
		if(y == limit):
			arr.append([0,limit-1])
			arr.append([1,limit])
		else:
			arr.append([0,y-1])
			arr.append([0,y+1])
			arr.append([1,y])
	elif(x == limit):
		if(y == 0):
			arr.append([limit-1,0])
			arr.append([limit,1])
		else:
			arr.append([limit,y-1])
			arr.append([limit,y+1])
			arr.append([limit-1,y])
	elif(y == 0):
		arr.append([x-1,y])
		arr.append([x+1,y])
		arr.append([x,y+1])
	elif(y == limit):
		arr.append([x-1,y])
		arr.append([x+1,y])
		arr.append([x,y-1])
	else:
		arr.append([x-1,y])
		arr.append([x+1,y])
		arr.append([x,y-1])
		arr.append([x,y+1])

	return arr

def move(STATE, x_zero, y_zero, x, y):
	temp_state = copy.deepcopy(STATE)
	temp_state[x_zero][y_zero] = temp_state[x][y]
	temp_state[x][y] = 0

	return temp_state


def generate_board(n):
	values = random.sample(range(0, n*n), n*n)
	state = []

	for i in range(n):
		temp_arr = []
		for j in range(n):
			temp_arr.append(values[0])
			values.pop(0)
		state.append(temp_arr)

	return state



def start(N, STATE, OLD_STATES, END_STATE):

	print("\nSTATE: ", STATE)

	x,y = find_zero(STATE)
	movs = check_movements(N, x, y)
	print("movs: ", movs)

	for mov in movs:
		print("MOV", mov)
		st = move(STATE, x,y, mov[0],mov[1])
		need_test, OLD_STATES, hash_value = should_test(st, OLD_STATES)

		if(hash_value == END_STATE):
			print("FINAL 1")
			print(st)
			return True
		else:
			if(need_test and start(N, st, OLD_STATES, END_STATE)):
				print("FINAL 2")
				print(st)
				return True

	return False


	
def should_test(STATE, OLD_STATES):
	hashed = hash(STATE)

	if(hashed not in OLD_STATES):
		OLD_STATES.append(hashed)
		return True, OLD_STATES, hashed

	return False, OLD_STATES, ""





N = 3

STATE = generate_board(N)

while check_solubility(N,STATE) == False:
	STATE = generate_board(N)

OLD_STATES = [hash(STATE)]

END_STATE = create_ended_hash(N)

if(OLD_STATES[0] == END_STATE):
	print("Estado inicial já é o final")
	sys.exit()

# sys.settrace(my_tracer) 

if not start(N, STATE, OLD_STATES, END_STATE):
	print("Estado inicial não solucionável")