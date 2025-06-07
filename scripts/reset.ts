import "dotenv/config";
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as schema from "../db/schema";

const connectionString =`${process.env.DATABASE_URL}`
const sql = postgres(connectionString);

// @ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Resetting the database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    console.log("Resetting finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
