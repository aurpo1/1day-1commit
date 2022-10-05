# 프로그래머스 최소직사각형

def solution(sizes):
    answer = 0
    
    width = []
    height = []
    for w, h in sizes:
        if (w < h):
            w, h = h, w
        width.append(h)
        height.append(w)
        
    answer = max(width) * max(height)
    
    return answer