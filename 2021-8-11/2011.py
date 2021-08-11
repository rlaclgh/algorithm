nums = input()

if nums[0] == "0":
    print(0)
else:


    num_list = [0]
    num_list.extend(list(nums))
    num_list = [int(x) for x in num_list]

    DP = [[[0,0] for _ in range(len(num_list))] for _ in range(len(num_list)) ]

    DP[1][1][1] = 1

    for i in range(2,len(num_list)):
        DP[i][i][1] = 1

        if i % 2 == 0:
            fr = i // 2
        else:
            fr = i // 2 + 1

        for j in range(fr,i):
            

            if DP[i-1][j-1][1] or DP[i-1][j-1][0]:

                DP[i][j][1] += DP[i-1][j-1][1] % 1000000
                DP[i][j][1] += DP[i-1][j-1][0] % 1000000
            
            if DP[i-1][j][1] and (num_list[i-1]==1 or (num_list[i-1] == 2 and num_list[i]<= 6)) :

                DP[i][j][0] += DP[i-1][j][1] % 1000000

    print(DP[-1])
    print(sum([sum(x) for x in DP[-1]]))

