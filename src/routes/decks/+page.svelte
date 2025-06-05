<script>
  let { data } = $props();
  let decks = data.decks;
</script>

<h1>All Decks</h1>

<table class="table table-striped">
  <thead>
    <tr>
      <th>ID</th>
      <th>Owner</th>
      <th>Archetype</th>
    </tr>
  </thead>
  <tbody>
    {#each decks as deck}
      <tr>
        <td><a href={`/decks/${deck._id}`}>{deck._id}</a></td>
        <td>{deck.owner}</td>
        <td>{deck.archetype}</td>
      </tr>
    {/each}
  </tbody>
</table>
