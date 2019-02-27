// let copyConfigs = {}
const copyConfigs = [
  'vue.config.js',
  'jest.config.js',
  'babel.config.js',
  '.gitignore',
  '.env',
  '.postcssrc.js'
]

const getConfigs = configs => {
  let res = {}
  configs.forEach(val => {
    res[val] = `/config/${val.replace('.', '_')}`
  })

  return res
}

module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    'dependencies': {
      '@babel/runtime': '^7.2.0',
      '@d2-projects/d2-crud': '^2.0.3',
      '@d2-projects/vue-filters-date': '^1.0.2',
      '@d2-projects/vue-table-export': '^1.0.1',
      '@d2-projects/vue-table-import': '^1.0.0',
      'axios': '^0.17.1',
      'better-scroll': '^1.12.1',
      'clipboard-polyfill': '^2.4.1',
      'countup.js': '^1.9.3',
      'dayjs': '^1.6.7',
      'echarts': '^4.1.0',
      'element-ui': '^2.4.11',
      'flex.css': '^1.1.7',
      'fuse.js': '^3.2.1',
      'github-markdown-css': '^2.10.0',
      'highlight.js': '^9.12.0',
      'hotkeys-js': '^3.3.6',
      'js-cookie': '^2.2.0',
      'lodash': '^4.17.10',
      'lowdb': '^1.0.0',
      'marked': '^0.3.9',
      'mockjs': '^1.0.1-beta3',
      'nprogress': '^0.2.0',
      'qs': '^6.6.0',
      'quill': '^1.3.4',
      'screenfull': '^4.0.0',
      'simplemde': '^1.11.2',
      'ua-parser-js': '^0.7.18',
      'v-charts': '^1.17.6',
      'v-contextmenu': '^2.7.0',
      'vue': '^2.5.17',
      'vue-grid-layout': '^2.1.11',
      'vue-i18n': '^7.4.2',
      'vue-json-tree-view': '^2.1.4',
      'vue-router': '^3.0.1',
      'vue-splitpane': '^1.0.2',
      'vue-ueditor-wrap': '^1.5.0',
      'vuex': '^3.0.1'
    },
    'devDependencies': {
      '@babel/plugin-transform-runtime': '^7.2.0',
      '@kazupon/vue-i18n-loader': '^0.3.0',
      '@vue/cli-plugin-babel': '^3.0.0',
      '@vue/cli-plugin-eslint': '^3.0.0',
      '@vue/cli-plugin-unit-jest': '^3.2.3',
      '@vue/cli-service': '^3.0.0',
      '@vue/eslint-config-standard': '^3.0.0',
      '@vue/test-utils': '^1.0.0-beta.28',
      'babel-core': '7.0.0-bridge.0',
      'babel-jest': '^23.0.1',
      'lint-staged': '^7.2.0',
      'node-sass': '^4.9.0',
      'sass-loader': '^7.0.1',
      'svg-sprite-loader': '^3.8.0',
      'text-loader': '0.0.1',
      'uglifyjs-webpack-plugin': '^2.0.1',
      'vue-template-compiler': '^2.5.17'
    },
    'lint-staged': {
      '*.js': [
        'vue-cli-service lint',
        'git add'
      ],
      '*.vue': [
        'vue-cli-service lint',
        'git add'
      ]
    }
  })

  api.render('/template')
  // api.render(getConfigs(copyConfigs))
}