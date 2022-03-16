#백준 22864 피로도

#피로도 a, 일 b, 줄어든 피로도 c, 최대 m

a, b, c, m = map(int, input().split())
total = 0
worktime = 0

for i in range(24):
    if a > m:
        break
    if total+a <= m:
        total += a
        worktime += b
    else:
        total -= c
        if total < 0:
            total = 0

print(worktime)
