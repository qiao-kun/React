import { Component } from 'react';
import * as ReactDOM from 'react-dom/client';
export default class LiveRender extends Component {
    state = { opacity: 1 }
    time: any
    handleUnmount = (): void => {
        clearInterval(this.time)
        //18版本已经不支持unmountComponentAtNode
        // const rootElement = document.getElementById('weather') as HTMLElement;
        // console.log(rootElement, 'dom')
        // console.log(ReactDOM, 'reactDom')
        // ReactDOM.unmountComponentAtNode(rootElement);
        // console.log('卸载组件', rootElement);

        const rootElement = document.getElementById('LiveRender');
        if (rootElement) {
            const rootInstance = (ReactDOM as any).createRoot(rootElement);//createRoot18版本特征
            rootInstance.unmount();
        }


    };
    componentDidMount(): void {//组件挂载完毕
        this.action()
    }
    componentWillUnmount(): void {//组件将要卸载时
        //清楚定时器
    }


    action = () => {
        this.time = setInterval(() => {
            //获取原状态
            let { opacity } = this.state;
            opacity -= 0.1;
            if (opacity <= 0) opacity = 1;
            console.log(opacity, 'opacity');
            this.setState({ opacity: opacity })
        }, 200000000)

    }

    //初始化渲染 状态更新之后
    render(): JSX.Element {

        return (
            <div id='LiveRender'>
                <h2 style={{ opacity: this.state.opacity }}>字体透明度</h2>
                <button onClick={this.handleUnmount}>卸载组件</button>
                <button onClick={this.action}>变化</button>
            </div>
        );
    }
}
