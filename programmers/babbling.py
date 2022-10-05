# 프로그래머스 옹알이

def solution(babbling):
    answer = 0
    possible = ["aya", "ye", "woo", "ma"]
    
    for i in babbling:
        word = ""
        comp = []
        for j in list(i):
            word += j
            if (word in possible):
                if (len(comp) == 0 or comp[-1] != word):
                    comp.append(word)
                    word = "" 
        if len("".join(comp)) == len(i):
            answer += 1
    
    return answer