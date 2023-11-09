import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { PostData } from './damyData';

type State = {
  posts: {
    value: PostData[]
  }
}

function App() {
  const postList = useSelector((state: State) => state.posts.value);

  console.log(postList)
  return (
    <div className="App">

    </div>
  );
}

export default App;
