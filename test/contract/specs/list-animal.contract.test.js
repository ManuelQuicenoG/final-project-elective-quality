import {Matchers} from '@pact-foundation/pact';
import {employeeController} from '../../../controllers';
import {provider} from '../config/initPact';

describe('Employee Service', () => {
    describe('When a request to list all employees is made', () => {
        beforeAll(async () => {
            await provider.setup();
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
                            name: Matchers.like('Manuel nuevo'),
                            rolPosition: Matchers.like("Administración"),
                            gender: Matchers.like("Male"),
                            hasCourses: Matchers.boolean(true),
                            vaccines: Matchers.eachLike({id:Matchers.like(1211),name:Matchers.like("Inducción")})
                        }
                    )
                }
            });
        });

        test('should return the correct data', async () => {
            const response = await employeeController.list();
            expect(response.data).toMatchSnapshot();
            
            await provider.verify()
        });

        afterAll(() => provider.finalize());
    });
});
