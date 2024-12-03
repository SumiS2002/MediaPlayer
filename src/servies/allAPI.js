import { commonAPI } from "./commonAPI"
import {SERVER_URL} from "../servies/server_url"

//upload video - store in localhost3000
export const  uploadVideoAPI = async (video)=>{
    //send response to add components
    return await commonAPI("POST",`${SERVER_URL}/videos`,video)
}

//get video api called by view
export const getAllVideoAPI = async ()=>{
    return commonAPI("GET",`${SERVER_URL}/videos`,"")
}

//store watch history videoCard to localhost3000/history
export const saveHistoryAPI = async (videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

//get history and wach in localhost3000/histroy
export const getHistoryAPI = async ()=>{
    return commonAPI("GET",`${SERVER_URL}/history`,"")
}

//remove history 
export const removeHistoryAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}

//removing video api
export const removeVideoAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/videos/${videoId}`,{})
}

export const addCategoryAPI = async (catagoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/category`,catagoryDetails)
}

//get all categoris
export const getAllCategoriesAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/category`,"")
}

//remove category
export const removeCategoryAPI = async (catagoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/category/${catagoryId}`,{})
}


//get single video api
export const getAVideoAPI = async (videoId)=>{
    return await commonAPI("GET",`${SERVER_URL}/videos/${videoId}`,"")
}

//upadte category api
export const updateCategoryAPI = async (categoryId,updateCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/category/${categoryId}`,updateCategoryDetails)
}

//get single category api
export const getSingleCategoryAPI = async (categoryId)=>{
    return await commonAPI("GET",`${SERVER_URL}/category/${categoryId}`,"")
}







