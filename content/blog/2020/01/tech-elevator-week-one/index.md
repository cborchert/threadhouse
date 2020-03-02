---
title: "Tech Elevator - Week 1"
date: 2020-01-17
description: I just started a coding bootcamp and I've already learned a lot.
author: Dave
threads: ["bootcamp"]
---

Hey Chris,

I kept meaning to write about what was going on each day, and I kept having work to do or sleeping. Luckily I took lots of notes.

I think a breakdown of what we learned each day would be a lot of content, but not entirely interesting, and I think it would obscure the interesting parts in the absolute blur of the large volume of content we are getting each day.

Luckily, we are really starting with an introductory unit, and for almost all of what we have covered so far, I was prepared, and it was not new concepts for me. This has given me the opportunity to get a bit deeper into these concepts without getting confused, to really drill the syntax since I'm not used to Java, and to think about the differences with Javascript, which I'm more familiar with.

One of the most interesting discussions we have had this first week was about memory, and the relationship between data types and how data is stored.

So Java is a strictly typed language. That means that when you declare a variable, you also declare it's type, and then that never changes. Pretty annoying until you know why. It just seems inflexible, and like maybe they just did it to make things a bit more difficult and protect you from bugs where the data type isn't right so the compiler will notice and you get your error when you try to compile instead of run-time when you already have an end user interacting your program. That's what I always assumed, but the deeper reasons are kinda cool, AND help explain some behavior I found mysterious with Strings and Arrays.

1. First, there are two types of data-types in Java (that I know of):

There are primitive data-types, which are like built in simple kinds of data. There are eight of them:

- byte - a numerical value from 0 to 255. [This takes 8 bits, or one byte of memory]
- boolean - a simple value of true or false.
- char - a single character, like 'd'.
- short - a short number (with no decimal places) between $-2^{15}$ and $2^{15}-1$ [two bytes]
- int - [four bytes]
- long - [eight bytes]
- float -
- double -

These data types are the basic building blocks of Java programs.

non-primitive data-types are different. They are more complex, and more importantly, they are stored differently.

2. Second, Java handles memory a specific way:

It breaks down its available memory into 'the stack' and 'the heap'. The stack, is a smaller piece of memory, that is faster and more agile. It is accessed quickly and that kind of thing. This is where primitive data types are stored.

The heap is a much bigger chunk of memory. It's slower to dig through, but it can store much more of the things you need. Any data type that is stored here is referenced in the stack with a pointer. THAT is why non-primitive data types are called 'reference data-types' because Java stores a reference, or pointer, in hex, in the location the variable points towards.

So lets say you make an integer and store it in a variable:

```java
int example = 5;
```

That five is stored to memory as an integer, which uses eight bytes. So it stores

```
0000 0000 0000 0000
0000 0000 0000 0101
```

I don't know how it remembers that these eight bites are referred to as 'example' but I know it does that. So when you change the value of 'example' with the assignment operator:

```java
example = 6;
```

it goes into the stack where example is stored and updates the value to:

```
0000 0000 0000 0000
0000 0000 0000 0110
```

So next time you reference 'example' it's value is 6.

On the other hand, if you make a reference-type variable:

```java
String name = "Chris"
```

it goes to the stack and stores something like:

```
0xFABFACE
```

This reference points to an address in the heap. In the heap it stores... Something...

I believe with strings it stores an array of chars, but I don't know what that is in binary. Either way, the takeaway here is that then, if I start referencing and changing the string, there is some weird behavior yu need to understand:

```java
name = "Dave"
```

Now the value is "Dave".

```java
String secondName = name;
```

Now we have a second String with the value of "Dave".

```java
name = "Chris"
```

Now, I WANT to believe I have two strings, "Dave" and "Chris", but that is incorrect. I now have two strings with the value "Chris". What happened?

So name is ACTUALLY

```
0xFABFACE
```

and secondName is actually

```
0xFABFACE
```

They are identical pointers to the same address in the heap. When I use the assignment operator on either now, it finds the address, goes into the heap, and alters the value. Both values change.

That is why it is dangerous, with Strings and Arrays, to copy the value using the assignment operator and a second String or Array.

I hope this is helpful. It's one of the most interesting takeaways for me from the first week.

We went over a LOT of information in one week. We learned some commands for terminal and git. We learned about primitive data types, variables, conditional operators, logical operators, if statements, loops, strings, and arrays. We ended the week making small programs that could output and accept input from the terminal, and parsing the input and doing math to it before outputting it.

We have also begun talking to the career services people. That part of the program starts less intense as we are learning more programming at the beginning, and amps up as we go. It's already been helpful as well.

So far it has been a great experience, and I can recommend doing a bootcamp, if you can afford it or get the financing, and if you prepare well.
