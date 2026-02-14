import type { FastifyInstance } from "fastify";
import {  CreateProductUseCase } from "../../../../application/use-cases/create-product.usecase.js";
import { InMemoryProductRepository } from "../../../out/persistence/in-memory-product.repository.js";


const repository = new InMemoryProductRepository();


export async function productRoutes(app:FastifyInstance) {
    app.post("/products" ,async (request,reply) =>{
        const {name , unit , cost, margin} = request.body as any;

        try{
            const createProductUseCase = new CreateProductUseCase(repository);
        

            const  output = await createProductUseCase.execute({
                name,
                unit,
                cost,
                margin
            });

            return reply.status(201).send(output)


        }catch(error:any){
            if(error.message === "Produto já cadastrado com essse nome"){
                return reply.status(409).send({message: error.message});
            }

            return reply.status(400).send({message:error.message});
        }
    });
}