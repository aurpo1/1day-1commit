#백준 20154 이구역의 승자는 누구야?!

num = [3, 2, 1, 2, 3, 3, 3, 3, 1, 1, 3, 1, 3, 3, 1, 2, 2, 2, 1, 2, 1, 1, 2, 2, 2, 1]


s = input()
count = 0

for i in range(len(s)):
    t = ord(s[i])-65
    count += num[t]

if (count%10)%2 == 0:
    print("You're the winner?")
else:
    print("I'm a winner!")
