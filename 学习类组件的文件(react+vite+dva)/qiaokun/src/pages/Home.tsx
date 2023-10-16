import React from "react";
import Weather from '../components/Weather.jsx';
import LiveRender from "../components/LiveRender.js";
import ReactDOM from "react-dom";
const Home: React.FC = (props) => {
    console.log(props)
    const clear = () => {
        const rootElement = document.getElementById('LiveRender') as HTMLElement;
        ReactDOM.unmountComponentAtNode(rootElement);
        console.log('111')
    }

    return (
        <div onClick={clear} style={{ width: '200px', background: "skyblue" }}>
            <Weather ></Weather>
            <LiveRender ></LiveRender>
        </div>
    )
}
export default Home