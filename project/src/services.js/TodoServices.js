


import { backend_server } from '../config'


const get_lists = async()=>{
    return await fetch(backend_server + "/lists",{
        method: "GET",
        headers: {
            'Content-type': 'application/json'
        }
    })
 }
 
 const add_list = async(book)=>{
     return await fetch(backend_server + "/add",{
         method: "POST",
         headers: {
             'Content-type': 'application/json'
         },
         body: JSON.stringify(book)
     })
 }
 
 
 const update_list = async(book)=>{
     return await fetch(backend_server + "/update",{
         method: "PUT",
         headers:{
             'Content-type': 'application/json'
         },
         body: JSON.stringify(book)
     })
 }
 
 const delete_list = async (id) => {
     return await fetch(backend_server + "/delete/" + id, {
         method: "GET",
         headers: {
             'Content-type': 'application/json'
         },
     })
 }
 
 
 export const todoService = {
    get_lists,
    add_list,
    update_list,
    delete_list
 }