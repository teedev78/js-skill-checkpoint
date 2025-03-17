// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const getUserData = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/users");
};

const handleResponse = (response) => {
  return response.json();
};

const onSuccess = (data) => {
  let newUsers = [];
  for (let user of data) {
    newUsers.push(user.name);
  }
  console.log(newUsers);
};

getUserData().then(handleResponse).then(onSuccess);
