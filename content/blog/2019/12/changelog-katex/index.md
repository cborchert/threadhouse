---
title: "Changelog: Katex math typesetting"
date: 2019-12-05T07:00
description: We added a plugin to add Katex math typesetting.
author: Dave
threads: ["meta", "changelog"]
---

As Chris suggested, I am adding this post to note the addition of a math typesetting plugin to our blog, here at [thread.house](https://www.thread.house). This plugin should make posts about math easier to read with less typing on our end.

The plugin is called [Katex](https://www.katex.org/) and it will help us write out mathematical phrases quickly in our markdown files. I plan on writing some posts about math, so it should be useful.

I am writing this post as I install the plugin, so hopefully this will work. Math now looks like this:
$Fn=\cfrac{(\frac{1+\sqrt{5}}{2})^n-(\frac{1-\sqrt{5}}{2})^n}{\sqrt{5}}$

(This is Binet's formula for finding the nth number in the Fibonacci sequence. Cool right?)

This is my first time installing a plugin to a group project through Git, and the process does not seem too complicated, but for my own sake, and yours if it's helpful, I'll go ahead and spell out what I did in detail.

1. First I pulled the repo from git to make sure I had the most up to date version of our blog on my local machine. I did most of this from the terminal.

```shell
c:/myProjectDirectory>git pull
```

2. After that I did a quick npm install to make sure I had all the files. This way, if Chris had uploaded an awesome plugin through node that Git was ignoring, I would have all the files for the project to work properly.

```shell
c:/myProjectDirectory>npm install
```

3. Once that was done, I started a new branch for our project on Git. Because I am changing the overall functionality of the blog, as opposed to posting a simple update, I thought it would be courteous to open a branch to avoid conflicts and ensure that if I messed everything up and failed to notice, we wouldn't end up with a messed up live master branch until Chris or I could figure out what I had done and fixed it.

```shell
c:/myProjectDirectory>git checkout -b branch-name
```

After that I installed Katex! Yay!

```shell
c:/myProjectDirectory>npm install Katex.
```

I then started working on this blog post to show off what I had accomplished so Chris could see I had gotten something done on my own...

However:

When I started trying to show of our new typescripting it wasn't working. I realized just as Chris was calling that I hadn't installed the gatsby-remark-Katex plugin, which I would never have thought of in a million years if Chris hadn't recently installed Mermaid. Gatsby is the framework we are using to run this blog, so it needs to be plugged in to the Katex plugin to work. I don't understand why yet, but it was easy enough to find what to install: [gatsby-remark-katex](https://www.gatsbyjs.org/packages/gatsby-remark-katex/)

So,

4. I installed that as well

```shell
c:/myProjectDirectory>npm install --save gatsby-transformer-remark gatsby-remark-katex katex
```

This reinstalled katex as well, which was not necessary, but I had forgot to type the --save before, so it's probably a good thing. I believe that updates the NPM documentation so that the next time someone pulls the repository and runs NPM install, their machine knows to download Katex.

While I was looking at the documentation, I realized I was not done yet.

5. I had to go into our config file and add a line of code. They offered a large snippet on their install tutorial, but I didn't need the whole thing.

6. I also had to change our browser.js to include their CSS. That was more difficult, just because their documentation didn't tell me specifically where to put it, but Chris pointed me in the right direction.

7. I tried again to write some Katex and it didn't work, and I realized I needed to install an extension in VSCode, so I installed Markdown + Math which worked almost immediately.

8. As soon as the math typesetting was working I looked up Binet's formula, so I could include some good math in the post. Then I got lost looking up the different commands Katex supports and learning a bit of the syntax.

9. Then I wanted to check if it was working outside of my VSCode preview, so I ran the Gatsby local server

```shell
c:/myProjectDirectory>gatsby develop
```

that took a minute on my slow laptop, but eventually localhost 8000 launched in my browser, and my half written blog post showed up with real math typesetting!

10. At this point, I fed my dog and I went and got coffee.

11. Armed with Coffee I got my computer connected to wifi at the coffee shop and looked at what I had done. Everything is working fine on the blog, and the typesetting is showing up. As far as I can tell the process has been succesful. My next step will be to push these changes up and create a pull request. Since that will publish this blog, I will let you know how it went in part II. (My last step before I do that will be spell checking this post before I push)
