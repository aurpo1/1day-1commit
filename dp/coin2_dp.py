#백준 2294 동전2


n, k = map(int, input().split())
c = []
for i in range(n):
    c.append(int(input()))

dp = [10001] * (k+1)
dp[0] = 0

for i in c:
    for j in range(i, k+1):
        if dp[j - i] != 10001:
            dp[j] = min(dp[j-i]+1, dp[j])


if dp[k] != 10001:
    print(dp[k])
else:
    print(-1)
