#백준 22869 징검다리 건너기(small)

n, k = map(int, input().split())
a = list(map(int, input().split()))

dp = [0] * (n+1)
dp[0] = 1


for i in range(n-1):
    for j in range(i+1, n):
        if dp[i] and k >= (j-i) * (1 + abs(a[i]-a[j])):
            dp[j] = 1

if dp[n-1]:
    print('YES')
else:
    print('NO')
