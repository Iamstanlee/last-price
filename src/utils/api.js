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

const get = async (endpoint, headers) =>
  await sendHttpRequest("GET", endpoint, null, headers)
const post = async (endpoint, data, headers) =>
  await sendHttpRequest("POST", endpoint, data, headers)

export { get, post }
