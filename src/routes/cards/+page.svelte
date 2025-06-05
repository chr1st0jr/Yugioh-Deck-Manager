<script>
  let { data } = $props();
  let cards = data.cards;
  function confirmDelete(event) {
    if (!confirm("Are you sure you want to delete this card?")) {
      event.preventDefault(); // cancel form submission
    }
  }
</script>

<h1>List of all Cards</h1>
<a href="/cards/create">+ Add Card</a>

<div class="container mt-4">
  <div class="row row-cols-1 row-cols-md-3 g-4">
    {#each cards as card}
      <div class="col">
        <div class="card h-100">
          <img
            src={card.image_url_small ?? "/placeholder.png"}
            class="card-img-top"
            alt={card.name}
          />
          <div class="card-body bg-light text-dark">
            <h5 class="card-title">{card.name}</h5>
            <p class="card-text">{card.type}</p>
            <div class="d-flex gap-2 mt-2">
              <form method="POST" action="?/delete" onsubmit={confirmDelete}>
                <input type="hidden" name="id" value={card._id} />
                <button class="btn btn-danger" type="submit">Delete</button>
              </form>
              <a href={`/cards/${card._id}/update`} class="btn btn-primary"
                >Update</a
              >
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
