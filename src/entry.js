/** last changed: 2019.11.26 */

/** States **/
const Shuang = {
  resource: {
    dict: {},
    schemeList: {},
    scheme: {},
    emoji: {
      right: '✅', wrong: '❎'
    }
  },
  core: {
    model: {},
    current: {},
    order: {
      shengIndex: 0,
      yunIndex: 0
    },
    history: []
  },
  app: {
    setting: {
      config: {},
      reload() {}
    },
    staticJS: 0,
    modeList: [],
    action: {}
  }
}

const $ = document.querySelector.bind(document)

function importJS(src = '', onload = () => { Shuang.app.staticJS++ }) {
  src = `build/${src}.min.js`
  const newScript = document.createElement('script')
  Object.assign(newScript, {src, onload})
  document.body.appendChild(newScript)
}
