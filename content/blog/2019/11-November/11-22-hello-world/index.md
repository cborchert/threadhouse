---
title: Hello World
date: 2019-11-22
description: The first blog post
author: Chris
---

```js
/**
 * Greet the users.
 * To learn more about this project, go to the documentation at
 * https://github.com/cborchert/threadhouse
 * @param {string} greeting
 */
function greet(greeting) {
  if (greeting) {
    console.log(`${greeting}! All systems seem to be operating.`)
    startBlog()
  } else {
    throw new Error("👽")
  }
}

/**
 * @returns {Array} an array of content
 */
function startBlog() {
  // Make mediocre to amazing content
  // TODO: make blog
}

greet("Hello, world")
```
