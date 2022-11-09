import pgPromise from "pg-promise";
import Connection from "./Connection";

export default class PgPromiseConnection implements Connection {
    connection: any;

    constructor() {
        this.connection = pgPromise()("postgres://postgres:123456@localhost:5432/db_fullstack")
    }

    query(statement: string, params: any): Promise<any> {
        return this.connection.query(statement, params);
    }

    close(): Promise<void> {
        return this.connection.$pool.end();
    }
}