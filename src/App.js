import React from 'react';
import PostForm from './components/PostForm'
import AllPost from './components/AllPost'
import store from './store'
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="navbar">
          <h2 className="center ">Post It</h2>
        </div>
        <PostForm />
        <AllPost />
      </div>
    </Provider>
  );
}

export default App;
