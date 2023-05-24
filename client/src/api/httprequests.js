import axios from 'axios'
import { BASE_URL } from './base_url'

//GET ALL 
export const getAllUsers = async (name) => {
    let globalData;
    let URL;
    if (!name) {
        URL = BASE_URL + '/users';
    }
    else {
        URL = BASE_URL + '/users' + `?name=${name}`;
    }
    await axios.get(URL).then((res) => {
        globalData = res.data.data;
    });
    return globalData;
}
//Get User BY ID
export const getUserByID = async (id) => {
    let globalData;
    await axios.get(`${BASE_URL}/users/${id}`).then((res) => {
        globalData = res.data.data;
    });
    return globalData;
};

//Delete Artist
export const deleteUserByID = async (id) => {
    let deletedUser;
    await axios.delete(`${BASE_URL}/users/${id}`).then((res) => {
        deletedUser = res.data.data;
    });

    return deletedUser;
};

//Post
export const postUser = (payload) => {
    axios.post(`${BASE_URL}/users`, payload);
};
//edit 
export const editUser = (id, payload) => {
    axios.put(`${BASE_URL}/users/${id}`, payload);
}