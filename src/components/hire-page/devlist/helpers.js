export const getUsers = async (setUsers) => {
  fetch(process.env.REACT_APP_API + "users")
    .then((res) => {
      return res.json();
    })
    .then((users) => {
      console.log(users);
      setUsers(users);
    })
    .catch((err) => {
      console.error("Error:" + err);
    });
};
