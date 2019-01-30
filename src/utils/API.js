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
            if(res.data.type.is_doctor){
            sessionStorage.setItem("doctortoken", res.data.token)
            }
            else {sessionStorage.setItem("usertoken", res.data.token)}
            console.log(res.data)
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

    }

export const isAuth = _ => {
    console.log('Authenticated')
    return (sessionStorage.getItem('usertoken') !== null)
}


export const fetchUsers = doctor_id  => {
    return axios.get(backurl + '/doctor/users/' + doctor_id)

}

export const showUser = id => {
    return axios.get(backurl + '/doctor/user/' + id)
}


//Afficher les exos déjà accessibles au patient
export const fetchExos = user_id => {
    return axios.get(backurl + '/doctor/user/'+user_id+'/exercices' )
}


export const getOtherExos = user_id => {
    return axios.get(backurl + '/doctor/user/'+user_id+'/exercices/other' )
}

export const mailToUser = newUser => {
    return axios.post(backurl + '/user/new', {user: newUser})
}

export function deletePrescription (exo_id, user_id) {
    return axios.delete(backurl+ '/user/'+ user_id +'/prescription/'+ exo_id )
}

export function updatePrescription (exo_id, user_id) {
    return axios.post(backurl+ '/user/'+ user_id +'/prescription/'+ exo_id )
} 


export const updateSettings = newSettings => {

}

export function saveScore(user_id, score) {
    return axios.post(backurl+ '/user/'+ user_id + '/result/' + score)
}


export const test = working => {
    return axios.get(backurl + '/user/signup', {working})
    .then(console.log('axios marche'))
}


export const logout = _ => {
        sessionStorage.clear()
    }


/*
export function updatePrescription (level, exo_id, user_id) {
    return axios.post(backurl+ '/user/'+ user_id +'/prescription/'+ exo_id + '/' + level )
} 
*/