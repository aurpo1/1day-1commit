# 11724번 연결 요소의 개수

import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**7) # 파이썬의 재귀 허용 가능 범위 넓혀줌

n, m = map(int, input().split())
trees = [[] for _ in range(n+1)]
for _ in range(m):
  a, b = map(int, input().split())
  trees[a].append(b)
  trees[b].append(a)

visited = [False] * (n+1)
cnt = 0

def dfs(v):
  visited[v] = True
  for i in trees[v]:
    if not visited[i]:
      visited[i] = True
      dfs(i)

for i in range(1, n+1):
  if not visited[i]:
    if not trees[i]:
      cnt += 1
      visited[i] = True
    else:
      dfs(i)
      cnt += 1

print(cnt)