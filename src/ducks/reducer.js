const initialState = {
    userId: null,
    email: ""
}

const UPDATE_USER = "UPDATE_USER"

export function updateUser(userInfo){
    return {
        type: UPDATE_USER,
        payload: userInfo
    }
}

export default function reducer(state = initialState, action){
    const { type, payload } = action
    switch (type){
        case UPDATE_USER:
            const {id: userId, email} = payload
            return {userId, email}
        default:
            return state
    }
};