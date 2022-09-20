import express from 'express';

import { createUser, getUsers, getUser, deleteUser, updateUser  } from '../controllers/users.js';

const router  = express.Router();


//all routes here start with /users
 
router.get('/',getUsers);

//doing a simple post request--sending data from the front-end to the server
//creating functions instead of adding logic to the routes themselves

router.post('/',createUser);


router.get('/:id',  getUser);

//getting a user with a specific id we use the request.params

router.delete('/:id', deleteUser);

//modifying user details using patch-- completely overwriting different methods using put 

router.patch('/:id', updateUser);
export default router;






