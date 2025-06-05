<script>
  let { data } = $props();
</script>

<h1>Deck: {data.archetype}</h1>
<h3>Owner: {data.owner}</h3>
<h3>Card distribution:</h3>
<ul>
  <li>Monsters: {data.monsterCount}</li>
  <li>Spells: {data.spellCount}</li>
  <li>Traps: {data.trapCount}</li>
</ul>
