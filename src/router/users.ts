import express from 'express';

import { deleteUser, getAllUsers, updateUser } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
    router.get('/users',isAuthenticated, getAllUsers);
    router.delete('/delete-user/:id', isAuthenticated, isOwner, deleteUser);
    router.patch('/update-user/:id', isAuthenticated, isOwner, updateUser)
}