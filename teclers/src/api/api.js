// const getPokemon = async (idPokemon) => {
//   return await fetch("https://pokeapi.co/api/v2/pokemon/" + idPokemon);
// };

// const savePokemon = async (idPokemon) => {
//   return await fetch("http://localhost:3001/savepokemon", {
//     method: "POST",
//     body: JSON.stringify({ idPokemon }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// };

// const listPokemon = async (token) => {
//   return await fetch("http://localhost:3001/listpokemon", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token,
//     },
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// };

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

export { apiLogin };
