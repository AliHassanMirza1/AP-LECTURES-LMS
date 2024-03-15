{-
    List comprehension
    Passing functions as parameters
    Bubble sort

-}
oddElems list = [x | x <- list, x `mod` 2 /= 0] 

f1 list1 list2 = [(x,y) | x <- list1, y<-list2]

--f1 [1,2] [3,4] : [(1,3), (1,4), (2,3), (2,4) ]

students = [(1, "Ahmad", "Lahore"), (2, "Usman", "Islamabad")]

f2 list = [ (id, name) | (id, name, address) <- list, id > 1] 

add1 x = x + 1
f3 list g = [g x | x <- list]


isSorted [] = True
isSorted [x] = True
isSorted (x:y:ys) = if x <= y
                        then isSorted (y:ys)
                        else False

bubble [] = []
bubble[x] = [x]

bubble (x:y:ys) = if x <= y
                    then x : bubble (y:ys)
                    else y : bubble (x:ys)

bubbleSort [] = []
bubbleSort [x] = [x]
bubbleSort list = if isSorted list
                    then list
                    else  bubbleSort (bubble list)

 {- isSorted [1,3,10]
    isSorted [3,10]
    isSorted [10]

    isSorted [5]

 
 -}                       