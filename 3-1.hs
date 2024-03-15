{-
 1. Simple functions in Haskell.
 2. Writing a function using pattern matching
 3. Writing a function using guards

-}
-- Three different factorial functions
fact1 n = if n <= 0 then 1 else n * fact1 (n-1)

{-fact1 4
4 * fact1 3
4 * (3 * fact1 2 )
4 * (3 *( 2 * fact1 1) )
4 * (3 * (2 * (1) ))
4 * (3 * (2))
4 * (6)
24
-}


fact2 0  =  1 
fact2 n = n * fact2 (n-1)

fact3 n | n <= 0 = 1
        | otherwise = n * fact3(n-1)

-- A funtion that groups characters
group c | c >= 'a' && c <= 'z' = "A lower case letter:" ++ [' ', c]
        | c >= 'A' && c <= 'Z' = "An upper case letter:" ++ [' ' , c] 
        | c >= '0' && c <= '9' = "A digit:" ++ [' ' , c] 
        | otherwise = "Unknown character"



listLength [] = 0
listLength (x : xs) =  1 + listLength xs


sumList [] = 0
sumList (x:xs) = x + sumList xs

sumListPositive [] = 0
sumListPositive (x:xs) 
    | x > 0 = x + sumListPositive xs
    | otherwise = sumListPositive xs


isOdd n = if n `mod` 2 /= 0 then True else False

oddElems1 [] = []
oddElems1 (x: xs) = 
        if x `mod` 2 /= 0 
            then x : oddElems1 xs  
            else oddElems1 xs

oddElems2 [] = []
oddElems2 (x:xs) 
    | x `rem` 2 /= 0 = x : oddElems2 xs
    | otherwise = oddElems2 xs


