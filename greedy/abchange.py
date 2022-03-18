#백준 16953 A->B

a, b = map(int, input().split())
result = 1

while b != a:
    result += 1
            
    if (b%2 != 0 and b%10 != 1) or b < a:
        result = -1
        break
    
    if b%2 == 0:
        b = b//2
        print(b)
    elif b%10 == 1:
        b //= 10
        print(b)
  

print(result)
