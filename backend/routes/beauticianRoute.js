import express from 'express'
import { beauticianList } from '../controllers/beauticianController.js'

const beauticianRouter=express.Router()
  
beauticianRouter.get('/list',beauticianList)

export default beauticianRouter