import { Matchers } from '@pact-foundation/pact';
import { employeeController } from '../../../controllers';
import { provider } from '../config/initPact';

describe('Employee Service', () => {
    beforeAll(async() => {
        await provider.setup();
    });
    describe('When a request to list all employees is made', () => {
        beforeAll(async () => {
            await provider.addInteraction({
                uponReceiving: 'a request to list all employees',
                state: "has employees",
                withRequest: {
                    method: 'GET',
                    path: '/employees'
                },
                willRespondWith: {
                    status: 200,
                    body: Matchers.eachLike(
                        {
                            name: Matchers.like("manuel nuevo"),
                            rolPosition: Matchers.like("Administración"),
                            gender: Matchers.like("Male"),
                            hasCourses: Matchers.boolean(true)
                        }, {min: 1}
                    )
                }
            });
        });

        test('should return the correct data', async () => {
            const response = await employeeController.list();
            expect(response.data).toMatchSnapshot();
            
            await provider.verify()
        });

        afterAll(async() =>await provider.finalize());
    });
});