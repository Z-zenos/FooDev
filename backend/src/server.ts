/*
  If you see error underline express, that mean you can't find
  the declaration file for module express, it is because you didn't
  install the types/express, so you need to use the type definition
  of pure javascript packages to be able to use them inside the
  typescript file
    -> npm install @types/express --save-dev
* */

import express from "express";
import cors from "cors";
import {sample_food, sample_tags} from "./data";

const app = express();

/*
  On the development time, we are serving our angular project on
  localhost:4200, but we need to serve our backend on a different
  address, for example localhost:5000
  By default it is unacceptable to have a request from an address
  to a different address, that's the reason that we need cors here,
  we need cors only for development time
* */
app.use(cors({
  credentials: true,
  origin: ['https://localhost:4200']
  /*
    Hey express use cors so 4200 could have a request on this
    server and the credentials
  */
}));

app.get('/api/v1/foods', (req, res) => {
  res.status(200).json({
    status: 'success',
    count: sample_food.length,
    data: {
      foods: sample_food
    }
  });
});

app.get('/api/v1/foods/search/:searchTerm', (req, res) => {
  const searchTerm = req.params.searchTerm;
  const foods = sample_food
    .filter(food => food.name
      .toLowerCase()
      .includes(searchTerm)
    );

  res.status(200).json({
    status: 'success',
    count: foods.length,
    data: {
      foods: foods
    }
  });
});

app.get('/api/v1/foods/tags', (req, res) => {
  res.status(200).json({
    status: 'success',
    count: sample_tags.length,
    data: {
      tags: sample_tags
    }
  });
});


app.get('/api/v1/foods/tags/:tag', (req, res) => {
  const tagName = req.params.tag;
  const foods = sample_food.filter(f => f.tags?.includes(tagName));

  res.status(200).json({
    status: 'success',
    count: foods.length,
    data: {
      foods: foods
    }
  });
});


app.get('/api/v1/foods/:foodId', (req, res) => {
  const id = req.params.foodId;
  const food = sample_food.find(f => f.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      food: food
    }
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`FooDev serving on port ${port}...`);
});

/*
  If it was a js app we could write "node server.js" inside the
  terminal and run app
  But since it is a typescript app, first we need to convert it
  into javascript, for doing this, we need a package called ts-node
*/
