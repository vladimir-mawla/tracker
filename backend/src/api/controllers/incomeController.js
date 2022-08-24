const asyncHandler = require("express-async-handler")
const csvtojson = require("csvtojson")
const json2csv = require("json2csv").parseAsync
const Income = require("../models/incomeModel")
const fs = require("fs")
const { validateImport } = require("../helpers/common")

// @desc    Get incomes
// @route   GET /api/incomes
// @access  Private
const getIncomes = asyncHandler(async (req, res) => {
  const incomes = await Income.find({ user: req.user.id })
  res.status(200).json(incomes)
})

// @desc    Set income
// @route   POST /api/incomes
// @access  Private
const setIncome = asyncHandler(async (req, res) => {
  const income = await Income.create({
    user: req.user.id,
    type: req.body.type,
    amount: req.body.amount,
    date: req.body.date,
  })

  res.status(200).json(income)
})
