import { createStore } from 'redux'

const reducers = (prevstate = {
    isNavbaShow: true,
    current: 0,
    shopList: [],
    showcartList: true
}, action) => {
    let { type, payload } = action
    switch (type) {
        case "changecurrent":
            var cur = { ...prevstate }
            cur.current = payload
            return cur
        case "HideNabar":
            var cur = { ...prevstate }
            cur.isNavbaShow = payload
            return cur
        case "ShowNabar":
            var cur = { ...prevstate }
            cur.isNavbaShow = payload
            return cur

        case "delShop":
            var cur = { ...prevstate }

            for (var i = 0; i < cur.shopList.length; i++) {
                if (cur.shopList[i].id === payload) {
                    cur.shopList.splice(i, 1)
                    if (!cur.shopList.length) {
                        cur.showcartList = true
                    }
                    return cur
                }
            }

            return cur

        case "addList":
            var cur = { ...prevstate }
            for (var i = 0; i < cur.shopList.length; i++) {
                if (cur.shopList[i].id === payload.id) {
                    cur.shopList[i].number++
                    if (cur.shopList.length) {
                        cur.showcartList = false
                    }

                    return cur
                }
            }
            cur.shopList = [...cur.shopList, payload]
            if (cur.shopList.length) {
                cur.showcartList = false
            }

            return cur
    }
    return prevstate
}

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
