import fastify from "fastify";
import { productRoutes } from "../../adapters/in/http/routes/products.routes.js"

const app = fastify();

app.get('/health', async (request, reply) => {
  reply.send({ status: "OK" });
});

app.register(productRoutes);

export{app};