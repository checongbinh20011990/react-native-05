
const initState = {
    count: 0
}

export default countReducers = (state = initState ,action) => {
    switch(action.type){
        case 'TANG_BIEN_COUNT':
            return {count: state.count + 1}
            // Thực hiện code nào đó
        
        case 'GIAM_BIEN_COUNT': 
            // Thực hiện code nào đó tương ứng giảm biến count
            return {count: state.count - 1}
    }

    return state
}