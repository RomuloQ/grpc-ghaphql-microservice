import "reflect-metadata";
import * as express from "express";

class App {

    constructor() {
        this.config()
    }

    config() {
        const app = express()
        app.listen(3001, () => console.log(`Example app listening on port ${3001}!`))
    }
}

new App()


