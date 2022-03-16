#백준 5585 거스름돈

a = int(input())
n = 1000-a
data = [500, 100, 50, 10, 1]

result = 0
for i in data:
  result += n // i
  print(result, i, n)
  n %= i
print(result)
