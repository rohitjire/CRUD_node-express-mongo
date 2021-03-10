import express = require("express");
import { Routes } from "./routes/routes";
import mongoose = require('mongoose');

class App{
    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost:27017/CRUDapi';
    constructor(){
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup()
    }
    config(): void {
       this.app.use(express.json());
       this.app.use(express.urlencoded({extended : false}));
    }

    private mongoSetup(): void{
       // mongoose.Promise =global.Promise
        mongoose.connect(this.mongoUrl, {useNewUrlParser:true, useUnifiedTopology: true})
        var db = mongoose.connection;
        db.once("open", function() {
            console.log("Connection Successful!");
          });
    }
}

export default new App().app;