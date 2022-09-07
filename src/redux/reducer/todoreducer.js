const todoreducer = (state = [], action) => {
    if (action.type === 'ADD_TODO') {
        return [...state, action.payload];
    }
    if (action.type === 'DELETE_TODO') {
        return state.filter((item, index) => index !== action.payload);
    }
    
    return state;
    };
    
    export default todoreducer;
    