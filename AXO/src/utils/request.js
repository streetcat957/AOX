// 导入axios 文件
import axios from 'axios'
// 导入组件通信文件
import store from '@/store'

const request =  axios.create({
	// baseURL:process.env.VUE_APP_BASE_API,
	baseURL:'https://restapi.amap.com',
	timeout:5000,
})

export default request