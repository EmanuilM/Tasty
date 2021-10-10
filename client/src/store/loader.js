const loaderReducer = (state = false , action) => { 
    if(action.type === 'LOAD') { 
        return !state;
    }else {
        return state;
    }
}

const loader = () => { 
    return { 
        type : 'LOAD'
    }
}

export  { 
    loaderReducer,
    loader,
}