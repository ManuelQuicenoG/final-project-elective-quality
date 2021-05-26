import axios from 'axios';

export const employeeController = {
    register(employee) {
        return axios({
            method: 'POST',
            baseURL: process.env.API,
            url: `employees`,
            data: employee,
        })
    },
    list() {
        return axios({
            method: 'GET',
            baseURL: process.env.API,
            url: 'employees'
        });
    },
    delete(name) {
        return axios({
            method: 'DELETE',
            baseURL: process.env.API,
            url: `employees/${name}`,
        });
    },
    getemployee(name) {
        return axios({
            method: 'GET',
            baseURL: process.env.API,
            url: `employees/${name}`,
        });
    },
    updateemployee(name) {
        return axios({
            method: 'PUT',
            baseURL: process.env.API,
            url: `employees/${name}`,
        });
    }
}

