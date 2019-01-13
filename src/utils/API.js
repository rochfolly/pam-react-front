import axios from 'axios';

const headers = {
    'Content-Type': 'application/json'
}

const backurl = "http://localhost:8000"

export const login = user => {
    return axios.post(backurl + '/doctor/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}
    
export const signup = newDoctor => {
    console.log('Requête axios envoyée')
        return axios.post(backurl + '/doctor/signup', {
            firstname: newDoctor.firstname,
            name: newDoctor.name,
            email: newDoctor.email,
            password: newDoctor.password,
            job: newDoctor.job,
            city: newDoctor.city,
            phone: newDoctor.phone
        })
        .then(res => {
            console.log("Registered")
        })
    }

    export const createUser = newUser => {
        return axios.post(backurl + '/user/create', {
            doctor_id: newUser.doctor_id,
            firstname: newUser.firstname,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        })
        .then(res => { console.log("User added") })
    }

export const isAuth = _ => {
    console.log('Authenticated')
    return (localStorage.getItem('usertoken') !== null)
}

export const test = working => {
    return axios.get(backurl + '/user/signup', {working})
    .then(console.log('axios marche'))
}
    
    /*
    logout : function() {
        localStorage.clear();
    }*/
