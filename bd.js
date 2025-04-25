const { Client } = require('pg');

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://postgres.jrhzqtccowzqamcqsymk:GTlVOzS7p5jLicCF@aws-0-us-east-2.pooler.supabase.com:5432/postgres',
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
const client = new Client({
    host: 'aws-0-us-east-2.pooler.supabase.com',
    port: 5432,
    user: 'postgres.jrhzqtccowzqamcqsymk',
    password: 'GTlVOzS7p5jLicCF',
    database: 'postgres'
});

client.connect()
    .then(() => console.log('Conectado a Supabase PostgreSQL'))
    .catch(err => console.error('Error conectando a Supabase:', err.stack));

module.exports = client;
