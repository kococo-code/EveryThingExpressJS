import express from 'express';
import morgan from 'morgan';
let app = express();
let logger = morgan();
let PORT = process.env.PORT || 3000;
//BodyParser
app.use(express.json());
app.use(express.urlencoded ({extended : false}));
// logger
app.use(logger());

app.listen(PORT,()=>{
    console.log(`Operated By ${PORT}`)
})