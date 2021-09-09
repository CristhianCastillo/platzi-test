import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('Es hora de las instantaneas', () => {
    test('Shapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });

    test('Siempre fallara las instantaneas', () => {
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 20),
        };
        expect(user).toMatchSnapshot();
    });

    test('Tenemos una exception dentro del snapshot', () => {
        const user = {
            id: Math.floor(Math.random() * 20),
            name: 'Rick'
        };
        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        });
    });
});