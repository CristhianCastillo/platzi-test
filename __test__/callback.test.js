import { callbackHell } from "../callback";

describe('Probando un callback', () => {
    test('Callback', done => {
        function anotherCallback(data) {
            expect(data).toBe('Hola JavaScript');
            done();
        }
        callbackHell(anotherCallback);
    });
});