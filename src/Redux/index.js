import { createStore } from 'redux'

const reducers = (prevstate = {
    isNavbaShow: true,
    current: 0
}, action) => {
    let { type, payload } = action
    switch (type) {
        case "changecurrent":
            var cur = { ...prevstate }
            cur.current = payload
            return cur
    }
    return prevstate
}

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
