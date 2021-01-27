<script context="module">
  /**
   * Derives additional props from the node data
   *
   * @param {Object} param0
   * @param {Object} param0.nodeData the data relative to all nodes
   * @param {Object} param0.data the data relative to this content
   * @returns {Object} the additional props
   */
  export const __5sg__deriveProps = ({ nodeData = {}, data = {} }) => {
    // create sibling pages
    const blogPages = Object.values(nodeData)
      .filter((node) => node.relPath.startsWith('blog/'))
      .sort((a, b) => {
        const dateA = (a.frontmatter && a.frontmatter.date) || '';
        const dateB = (b.frontmatter && b.frontmatter.date) || '';
        // newest first
        return dateA > dateB ? -1 : 1;
      });

    // the first 10 blogPages will be available as `posts` in the component
    return { posts: blogPages.slice(0, 10).map() };
  };
</script>

<script>
  import Page from '../src/client/components/Page.svelte';
  import ArticlePreview from '../src/client/components/ArticlePreview.svelte';
  export const name = 'world';
  export let siteMetadata = {};

  export let posts = [];

  const { authors, description } = siteMetadata;

  const meta = { title: 'Home', description, siteMetadata };
</script>

<Page {meta} excludeHeader>
  <div slot="beforeContent">
    <section>
      <div class="SiteLogo">
        <h1 class="SiteLogo__title serif">
          <span>THREAD</span>
          <span>
            <img class="SiteLogo__threadIcon" src="static/images/thread.svg" alt="Thread.house logo" />
          </span>
          <span>HOUSE</span>
        </h1>
        <hr />
        <div class="SiteLogo__description">
          <div>{description}</div>
          <div>
            written by <strong>{authors}</strong>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="mostRecentPosts">
    <h2 class="mostRecentPosts__title">Most recent posts</h2>
    <ul class="mostRecentPosts__postList">
      {#each posts as node}
        <li>
          <ArticlePreview {node} />
        </li>
      {/each}
    </ul>
  </div>
</Page>

<style>
  section {
    height: calc(100vh - 16px);
    display: grid;
    justify-content: center;
    align-items: center;
  }
  h1 {
    line-height: 1;
    margin-bottom: 16px;
  }

  .SiteLogo {
    height: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
    position: relative;
  }

  .SiteLogo__title {
    font-size: 3rem;
    text-align: center;
    /* Use georgia if they've got it */
    font-family: 'Georgia', 'Merriweather', 'serif';
  }

  .SiteLogo__title span {
    display: grid;
    justify-content: center;
    align-content: center;
  }

  .SiteLogo__description {
    text-align: center;
    font-style: italic;
    font-size: 1rem;
  }

  .SiteLogo__description div {
    margin: 1rem 0;
  }
  .SiteLogo__threadIcon {
    width: 40px;
    display: inline-block;
    margin: 1.5rem 0;
    font-size: 1rem;
  }

  .mostRecentPosts {
    max-width: 60ch;
    margin: 0 auto;
  }

  .mostRecentPosts__title {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--primary);
  }

  .mostRecentPosts__postList {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /** desktop */
  @media screen and (min-width: 768px) {
    .SiteLogo__title {
      font-size: 5rem;
    }
    .SiteLogo__description {
      font-size: 1.3rem;
    }
  }
</style>
