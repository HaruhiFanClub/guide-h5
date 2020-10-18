/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require('webpack-merge')
const tsImportPluginFactory = require('ts-import-plugin')
const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    port: 8888
  },
  chainWebpack: config => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        const opt = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        })
        return opt
      })
    config.resolve.alias
      .set('@', resolve('src'))
  }
}
