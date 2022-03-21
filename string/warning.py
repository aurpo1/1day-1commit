#백준 3029 경고

n = list(map(int, input().split(':')))
t = list(map(int, input().split(':')))

result = [0, 0, 0]

for i in range(2, -1, -1):
    if i == 0:
        if n[i] > t[i]:
            result[i] = t[i] + 24 - n[i]
        elif n == t:
            result[i] = 24
        else:
            result[i] = t[i] - n[i]
        continue
            
    if n[i] > t[i]:
        result[i] = t[i] + 60 - n[i]
        t[i-1] -= 1
    else:
        result[i] = t[i] - n[i]

for i in range(3):
    if result[i]%10 == result[i]:
        print(f"0{result[i]}", end = "")
    else:
        print(result[i], end = "")

    if i != 2:
        print(":", end = "")
