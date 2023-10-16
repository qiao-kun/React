export interface userInfoType {
    name: string,
    age: number,
    [key: string]: any
}

export default {
    namespace: 'qiaokun',
    state: {
        name: "名字",
        age: 18
    },
    reducers: {
        save(state: userInfoType, action: { payload: any }) {
            console.log(action)
            // action.payload.name = '帅哥'
            state.name = '喝掉'
            // ...action.payload
            return { ...state, }
        }
    }
}