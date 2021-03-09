"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
class Routes {
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: "Get request successfull"
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map