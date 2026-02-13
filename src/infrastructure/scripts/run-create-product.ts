import { CreateProductUseCase } from "../../application/use-cases/create-product.usecase.js";
import { InMemoryProductRepository } from "../../adapters/out/persistence/in-memory-product.repository.js";

async function run(){
    const repository = new InMemoryProductRepository();
    const createProduct = new CreateProductUseCase(repository);

    console.log("--- Iniciando Criação do produto ---");

    try {
        
        const result1 = await createProduct.execute({
            name: "maminha",
            unit: "kg",
            cost: 60,
            margin: 40
        });

        console.log("✅ Produto 1 criado com sucesso:", result1);
        console.log(`Preço de venda calculado: R$ ${result1.salesPrice}`);

        console.log("\n--- Testando Duplicidade ---");
        
        
        await createProduct.execute({
            name: "maminha",
            unit: "kg",
            cost: 60,
            margin: 40
        });

    } catch (error: any) {
        
        console.error("❌ Erro esperado capturado:", error.message);
    }
}

run();