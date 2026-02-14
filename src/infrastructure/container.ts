import { InMemoryProductRepository } from "../adapters/out/persistence/in-memory-product.repository.js";
import { CreateProductUseCase } from "../application/use-cases/create-product.usecase.js";

const productsRepository = new InMemoryProductRepository();

export const makeCreateProductUseCase = () => {
    return new CreateProductUseCase(productsRepository);
}