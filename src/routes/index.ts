import  {Router,Request,Response} from 'express'
import {indexCtrl} from '../controllers/IndexController'
const router : Router = Router();

router.get('/',(req:Request,res:Response) => {
    res.send('hello word')
})

router.post('/notifications',indexCtrl.SendNotification)


export default router;