const api = process.env.REACT_APP_READABLE_API_URL || 'http://localhost:3001'

let token = localStorage.token
if (!token) 
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}


//#region GET POST, CATEGORY,AND POST FOR CATEGORY
export const getAllCategories = () => {
    return fetch(`${api}/categories`, { headers })
        .then(response => response.json())
        .then(data => data.categories)
}

export const getAllPostsForCategory = (category) => {
    return fetch(`${api}/${category}/posts`, { headers })
        .then(response => response.json())
        .then(data => data)
}

export const getAllPosts = () => {
    return fetch(`${api}/posts`, { headers })
        .then(response => response.json())
}
//#endregion

//#region ADD, EDIT, GET, VOTE, DELETE  SINGLE POST
export const addNewPost = (newPost) => {
  return fetch(`${api}/posts`, { 
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  })
  .then(data => data.json())
  /* CONFIGURE ERROR ON SERVER
  .catch(e => {
    e.response.data.erros.forEach(error => toastr.error('Err', error))
  })*/
}

export const editPost = (id, post) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(data => data.json())
}

export const getPost = (id) => {
  return fetch(`${api}/posts/${id}`, { headers })
    .then(response => response.json())
}

export const votePost = (id, option) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option: option
    })
  })
  .then(data => data.json())
}

export const deletePost = (id) => {
  return fetch(`${api}/posts/${id}`, { 
    method: 'DELETE',
    headers 
  })
}
//#endregion
//#region GET, ADD, DELETE, EDIT, VOTE COMMENTS
export const getComments = (id) => {
  return fetch(`${api}/posts/${id}/comments`, { headers })
    .then(response => response.json())
}

export const addComment = (newComment) => {
  return fetch(`${api}/comments`, { 
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newComment)
  })
  .then(data => data.json())
}


export const deleteComment = (id) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers
  })
  .then(data => data.json())
}

export const editComment = (id, comment) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
  .then(data => data.json())
}

export const voteComment = (id, option) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option: option
    })
  })
  .then(data => data.json())
}
//#endregion