import db from '$lib/db.js';

export function load({ params }) {
  console.log(params.card_id)

  let card = db.getCard(params.card_id)
  return card
}
