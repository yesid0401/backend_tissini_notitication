import {Request,Response} from 'express'
import PushNotifications from '@pusher/push-notifications-server'

class IndexController {
   

    public SendNotification(req:Request, res:Response){
        const {fcm} = req.body

        let beamsClient = new PushNotifications({
            instanceId : 'd6c86a48-12cf-486a-bcef-7699a38936a9'  ,
            secretKey : 'B5EC4650A1CDE79B518C47EA75B4D5DE5EEE9FD56BE6B936DC52FF1FDC8CD4FF'
          });

          beamsClient.publishToInterests(['hello'], {
            fcm
          })
          .then((publishResponse) => {
            console.log('send notification:', publishResponse.publishId);
          })
          .catch((error) => {
            console.error('Error:', error);
          });

          return res.json('send notification');
    }
}

export const indexCtrl = new IndexController()

