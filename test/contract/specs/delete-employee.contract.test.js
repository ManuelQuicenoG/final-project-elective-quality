import { provider } from '../config/initPact';
import { employeeController } from '../../../controllers';
import { Matchers } from '@pact-foundation/pact';

const nameemployee = 'prueba';

describe('delete an employee service', () => {
    beforeAll(async() => {
        await provider.setup();
    });

    describe('When a request to remove a employee arrived ', () => {
        beforeAll(async() => {
            await provider.addInteraction({
                state: 'backend service delete is ready',
                uponReceiving: 'a request to delete a employee',
                withRequest: {
                    method: 'DELETE',
                    path: '/employees/'+nameemployee
                },
                willRespondWith: {
                    status: 200,
                    body: Matchers.eachLike({
                        message: Matchers.string('Employee deleted successfully'),
                    }, {min: 1})
                }
            });
        });

        test('Then it should return a confirm message that indicate successfully process', async() => {
            const response = await employeeController.delete(nameemployee);
            expect(response.data).toMatchSnapshot();

            await provider.verify();
        })

    });

    afterAll(async () => {
        await provider.finalize();
    });
});
