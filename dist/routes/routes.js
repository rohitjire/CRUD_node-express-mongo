"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const controller_1 = require("controller/controller");
class Routes {
    constructor() {
        this.contactController = new controller_1.ContactController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: "Get request successfull"
            });
        });
        app.route('/contact')
            // get endpoint
            .get(this.contactController.getContacts)
            // post endpoint
            .post(this.contactController.addNewContact);
        app.route('/contact/contactId')
            //get specific contact
            .get((req, res) => {
            res.status(200).send({
                message: "Get Specific request successfull"
            });
        })
            .put((req, res) => {
            res.status(200).send({
                message: "Update Specific request successfull"
            });
        })
            .delete((req, res) => {
            res.status(200).send({
                message: "Delete specific request successfull"
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map