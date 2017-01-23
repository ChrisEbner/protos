const fs = require('fs')
const postcss = require('postcss')
const smartImport = require('postcss-smart-import')
const apply = require('postcss-apply')
const customMedia = require('postcss-custom-media')
const precss = require('precss')
const nested = require('postcss-nested')

module.exports = {
  plugins: [
		smartImport,
		apply,
		customMedia,
		nested,
		precss
  ]
}