import express from 'express';
import router from './routes';
import bodyParser from 'body-parser';
require('dotenv').config()

const body_parser = bodyParser;
const app = express()

app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());
app.set('port',process.env.PORT || 3000);


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
  

// routes
app.use('/api',router)

app.listen(app.get('port'),()=>{
    console.log(`server corriendo en el puerto ${app.get('port')}`);
})