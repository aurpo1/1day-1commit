#백준 20495 수열과 헌팅

from bisect import bisect_left, bisect_right
import sys

n = int(sys.stdin.readline())

arr = [ list(map(int, sys.stdin.readline().split())) for _ in range(n) ]
min_arr = []
max_arr = []

for i in range(n):
    min_arr.append(arr[i][0]-arr[i][1])
    max_arr.append(arr[i][0]+arr[i][1])

min_arr.sort()
max_arr.sort()

result = [[] for _ in range(n)]

for i in range(n):
    x = bisect_left(max_arr, arr[i][0]-arr[i][1])
    y = bisect_right(min_arr, arr[i][0]+arr[i][1])
    
    result[i].append(x+1)
    result[i].append(y)

for i in range(n):
    if i != 0:
        print()
    for j in range(2):
        print(result[i][j], end=' ')
