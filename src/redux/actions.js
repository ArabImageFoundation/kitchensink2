import {
	makeActionReducers
,	reject
,	resolve
,	assign // assign(prop,prop,props) is equivalent to Object.assign({},prop,prop,prop)
} from './reduxUtils';
import {merge} from 'ramda'
import initialState from './initialState'
//import {} from './consts'

const [actionsCreators,reducer] = makeActionReducers({
	asyncAction:{
		meta:{} //gets merged with meta provided from the user
	,	async(meta,{disp,dispatch,getState}){
			/**
				`disp('suffix',props)` is equivalent to `dispatch('ASYNC_ACTION_suffix',props);`
				return promise, or use `reject(value)` or `resolve(value)`
			**/
		}
	,	reducer(state,meta,payload){
			/** must return state **/
		}
	}
,	detailedAsyncAction:{
		async(meta,{disp}){
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					disp('PROCESSING',meta);
					setTimeout(()=>
						meta.pleaseGiveMeAnError ? reject(new Error('Oh noes!')) : resolve({message:'ok!'})
					,1000)
				},1000)
			})
		}
	,	reducer:{
			start:(state,meta,payload)=>assign(state,{status:'started...'})
		,	processing:(state,meta,payload)=>assign(state,{status:'processing...'})
		,	error(state,meta,err){
				return assign(state,{status:'ERROR',message:err.message});
			}
		,	success:(state,meta,{message})=>assign(state,{status:'done',message})
		}
	}
,	resetState:{
		reducer:()=>initialState
	}
,	normalAction:{
		meta:{}
	}
,	addColumn:{
		meta:{
			type:''
		,	view:''
		}
	,	reducer:(state,meta)=>
			assign(state,{
				columns:[...state.columns,{...meta,object:meta.object || create(meta.type)}]
			})
	}
,	save:{
		meta:{
			type:''
		,	object:''
		}
	,	reducer(state,{type,object}){
			const collection = (object.id) ? 
				state[type].map(item=>item.id==id?object:item) :
				state[type].concat([object])
			;
			return assign(state,{[type]:collection});
		}
	}
,	removeColumn:{
		reducer:(state=>assign(state,{columns:state.columns.slice(0,state.columns.length-1)}))
	}
,	addItem:{
		meta:{}
	,	reducer(state,{parentIndex,childIndex,parentProp,index}){
			const object = state.columns[index].object;
			const columns = (typeof childIndex !== 'undefined') ? 
				state.columns
					.slice(0,state.columns.length-1)
					.map((column,id)=>
						id==parentIndex?
							merge(column,{
								object:merge(
									column.object
								,	{
										[parentProp]:column.object[parentProp].map((obj,i)=>i==childIndex?object:obj)
									}
								)
							}) :
						column
				) :
				state.columns
					.slice(0,state.columns.length-1)
					.map((column,id)=>
						id==parentIndex?
							merge(column,{
								object:merge(
									column.object
								,	{
										[parentProp]:[...column.object[parentProp],object]
									}
								)
							}) :
						column
				)
			return assign(state,{columns})
		}
	}
,	modifyColumn:{
		reducer(state,meta){
			return assign(state,{
				columns:state.columns.map((column,i)=>
					i==meta.index?
						merge(column,{object:merge(column.object,meta)}) :
						column
				)
			})
		}
	}
})

function create(type){
	if(type=='Collection'){
		return {
			reference:''
		,	name:''
		,	donor:''
		,	acquisition:''
		,	content:''
		,	contracts:[]
		,	photos:[]
		,	albums:[]
		,	objects:[]
		}
	}
	if(type=='Contract'){
		return {
			reference:''
		,	status:''
		,	type:''
		,	researcher:''
		,	remarks:''
		}
	}
	if(type=='Photo'){
		return {
			title:''
		,	subject:''
		,	photographer:''
		,	studio:''
		,	date:''
		,	country:''
		,	city:''
		}
	}
	if(type=='Photographer'){
		return {
			name:''
		,	nationality:''
		,	studio:''
		,	address:''
		,	telephone:''
		,	birthdate:''
		,	deathdate:''
		,	biography:''
		,	source:''
		}
	}
	if(type=='Studio'){
		return {
			name:''
		,	address:''
		,	telephone:''
		,	biography:''
		,	source:''
		}
	}
	if(type=='Album'){
		return {
			reference:''
		,	photos:[]
		}
	}
	if(type=='Object'){
		return {
			reference:''
		,	photos:[]
		}
	}
}

Object.defineProperty(actionsCreators,'reducer',{value:reducer,enumerable:false});
export default actionsCreators;
