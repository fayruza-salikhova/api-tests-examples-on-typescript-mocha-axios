import axios from 'axios';
import { expect } from 'chai';
//todo pathes lib
import { Product } from '../models/product.model';
import { ProductSchema } from '../models/product.schema';

describe("Products GET Tests", async () => {

    it("should be able get product list", async () => {
        const response = await axios.get('https://fakestoreapi.com/products?limit=5');
        expect(response.status).equal(200);
        expect(response.statusText).equal('OK');
        expect(response).to.have.property('data');
        expect(response.data).to.be.an('array');
        response.data.forEach((product: Product) => {
            const result = ProductSchema.safeParse(product);
            try {                
                expect(result.success, "Product validation failed").to.be.true;
            }
            catch (error) {
                if (!result.success) {
                    console.error(`Product validation failed: ${JSON.stringify(result.error.format(), null, 2)}`);
                }
                throw error;
            }               
        });
    })

})