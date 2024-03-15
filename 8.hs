{-
  1. Currying: for functions with multiple arguments.
    Functions can return functions.
    add x y = x + y (a,a) -> a
    add x y = x + y  a -> (a -> a)
    add x y z = x + y + z : (a -> (a -> (a->a))

   2. Functors, Applicatives, Monads
   2.1 Common programming patterns
   2.2 Builtin list in Haskell is a Functor, Applicative and Monad
   2.3 Functors, Applicatives, Monads are type classes
   2.4 A Functor applies a function to a wrapped value (value in a context/box)
   2.4.1 Functors are things that can be mapped over lists, Maybes, trees, sequences etc. 
       fmap (\x->x^2) [4,5,-6]
       (\x->x^2) <$> [4,5,-6]
   2.5 An Applicative applies a wrapped function to a wrapped value (value in a context/box)
   2.5.1 Applicatives enable application of functions that require multiple arguments.
    [(+4), (+5)] <*> [7,8,9]
    [(+4).(*7)] <*> [7,8,9] 
    [(+)] <*> [1,3] <*> [5,7]

   2.6 A Monad applies a function that returns a wrapped value to a wrapped value. 
       Monads provide a function >>= (called "bind") to do this.
        f x = [x ^ 2]
        [4,5] >>= f
        [4,5] >>= f >>= f   


-}



add x  y = x + y

addx :: Num a => a -> a
addx = add 4

addition x y z = x + y + z
additionx = addition 4 
additiony = additionx 5



isOdd x = x `rem` 2 /= 0 

--main  = putStrLn "ABCD" >> getLine >>= putStrLn


inputList = do 
        x <- getLine
        let xInt = read x::Int
        if xInt /= -1 
            then
                do
                    nextInput <- inputList
                    return (xInt : nextInput)
 
            else
                do
                return []    

main = do
    putStr "Enter list of elements (-1 to stop): "
    nStr <- getLine
    print (isOdd (read nStr :: Int))
    list <- inputList
    print list
    print ([(n, 2^n) | n <- [0..7]])
    --x <- getLine  
    --print x  


{- main :: IO ()
main = do
        putStrLn "ABCD"
        str <- getLine
        print (isOdd (read str::Int))

-}