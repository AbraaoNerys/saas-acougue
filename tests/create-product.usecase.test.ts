import { describe, it, expect } from "vitest";
import { CreateProductUseCase } from "../src/application/use-cases/create-product.usecase.js";
import { InMemoryProductRepository } from "../src/adapters/out/persistence/in-memory-product.repository.js";

describe('CreateProductUseCase (caso de Uso: Criar Produto)', () => {

    it('should create a product successfully (deve criar um produto com sucesso)', async () => {
        
        const repository = new InMemoryProductRepository();
        const useCase = new CreateProductUseCase(repository);

        const input1 = {
            name: 'Carne Maminha',
            unit: 'kg' as const,
            cost: 50,
            margin: 20
        };

        const input2 = {
            name: 'carne moida', 
            unit: 'kg' as const,
            cost: 20,
            margin: 10
        };

       
        const result1 = await useCase.execute(input1);
        expect(result1.name).toBe('Carne Maminha');
        expect(result1.salesPrice).toBe(60); 

        
        const result2 = await useCase.execute(input2);
        expect(result2.name).toBe('carne moida');
        expect(result2.salesPrice).toBe(22); 
    });

    it('should not allow duplicate products (não deve permitir produtos duplicados)', async () => {
        
        const repository = new InMemoryProductRepository();
        const useCase = new CreateProductUseCase(repository);

        const input = {
            name: 'Arroz',
            unit: 'kg' as const,
            cost: 20,
            margin: 10
        };

        
        await useCase.execute(input);

        
        await expect(useCase.execute(input))
            .rejects
            .toThrow(/cadastrado com esse nome/i);
    });
});