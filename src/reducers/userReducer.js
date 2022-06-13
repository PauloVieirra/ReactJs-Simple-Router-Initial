const initialState = {
    email:'vieirajjr@gmail.com'
};

export default ( state = initialState, action) => {

    if(action.type === 'SET_EMAIL'){
        return{...state, email:action.payload.email};
    }

    return state;
}