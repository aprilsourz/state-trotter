'use strict'

const config = require('../config.js')
const store = require('../store.js')

// GET
const getItems = function() {
  return $.ajax({
    method: 'GET',
    url: config.apiOrigin + '/items',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createItem = function (content) {
  console.log(content)
  return $.ajax({
    method: 'POST',
    url: config.apiOrigin + '/items',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      item: {
        description: content.item.description,
        due_date: content.item.due_date,
        state: content.item.state,
        status: content.item.status,
        title: content.item.title
      }
    }
  })
}

module.exports = {
  getItems,
  createItem
}