import db from '$lib/db.js';

export function load({ params }) {
  console.log(params.deck_id)

  let deck = db.getTypeStatsByDeckId(params.deck_id)
  return deck
}
