import express = require("express");
import { Routes } from "./routes/routes";

class App{
    public app: express.Application;
    public routePrv: Routes = new Routes();
    
    constructor(){
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }
    config(): void {
       this.app.use(express.json());
       this.app.use(express.urlencoded({extended : false}));
    }
}

export default new App().app;