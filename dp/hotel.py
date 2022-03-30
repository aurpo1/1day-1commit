#백준 1106 호텔


c, n = map(int, input().split())

cost = []
num = []

dp = [100001] * (c+100)
dp[0] = 0

for i in range(n):
    a, b = map(int, input().split())
    cost.append(a)
    num.append(b)

for i in range(n):
    for j in range(num[i], c+100):
            dp[j] = min(dp[j-num[i]]+cost[i], dp[j])
            
print(min(dp[c:]))

