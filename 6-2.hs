
data Tree a =  Nil | Node  (Tree a) a (Tree a) deriving Show

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


