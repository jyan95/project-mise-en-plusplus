
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

const addKitchen = (data) => {
  return fetch(`${API_BASE}/kitchens`,{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      name: data.name,
      user_id: data.user_id
    })
  }).then(resp => resp.json())
}

const api = {
  addDish,
  deleteDish,
  getKitchens,
  getRecipes,
  addKitchen
}

export default api;
