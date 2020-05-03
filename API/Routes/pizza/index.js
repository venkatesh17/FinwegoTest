const express = require('express')
const router = express.Router()

const create = require('./create')
const deleted = require("./deleted")
const getData = require('./get')


router.post("/", create)
router.delete("/", deleted)
router.get("/", getData)

module.exports =router

