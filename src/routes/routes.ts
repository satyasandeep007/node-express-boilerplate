import * as testController from "../controllers/test";
const routes = require("express").Router();

routes.get("/test",  testController.index);
routes.get("/",(req: any,res: { send: (arg0: string) => void })=>{
res.send("ohio !");
});


export default routes;
