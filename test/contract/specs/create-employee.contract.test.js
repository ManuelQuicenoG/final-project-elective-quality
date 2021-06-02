import { provider } from '../config/initPact';
import { employeeController } from '../../../controllers';

describe('Create an employee service', () => {
    beforeAll(async() => {
        await provider.setup();
    });
    describe('When someone wants to create an employee', () => {
        beforeAll(async() => {
            await provider.addInteraction({
                state: 'backend service save is ready',
                uponReceiving: 'a request to create an employee',
                withRequest: {
                    method: 'POST',
                    path: '/employees',
                    body: {'name': 'New employee',
                    'rolPosition': 'Administración',
                    'gender': 'Male',
                    'hasCourses': false,
                    'courses': []}
                },
                willRespondWith: {
                    status: 201
                }
            });
        });

        test('Then it should return correct information', async() => {
            const response = await employeeController.register({'name': 'New employee',
            'rolPosition': 'Administración',
            'gender': 'Male',
            'hasCourses': false,
            'courses': []});
            expect(response.data).toMatchSnapshot();

            await provider.verify();
        })

    });

    afterAll(async () => {
        await provider.finalize();
    });
});