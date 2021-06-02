export function StateReducer(state, action) {
    switch (action.type) {
        case 'INCREASE_OR_DECREASE_BY':
            return { ...state, count: state.count + action.by };
        default:
            throw new Error()
    }
}


export function CountReducer(state, action) {
    // switch (action.type) {
    //     case "INC":
    //         return { count: state.count + 1 };
    //     case "DEC":
    //         return { count: state.count - 1 };
    //     default:
    //         throw new Error()
    // }
}


export const initialState = {
    loading: '',
    error: '',
    data2: [{
        loading: '',
        error: '',
        data2: [],
        data: []
    }, {
        loading: '',
        error: '',
        data2: [],
        data: []
    }],
    data: []
}

export function apiReducer(state, action) {
    switch (action.type) {
        case 'Replace-State':
            return action.payload;
        case 'Different':
            return { ...state, key: action.payload };
        case 'Fetch_Start':
            return { ...state, loading: 'yes' };
        case 'Fetch_Failure':
            return { ...state, loading: '', error: action.payload };
        case 'Fetch_Success':
            return { ...state, loading: '', data: action.payload };
        default:
            return state
    }
}

