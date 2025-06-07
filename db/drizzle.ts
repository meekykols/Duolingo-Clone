import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';



// Create a postgres client
const connectionString =`${process.env.DATABASE_URL}`
const client = postgres(connectionString);
const db = drizzle(client, { schema });

export default db;