import db from '$lib/db.js';
import { redirect, fail } from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';
import { ObjectId } from 'mongodb';

export async function load({ params }) {
  const card = await db.getCard(params.card_id);
  return { card };
}


export const actions = {
  update: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("id");
    const name = formData.get("name");
    const type = formData.get("type");
    const existingImageUrl = formData.get("existing_image_url");
    const imageFile = formData.get("image_file");

    let finalImageUrl = existingImageUrl;

    if (
      imageFile &&
      imageFile.size > 0 &&
      imageFile.type.startsWith("image/")
    ) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const filename = `${imageFile.name}`;
      const filePath = path.join("static", "uploads", filename);
      await fs.writeFile(filePath, buffer);
      finalImageUrl = `/uploads/${filename}`;
    }

    let card = {
      _id: id,
      name,
      type,
      image_url_small: finalImageUrl
    };
    console.log(card)
    const updatedId = await db.updateCard(card);

    if (!updatedId) {
      return fail(500, { message: "Update failed" });
    }

    return { success: true };
  }
};
