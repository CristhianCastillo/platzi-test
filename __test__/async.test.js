import { getDataFromApi } from '../promise';
jest.setTimeout(50000);
describe('Probar Async/Await', () => {
    test('Realizar una peticion a una API', async () => {
        const api = 'https://rickandmortyapi.com/api/character/';
        const getRick = 'https://rickandmortyapi.com/api/character/1';
        await getDataFromApi(api).then(response => {
            expect(response.data.results.length).toBeGreaterThan(0);
        });
        await getDataFromApi(getRick).then(response => {
            console.log(response);
            expect(response.data.name).toBe('Rick Sanchez');
        });
    });

    test('Realizando una peticion a una api con error', async() => {
        const apiError = 'http://httpstat.us/404';
        const response = getDataFromApi(apiError);
        await expect(response).rejects.toEqual(Error('Request failed with status code 404'));
    });

    test('Resuelve un Hola!', async() => {
        await expect(Promise.resolve('Hola')).resolves.toBe('Hola');
        await expect(Promise.reject('Error')).rejects.toBe('Error');
    })
});