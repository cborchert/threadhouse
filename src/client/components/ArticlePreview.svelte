<script>
  export let node = {};
  const { frontmatter = {}, path, relPath } = node;
  const { date, author, cover, title = '', description = '' } = frontmatter;
  const attribution = `${date ? `Written on ${new Date(date).toDateString()} ` : ''} ${
    author ? `by ${author} ` : ''
  }`.trim();
</script>

<article>
  <h2><a href={path || relPath}>{title || path}</a></h2>
  {#if attribution}
    <h5>{attribution}</h5>
  {/if}
  {#if description}
    <p>{description}</p>
  {/if}
</article>

<style>
  article {
    margin: 24px 0 64px;
  }
  @media screen and (min-width: 600px) {
    article {
      flex-direction: row;
    }
  }
</style>
