import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {store} from './redux/store';
import "./index.css";
import App from "./App";
import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.baseURL = 'https://smalbluserver.onrender.com';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);