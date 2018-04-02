import Index from './src/Index'

export default {
  install(Vue, callBack) {
    Vue.component('kalix-second-page', Index)
    if (callBack && typeof(callBack) === 'function') {
      callBack({
        name: '第二页',
        path: '/kalix-second-page'
      })
    }
  }
}
