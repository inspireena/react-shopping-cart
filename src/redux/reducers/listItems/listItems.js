const ListReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_LIST':
            return action.payload;
        case 'DEL_LIST':
            return [];
        default:
            return state;
    }
};

export default ListReducer;