describe('Comparadores comunes', () => {
    const user = {
        name: 'Cristhian',
        lastName: 'Castillo'
    }
    const user2 = {
        name: 'Cristhian',
        lastName: 'Erazo'
    }

    test('Igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });

    test('No son iguales', () => {
        expect(user).not.toEqual(user2);
    });
});