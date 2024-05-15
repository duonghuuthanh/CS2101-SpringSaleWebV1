export const CartReducer = (current, action) => {
    if (action.type === 'update-cart')
        return action.payload;
        
    return current;
}