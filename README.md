# Mini Project - Student Management

/login
/admin: layout

/admin/\*

feature: /admin/dashboard
feature: /admin/students

auth/ authentication

- login
- sign up / register
- forgot password

CLICK LOGIN

- Call API to login
- Success => redirect to Admin
- FAILED => show error

LOGIN
LOGOUT

authSaga
LOOP

- if logged in, watch LOGOUT
- else watch LOGIN

LOGIN

- call login API to get token + user info
- set token to localstorage
- redirect to admin page

LOGOUT

- clear token from localstorage
- redirect to login page

authSlice
authSaga

# Different ways to handle navigation in Redux Saga

> 1. Watch redux store and make redirect on component

```js
const function App() {
const loginSuccess = useAppSelector(state => state.auth.loginSuccess)

useEffect(() => {
if (loginSuccess) {
    // redirect to admin page
}
}, [loginSuccess])

// ...
}

```

--> Flow is fragmented, hard to control when you have more and more state.

> 2. Using callbacks

- This approach using non-serializable (callback) in action and dispatch to redux store which is NOT RECOMMENDED BY Redux Toolkit.

```js
const function App() {
const dispatch = useAppDispatch();

const handleLoginSubmit = (values) => {
    dispatch(authActions.login({
    ...values,
    onSuccess: () => history.push('/admin'),
    onError: () => console.log('Notify error to user'),
}))
}

// ...
}

```

> 3. Using connected-react-router

- Sync routings to redux.
- Navigate by dispatching an action to redux store.
- One thing to make sure, when route changes, it doesn't cause re-render our components.
  --> We'll go with this solution for now.

Lib: connected-react-router + custom history

# Reference

This is the reference for this project: https://github.dev/paulnguyen-mn/learn-rtk-saga

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

```

```
