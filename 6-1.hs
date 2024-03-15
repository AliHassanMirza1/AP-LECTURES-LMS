 
data Color = Yellow | Green | Red  

data Shape = Circle Float | Rectangle Float Float deriving Show

data Seq p = Nil | Node p (Seq p) deriving Show


seq1Shape = Node (Circle 4) (Node (Rectangle 5 6) (Nil))
seq1Char = Node 'a' (Node 'b' (Node 'b' (Node 'a' (Nil))))

seq1 = Nil
seq2 = Node 1 (Nil)
seq3 = Node 5 (Node 5(Nil))

seq4 = Node 1 (Node 5 (Node 5 (Node 1 (Nil))))


insertSeq :: Ord t => t -> Seq t -> Seq t
insertSeq v Nil = Node v (Nil)
insertSeq v (Node n next) = if v <= n 
                                then Node v (Node n next)
                                else Node n (insertSeq v next)  

lengthSeq Nil = 0
lengthSeq (Node n next) = 1 + lengthSeq next



