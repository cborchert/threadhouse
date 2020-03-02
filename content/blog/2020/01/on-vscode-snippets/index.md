---
title: "On VS Code Snippets"
date: 2020-01-13T09:36
author: Chris
description: How to save time on repetative tasks in VSCode using code snippets
threads: ["dev-tips"]
---

Hi Dave,

I was getting ready to write up a blog post and I went to create the frontmatter to declare the meta information like the author, the date and so on, and I completely forgot how to format the time. So, I went into another file, and copied-and-pasted the frontmatter into the header of the new markdown file, changing the appropriate fields. Then I stopped. I realized that I probably do that exact sequence of things at least 75% of the time that I write a post:

1.  forget what fields we need to fill in, forget how to format something in the frontmatter, etc.
2.  copy from another post
3.  correct the fields
4.  then write the post

Then it occurred to me that this kind of repetative, tedious sequence is exactly what code snippets were built for.

## What is a code snippet?

[The VSCode documentation](https://code.visualstudio.com/docs/editor/userdefinedsnippets) does a good job of explaining what code snippets are, how to create them, and what they can be used for, but I'll give a quick overview here:

Code snippets are templates that make it easier to complete repetative typing tasks in VSCode. It works as an autocomplete system. As you're typing, VSCode will be on the lookout for phrases (called `prefix`es) which could indicate in the current context that you want to use a shortcut.

For example, the code snippet that I created uses the prefix `fmc` in the context of markdown files to fill in the **F**ront **M**atter for **C**hris. When I type `fmc` in VSCode a little tool tip will show up asking if I want to use the template. I press enter or tab, and then fill in the template, pressing tab to progress through the lines of the template.

If I type `fmc` and VSCode doesn't recognize that I wanted to use the snippet on-the-fly, I can for it reconsider using (on a mac) [control]+[space] (toggle suggestion details).

<video controls>
  <source src="snippetdemo.mp4" type="video/mp4">
</video>

## How do I create a code snippet?

Creating a codesnippet is easy.

First, you need to create a snippets file, if you don't already have one, either a global one, or for your project.

- add folder root folder `/.vscode`
- create a file with the file `.code-snippets`, e.g. `threadhouse.code-snippets`

Now you'll need to create the snippet. The snippet file needs to be valid JSON and it takes the form of an object whose keys are each a new code snippet.

```json
{
  "your code snippet name": {}
}
```

The code snippet itself is an object, which takes several properties (you can see more on [the documentation](https://code.visualstudio.com/docs/editor/userdefinedsnippets)); in general, the most important are: `prefix`, to define the shortcut; `scope`, to tell VSCode what in context to expect the shortcut; `description`, to give a human-language description that will be shown in the tooltip; and `body`, which is the template itself.

Let's take a look at the snippet file that I made for the blog (`/.vscode/threadhouse.code-snippets`):

```json
{
  "Blog post frontmatter (Chris)": {
    "prefix": "fmc",
    "scope": "markdown",
    "description": "Prepares the frontmatter for a blogpost by Chris.",
    "body": [
      "---",
      "title: '${1}'",
      "date: ${2:${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}T${CURRENT_HOUR}:${CURRENT_MINUTE}}",
      "author: ${3:Chris}",
      "description: ${4}",
      "---",
      "",
      "$0"
    ]
  }
}
```

The key for the codesnippet `Blog post frontmatter (Chris)` needs to be unique and descriptive. Since it's the only snippet, it's definitely unique. And it says what it does. Check.

The `prefix`, or shortcut pattern is `fmc`. That's what I'll type when I want to create the frontmatter for the post.

The `scope` is `markdown`, but I could have put `md`. I only want this shortcut to apply to markdown files.

The `description` does a good job, I think of describing the intended behavior of the snippet.

And finally, the `body`, which is the most interesting part of the snippet. The `body` is an array of strings, each of which represents one line of code that will replace the prefix.

Inside the body we can use some special variables. The variables are anything starting with a `$`, and which can be surrounded by `{}`, but don't need to be. First of all there's `$1`, `$2`, `$3`, `$4` and `$0`. These are tab order; 0 is always last.

So, in my snippet, the user's cursor starts at `$1`, between the quotes on the line `title: ''`. When the user hits tab, it will jump to `$2` on the next line, after the colon for the date field. That this field has a default value which will be overwritten once we start typing. Default values are defined using a colon after the variable name. For example `${2:Foo}` means that the user's cursor will highlight the word Foo (a default value). They have the choice to type to overwrite, or press tab to continue. The default value here is a bit complicated looking, because we use some of the constant variables defined in VSCode (you can see more in the [documentation](https://code.visualstudio.com/docs/editor/userdefinedsnippets)). In fact, the line `${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}T${CURRENT_HOUR}:${CURRENT_MINUTE}` is just the default value which will give the current date time formatted like `2020-01-13T09:36`. Pressing tab again, the user's cursor will jump down to the author, with a default value of `Chris`. Finally, pressing tab again, the user's cursor will jump to after the `---`, ready to write their blog post.

That's it. Once you've created your snippet, you can use it immediately. If it doesn't work, check that you've added it to VSCode: from the menu, select Code > Preferences > User Snippets, and you should be able to add the file.

Here's that video again to see the snippet in action.

<video controls>
  <source src="snippetdemo.mp4" type="video/mp4">
</video>

Creating code snippets can really save you time on repetative tasks, and I've created quite a few to help me create tests, create components, create media queries, and generally type less when using repeated patterns in my projects.

I hope this will help you at some point. Happy editing!

-Chris
