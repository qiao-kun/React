import React, { Component } from 'react'
import NewSon from '../components/NewSon'
interface Props {

}
export default class NewParent extends Component<Props>{
    constructor(props: Props) {
        super(props)
    }
    getSnapshotBeforeUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>) {
        console.log('getSnapshotBeforeUpdate')
    }


    render() {

        return (
            <div>
                新版本的父组件
                <NewSon count={22}></NewSon>
            </div>
        )
    }
}
22