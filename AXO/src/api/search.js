// 导入 后台接口文件
import  request from  '../utils/request'

export function search(params = {}){
  // const data = arg[0]
  // console.log(data,'传参到后台') 
  return request ({
    method:'GET',
		url:'/v3/place/text?parameters',
		params
  })
}

export function los(params = {}){
  // const data = arg[0]
  // console.log(data,'传参到后台') 
  return request ({
    method:'GET',
		url:'/v3/geocode/regeo?parameters',
		params
  })
}