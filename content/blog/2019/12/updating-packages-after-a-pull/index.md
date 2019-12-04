---
title: Update your packages after pulling!
date: 2019-12-04T15:26
description: A quick reminder to update the installed npm packages after you pull down updates from a repo
author: Chris
---

Hi, Dave,

We just added the Mermaid plugin to the project, which I'm pretty pumped about. Check out [the blog post](/2019/12/changelog-mermaid/) for more details. It's pretty cool.

Anyway, this is just a reminder that, before you make any changes to the code in the repository, you'll need to:

1. Run a `git pull` from the command line because your local repo is behind the remote repo on github,
2. Run `yarn` or `npm install` [^note1] because we added some more dependencies to the project.

If you don't run `git pull` before your next push, you'll be forced to eventually do so any way.

If you don't run `yarn` or `npm install`, after the `git pull` then the next time your `./node_modules` directory will be out of date, and you may run into an error when spinning up the project, by running `gatsby develop`.

That's about it. I'll include a more detailed example below so you know what to expect. 

-- Chris

---

For example, imagine that you ran right now the following command.

```bash
> git pull
```

You'd see something like the following for your output:

```bash
remote: Enumerating objects: 16, done.
remote: Counting objects: 100% (16/16), done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 6 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (6/6), done.
From https://github.com/cborchert/threadhouse
   6a6b9ba..3094d11  master     -> origin/master
Updating 6a6b9ba..3094d11
Fast-forward
 content/blog/2019/12/changelog-mermaid/index.md | 218 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 gatsby-config.js                                |   3 +-
 package.json                                    |   3 +- 
 yarn.lock                                       | 565 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++---- 
 4 files changed, 773 insertions(+), 16 deletions(-)
 create mode 100644 content/blog/2019/12/changelog-mermaid/index.md
```

Note that there were 3 changes to `package.json` and 565 to `yarn.lock`. This means our dependencies have changed, and we'll need to reinstall.

Let's pretend that we forgot, and we try to start gatsby directly.

```bash
> gatsby develop
```

Gatsby will fail, and we'll get an error like this:

```bash
success open and validate gatsby-configs - 0.125s
⠋ load plugins

 ERROR

UNHANDLED REJECTION Unable to find plugin "gatsby-remark-mermaid". Perhaps you need to install its package?

  Error: Unable to find plugin "gatsby-remark-mermaid". Perhaps you need to install its package?

  - load.js:109 resolvePlugin
    [threadhouse]/[gatsby]/dist/bootstrap/load-plugins/load.js:109:11

  - load.js:121 processPlugin
    [threadhouse]/[gatsby]/dist/bootstrap/load-plugins/load.js:121:20

  - load.js:134
    [threadhouse]/[gatsby]/dist/bootstrap/load-plugins/load.js:134:27

  - Array.forEach

  - load.js:133 processPlugin
    [threadhouse]/[gatsby]/dist/bootstrap/load-plugins/load.js:133:32

  - load.js:172
    [threadhouse]/[gatsby]/dist/bootstrap/load-plugins/load.js:172:20

  - Array.forEach

  - load.js:171 module.exports
    [threadhouse]/[gatsby]/dist/bootstrap/load-plugins/load.js:171:20

  - index.js:55 module.exports
    [threadhouse]/[gatsby]/dist/bootstrap/load-plugins/index.js:55:19

  - index.js:173 module.exports
    [threadhouse]/[gatsby]/dist/bootstrap/index.js:173:34

  - develop.js:403 async module.exports
    [threadhouse]/[gatsby]/dist/commands/develop.js:403:7

⠋ load plugins
```

The most important thing to note here is right at the top, where Gatbsy tells us that we need to install the package:

```bash
UNHANDLED REJECTION Unable to find plugin "gatsby-remark-mermaid". Perhaps you need to install its package?
```

So if we install, and run Gatsby, we'll now succeed :)

```bash
> yarn
yarn install v1.19.1
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "gatsby > @typescript-eslint/eslint-plugin > tsutils@3.17.1" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
warning "gatsby-plugin-sass > sass-loader@7.3.1" has unmet peer dependency "webpack@^3.0.0 || ^4.0.0".
[4/4] 🔨  Building fresh packages...
✨  Done in 37.06s.
```

```bash
> gatsby develop
success open and validate gatsby-configs - 0.149s
success load plugins - 6.791s
success onPreInit - 0.010s
success initialize cache - 0.013s
success copy gatsby files - 0.333s
warn gatsby-plugin-feed was initialized in gatsby-config.js without a feeds option.
This means that the plugin will use the internal RSS feed creation, which may not match your use case.
This behavior will be removed in the next major release of gatsby-plugin-feed.
For more info, check out: https://gatsby.dev/adding-rss-feed
success onPreBootstrap - 0.052s
success source and transform nodes - 0.329s
success building schema - 1.511s
success createPages - 0.122s
success createPagesStatefully - 0.190s
success onPreExtractQueries - 0.012s
success update schema - 0.114s
success extract queries from components - 0.672s
success write out requires - 0.140s
success write out redirect data - 0.007s
success Build manifest and related icons - 0.790s
success onPostBootstrap - 0.828s
⠀
info bootstrap finished - 35.071 s
⠀
success run queries - 0.499s - 15/15 30.09/s
⠀
You can now view gatsby-starter-blog in the browser.
⠀
  http://localhost:8000/
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema
⠀
  http://localhost:8000/___graphql
⠀
Note that the development build is not optimized.
To create a production build, use gatsby build
```

[^note1]: These commands both do the same thing, namely, they look at the `package.json` and the "`.lock` file" to see what dependencies you need and at what exact version. There are a couple of differences between [yarn](https://yarnpkg.com/en/docs/install) and npm, and people like to [compare](https://github.com/appleboy/npm-vs-yarn) the two, and yarn has generally been considered to be more secure and faster than npm, but the differences are minimal. <br><br> In general, it's a good idea that all parties on a shared project use the same package manager (npm or yarn), simply because they use two different `.lock` files. The `.lock` file will guarantee that whoever installs the project will have EXACTLY the same version of the packages, and could help minimize inconsistencies between the development environments (such inconsistencies could lead to errors down the line... "I have this weird error, but I don't get why you aren't seeing it" kind of things). For our project, I don't think it's a big deal. Use whatever you're more comfortable with. <br><br> Minimizing the differences between the development environments of individuals developers, or between development environments and production environments is a big subject, and often considered pretty important, but you can go down a long rabbit hole learning about Docker containers and expending effort on that instead of learning about a topic that is more relevant to your current situation.
