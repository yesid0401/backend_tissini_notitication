import  {Router,Request,Response} from 'express'
import {notificationCtrl} from '../controllers/NotificationController'
const router : Router = Router();

router.get('/',(req:Request,res:Response) => {
    res.send('hello word')
})

router.post('/notifications',notificationCtrl.SendNotification)


export default router;