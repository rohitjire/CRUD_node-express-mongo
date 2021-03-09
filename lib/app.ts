import express = require("express");
import * as bodyParser from 'body-parser';

class App{
    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
    }
    config(): void {
       this.app.use(express.json());
       this.app.use(express.urlencoded({extended : false}))
    }
}

export default new App().app;