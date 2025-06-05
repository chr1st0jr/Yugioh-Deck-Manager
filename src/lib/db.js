import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";
import fs from 'fs/promises';
import path from 'path';
console.log("DB_URI:", DB_URI);

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("Yugioh"); // select database

//////////////////////////////////////////
// Cards
//////////////////////////////////////////

// Get all cards
async function getCards() {
  let cards = [];
  try {
    const collection = db.collection("cards");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    cards = await collection.find(query).toArray();
    cards.forEach((card) => {
      card._id = card._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    // TODO: errorhandling
  }
  return cards;
}

export async function getTypeStatsByDeckId(id) {
  let deck = null;
  try {
    const collection = db.collection("decks");
    const query = { _id: new ObjectId(id) }; // filter by id
    deck = await collection.findOne(query);

    if (!deck) {
      console.log("No deck with id " + id);
      // TODO: errorhandling
    } else {
      deck._id = deck._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return deck;
}


// Get card by id
async function getCard(id) {
  let card = null;
  try {
    const collection = db.collection("cards");
    const query = { _id: new ObjectId(id) }; // filter by id
    card = await collection.findOne(query);

    if (!card) {
      console.log("No card with id " + id);
      // TODO: errorhandling
    } else {
      card._id = card._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return card;
}

// create an card
async function createCard(card) {
  try {
    const collection = db.collection("cards");
    const result = await collection.insertOne(card);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// update card
// returns: id of the updated card or null, if card could not be updated
async function updateCard(card) {
  try {
    let id = card._id;
    delete card._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("cards");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: card });

    if (result.matchedCount === 0) {
      console.log("No card with id " + id);
      // TODO: errorhandling
    } else {
      console.log("card with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}
// delete card by id
// returns: id of the deleted card or null, if card could not be deleted
async function deleteCard(id) {
  try {
    const collection = db.collection("cards");
    const query = { _id: new ObjectId(id) }; // filter by id
    const card = await collection.findOne(query);
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No object with id " + id);
    } else {
      console.log("Object with id " + id + " has been successfully deleted.");

    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

//////////////////////////////////////////
// Decks
//////////////////////////////////////////

// Get all Decks
async function getDecks() {
  let decks = [];
  try {
    const collection = db.collection("decks");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    decks = await collection.find(query).toArray();
    decks.forEach((decks) => {
      decks._id = decks._id.toString(); // convert ObjectId to String
    });
    console.log(decks)
  } catch (error) {
    // TODO: errorhandling
  }
  return decks;
}


// export all functions so that they can be used in other files
export default {
  getTypeStatsByDeckId,
  getCards,
  getCard,
  createCard,
  updateCard,
  deleteCard,
  getDecks,
};
