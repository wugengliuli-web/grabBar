import { getData } from '../services/getData'
export default {
    namespace: 'dataModel',
    state: {
        state: 'loading',
        list: []
    },
    effects: {
        *getState({ payload, callback }, { call, put }) {
            const res = yield call(getData)
            const { data } = res
            yield put({
                type: 'setData',
                payload: {
                    list: data,
                    state: 'success'
                }
            })
        }
    },
    reducers: {
        setData(state, { payload }) {
            return {
                ...state,
                ...payload
            }
        }
    }
}