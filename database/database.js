import * as SQLite from 'expo-sqlite';
class Database {
    constructor() {
        this.db = null;
    }
    async initializeDatabase() {
        this.db = await SQLite.openDatabaseAsync('database.db');
        await this.db.execAsync(`
            PRAGMA journal_mode = WAL;
            PRAGMA foreign_keys = ON;
            CREATE TABLE IF NOT EXISTS tables (
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                tableName TEXT
            );
            CREATE TABLE IF NOT EXISTS notes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                tableId INTEGER NOT NULL,
                note TEXT,
                date TEXT,
                done INTEGER DEFAULT 0,
                FOREIGN KEY(tableId) REFERENCES tables(id)
            );
        `)
        console.log('Database initialized');
    }
    async addATable(tableName) {
        if (!this.db) {
            console.error('Database not initialized');
            return;
        }
        try {
            await this.db.runAsync('INSERT INTO tables (tableName) VALUES (?);', tableName);
            console.log('Added a table');
        }
        catch (error) {
            console.error(error);
        }
    }
    async getAllTables() {
        if (!this.db) {
            console.error('Database not initialized');
            return;
        }
        try {
            console.log('Getting all tables')
            return await this.db.getAllAsync(
                'SELECT * FROM tables;'
            );
        } catch (error) {
            console.error(error);
        }
    }
    async removeAllTables() {
        if (!this.db) {
            console.error('Database not initialized');
            return;
        }
        try {
            await this.db.runAsync(
                'DELETE FROM tables;'
            );
            console.log('Removed all contents');
        }
        catch (error) {
            console.error(error);
        }
    }
}

const db = new Database();
export default db;
