<script>
    let { data } = $props();
    let cards = data.cards;
</script>

<h1>Card Details</h1>
<p>{cards._id}</p>
<p>{cards.name}</p>
<p>{cards.type}</p>
