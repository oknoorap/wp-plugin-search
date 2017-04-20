/* eslint-disable camelcase */
const jssr = require('jssr')
const request = require('request')

const wpEndpointUrl = 'http://api.wordpress.org/plugins/info/1.0/'
const actionType = {
  QUERY: 'query_plugins'
}
const defaultOptions = {
  page: 1,
  per_page: 30,
  locale: 'en_US',
  fields: {}
}
const defaultFields = {
  icons: false,
  last_updated: true,
  active_installs: true
}

module.exports = (query, options = {}) => new Promise((resolve, reject) => {
  if (query === '' || typeof query !== 'string') {
    resolve(new Error('Invalid Query.'))
  }
  options = Object.assign(defaultOptions, options)
  options.fields = Object.assign(defaultFields, options.fields)
  options.search = query

  // Force hide sections and description, it's too long
  // Gives me error because jssr can't handle it
  options.fields.sections = false
  options.fields.description = false

  request.post({
    url: wpEndpointUrl,
    form: {
      action: actionType.QUERY,
      request: jssr.stringify(jssr.objType('stdClass', options))
    }
  }, (err, response, body) => {
    if (err || !body) {
      throw new Error(err)
    }

    try {
      const json = jssr.parse(body)
      const {plugins: items, info} = json
      const {page, pages, results: total} = info
      resolve({
        items,
        page,
        pages,
        total
      })
    } catch (err) {
      reject(new Error('Invalid Response'))
    }
  })
})
