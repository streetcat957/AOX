// 连接后台
import {search,los} from '@/api/search'
// 
const state = {
  name:'',
  location:'',
  key:'fea6f28be13746dbb0e746c0215df605'
}

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_LOCATION: (state, location) => {
    state.location = location
  },
  SET_TOWNSHIP: (state, township) => {
    state.township = township
  },
}


const  actions = {
        start({commit},kiss){
          // console.log(kiss,'==')
          const {key,keywords,city,extensions}=kiss
          return new Promise((resolve,reject) => {
            search({key:key,keywords:keywords,city:city,extensions:extensions}).then(Response=>{
              const {data} = Response
              // console.log(data,'data');
              // const TokenKey = 'Admin-Token'
              commit('SET_LOCATION',data.pois[0].location)
              // setToken('Admin-Token',data.token)
              // console.log(Cookies.get('Admin-Token'))
              resolve()
            }).catch(error=>{
                reject(error)
            })
        })
        },
        los({commit},locat){
          console.log(locat)
          const {location,key}=locat
          return new Promise((resolve,reject) => {
            los({location:location,key:key}).then(Response=>{
              // console.log(Response,'Response')
              const {data} = Response
              console.log(data,'data');
              // regeocode  addressComponent  township
              // // const TokenKey = 'Admin-Token'
              commit('SET_TOWNSHIP',data.regeocode.addressComponent.township)
              // console.log(this.$store.state)
              // // setToken('Admin-Token',data.token)
              // // console.log(Cookies.get('Admin-Token'))
              resolve()
            }).catch(error=>{
                reject(error)
            })
        })
        }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}