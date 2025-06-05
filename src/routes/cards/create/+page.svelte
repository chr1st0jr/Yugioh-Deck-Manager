<script>
  let { form } = $props();
</script>

<a href="/cards">Back</a>
<h1>Add a Card</h1>
<form method="POST" action="?/create" enctype="multipart/form-data">
  <div class="mb-3">
    <label for="" class="form-label">Name*</label>
    <input name="name" class="form-control" type="text" required />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Type*</label>
    <input name="type" class="form-control" type="text" required  />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Upload Image</label>
    <input name="image_file" class="form-control" type="file" accept="image/*" />
  </div>
  <button type="submit" class="btn btn-primary"> Add Card </button>
</form>

{#if form?.success}
  <p>Card created</p>
{/if}
