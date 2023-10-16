import React from "react";
import PropTypes from "prop-types";

interface State {
    isHot: boolean;
}

interface Props {
    age: number;
}

class Weather extends React.Component<Props, State> {
    /*
    React.createRef
    */
    myRef: any = React.createRef()


    static propTypes = {//对组件传递的类型限制
        age: PropTypes.number.isRequired,
    };
    static defaultProps = {
        age: 0, // 默认值为0
    };

    state: State = { isHot: true };

    init = () => {
        const { age } = this.props;
        console.log(age, "11");
    };

    showInfo = () => {

        const input1 = this.input1
        alert(input1)
    }

    input1: any;

    componentDidMount() {
        this.init();
    }

    changeWeather = () => {
        console.log(this.myRef.current?.value, 'myref')
        const { isHot } = this.state;
        this.setState({ isHot: !isHot });
        const input = this.inputRef.current as HTMLInputElement;
        console.log(input?.value);
    };
    Classinput = (e: any) => {
        console.log('绑定的input事件01', e)
        //函数体
    }

    private inputRef = React.createRef<HTMLInputElement>();

    render() {
        const { isHot } = this.state;
        return (
            <div id="weather">
                <h1 className="weather_text" onClick={this.changeWeather}>
                    {isHot ? "降临前的寂静" : "沉默"}
                    <p></p>
                    {/* <div ref={(e) => {
                    console.log(e, '回调函数');
                }}></div> */}


                    {/* {input事件} */}
                    <input type="text" ref={this.inputRef} />
                    {/* {input class绑定事件} */}
                    <input type="text" ref={this.Classinput} />
                    {/* {React.createRef 事件} */}
                    <input type="text" ref={this.myRef} />
                    {/* {基本写法} */}
                    <input type="text" ref={(currentNode) => { this.input1 = currentNode; console.log('@', currentNode); }} />
                </h1 >
            </div>
        );
    }
}

export default Weather;
