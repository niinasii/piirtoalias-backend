SELECT 'CREATE DATABASE aliasdb'
WHERE NOT EXISTS (SELECT FROM pg_aliasdb WHERE datname = 'postgres')\gexec
\c postgres