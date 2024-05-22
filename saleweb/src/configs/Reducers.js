export const CartReducer = (current, action) => {
    if (action.type === 'update-cart')
        return action.payload;
        
    return current;
}

export const MyUserReducer = (current, action) => {
    switch (action.type) {
        case "login":
            return action.payload;
        case "logout":
            return null;
    }
    return current;
}