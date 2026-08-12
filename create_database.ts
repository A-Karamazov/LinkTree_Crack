import { Database } from "bun:sqlite";

const db = new Database("database.sqlite");

db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
        id        INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario   TEXT NOT NULL UNIQUE,
        senha     TEXT,
        grupos    TEXT        
    )    
`)