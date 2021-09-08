describe('Comprobar cadenas de texto', () => {
    const text = 'Un bonito texto';

    test('Debe contener el siguiente texto', () => {
        expect(text).toMatch(/bonito/);
    });

    test('No debe contener el siguiente texto', () => {
        expect(text).not.toMatch(/Cristhian/);
    });

    test('Comprobar el tamaño de un texto', () => {
        expect(text).toHaveLength(15);
    });
});