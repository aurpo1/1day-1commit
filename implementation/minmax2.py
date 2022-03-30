#백준 20053 최소, 최대 2

n = int(input())

for i in range(n):

    x = int(input())
    result = list(map(int, input().split()))

    print(min(result), max(result))
