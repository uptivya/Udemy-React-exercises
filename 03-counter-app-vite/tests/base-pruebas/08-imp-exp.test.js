import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Testejos en l\'arxiu 08-imp-exp', () => { 
    test('should GetHeroById retornar un objecte heroi', () => { 
        const id = 2
        const heroi = getHeroeById( id );
        const testHeroi = {
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        }

        expect(heroi).toEqual(testHeroi)
    })
    
    test('should GetHeroById retornar undefined si no existeix l\id', () => { 
        const id = 100
        const heroi = getHeroeById( id );
        const testHeroi = {
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        }

        expect(heroi).toEqual(undefined)
    })
    
    test('should GetHeroByOwner retornar un objecte amb els owners correctes', () => { 
        const owner = 'Marvel'
        const herois = getHeroesByOwner(owner);
        
        expect(herois.length).toBe(2);
        expect(herois[0].owner).toBe('Marvel');
        
        const testHerois = [{
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        },
        {
            id: 5,
            name: 'Wolverine',
            owner: 'Marvel'
        }]

        expect(herois).toEqual(testHerois);
        expect(herois).toEqual(herois.filter((heroi) => heroi.owner === owner));
    })
})