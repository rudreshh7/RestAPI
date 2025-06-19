// import pkg from 'pg';
// import dotenv from "dotenv"; // this was why it was undefined
// const {Pool} = pkg;
// dotenv.config();


// console.log(process.env.DB_USER)
// console.log(process.env.DB_HOST)
// console.log(process.env.DB_NAME)
// console.log(process.env.DB_PASSWORD)

// const pool = new Pool({
//   user:process.env.DB_USER,
//   host:process.env.DB_HOST,
//   database:process.env.DB_NAME,
//   password:process.env.DB_PASSWORD,
//   port:process.env.DBPORT,
// });

// pool.on("connect",()=>{
//   console.log("Connection Pool Established with database");
// })

// export default pool;

import pkg from "pg";
import dotenv from "dotenv";
const { Pool } = pkg;

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Render-hosted PostgreSQL
  },
});

pool.on("connect", () => {
  console.log("✅ Connection Pool Established with Render PostgreSQL");
});

export default pool;
