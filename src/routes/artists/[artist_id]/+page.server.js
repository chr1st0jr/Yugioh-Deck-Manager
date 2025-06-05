import db from '$lib/db.js';

export function load({params}) {
  console.log(params.artist_id)

  let artist = db.getArtist(params.artist_id)
  return artist
}
