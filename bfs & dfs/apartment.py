#백준 2667 단지번호 붙이기

n = int(input())
graph = []
home_cnt = []
cnt = 0
result = 0

for i in range(n):
    graph.append(list(map(int, input())))


def dfs(x, y):
    if x < 0 or x >= n or y < 0 or y >= n:
        return False
  
    if graph[x][y] == 1:
        graph[x][y] = 0
        global cnt
        cnt += 1
        dfs(x-1, y)
        dfs(x+1, y)
        dfs(x, y-1)
        dfs(x, y+1)
        return True
    
    return False


for i in range(n):
    for j in range(n):
        if dfs(i, j) != 0:
            result += 1
            home_cnt.append(cnt)
            cnt = 0

print(result)
home_cnt.sort()
for i in range(result):
    print(home_cnt[i])
