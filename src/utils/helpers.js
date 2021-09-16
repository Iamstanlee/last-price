import { v4 as uuidv4 } from "uuid"
import { notification } from "antd"

export const getParamByName = (name) => {
  return new URLSearchParams(window.location.search).get(name)
}

export const uuid = () => uuidv4()

export function setItem(key, value, storage = "local") {
  if (storage === "local") {
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  }
}

export function getItem(key, storage = "local") {
  if (storage === "local") return JSON.parse(window.localStorage.getItem(key))
  return JSON.parse(window.sessionStorage.getItem(key))
}
export function removeItem(key, storage = "local") {
  if (storage === "local") {
    window.localStorage.removeItem(key)
  } else {
    window.localStorage.removeItem(key)
  }
}
export function clearLocalStorage(storage = "local") {
  if (storage === "local") {
    window.localStorage.clear()
  } else {
    window.sessionStorage.clear()
  }
}

export function getReference() {
  var date = Date.now()
  return `${date.toString().substring(0, 9)}`
}

export const getLastPathname = (pathname) => {
  const pathList = pathname.split("/")
  return pathList[pathList.length - 1]
}

export const getSlug = (payload) => {
  if (payload) {
    let ls = payload.split(" ")
    ls = ls.map((item) => item.toLowerCase())
    return ls && ls.join("-")
  }
  return null
}

export const getFileSize = (bytes) => {
  if (bytes < 1024) {
    return bytes + "bytes"
  } else if (bytes >= 1024 && bytes < 1048576) {
    return (bytes / 1024).toFixed(1) + "KB"
  } else if (bytes >= 1048576) {
    return (bytes / 1048576).toFixed(1) + "MB"
  }
}

export const koboToNgn = (kobo) => kobo / 100
export const ngnToKobo = (ngn) => ngn * 100

export function formatAmount(value) {
  return `NGN ${new Intl.NumberFormat().format(koboToNgn(value))}`
}

export const notify = (msg, state = "error") => {
  switch (state) {
    case "error":
      notification["error"]({
        message: "Error",
        description: msg || "",
      })
      break
    case "success":
      notification["success"]({
        message: "Success",
        description: msg || "",
      })
      break
    default:
      break
  }
}
