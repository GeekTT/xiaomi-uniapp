import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default{
	state:{
		list:[
			{
				id:1,
				name:'商品一',
				status:false
			},
			{
				id:2,
				name:'商品二',
				status:false
			},
			{
				id:3,
				name:'商品三',
				status:false
			}
		]
	},
	getters:{
		
	},
	mutations:{
		
	}
}