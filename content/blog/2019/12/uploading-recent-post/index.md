---
title: trying to upload my most recent post
date: 2019-12-06T15:14
description: I had trouble uploading my recent post, because I did things out of order, but it all worked out.
author: Dave
---

I don't know if this will help anyone who is working on Gatsby, but this is exactly the kind of problem I expect to run into all the time, so I should document it.

Earlier I committed the changes for the last post on Git and pushed everything.

When I went online to check it out, it didn't show up. I figured, maybe it was lag. A few minutes later I got nervous that I did something wrong, and my nervousness reminded me to run through some kind of checklist of what I am supposed to do in my head.

I had not done several things.

The last time I pulled, I forgot to npm install. So first I did that.

After that I realized I didn't know whether it would work because I didn't run gatsby develop before committing and pushing, so I did that.

The develop failed and threw an error about the blog template file.

Now, I know that file was present the last bunch of times I pushed stuff, and I know it hasn't changed, because every time I commit I check git status to add all the files I have worked on, and it has never showed up.

So, I thought it might be my date format, but I checked that and it looked like Chris' on other posts.

So I looked at the blog template file, and of course, I didn't write it, and I have no idea what it should look like, but it looked fine.

I sent out a message to Chris, prematurely I think, telling him I broke the blog, mostly because I was amused I was having trouble, and he immediately found the problem and gave me a hint or two.

I already had all of the hints I needed, and he didn't tell me anything new, but I had not been thorough. I had updated the dates on my two last entries on Katex to add the time because I wanted them to show up in order, and I had formatted the time on those files incorrectly. So I fixed that.

I retyped the date on my Fibonacci post just to make sure.

I ran gatsby develop, and that worked fine.

So I git added the files I had changed again and committed.

Then I git pushed, and everything worked fine.

All better.