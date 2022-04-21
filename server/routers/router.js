
const express = require("express");

const route = express.Router()

const servies = require("../services/render")
const controller = require("../controller/controller")



route.get("/", servies.homeRoutes);
  
route.get("/add-user", servies.add_user);
  
route.get("/update-user", servies.update_user);

// API 
route.post('/api/users', controller.create)
route.get('/api/users/', controller.find)
route.put('/api/users/:id', controller.update)
route.delete('/api/users/:id', controller.delete)

module.exports = route