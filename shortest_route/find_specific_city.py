#백준 18352 특정 거리의 도시 찾기
#다익스트라

import heapq
import sys
input = sys.stdin.readline
INF = int(1e9)


n, m, k, x = map(int, input().split())

graph = [ [] for i in range(n+1) ]
distance = [INF] * (n+1)

for _ in range(m):
    a, b = map(int, input().split())
    graph[a].append((b, 1))


def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start))
    distance[start] = 0

    while q:
        dist, now = heapq.heappop(q)
        if distance[now] < dist:
            continue
        for i in graph[now]:
            cost = dist + i[1]
            if cost < distance[i[0]]:
                distance[i[0]] = cost
                heapq.heappush(q, (cost, i[0]))

dijkstra(x)

result = []

for i in range(len(distance)):
    if distance[i] == k:
        result.append(i)

result.sort()

if not result:
    print(-1)
else:
    for i in range(len(result)):
        print(result[i])
