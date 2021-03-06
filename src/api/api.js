

const apiLogin = async (userData) => {
  return await fetch("http://localhost:3001/login", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const apiRegistro = async (userData) => {
  return await fetch("http://localhost:3001/registro", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
      
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const apiList = async (userData, token) => {
  return await fetch("http://localhost:3001/listAmigos", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const apiPerfil = async (userData) => {
  return await fetch("http://localhost:3001/perfil", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
      
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const apiNewAmigo = async (userData) => {
  return await fetch("http://localhost:3001/agregarAmigos", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export { apiLogin, apiRegistro, apiList, apiPerfil, apiNewAmigo };
