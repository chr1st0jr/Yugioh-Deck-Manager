import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';

export const actions = {
  create: async ({ request }) => {

    const data = await request.formData()
    const image_url = data.get("image_url")
    const image_file = data.get("image_file")

    let finalImageUrl = image_url;

    // Handle file upload
    if (image_file && image_file.size > 0 && image_file.type.startsWith('image/')) {
      const buffer = Buffer.from(await image_file.arrayBuffer());
      const filename = `${image_file.name}`;
      const filePath = path.join('static', 'uploads', filename);
      await fs.writeFile(filePath, buffer);
      finalImageUrl = `/uploads/${filename}`;
    }

    let card = {
      name: data.get("name"),
      type: data.get("type"),
      image_url_small: finalImageUrl
    }

    db.createCard(card)

    return { success: true }
  }

}

