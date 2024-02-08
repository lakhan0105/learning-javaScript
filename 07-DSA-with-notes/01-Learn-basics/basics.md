# Learn Basics

## Time complexity

When you go to an interview, your code is judged based on the time complexity and space complexity.Note that Time Complexity !== Time taken by your code to run. This is beacuse different machine takes different time to run, and you cannot consider the code is good/bad using that.

Definition - Rate at which the time taken increases with respect to the input size

Big O notation - it is used to measure Time complexity

Rules for Big O

- Always consider worst case scenario (when u r building a sysytem, u r building for >1persons)
- Aviod constants
- Avoid lower values

## Space Complexity

Learn Later

## Patterns

Learn Later

## Basic Math for DSA

Digit concept

- lets say u have a num 7789
- now you need to perform extraction of digits

Extraction of digits

- You need to do 7789%10 to get the last digit
- when u do %10, it will divide the number by 10 and give you the reminder
- here 7789%10 -> 7780 will be the num divided by 10 and we will be left with 9(last digit)

Removing the last digit from the number

- we need to divide the number by 10 (7789/10)
- we will be left with num.something (778.9)
- if we remove the integer portion from it, then the last digit will be removed (778)

Divisors of a Number 
- when talking about diviors of a number 
- lies from 1 to N (anything greater than N will not divide N)
- Approach 1: loop from 1 to N 
- Approach 2 