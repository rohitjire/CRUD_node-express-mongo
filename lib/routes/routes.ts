import { ContactController } from "../controller/controller";
import {Request, Response} from "express";

export class Routes{

    public contactController : ContactController = new ContactController()
    public routes(app: any): void{
        
        app.route('/')
        .get((req:Request,res:Response)=>{
            res.status(200).send({
                message: "Get request successfull"
            })
        })

        app.route('/contact')
        // get endpoint
        .get(this.contactController.getContacts)
        // post endpoint
        .post(this.contactController.addNewContact)


        app.route('/contact/contactId')
        //get specific contact
        .get(this.contactController.getContactWithID)
        .put(this.contactController.updateContact)
        .delete(this.contactController.deleteContact)
    }

}