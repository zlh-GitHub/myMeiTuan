import axios from './axios'
import url from './url'

export default {
  getSearchList () {
    return axios.get(url.getSearchList)
  },
  searchHotWord () {
    return axios.get(url.searchHotWord)
  },
  leftNavList () {
    return axios.get(url.leftNavList)
  },
  youGeDiao () {
    return axios.get(url.youGeDiao)
  },
  getCityList () {
    return axios.get(url.getCityList)
  },
  getHotCity () {
    return axios.get(url.getHotCity)
  },
  getProvinceList () {
    return axios.get(url.getProvinceList)
  },
  getRecentSearch () {
    return axios.get(url.getRecentSearch)
  },
  getGoodList () {
    return axios.get(url.getGoodList)
  },
  getCategroyList () {
    return axios.get(url.getCategroyList)
  },
  getAreaList () {
    return axios.get(url.getAreaList)
  },
  getPosition () {
    return axios.get(url.getPosition)
  },
  userLogin (userName, password) {
    return axios.get(url.userLogin, {
      params: {
        userName,
        password
      }
    })
  },
  userRegister (data) {
    return axios.get(url.userRegister, {
      params: {
        ...data
      }
    })
  }
}
