---
title: "Changelog: Katex math typesetting II"
date: 2019-12-05T08:00
description: We added a plugin to add Katex math typesetting.
author: Dave
threads: ["meta", "changelog"]
---

Alright!

So after spell checking my blog entry, the first thing I did was go into the terminal and try to git push. That was wrong. Luckily, it didn't work.

1. The first _useful_ thing I did was check my status

```terminal
myProjectDirectory>git status
```

I was surprised to see my blog post was untracked, because I forgot I had to add it. I'm glad I checked, so

2. I added it

```terminal
myProjectDirectory>git add fileName
```

When I checked the status again, it was all staged and ready to commit, so

3. I committed it

```terminal
myProjectDirectory>git commit
```

4. my editor had me type in a message about what I changed, so I did that.

5. Then I tried to push, and it didn't work, because I had made a new branch locally and it didn't exist in the repo yet, so I used the language it suggested and named the branch

```terminal
myProjectDrectory>git push --set-upstream origin myBranch
```

Once I did that, it did some stuff and told me it was all good. So

6. I went on GitHub and checked, and it said everything went through. I viewed the comparison between my new branch and master, and since everything looks right I created a pull request so that Chris will get notified that I changed a bunch of stuff on a new branch.

At this point I could merge the branch, but I am going to wait for feedback so that I can change the branch if I have more to do and merge it once the feature is really ready to go.

All told, this process took me about 3 to 4 hours. I'm going to write it off as a win since I learned so much. Git does not make intuitive sense to me yet, and I don't think I have my head wrapped around it's features yet, but it's already obvious how powerful and useful it is. I'm excited to learn more.

Until next time,

- Dave
