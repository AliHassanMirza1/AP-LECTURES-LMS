{-
    
1. GHCi: Glasgow Haskell Compiler (interactive).
1.1. A programmer codes a Haskell program,
         it is compiled and executed
1.2  Very useful for testing simple programs.

2. Operators
2.1 Arithematic: +, -, *, /, `div` (integer division), `rem`, `mod`
2.2 Logical: &&, ||, (&& has higher precedence than ||)
2.3 Comparison: <, <=, >, >=, ==, /=
3. Every value and every expression has a type
3.1. Data Type: (a) A set of values (b) a set of operations
3.2. Evaluation of an expression e will produce a value of type T
3.3. Type inference is done prior to expression evaluation which makes
     Haskell programs typesafe.
3.4. Common types: Bool, Char, String ("", "ab-c1"), 
                   Int, Float, Double
3.5 Lists: [4,56,7], [False, True, False] ["A", "AB"]
                List of lists [[], []] 
                All elements in a list must be of the same type
                list functions: head, tail, length, take, drop
                            :, ++, !!
                Cons operator (:) Used to prepend an element at the front of a list

3.6 Tuples
    x = (False, "ABC", 1), 
    (False, (1, "ABC")), 
    (False, (1, "ABC"), [4,5,6])
    List of tuples: [(False, (1, "ABC"), [4,5,6.4]), (True, (5, "sdfdsa"), [1])] 


4. Use :type command to find out the type of an expression or of a value in GHCI
    Type Inference: Haskell compiler infers types
    
    
5. The type of an expression is the type of the value it evaluates to.
6. In the construct "if expr1 then expr2 else expr3", 
            the type of expr2 and expr3 must be same. 


    Functions
    -Funtion name
    -Function parameters (type inference)
    -Function body
    -Function return type (type inference)



    Ord: types that can be ordered

-}

x = 100
y= 20
z = [1,232,4]
addNew x y = x + y
f x y = x < y