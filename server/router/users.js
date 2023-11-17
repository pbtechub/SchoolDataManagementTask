import express from 'express';
// const express = require('express');
import { getUser, createUser, foundUser, deleteUser, updateUser } from '../controllers/users.js';
// const { getUser, createUser, foundUser, deleteUser, updateUser } =  require('../controllers/users');

const router = express.Router();


router.get('/', getUser)

router.post('/', createUser);

router.get('/user/:id', foundUser)

router.delete('/user/:id', deleteUser)

router.put('/user/:id', updateUser)

export default router;
