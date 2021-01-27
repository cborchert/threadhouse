---
title: "git commit --allow-empty"
date: 2020-01-02T17:00
description: Sometimes you just want an empty commit.
author: Chris
---

Hi Dave,

Happy new year!

I ran into this small issue today, and I thought I'd share a solution I'd come accross: basically, sometimes you want to be able to create an empty commit, with just a commit message. The problem is that, by default, git doesn't like commits without any changes.

## TLDR; How to create an empty commit

If you're just looking for how to do create an empty commit with a message, you can do so using the `--allow-empty` flag on `git commit`

```shell
> git commit --allow-empty -m "My empty commit with a message"
```

## Why shouldn't we be able to commit an empty commit by default?

The choice to prevent users from making empty commits makes sense to me as a dummy-proofing and safety-net for people who are too quick to pull the trigger.

Imagine that you are working on your project, and you make some urgent changes. You're happy with the results, so you type the following and then turn off your computer because you're in a rush to go listen to Mozart's _Requiem_:

```shell
> git commit -m "Made incredible changes XYZ to project"
[master af04d37] Made incredible changes XYZ to project
> git push
Counting objects: 1, done.
Writing objects: 100% (1/1), 194 bytes | 194.00 KiB/s, done.
Total 1 (delta 0), reused 0 (delta 0)
To https://github.com/cborchert/threadhouse.git
   9f9f0c3..af04d37  master -> master
```

Did you catch what happened? You made a commit with a message, and you pushed it, sure. But what you forgot was to **include anything in the commit**, so the remote repository will not be up-to-date with the changes you made locally. 👎

That sequence should have started by adding the changed files to the staging area using `git add`, then making the commit, then pushing the changes.

What's worse, in our imagined alternate reality where git trusts you to be thorough, there are no errors, no warnings, and no indication that you did anything out of the ordinary.

Luckily, git **does** prevent this behavior. If you tried to create a commit without adding anything to the staging area, you'd get something along the following:

```shell
> git commit -m "Made incredible changes XYZ to project"
On branch master
Your branch is up to date with 'origin/master'.

Untracked files:
  content/blog/2020/

nothing added to commit but untracked files present
> git push
Everything up-to-date
```

Notice that git gives you a bit of back talk, informing you about the unstaged changes.

## Why would we want an empty commit, anyway?

For me, there are two really great reasons that you might an empty commit:

1. You need to trigger a build step.
1. You are starting a new branch for a feature.

In the first case, imagine that with every new commit a serverside process or build step is launched. This is what happens with thread.house, by the way: netlify looks out for new commits in the github repo and rebuilds the site for us with the new content. So in this case, you might just need to trigger a new build but the codebase doesn't need to change (imagine that there was an unexpected server error or timeout, or we need to trigger fetching new external data). An empty commit is a much better candidate than adding some insignificant change to a file just to be allowed to make a commit.

In the second case, and my current case at work, imagine that you'll be working on a rather large feature. You'll be working on this feature for a few days, and you will be making several commits which you'll then squash down to a single commit using `git rebase`. It would be nice to start off with a simply named commit to kind of mark the new branch, and, later on, use as the starting point of our rebase.

```shell
ca65ea date: Jan 4, 2020    My feature -- finishing touches
c5eaa6 date: Jan 3, 2020    My feature -- added feature functionality
72e0f1 date: Jan 2, 2020    My feature -- added new tests
bec13f date: Jan 1, 2020    My feature -- added new styles
# <== This is where we stared working on the feature,
#     but there's no commit!
a1b32c date: Dec 20, 2019   Unrelated feature merged into master
```

It's personal preference, but I think that it makes more sense to have the extra, empty commit just to introduce the branch. It helps me feel a bit more organized, and in my specific case, our commit messages at work need to follow a specific format and setting up the empty commit at the beginning of the branch let's me do that in advance (then I can just press up in my terminal or copy from the `git log` if I want to duplicate the commit message in future commits).

## Creating an empty commit

Creating an empty commit is easy. You simply add the `--allow-empty` flag on `git commit` command and add your message. Now you can create all the empty commits you want!

```shell
> git commit --allow-empty -m "My empty commit with a message"
```

Hope you'll find this helpful someday, or maybe I'll come back and re-read it in a couple of weeks or months and remember how useful it is.

Peace,

Chris
