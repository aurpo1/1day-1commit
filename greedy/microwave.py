#백준 10162 전자레인지

t = int(input())
btns = [300, 60, 10]

btn_cnt = [0, 0, 0]

for i in range(len(btns)):
    btn_cnt[i] += t // btns[i]
    t %= btns[i]

if t != 0:
    print(-1)
else:
    for i in range(len(btn_cnt)):
        print(btn_cnt[i], end = ' ')
