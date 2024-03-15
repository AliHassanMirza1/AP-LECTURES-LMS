factor :: Int -> Int
factor 0 = 1
factor 1 = 1
factor n = n * factor (n-1)
 -- head list is its first element  and tail list is the remaining list

 -- if xs is a list then (x:xs) = x is head and xs is tail

sumofMatrix :: [[Int]] -> [Int]
sumofMatrix [] = []
sumofMatrix (row:matrix) = (sumofRow row) : (sumofMatrix matrix)


sumofRow :: [Int] -> Int 
sumofRow [] = 0
sumofRow (x : xs) = x + (sumofRow xs)

-- [1, 2, 3, 1]
-- x =1, xs = [2,3]  ..... 1 + sumofRow [2,3] = 1+ 5=6
-- sumofRow [2,3] ... x = 2 and xs is [3] ...sumofRow [2,3] = 2 + sumofRow [3] = 2 + 3
--sumofRow [3] = 3 + sumofRow [] = 3 + 0 = 3


removeDuplicates :: [Int] -> [Int]
removeDuplicates [] = []
removeDuplicates (x : xs) = if checkx xs x then removeDuplicates xs else  x : removeDuplicates xs
 
checkx :: [Int] -> Int -> Bool
checkx [] _ = False
checkx (n:xs) x = if n == x then True else checkx xs x

data Tree a = Nil | Node (Tree a) a (Tree a) deriving(Eq, Show)



sumofTree :: (Tree Int) -> Int
sumofTree Nil = 0
sumofTree (Node left val right) = val + (sumofTree left) + (sumofTree right) 


--y = Node (Node Nil 1 Nil) 2 (Node Nil 3 Nil) = 2 + sumofTree (Node Nil 1 Nil) + sumofTree (Node Nil 3 Nil)
-- sumofTree (Node Nil 1 Nil) = 1 + sumofTree Nil + sumoftree Nil =1 + 0 + 0 = 1
-- sumofTree (Node Nil 3 Nil) =  3 +sumofTree Nil + sumofTree Nil = 3 +0+0=3
-- 2 + 1 + 3 =6
identityMatrix :: [[Int]] -> Bool
identityMatrix [] = True
identityMatrix (x:xs) = squarematrix (x:xs) (length (x:xs)) && (checkRow (x:xs) 0)
-- [[1,0,0], [0,1,0], [1,2,3]]
checkRow :: [[Int]] -> Int -> Bool
checkRow [] _ = True
checkRow (x:xs) n = if allzeros (take n x) && allzeros (drop (n+1) x) && (take 1 (drop n x) == [1]) then checkRow xs (n+1) else False
    
    
    
allzeros :: [Int] -> Bool
allzeros [] = True
allzeros (x:xs) = if x == 0 then allzeros xs else False




squarematrix :: [[Int]] -> Int -> Bool
squarematrix [] _= True
squarematrix  (x:xs) n = if n == length x then squarematrix xs n else False