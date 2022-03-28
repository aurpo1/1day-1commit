#백준 2839 설탕 배달

n = int(input())

dp = [0] * 5001
dp[3] = 1
dp[5] = 1

for i in range(6, n+1):

    if i%5 == 0:
        dp[i] = dp[i-5]+1
    elif i%3 == 0:
        dp[i] = dp[i-3]+1
    else:
        dp[i] = min(dp[i-3]+1, dp[i-5]+1)

    if dp[i] == 1:
        dp[i] = 0

if dp[n] == 0:
    print(-1)
else:
    print(dp[n])
        
