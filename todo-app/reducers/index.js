import { combineReducers } from "redux";

const TodoList = (state = [], action) => {
    switch (action.type) {
        case 'newTask':
            console.log('yea');
            return [...state, { task: action.task, isDeleted: false, checked: false }];
        case 'check':
            return [...action.index];
        default:
            return [...state];
    }
}

const Calculator = (state = {}, action) => {
    switch (action.type) {
        case 'calculator':
            return { ...action.payload };
        default:
            return { ...state }
    }
}

const Weather = (state = {}, action) => {
    switch (action.type) {
        case 'weather':
            return { ...action.payload };
        default:
            return { ...state }
    }
}

const Train = (state = [{ train_num: '', name: '' }], action) => {
    switch (action.type) {
        case 'train':
            return [...action.payload];
        default:
            return [...state]
    }
}

export default combineReducers({ TodoList, Calculator, Weather, Train })
