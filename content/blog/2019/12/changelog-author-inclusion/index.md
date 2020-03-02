---
title: "Changelog: Author inclusion on blog post titles"
date: 2019-12-16T08:00
description: Chris and Dave screenshare one morning to change the layout of these blog posts
author: Dave
threads: ["meta", "changelog"]
---

Chris and I are about to screen share to try to change how each post displays so that the author is listed near the date when you open a post.

It's one of several features we wanted to tweak. Hopefully I will learn enough from this to change another feature on my own next. I have never used graphql before, so I am not sure what to expect yet, but I bet it will be great.

We connected via a good video-call tool, and then we had to mess with the screen sharing, and now I can see his VS Code in France. Technology is cool!

First he ran Gatsby develop. That allows us to see a live version of the website so far on his machine, but more importantly it ives us access to the Graphql GUI that comes with Gatsby in our browser.

We reinstalled our node modules and we created a new branch, using 'checkout'. Safety first.

Next we had to dig around in the project to find the places to make changes. In this case, we have to get into the JS files that render the front page first. There we found a Graphql queary.

By copy pasting into our helpful graphql tool in the browser we could look inside things and get some autocomplete help to write new quearies or change the ones we had.

In this case, we are really trying to make sure that we are quearying the frontmatter in our posts. The way it works is Gatsby is collecting all of the markdown files we leave around in our folder tree, and loading each one as a blog post.

At the beginning of our posts, we have been recording 'frontmatter' that is invisible in the post, such as the title, date, description, and author.

By saving this data in chunks in objects we are able, pretty quickly in JSX, to use javascript to pull data to append it to HTML object.

We used some shorthands I wasn't familiar with: I did not know about destructuring arrays, much less in a function call. I also didn't know you could get JSX to render different things based on logical comparisons outside of an if-then statement. I hadn't see logical comparisons outside of explicit if-then statements before.

Overall, we went through and did several things: We made sure the data from the frontmatter was quearied. Once it was we knew it was available to use, so we loaded the right part of it into a variable and changed the way our front page is rendered so it either says "By {author}" or "By House". We also changed the way each post was rendered. We got it to say who the post was by at the top in the same way. We also made a bigger change:

We installed Helmet. What that does is make changes dynamicaly that affect the headers of pages. What we used it for in this case, was to check who the author was and load a different CSS style depending on who the author is.

So in the future, once we change those CSS styles, my posts will look different from Chris', and our general posts from the whole team will look a different other way.

Overall it was a very productive hour of coding, and I learned a lot. My main takeaways are these:

1. It's very possible to work on a project where you don't understand all the underlying tools, but it makes you less useful if something needs to be done. You will learn a lot, and if you are careful you won't mess anything up. Even if you do, version control will stop it from messing things up too badly. The bad part is it's difficult to identify something you want to change and just get it done, but it doesn't need to be easy. You can still do it, or try and mess up, or get some help.

2. I already knew this, but it bears stating: In addition to polishing up my HTML and CSS and JS, there are a million JS packages and libraries to learn about. They are super useful, and there are too many of them to learn them all.

3. There are tons of shortcuts in JS, and it's worth understanding how they work, because you will come across them and you may want to learn them. If you don't understand the pattern it takes a long time to figure out what is going on unless you just ask someone who knows or manage to look it up. Even just knowing the word 'destructuring' gives you something to dig into with google and spend an hour on, but just saying "Javascript array wrapped in curly brackets as an argument in a function" will at least take longer. (Alright, I just tried typing that into Google and I found the correct answer on stack exchange, but it was not the first answer and I only know it's the correct answer because I know the word destructuring.)

4. I want to learn more about graphql now, so I put it on my list of things I could spend a couple hours researching. I am sure it's a deep topic I could bury myself in, but it's not necessary yet, and I am already working on a bunch of things at once. This is one of my strategies for being more focused. I come across at least four things a day now that are interesting and that I could study for a few weeks, but if I stopped what I was doing to do that each time, I wouldn't finish any of them anyway. I might as well keep a list and get back to what I was doing.

5. An hour or two is more than enough time to dig into some code and learn or even change some stuff in a big project if you are working with someone who knows what they are doing. It's not a waste. It's great. Especially if it's someone you enjoy spending time with. If you are just starting out learning how to program, get a mentor. You will, and should, make more regular headway and spend more time doing online tutorials and excercises, but you will make more leaps and have more epiphanies dealing with a real person. If you're a experienced programmer, consider adopting a n00b.
