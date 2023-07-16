const user = {
  name: 'Lucas',
  lastName: 'Stygar',
};

function User() {
  return <span>{`${user.name} ${user.lastName}`}</span>;
}

export default User;
