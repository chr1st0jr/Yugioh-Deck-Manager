<script>
  let { data, form } = $props();
  let card = data.card;
</script>

<h1>Edit Card</h1>

<form method="POST" action="?/update" enctype="multipart/form-data">
  <input type="hidden" name="id" value={card._id} />

  <label for="">Name</label>
  <input name="name" class="form-control" type="text" value={card.name} required />

  <label for="">Type</label>
  <input name="type" class="form-control" type="text" value={card.type} required />

  <label for="">Current Image</label><br />
  <img src={card.image_url_small} alt="Card image" width="100" /><br/>

  <input type="hidden" name="existing_image_url" value={card.image_url_small} />

  <label for="">Upload New Image (optional)</label>
  <input name="image_file" class="form-control" type="file" accept="image/*" />

  <button type="submit" class="btn btn-primary mt-2">Update Card</button>
</form>

{#if form?.success}
  <p>Card updated successfully!</p>
{/if}
