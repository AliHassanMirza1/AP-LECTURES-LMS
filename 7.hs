{-
    Typeclasses:
        A typeclass is a collection of types
        Num: Double, Float, Int, ...
        Show: Double, Shape, ...
        Eq
        Ord: Shape, ...
    
    Type: 
        A type is a collection of values
        A set of operations that can be performed on values.

-}



data Tree a =  Nil | Node  (Tree a) a (Tree a) {-deriving (Show)-}

tree1 = Nil
tree2 = Node Nil 30 Nil

tree3 = Node (Node Nil 10 Nil) 30 Nil

tree4 = Node (Node Nil 10 Nil) 30 (Node Nil 35 Nil)

tree5 = Node (Node (Nil) 5 (Nil)) 10 (Node (Nil) 15 (Nil))


preOrder Nil = []
preOrder (Node left n right) = [n] ++ preOrder left ++ preOrder right 


inOrder Nil = []
inOrder (Node left n right) = inOrder left ++ [n] ++ inOrder right


trav Nil _ = []
trav (Node left n right) t | t == 0 = trav left t ++ [n] ++ trav right t
                           | t ==1 =  [n] ++ trav left t ++  trav right t  
                           | otherwise = trav left t ++  trav right t ++ [n]


insertNode k  Nil =  Node Nil k Nil
insertNode k (Node left n right) 
            | k <=n = Node (insertNode k left) n right 
            | otherwise = Node left n (insertNode k right)


--Eq : (==), (/=)
instance Eq a => Eq (Tree a) where
    (==) Nil Nil = True
    (==) Nil (Node left n right) = False
    (==) (Node left n right) Nil = False
    (==) (Node left1 n right1) (Node left2 m right2) 
            | n == m = left1 == left2 && right1 == right2
            | otherwise = False

    (/=) t1 t2 = not (t1 == t2)

--data Tree a =  Nil | Node  (Tree a) a (Tree a) deriving (Show)

instance Show a => Show (Tree a) where
    show :: Show a => Tree a -> String
    show Nil = " "
    show (Node left n right) = (show left) ++ show n ++ (show right)
   
data Shape = Circle Float | Rect Float Float 
                            deriving Eq
                    

s1 = Circle 4
s2 = Rect 6 4

{- Rectangle: length = 6, width = 4 -}

instance Show Shape where
    show (Circle x) = "Circle: radius = " ++ show x
    show (Rect x y) = "Rectangle: (length, width) = " ++ show (x , y)

area (Circle r) = 3.14 * r ^ 2
area (Rect l w) = l * w

--Ord : <, <=, >, >=, min max
--Ord: Pre-requisite is being a member of Eq typeclass
instance Ord Shape where

   -- (<) s1 s2 = if (area s1) < (area s2) then True else False
   -- (<) s1 s2 = (area s1) < (area s2)
   s1 < s2 = (area s1) < (area s2)
   s1 <= s2 = (area s1) <= (area s2)
   (>) s1 s2 = (area s1) > (area s2)
   s1 >= s2 = (area s1) >= (area s2)

   min s1 s2 | (area s1) < (area s2) = s1
             | otherwise = s2
   max s1 s2 | (area s1) < (area s2) = s2
             | otherwise = s1


f x = show x