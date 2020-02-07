import { render } from "ejs";

export class HomeController {
    getHome(req, res) {
        res.render("Home/index");
    }
}