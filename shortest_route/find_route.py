#백준 11403 경로 찾기
#플로이드 워셜

import sys
input = sys.stdin.readline

n = int(input())

graph = [ list(map(int, input().split())) for _ in range(n) ]

for k in range(n):
    for a in range(n):
        for b in range(n):
            if graph[a][b] or (graph[a][k] and graph[k][b]):
                graph[a][b] = 1

for i in range(n):
    for j in range(n):
        print(graph[i][j], end = ' ')
    print()
