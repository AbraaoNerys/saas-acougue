import fastify from "fastify";
import { productRoutes } from "../../adapters/in/http/routes/products.routes.js"
import { makeCreateProductUseCase } from "../container.js";

const app = fastify({logger: true});

app.get("/health", async () =>({status: "ok"}));

app.register(productRoutes, { makeCreateProductUseCase});

export {app};