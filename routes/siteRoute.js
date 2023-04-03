import express from 'express'
import URL from '../models/urlModel.js'
import { validateURL } from '../utils/validate.js'
const router = express.Router()

router.post("/create", async (req, res)=>{
    let {url} = req.body
    if(url === null || !url){
        return res.status(400).send({err:'URL cannot be empty or null'})
    }
    if(!validateURL(url)){
        console.log(url);
        return res.status(400).send({err:'URL structure is not correct'})
    }
    let getUrl = await URL.findOne({fullUrl:url})

    if(getUrl){
        return res.status(400).send({err:'URL is already present'})
    }
    
    let savedURL = await URL.create({fullUrl:url})

    return res.status(201).send({msg:'success', res:savedURL})

})

router.delete("/delete", async (req, res)=>{
    let {url} = req.body
    if(!url){
        return res.status(400).send({err:'URL cannot be empty or null'})
    }
    let getUrl = await URL.findOne({fullUrl:url})

    if(!getUrl){
        return res.status(400).send({err:'URL is not found'})
    }
    
    await URL.deleteOne(getUrl)

    return res.send({msg:`${url} Deleted Successfully`})

})

router.get("/find", async (req, res)=>{
    let {url} = req.body
    if(!url){
        return res.status(400).send({err:'URL cannot be empty or null'})
    }
    let getUrl = await URL.findOne({fullUrl:url})

    if(!getUrl){
        return res.status(400).send({err:'URL is not found'})
    }
    
    return res.send({res:getUrl, msg:`${url} is present`, })

})
export default router