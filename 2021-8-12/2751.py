import sys 
arr=[]
n=int(input())
for i in range(n):
    arr.append(int(sys.stdin.readline().rstrip()))
def QuickSort(left, right, arr):
    #left 가 클 경우 종료
    if(left>=right):
        return
    i = left
    j = right
    pivot = arr[(left+right)//2]
    #i, j가 교차 하면 종료

    while(i<=j):
        #i가 작은 거라면 통과 아니라면 멈춘다 -> 교환해야함
        while(arr[i] <pivot):
            i+=1
        #j가 큰 거라면 통과 아니라면 멈춘다 -> 교환해야함
        while(arr[j] >pivot):
            j-=1
        if(i<=j):
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            i+=1
            j-=1
        
    QuickSort(left,j,arr)
    QuickSort(i,right,arr)


QuickSort(0, n - 1, arr)
for i in range(n):
    print(arr[i])