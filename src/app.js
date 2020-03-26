import React from "react";
import ReactDOM from "react-dom";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'antd/dist/antd.css';
import ReactClock from './components/ReactClock';



ReactDOM.render(<ReactClock />, document.getElementById("app"));
