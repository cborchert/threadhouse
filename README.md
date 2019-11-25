# Basics

## Local Installation

Navigate to the newly created, empty folder on your local machine where you want to install the project in the commandline terminal. Once there, clone the git repo buy running:

```shell
git clone . https://github.com/cborchert/threadhouse.git
```

git will download the contents of the repo into the folder.

You'll need to install the npm dependencies before running the site locally. Do that by running `yarn` or `npm install`.

Once done, you should be ready to go.

## Spinning up the local server

After cloning the repo into a local folder, you'll need to download the Gatsby Command Line Interface (CLI) as an executable. You can do this by running `npm install -g gatsby-cli` in the command line.

You can test whether the Gatsby CLI has correctly been installed by trying to run `gatsby -v` from the command line. If you get something like

```
Gatsby CLI version: 2.7.17
Gatsby version: 2.17.11
```

displayed in the command line, you're golden. If you have a message like `command not found: gatsby`, then you done messed up somewhere because gatsby has not been installed globally as a command.

Now you can spin up the local site using `gatsby develop`. After a bit of spin up time and some messages about loading and building, you should see a success message like

```
You can now view gatsby-starter-blog in the browser.
⠀
  http://localhost:8000/
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema
⠀
  http://localhost:8000/___graphql
```

The site is now running at http://localhost:8000, and you can visit it from any browser on your local machine. Additionally, any saved changes to the files in the codebase should be reflected immediately. The local server has what's called a "hot reloader" so it will detect any changes and reload the server... AND THE TABS IN YOUR BROWSER 🤖.

## Gatsby gives me an error when starting up...

... and http://localhost:8000 isn't available.

This is the most annoying problem. You probably need to do some reading and googling, and you may need to restart the local browser. You PROBABLY did one of the following:

- Deleted files you shouldn't have
- Added a blogpost without the correct front matter
- Recently changed or broke `gatsby-config.js` or `gatsby-node.js`

The good news is that you'll get some good practice reading errors. Read through the error log. 99% of the time the answer is in there, even if it seems a bit intimidating to read. Just start at the top where the first error happened and go through and try to figure out what it's trying to tell you. You can do it!!

# Additional information

## Contributing blog posts

Any new blog posts must be Markdown files, and should be go in `./content/blog/YOUR-BLOG-POST-SLUG/index.md`. Make your changes in a new branch and make a pull request on the github repo. Unless you the have authorization and **audacity** to commit directly into master and push live.

```
./ (root)
├── content/
| ├── blog/
| | ├── YOUR-BLOG-POST-SLUG/
| | | ├── index.md
```

### Drafts

The directory `content/blog/drafts` and all its subdirectories and content has been added to the `.gitignore` file, so anything placed in that folder will not be seen by git. You can safely work on files in this directory without worrying that they will accidentally be uploaded or published. They will still show up on the local version of the site at https://localhost:8000/drafts/PATH-TO-POST, but never on the live version of the site.

### Post slug

The folder name will determine the slug, so if you put your blog post in `./content/blog/foo-bar/index.md`, then the post will be accessible at https://thread.house/foo-bar/

I'm using the format `./content/blog/YEAR/MONTH/SLUG/index.md`, so, for, example `content/blog/2019/11/hello-world/index.md` is accessible at https://thread.house/2019/11/hello-world/

### Frontmatter

Your post needs to have the correct frontmatter, or Gatsby might break.

```
---
title: My title goes here
date: "2019-11-22"
description: "The blog excerpt"
---
```

Hopefully, we'll be adding an author field shortly

### WTF is Markdown? Who's Mark???

Markdown is a way of writing rich text using plain text. 💥

There are plenty of [tutorials](https://www.markdowntutorial.com/lesson/1/), some [nice documentation](https://www.markdownguide.org/basic-syntax/), and some [online editors](https://markdownlivepreview.com/). Otherwise you can use a tool like [typora](https://www.typora.io/) to edit your contributions, or you can install one of several plugins ([1](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one), [2](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)) to your code editor to make your life easier.

### Did you know that MDX exists?

Yes. And it's cool. But maybe unnecessary for this project. If not, I'll add it 😉.

## How was it built??

![Aliens](./content/assets/aliens.webp)

This is a Gatsby site. We created it using a starter `gatsby new my-blog-starter https://github.com/gatsbyjs/gatsby-starter-blog`.

## Deployment

Any new commits to the master branch will cause a deployment on the site hosted at netlify: https://pedantic-euler-dbd998.netlify.com/

This will also update http://www.thread.house/

## Additional Credits

Thread icon made by <a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

# 🚀 Gatsby Quick start

This section was more or less copied from the initial Gatsby documentation, but it could be a good place to start learning. We'll make an attempt to get things a bit more clear soon

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-blog-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-blog-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
