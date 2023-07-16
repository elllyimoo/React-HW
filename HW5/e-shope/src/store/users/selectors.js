export const getUsersData = (state) => state.users.users;

export const getUserAndOrder = (data) => {
    const users = getUsersData();
    console.log(data);
    return users.find(obj => obj.email === data);
}