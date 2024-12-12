const http = {
  get: (url) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open("GET", url, true)
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText))
          } else {
            reject(`Error: ${xhr.status}`)
          }
        }
      }
      xhr.onerror = () => reject("Network Error")
      xhr.send()
    })
  },
  post: (url, data) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open("POST", url, true)
      xhr.setRequestHeader("Content-Type", "application/json")
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200 || xhr.status === 201) {
            resolve(JSON.parse(xhr.responseText))
          } else {
            reject(`Error: ${xhr.status}`)
          }
        }
      }
      xhr.onerror = () => reject("Network Error")
      xhr.send(JSON.stringify(data))
    })
  },
  put: (url, data) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open("PUT", url, true)
      xhr.setRequestHeader("Content-Type", "application/json")
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText))
          } else {
            reject(`Error: ${xhr.status}`)
          }
        }
      }
      xhr.onerror = () => reject("Network Error")
      xhr.send(JSON.stringify(data))
    })
  },
  patch: (url, data) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open("PATCH", url, true)
      xhr.setRequestHeader("Content-Type", "application/json")
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText))
          } else {
            reject(`Error: ${xhr.status}`)
          }
        }
      }
      xhr.onerror = () => reject("Network Error")
      xhr.send(JSON.stringify(data))
    })
  },
  delete: (url) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open("DELETE", url, true)
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText))
          } else {
            reject(`Error: ${xhr.status}`)
          }
        }
      }
      xhr.onerror = () => reject("Network Error")
      xhr.send()
    })
  }
}

http
  .get("https://fakestoreapi.com/products")
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
  .finally(() => console.log("Request completed"))
