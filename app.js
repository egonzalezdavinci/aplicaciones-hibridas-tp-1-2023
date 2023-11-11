import express from 'express';
import routerApiGameJam from './api/routers/api-routers.js';

const app = express();

app.use('/api', express.json());
app.use('/api', routerApiGameJam);

app.listen(2023, function(){
    console.log('Server ok http://localhost:2023')
})
