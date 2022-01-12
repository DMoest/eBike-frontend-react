import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authToken: null,
  },
  reducers: {
    login: (state) => {
      // // Todo: Async call to api and uppdate state with user or appropriate error.
      // fetch('http://localhost:8000/oauth/authorize?client_id=3&response_type=code&redirect_uri=http://localhost:3000&scope=user&state=statestatestatestatestatestatestatestate')
      //   .then(response => response.json())
      //   .then(data => this.setState({ totalReactPackages: data.total }));
      window.location.href = 'http://localhost:8000/login/webb/github';
      },
    register: (state) => {
        // Todo: Async call to api to register new user and update state accordingly.
        window.location.href = 'http://localhost:8000/login/webb/github';
    },
    logout: (state) => {
      // Todo: Async call to api?
      state.authToken = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, register, logout } = authSlice.actions

export default authSlice.reducer
