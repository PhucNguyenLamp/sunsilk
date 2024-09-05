import * as SQLite from 'expo-sqlite';

class Database {
    constructor() {
        this.db = null;
    }   
    async init() {
        this.db = await SQLite.openDatabaseAsync('db.db');
        await this.db.execAsync(
        `CREATE TABLE IF NOT EXISTS tables (
            id INTEGER PRIMARY KEY NOT NULL,
            task TEXT,
            done INTEGER
        );`
        )
    }
    async testAddandShow() {
        await this.db.execAsync(`
            INSERT INTO tables (task, done) VALUES ('Hello', 0);
            `
        );
        console.log('added')
    }
    async getAllTables(){
        return await this.db.getAllAsync(
            `SELECT * FROM tables;`
        );
    }
}
const db = new Database;
await db.init()
export default db;