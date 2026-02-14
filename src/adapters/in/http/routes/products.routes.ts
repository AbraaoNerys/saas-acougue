import type { FastifyInstance } from "fastify";
import type { CreateProductUseCase } from "../../../../application/use-cases/create-product.usecase.js";


interface ProductRoutesOptions {
  makeCreateProductUseCase: () => CreateProductUseCase;
}

export async function productRoutes(app: FastifyInstance, opts: ProductRoutesOptions) {
  
  app.post("/products", async (request, reply) => {
    
    const { name, unit, cost, margin } = request.body as any;

    try {
    
      const useCase = opts.makeCreateProductUseCase();

      const output = await useCase.execute({ name, unit, cost, margin });

      return reply.status(201).send(output);

    } catch (error: any) {
      const message = error.message;

      if (message.toLowerCase().includes("cadastrado")) {
        return reply.status(409).send({
          error: "Conflict",
          message: "Este produto já está em nossa base de dados."
        });
      }

      
      return reply.status(400).send({
        error: "Bad Request",
        message: message
      });
    }
  });
}