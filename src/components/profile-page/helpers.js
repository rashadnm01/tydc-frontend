export const getUser = (userId, setUser) => {
  fetch(process.env.REACT_APP_API + "users/" + userId)
    .then((res) => {
      return res.json();
    })
    .then((user) => {
      return user;
    })
    .catch((err) => {
      console.error(err);
    });
};
