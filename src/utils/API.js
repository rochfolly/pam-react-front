import axios from 'axios';

/*const headers = {
    'Content-Type': 'application/json'
}*/

//const gameurl = "http://localhost:5000"
const backurl = "http://localhost:8000"

export const login = user => {
    return axios.post(backurl + '/doctor/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem("usertoken", res.data)
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
        email: newUser.email
        })
        .then(res => { console.log("User added") })
    }

export const isAuth = _ => {
    console.log('Authenticated')
    return (localStorage.getItem('usertoken') !== null)
}


export const fetchUsers = doctor_id  => {
    return axios.get(backurl + '/doctor/users/' + doctor_id)

}

export const showUser = id => {
    return axios.get(backurl + '/doctor/user/' + id)
}

export const fetchExos = user_id => {
    return axios.get(backurl + '/doctor/user/'+user_id+'/exercices' )
}

export const test = working => {
    return axios.get(backurl + '/user/signup', {working})
    .then(console.log('axios marche'))
}


export const logout = _ => {
        localStorage.clear()
    }

