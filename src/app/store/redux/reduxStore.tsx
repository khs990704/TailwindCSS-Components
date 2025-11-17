import createSagaMiddleware from 'redux-saga'
import { configureStore, Tuple } from '@reduxjs/toolkit'
import { all } from 'redux-saga/effects'
import { routerSaga, routerSlice } from 'src/app/router/routerReducer.tsx'
import { themeSlice } from 'src/shared/components/theme/themeReducer.tsx'
// import { chatSlice, chatSaga } from 'src/features/chat/chatReducer.tsx'
// import {
//     fileSaga,
//     fileSlice,
// } from 'src/features/chat/components/file/fileReducer.tsx'

const reducers = {
    // routerReducer: routerSlice.reducer,
    // themeReducer: themeSlice.reducer,
    // chatReducer: chatSlice.reducer,
    // fileReducer: fileSlice.reducer,
}

export function* rootSaga() {
    // yield all([routerSaga(), chatSaga(), fileSaga()])
}

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: reducers,
    middleware: () => new Tuple(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production', //보여지는지 여부
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

sagaMiddleware.run(rootSaga)
export default store
