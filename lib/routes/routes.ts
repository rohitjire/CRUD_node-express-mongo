import {Request, Response} from "express";

export class Routes{

    public routes(app: any): void{
        
        app.route('/')
        .get((req:Request,res:Response)=>{
            res.status(200).send({
                message: "Get request successfull"
            })
        })

        app.route('/contact')
        // get endpoint
        .get((req:Request,res: Response)=>{
            res.status(200).send({
                message: "GET request successfull"
            })
        })
        // post endpoint
        .post((req:Request,res: Response) => {
            res.status(200).send({
                message: "POST request successfull"
            })
        })


        app.route('/contact/contactId')
        //get specific contact
        .get((req: Request, res: Response)=>{
            res.status(200).send({
                message: "Get Specific request successfull"
            })
        })
        .put((req: Request, res: Response)=>{
            res.status(200).send({
                message: "Update Specific request successfull"
            })
        })
        .delete((req:Request, res: Response) => {
            res.status(200).send({
                message: "Delete specific request successfull"
            })
        })
    }

}