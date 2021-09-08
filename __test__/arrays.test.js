import { arrayFruits, arrayColors } from "../arrays";

describe('Comprobaremos que existe un elemento', () => {
    test('Contiene una banana', () => {
        expect(arrayFruits()).toContain('banana');
    });

    test('No contiene un platano', () => {
        expect(arrayFruits()).not.toContain('platano');
    });

    test('Comprro el tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(arrayFruits().length);
    });

    test('Contiene el color: rojo', () => {
        expect(arrayColors()).toContain('rojo');
    });
});