/**
 * each thread should have a slug, a name, and a description
 * slug: the page slug, also used in the list of threads for each post
 * name: the title shown on the threads page
 * description: the description shown on the thread's page
 *
 *
 */
// TEMPLATE
// {
//   name: "",
//   slug: "",
//   description: "",
// },

const threads = [
  {
    name: "Bootcamp",
    slug: "bootcamp",
    description: "Posts about Dave's adventure in bootcamp",
  },
  {
    name: "Dev Tips",
    slug: "dev-tips",
    description: "Quick tips for developers",
  },
  {
    name: "git",
    slug: "git",
    description: "Posts about the git ",
  },
  {
    name: "Meta",
    slug: "meta",
    description: "Posts about the blog",
  },
  {
    name: "Changelog",
    slug: "changelog",
    description: "Posts detailing updates on the blog",
  },
]

module.exports = threads
