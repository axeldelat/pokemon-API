import 'dotenv/config';
import cors from 'cors';
import express from 'express';


import models, { connectDb } from './models';
import routes from './routes';


const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');


// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors());

// Built-In Middleware
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Middleware
app.use(async (req, res, next) => {
  req.context = {
    models
  };
  next();
});



// * Routes * //

app.use('/events', routes.event);
app.use('/pokemons', routes.pokemon);
app.use('/teams', routes.team);
app.use('/users', routes.user);

//API Greet
app.get('/', (request, response) => {
  response.render('pages/index');

  // response.json({
  //   success: true,
  //   message: 'Pokemon API'
  // })
})


//Pokemon Catch


// * Start * //
connectDb().then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Pokemon-API app listening on port ${process.env.PORT}!`),
  );
});
