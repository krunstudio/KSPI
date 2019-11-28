import * as types from './../types'
import axios from 'axios'
import {ipUrl} from '../../component/url'


export const handleLogin = (username, password) => ({
    type: types.LOGIN,
    payload: axios({
      method: 'POST',
      url: `https://happywork-api.herokuapp.com/api/v2/login`,
      data: {
        username,
        password,
      },
    }),
})