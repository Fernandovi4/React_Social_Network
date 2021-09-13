import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': '7d24eb99-4e75-410b-82fc-3b4294cdb069'
  }
})

export const usersApi = {

  getUsers(currentPage = 1, pageSize = 10) {
    return axiosInstance.get(`users/?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },

  authUser() {
    return axiosInstance.get(`auth/me`)
      .then(responce => responce.data)
  },

  unfollowUser(userId) {
    return axiosInstance.delete(`follow/${userId}`)
  },

  followUser(userId) {
    return axiosInstance.post(`follow/${userId}`)
  },

  getUsersProfile(userId) {
    return axiosInstance.get(`profile/${userId}`)
      .then(responce => responce.data)
  }


}


