const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve, reject) => {
    const isTrue = 1 > 0;

    if (isTrue) {
      resolve(
        allUsers.map((user) =>
          user.name === userName ? { ...user, active: !user.active } : user
        )
      );
    } else {
      reject(console.log(`u did a mistake in ur code`));
    }
  });
};

const logger = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);