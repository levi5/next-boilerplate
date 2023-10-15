const { resolve } = require('path')

const fileName = `.env.${process.env.TARGET_ENV}`
const pathBase = resolve('settings', 'environment')
const paths = `${pathBase}/${fileName}`

const dotEnv = require('dotenv').config({
  path: paths
})

const environmentVariables = dotEnv.parsed || {}

const BASE_URL_INTERNAL = process.env.NODE_ENV === 'production' ? environmentVariables.BASE_URL_INTERNAL : 'http://127.0.0.1:3000'


module.exports = {
  env: {
    ...environmentVariables,
    BASE_URL_INTERNAL
  }
}
