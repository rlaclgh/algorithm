import itertools

datas = input().split(" ")
n = int(datas[0])
k = int(datas[1])

def NChooseK_fast(n, k):
    numerator = 1
    denominator = 1
    k = min(n-k, k) #조합의 대칭성을 이용하여 더 적은 수의 연산을 하기 위해서입니다.
    for i in range(1, k+1):
        denominator *= i
        numerator *= n+1-i
    return numerator//denominator

print(int(NChooseK_fast(n+k-1,n))% 1000000000)