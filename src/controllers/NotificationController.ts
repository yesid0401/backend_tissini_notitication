import {Request,Response} from 'express'
import PushNotifications from '@pusher/push-notifications-server'

class NotificationController {
   
    public SendNotification(req:Request, res:Response){
        const {title,body,link,interests} = req.body
  
        let beamsClient = new PushNotifications({
            instanceId :  process.env.PUSHER_APP_ID  || '',
            secretKey  : process.env.PUSHER_APP_SECRET || ''
          });

          beamsClient.publishToInterests(interests, {
            fcm:{
              notification:{
                title:title,
                body:body,
                color: "#FF4EF2"
              },
              data:{
                link:link
              }
            }
          })
          .then((publishResponse) => {
            console.log('send notification:', publishResponse.publishId);
          })
          .catch((error) => {
            console.error('Error:', error);
          });

          return res.json({
              code : res.statusCode,
              message: 'send notification'
          });
    }
}

export const notificationCtrl = new NotificationController()

