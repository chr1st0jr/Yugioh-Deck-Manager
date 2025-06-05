import db from '$lib/db';

export async function load() {
  return { decks: await db.getDecks() }
}
