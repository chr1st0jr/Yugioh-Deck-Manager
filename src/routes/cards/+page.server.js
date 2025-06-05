import db from "$lib/db"

export async function load() {
    return {
        cards: await db.getCards()
    }
}

export const actions = {
    delete: async ({request}) => {
        const data = await request.formData();
        console.log(data);
        await db.deleteCard(data.get("id"));
    }
}
