import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import App from './components/App';


import {formsaved} from './reducers/index';


ReactDOM.render(
<Provider store={createStore(formsaved)}>
<App/>
</Provider>,
document.getElementById("root"));