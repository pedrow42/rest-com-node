import { Pool } from "pg";

const connectionString = 'postgres://nakxqisq:MNINFMcS24egWUBYS_eyq5ZWxbZKLvSK@kesavan.db.elephantsql.com/nakxqisq';
const db = new Pool({connectionString});

export default db;