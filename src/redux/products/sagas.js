import { call, put, takeLatest, spawn } from 'redux-saga/effects'

import {setProducts, productsRequest, productsSuccess, productsError } from '../products/reducer'
import fetchCollectionsAxios from '../../api/fetchStore'


function* onSetProducts(){
    try{
        yield put(productsRequest())
        const data = yield call(fetchCollectionsAxios)
        yield put(productsSuccess(data))
    }catch(e){
        yield put(productsError(e.message))
    }
}

function* listenActions(){
    yield takeLatest(setProducts, onSetProducts)
}

function* productsSaga(){
    yield spawn(listenActions)
}

export default productsSaga;