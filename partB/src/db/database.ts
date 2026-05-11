import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDb() {
    return open({
        filename: './library.db',
        driver: sqlite3.Database
    });
}

export async function initDb() {
    const db = await openDb();
    await db.exec(`
        CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT, author TEXT, isbn TEXT, isAvailable BOOLEAN
        );
        CREATE TABLE IF NOT EXISTS members (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT, email TEXT, memberCode TEXT
        );
        CREATE TABLE IF NOT EXISTS loans (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            bookId INTEGER, memberId INTEGER, loanDate TEXT, isReturned BOOLEAN
        );
    `);
}