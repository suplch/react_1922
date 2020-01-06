const initState = {
    dataSource: [],
    total: 0
}
export function articleReducer(state = initState, action) {
    switch (action.type) {
        case 'SET_DATASOURCE':
            const {article_list, total} = action.payload;
            alert(total);
            alert(JSON.stringify(action.payload))
            return {...state, dataSource: article_list, total}
        default:
            return state;
    }
}