#백준 2178 미로 탐색

from collections import deque
from sys import stdin

n, m = map(int, stdin.readline().split())

graph = []
for i in range(n):
    graph.append(list(map(int, input())))

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def bfs(x, y):
    queue = deque()
    queue.append((x, y))

    while queue:
        x, y = queue.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            #이동시 범위 벗어남
            if nx < 0 or nx >= n or ny < 0 or ny >= m:
                continue
            #이동시 이동할 수 없는 칸
            if graph[nx][ny] == 0:
                continue
            if graph[nx][ny] == 1:
                #거리 계산
                graph[nx][ny] = graph[x][y] + 1
                queue.append((nx, ny))
    return graph[n-1][m-1]

print(bfs(0,0))
