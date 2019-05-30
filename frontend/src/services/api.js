
const API_BASE = 'http://localhost:3000'

const get = (url) => {
  return fetch(url)
  .then(r => r.json())
}

const getKitchens = () => {
  return get(`${API_BASE}/kitchens`)
}

const getRecipes = () => {
  return get(`${API_BASE}/recipes`)
}

// const loginUser = () => {
//   return fetch(`${API_BASE}/users`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify({username:this.state.username})
//   })
//   .then(r => r.json())
//   .then(data => {
//     console.log(data);
//     this.setState({
//       loggedIn: true,
//       username: '',
//       currentUser: data
//     })
//     console.log('App state after fetch',this.state);
//   })
// }

const addDish = (data) => {
  return fetch(`${API_BASE}/dishes`,{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      kitchen_id: data.kitchen_id,
      recipe_id: data.recipe_id
    })
  })
}

const deleteDish = (id) => {
  return fetch(`${API_BASE}/dishes/${id}`, {
    method: 'delete'
  })

}

const api = {
  addDish,
  deleteDish,
  getKitchens,
  getRecipes
}

export default api;
