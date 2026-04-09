const { syncDB } = require('../tasks/sync-db');

describe('Realizando pruebas en sync-db', () => {
	test('Debe de ejecutar el proceso 2 veces', () => {
		
        syncDB();
		const result = syncDB();

		expect(result).toBe(2);
	});
});
