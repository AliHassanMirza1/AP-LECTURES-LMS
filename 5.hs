{-
    1. Merge sort
    2. Passing functions as parameters
    3. Lambda functions
    4. Map (applying a function on a list)
    5. Functional composition using dot(.) operator
    7. Functional vs. Imerpative [What vs. How]
    8. First class functions, 
    9. Higher order function, 
-}


 
merge [] list = list
merge list [] = list
merge (x:xs) (y:ys) = if x <= y
                        then x : merge xs (y:ys)
                        else y : merge (x:xs) ys 

mergeSort [] = []
mergeSort [x] = [x]
mergeSort list  =   merge 
                    (mergeSort(take (length list `div` 2) list))
                    (mergeSort(drop (length list `div` 2) list))

 


add x  y = x + y

addAnother = \x y -> x + y

add1 x = x + 1

mapNew f [] = []
mapNew f  (x:xs) = f x : mapNew f xs 

mapNewAnother f list = [f x | x <- list]


sqr x = x * x
sqrsqr1 x = (sqr.sqr) x
sqrsqr2 x = sqr (sqr (x))

sqrsqr3  = (sqr.sqr) 



--Write a function that is passed a list of
-- digits (0 to 9), the function converts the 
-- list to a whole integer 
--      Input           Output
--      [0,4,5,6]         456
 --       [0]              0
 --     [3,0]              30





--Write a function that is passed a positive 
-- integer, the function converts the number 
-- into a list.
--      Input     Output
--        45        [4,5]
 --       1          [1]




