# 백준 1890 점프
import sys
input = sys.stdin.readline

n = int(input())
map = [list(map(int, input().split())) for _ in range(n)]

dp = [[0] * n for i in range(n)]
dp[0][0] = 1

for i in range(n):
  for j in range(n):
    if i == n-1 and j == n-1:
      print(dp[n-1][n-1])
      break
    if map[i][j] == 0:
      continue
    down = map[i][j] + i
    right = map[i][j] + j
    if down < n:
      dp[down][j] += dp[i][j]
    if right < n:
      dp[i][right] += dp[i][j]

