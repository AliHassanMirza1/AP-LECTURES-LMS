{-
   
    1.Typeclasses enable implementation of polymorphism on a
     much higher level than possible in other languages.
    1.1 A typeclass defines a set of methods that is shared 
          across multiple types.
    1.2 A typeclass is a collection of types.
    1.3 We think about what the types can act like and then
        connect them with the appropriate typeclasses.
    1.4 For example, an Int can act like an Equatable (Eq)
        thing, an ordered (Ord) thing etc.
   
   2. Functors, Applicatives, Monads
   2.1 Functors, Applicatives, Monads are typeclasses
   2.2 Common programming patterns/design patterns
   2.3 Builtin list in Haskell is a Functor, Applicative
       and Monad.
   2.4 For a type to belong to a typeclass, it needs
       to implement the methods of the respective typeclass.  
   2.5 A Functor applies a function to a wrapped value
       (value in a context/box/container)
   2.5.1 Functors are things that can be mapped 
         over lists, Maybes, trees, sequences etc. 
        fmap (\x->x^2) [4,5,-6]
        (\x->x^2) <$> [4,5,-6]

   2.6 An Applicative applies a wrapped function to a 
       wrapped value (value in a context/box/container)
   2.6.1 Applicatives enable application of functions 
         that require multiple arguments.
    [(+4), (+5)] <*> [7,8,9]
    [(+4).(*7)] <*> [7,8,9] 
    [(+)] <*> [1,3] <*> [5,7]
    (+) <$> [1,3] <*> [5,7]


   2.7 A Monad applies 
        a function that returns a wrapped value 
        to 
        a wrapped value. 
   2.7.1 Monads provide a function >>= (called "bind")
        f x = [x ^ 2]
        [4,5] >>= f
        [4,5] >>= f >>= f   
-}

data Seq p = Nil | Node p (Seq p) deriving Show

s1 = Nil
s2 = Node 12 Nil

s3 = Node 10 (Node 12 Nil)


{-
    A Functor is a typeclass.
    We are required to implement the following function 
        fmap :: Functor f => (a -> b) -> f a -> f b


   data Seq p = Nil | Node p (Seq p) deriving Show

-}

instance Functor Seq where
    fmap g Nil = Nil
    fmap g (Node v next) = Node (g v) (fmap g next)



{-
    An Applicative is a typeclass.
    We are required to implement the following functions
    pure :: a -> f a
    (<*>) :: Applicative f => f (a -> b) -> f a -> f b
    --pure (this function is supposed to take a value
            of any type and 
            and wrap it in an applicative functor)


    pure x : Node x Nil
    s1 = Nil
    s2 = Node 12 Nil
    s3 = Node 10 (Node 12 Nil)

    sf1 = Node (+3) Nil
    sf2 = Node (+4) (Node (^2) Nil)

    sf2 <*> s2 : (Node 16 Nil ) (Node 144 Nil)
                 (Node 16 (Node 144 Nil))
-}

sf1 = Node (+3) Nil
sf2 = Node (+4) (Node (^2) Nil)

instance Applicative Seq where
    pure v = Node v Nil

    Nil <*> _ = Nil

    (Node g nextG) <*> seq = 
          concatenate (fmap g seq) (nextG <*> seq)


concatenate Nil seq = seq
concatenate (Node v next) seq =
            Node v (concatenate next seq)





{- 
    A Monad is a typeclass.
    We are required to implement at least the 
    following function
    (>>=) :: Monad m => m a -> (a -> m b) -> m b
-}

instance Monad Seq where
    (>>=) Nil _ = Nil
    --Nil >>= _ = Nil
    (Node v next) >>= g = 
        concatenate (g v) (next >>= g)

--monadTest takes a value and returns a wrapped value
monadTest x = Node (x ^ 3) Nil

monadTest2 x = Node (x + 5) Nil


{-
   Node 10 (Node 12 Nil) >>= monadTest
            concat (Node 1000 Nil) ((Node 12 Nil) >>= monadTest )
            concat (Node 1000 Nil) concat ((Node 1728 Nil) (Nil >>= monadTest)) 
   

-}



{-
   Imperative vs functional
   pure function
   higher order functions
   Immutability
   currying
   Functor, Applicatives, Monads


-}