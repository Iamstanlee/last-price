import { storage } from "../firebase"

const sendHttpRequest = async (method, endpoint, data, headers) => {
  headers["Content-Type"] = "application/json"
  try {
    if (method === "GET" || method === "DELETE") {
      const response = await fetch(`${endpoint}`, {
        method: method,
        headers: headers,
      })
      return await response.json()
    }
    const response = await fetch(`${endpoint}`, {
      method: method,
      headers: headers,
      body: JSON.stringify(data),
    })
    return await response.json()
  } catch (error) {
    return { status: false, error: error.toString() }
  }
}

export const uploadFile = async (file, folder, id) => {
  try {
    let filename = id ? `${folder}/${id}` : `${folder}/${file.name}`
    filename = filename.replace(/\s/g, "").trim()
    let fileReference = storage.ref().child(filename)
    await fileReference.put(file)
    let url = await fileReference.getDownloadURL()
    return url
  } catch (e) {
    return { success: false, message: e.toString() }
  }
}

export const get = async (endpoint, headers) =>
  await sendHttpRequest("GET", endpoint, null, headers)
export const post = async (endpoint, data, headers) =>
  await sendHttpRequest("POST", endpoint, data, headers)
