require('dotenv').config();
const express = require('express');  
const authJWT = require('./libs/auth');
const cors = require('cors');
const passport = require('passport');
      
const usersRouter = require('./routes/users');





passport.use(authJWT);

require('./database');


const app = express();
app.set('port', process.env.PORT || 4000);

    
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());  



 

app.use(passport.initialize());

            

app.use('/users', usersRouter);


app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});    

