# 1068번 트리

import sys
input = sys.stdin.readline

n = int(input())
nodes = list(map(int, input().split()))
bye = int(input())

def dfs(v):
  nodes[v] = -2
  for i in range(n):
    if v == nodes[i]:
      dfs(i)

cnt = 0
dfs(bye)
for i in range(n):
  if nodes[i] != -2 and i not in nodes:
    cnt += 1

print(cnt)