#백준 5597 과제 안 내신 분..?

import sys

s = [0] * 30
for i in range(28):
    a = int(sys.stdin.readline())
    s[a-1] = 1

result = []

for i in range(30):
    if s[i] == 0:
        result.append(i+1)
        
result.sort()
for i in range(len(result)):
    print(result[i])
