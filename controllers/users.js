import { v4 as uuidv4 } from 'uuid';
//array of objects 
let users = [   
];

export const createUser = (req, res) => {
    const user = req.body;
    //advanced refactored code to add users to our array database

    users.push({ ...user, id: uuidv4() });


    res.send(`User with the name ${user.firstName} added to the database!`);//sending sth to the client-side to inform of the changes made

}
export const getUsers= (req, res) => {
    res.send(users);
} 

export const getUser = (req, res) => {
    //res.send('THE GET ID ROUTE IS THIS ONE');
    // console.log(req.params);
    
    const { id } = req.params;

    //finding users by id
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;


    users = users.filter((user) => user.id != id);
    //sending something to the client to inform them of how things have gone
    res.send(`User with the id ${id} deleted from the database`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    //find user to be updated 
    const user = users.find((user) => user.id === id);
    //lets perform a check budddy 
    if (firstName) user.firstName = firstName;
    if (firstName) user.lastName = lastName;
    if (age) user.age = age;
    res.send(`User with the id ${user.id} has been updated`);
}