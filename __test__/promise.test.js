import { getDataFromApi } from '../promise';
jest.setTimeout(50000);
describe('Probando promesas', () => {
    test('Realizando una peticion a una API', async () => {
        const api = 'https://rickandmortyapi.com/api/character';
        const response = await getDataFromApi(api);
        const array = response.data.results;
        expect(array.length).toBeGreaterThan(0);
    });

    test('Resuelve un Hola!', () => {
        return expect(Promise.resolve('Hola!')).resolves.toBe('Hola!');
    });

    test('Rechaza con un error', () => {
        return expect(Promise.reject('Error!')).rejects.toBe('Error!');
    });
});