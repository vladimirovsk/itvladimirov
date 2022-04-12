import {
    PROJECT_EDIT,
    PROJECT_INSERT,
    PROJECT_DELETE,
    PROJECT_FETCH,
    PROJECT_SELECT
} from "../action/actionTypes";

const initialState = {
    items: [],
    item:{},
    modify: false
}

export default function projectReducer(state = initialState, action){
    switch (action.type) {
        case PROJECT_FETCH:
            return {
                ...state,
                items: action.payload,
                modify: action.modify
            };
        case PROJECT_EDIT:
            return {
                ...state,
                item: action.payload,
                modify: action.modify
            };
        case PROJECT_INSERT:
            return {
                ...state,
                item: action.payload,
                modify: action.modify
            };
        case PROJECT_DELETE:
            return {
                ...state,
                item: action.payload,
                modify: action.modify
            };

        case PROJECT_SELECT:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state
    }
}