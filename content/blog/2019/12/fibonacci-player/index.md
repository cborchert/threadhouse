---
title: "The Fibonacci Player"
date: 2019-12-05T11:15
description: The biggest project I am working on turns repeating sequences of numbers into music.
author: Dave
---

Hi Chris!

I figured I would write a brief description of my Fibonacci player. I think I can program most of it myself, but having a clear outline of what I want it to do should be helpful in case I get stuck and ask for your help.

But before I give a clear outline, in the next post, I will give a long rambling background. This will be less useful for you, since you lived through most of this.

So Chris and I have been thinking about this fun math puzzle ever since we were sophmores in college. I may be a touch more obsessive, but Chris always had more technical chops than me, so I keep dragging him back into it.

It all started during sophmore music. We all got a very simple assignment to write a simple melody. Music has never been my thing. I just didn't grow up thinking about it, and until St. John's I never dug into the theory, so I don't have much of an ear, and it's a bit like a language I tried to learn later in life.

I found the idea of writing a simple melody boring, __but__ after discovering the mean and extreme ratio in Euclid's elements the year before, I had been pretty fascinated by the Fibonacci sequence. So I figured, well, I can turn this into music no problem.

So I got to work. I quickly realized how short the melody would be, or how far out of a comfortable range it would get. The Fibonacci sequence, of course is composed as follows:

Technically I think you are supposed to start with the zero, but I always started with two 1s. Then, to get the next number, you add the previous two.

Since $1+1=2$ we get 1, 1, 2

Then we get 1, 1, 2, 3

And so on: 1 1 2 3 5 8 13 21 34 55 89 144 etc.

Now we translate these to hat numbers. The way I understand it, hat numbers are like variables in music, so a $\hat{1}$ is a C if C is your key, or a D if D is your key. Pretty great.

Each key has 7 notes and an octive. so the most useful range is 1-8. Music, of course, goes above and below this range, but it’s where I was aiming to stay. That gives me six notes in the optimal range of making a normal melody.

Worse, the melody just climbs. It never comes back down, and it quickly flies off the right side of a piano. So just making the Fibonacci numbers into hat numbers makes less of a melody and more of a growing noise.

Undeterred, I divided each number in the sequence by 8 and took the remainders, which gave me 1 through 7 and 0, which I made the octive. 

It wasn't long before I noticed that the sequence repeated after only 12 notes. I should probably have found that interesting mathmatically, but it was annoying musically.  I took an infinate sequance and turned it into a finite tune that repeats. Again, not as interesting as I had hoped. The best part was that it ended on the octive, which sounded nice.

So I tried a different number. 6. That repeated too, after 24 notes this time. Now, I am not a mathematician, but my brain likes patterns. The fact that it was a smaller divisor, but it made a longer sequence, and that it was exactly twice the length of the earlier sequence peeked my interest.

So I tried all the numbers. They all repeated. Now I was getting somewhere, so I would use the sequences in order 1 through whatever, to make a sequence as long as I wanted. I even put breaks between the sequences, which made it sound a bit less mechanical. 

Temporarily satisfied, I turned in my melody that took me longer to write than any of the other students and felt pretty good about it.

The thing about melodies without any intervals is that they seem boring to me. As long as they stay in their key, there just does not seem to be that much interesting you can do with them. I am aware this is because of my lack of knowledge, but there wasn't enough to keep going.

Worse, I wasn't a programmer. I was using Excel, which I was familiar with even back then. After the 74th Fibonacci number, excel figures you couldn't possibly need perfect decimal accuracy for a 16 digit number, so it starts rounding, which really messes up your remainders very quickly.

It still bothered me that the sequences were the lengths they were. There did not seem to me to be a discernable pattern, but it was math, and it was a sequance that is pretty 'natural' as far as these things go. Without getting into weather numbers represent nature, or are in nature, or represent our cognition layered over nature, I'll just say it bothered me. I was sure there was a pattern, but I really didn’t have the tools to figure it out.

Later in the semester, we were asked to compose a short song in counterpoint with at least three voices. So I dug up my old melody, opened up Excel, and grabbed a new graph paper notebook to do things by hand when the numbers got too big.

I decided that if I payed the melody the way I had written it, and I layered it over itself in half notes, quarter notes, eighth notes, and sixteenth notes, it would probably sound more or less like counterpoint. The rules of counterpoint seemed like they would permit much of what I was doing, and any divergence would be an interesting exercise to find. I would at least end up with a really long piece of music that I could analyze, which was good practice. Also, I knew my professor would be interested enough, that he would not take away credit for the __math__ breaking the rules of counterpoint.

It took some work, and I had to find a program online that would translate a .txt file onto a staff, or the project would take too long. I also can't play piano well enough to find out what it would sound like, so I wanted my computer to play it. I found [lilypond](www.lilypond.org) after searching around online for a while, and it worked out well enough that I could play the begining of my song. 

No one was as surprised as me when it sounded pretty good. I eventually ran out of time and handed in what I had. I played the song for my class, and gave my professor the sheet music for the first 30 or so sequences with some errors due to excel's number storage limitations. He really liked it and said it was interesting.

I have revisited the math many times since then, and Chris wrote a paper at some point trying to figure out a way to predict the length of the divisor sequences. I believe he found a rule that worked most of the time, but not all the time.

Over the years that I have been toying with these ideas, I have talked to dozens of very curious and intelligent people, who have generously picked through all of it with me, but of course, without a clear question, other than "why are the sequences the lengths they are?" I have never gotten any answers, just the deep satisfaction of having dug around in an obscure part of mathematics that was way over my head, and very exciting.

The computer I used for that project is long gone, and I have never gotten to play the music again. I believe lilypond let me make an MP3 of the first few seconds of the song as a preview, and that was it. That's all I have heard of it in years. The sound still kinda haunts me. 

I still can't play piano, but I have been dabbling in programming, __So__, I am going to make a web app that plays the song in a key of the user's choice. If I make it right the song will play until it is stopped (or until the computer runs out of memory?). I intend to add functionality to the player over time, so you can do the same with different fibonacci like sequences and change the instruments.

In parting, here's the end of Kublai Khan:

>A damsel with a dulcimer\
>In a vision once I saw:\
>It was an Abyssinian maid,\
>And on her dulcimer she played,\
>Singing of mount Abora.\
>Could I revive within me\
>Her symphony and song,\
>To such a deep delight 'twould win me,\
>That with music loud and long,\
>I would build that dome in air,\
>That sunny dome! those caves of ice!\
>And all who heard should see them there,\
>And all should cry, Beware! Beware!\
>His flashing eyes, his floating hair!\
>Weave a circle round him thrice,\
>And close your eyes with holy dread\
>For he, on honey-dew hath fed,\
>And drunk the milk of Paradise.

Thanks for reading! Watch for my next post about the specifications for the app.

 - Dave
