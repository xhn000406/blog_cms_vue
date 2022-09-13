export const localUtil = {
  saveLocal(key, value) {
    return window.localStorage.setItem(key, JSON.stringify(value))
  },
  setLocal(key) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  },
  clearLocal() {
    return window.localStorage.clear()
  }
}
