import { ContactSchema } from '../models/models';
import * as mongoose from 'mongoose';
import {Request, Response} from 'express';

const Contact = mongoose.model('Contact',ContactSchema);

export class ContactController{

    public addNewContact(req:Request, res: Response){

        const newContact = new Contact(req.body);
        
        
        
        newContact.save((err:any,contact:any) =>{
            if(err){
                res.send(err);
            }
            res.json(contact)
 
        })
    }

    public getContacts(req: Request, res: Response) {

        Contact.find({},(err,contact)=>{
            if(err){
                res.send(err)
            }
            res.json(contact)

        })
        
    }

    public getContactWithID(req: Request, res: Response){

        Contact.findById(req.params.contactId, (err : any,contact: any) =>{

            if(err){
                res.send(err);
            }
            res.json(contact);
            console.log(contact)
        })
    }

    public updateContact(req:Request, res:Response){
        Contact.findOneAndUpdate({_id: req.params.contactId},req.body,{new:true},(err,contact)=>{
            if(err){
                res.send(err)
            }
            res.json(contact)
        })
    }

    public deleteContact(req:Request, res: Response){
        Contact.remove({ _id: req.params.contactId }, (err) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!'});
        });
    }

}

