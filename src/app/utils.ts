'use server'
import { connectToDb } from "../mongo/utils";

export const createItem = async (collection: string, item: object)  => {
  try {
    const client = await connectToDb();
    const db = client.db("DMScreen");
    const result = await db
      .collection(collection)
      .insertOne(item);
    return result.toString();
  } catch (e) {
    console.error(e);
  }
}

// export const getItem = async (collection: string, query: object) => {
//     try {
//         const client = await clientPromise;
//         const db = client.db("DMScreen");
//         const result = await db
//             .collection(collection)
//             .findOne(query);
//         return result;
//     } catch (e) {
//         console.error(e);
//     }
// }

// export const getItems = async (collection: string, query: object) => {
//     try {
//         const client = await clientPromise;
//         const db = client.db("DMScreen");
//         const result = await db
//             .collection(collection)
//             .find(query)
//             .toArray();
//         return result;
//     } catch (e) {
//         console.error(e);
//     }
// }

// export const updateItem = async (collection: string, query: object, update: object) => {
//     try {
//         const client = await clientPromise;
//         const db = client.db("DMScreen");
//         const result = await db
//             .collection(collection)
//             .updateOne(query, update);
//         return result;
//     } catch (e) {
//         console.error(e);
//     }
// }

// export const deleteItem = async (collection: string, query: object) => {
//     try {
//         const client = await clientPromise;
//         const db = client.db("DMScreen");
//         const result = await db
//             .collection(collection)
//             .deleteOne(query);
//         return result;
//     } catch (e) {
//         console.error(e);
//     }
// }


