# 백준 1010번 다리 놓기
import sys
input = sys.stdin.readline

n = int(input())

def fac(n):
  if n <= 1: return 1
  return n * fac(n-1)

for i in range(n):
  test = list(map(int, input().split(" ")))
  if test[0] == test[1]:
    result = 1
  else:
    result = int(fac(test[1]) / (fac(test[0]) * fac(test[1] - test[0])))
  print(result)
