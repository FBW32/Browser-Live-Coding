
import React from "react"
import App from "./App.js"
import reactDOM from "react-dom"
import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {Provider} from "react-redux"
import Reducer from "./Reducer/Reducer.js"

const ReduxStore = createStore(Reducer,applyMiddleware(thunk))


reactDOM.render(<Provider store={ReduxStore} > <App/> </Provider>,document.getElementById("root"))