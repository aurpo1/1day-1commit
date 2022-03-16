#백준 21918 전구

from sys import stdin

#n: 전구 개수, m: 명령어 개수
n, m = map(int, stdin.readline().split())

#전구의 상태
state = list(map(int, stdin.readline().split()))

for i in range(m):
    a, b, c = map(int, stdin.readline().split())

    if a == 1:
        if state[b-1] == 0:
            state[b-1] = c
        else:
            state[b-1] = c
    elif a == 2:
        for j in range(b-1, c):
            if state[j] == 0:
                state[j] = 1
            else:
                state[j] = 0
    elif a == 3:
        for j in range(b-1, c):
            state[j] = 0
    else:
        for j in range(b-1, c):
            state[j] = 1


for s in state:
    print(s, end = ' ')
        