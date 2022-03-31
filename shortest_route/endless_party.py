#백준 11265 끝나지 않는 파티
#플로이드 워셜
#min()을 사용하면 시간초과

import sys
input = sys.stdin.readline

n, m = map(int, input().split())

graph = [ list(map(int, input().split())) for _ in range(n) ]

for k in range(n):
    for x in range(n):
        for y in range(n):
            if graph[x][y] > graph[x][k]+graph[k][y]:
                graph[x][y] = graph[x][k]+graph[k][y]

for request in range(m):

    a, b, c = map(int, input().split())

    if c >= graph[a-1][b-1]:
        print('Enjoy other party')
    else:
        print('Stay here')
