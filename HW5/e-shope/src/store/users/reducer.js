import {SET_USERS, REGISTER_USER, SET_ORDER_TO_USER, ORDER_PLACED} from "./types";

const initialState = {
    users: [],
    orderPlaced: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {                                                  // console.log('action.type: ', action.type)
        case SET_USERS:
            let usersArray = JSON.parse(localStorage.getItem('users')) || [];
            return {...state, users: usersArray}


        case REGISTER_USER:
            const {name, surname, age, email, address, phone, password} = action.payload;
            const newUser = {
                name: name,
                surname: surname,
                age: age,
                email: email,
                address: address,
                phone: phone,
                password: password,
                orders: []
            }                                                    // console.log(newUser);

            const updateUsers = state.users;

            let i = state.users.findIndex(obj => obj.email === email);                        // console.log(i)

            if (!state.users[i]) {
                updateUsers.push(newUser);                                 // console.log('updateUsers: ', updateUsers);

                localStorage.setItem('users', JSON.stringify(updateUsers));
                return {...state, users: updateUsers}
            }
            return state


        case SET_ORDER_TO_USER:
            const order = action.payload;                                                         // console.log(order);
            let userIdentifier = order.find(obj => obj.userIdentifier).userIdentifier;     // console.log('userIdentifier: ', userIdentifier);

            let j = state.users.findIndex(obj => obj.email === userIdentifier);              // console.log(j);

            if(state.users[j]) {
                // state.users[j].orders.push(order);   // это работает, нр так можно?????)

                let updateUsersOrders = state.users.map((el,index) => {
                    if(el.email === userIdentifier)
                        el.orders.push(order);

                    return el;
                })

                localStorage.setItem('users', JSON.stringify(updateUsersOrders));
                return {...state, users: updateUsersOrders}
            }
            return state


        case ORDER_PLACED:
            return {...state, orderPlaced: action.payload}


        default:
            return state
    }
}

export default reducer;