import { Router } from "express";
import { HomeController } from "../Controller/HomeController";

export function HomeRoutes() {
    const controller = new HomeController();
    const routes = new Router();
    
    routes.get("/", (req, res) => {
        controller.getHome(req, res);
    });

    return routes;
}