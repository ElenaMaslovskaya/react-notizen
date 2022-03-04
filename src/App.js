import React, { useState } from "react";
import PostList from "./components/PostList";
import './styles/App.css';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' }
  ]);

  const [title, setTitle] = useState('');
  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
  };

  return (
    <div className="App">
      <form>
        <MyInput
        value={title} 
        type="text" 
        placeholder="Название поста" 
        onChange={(e => setTitle(e.target.value))}
        />
        <MyInput type="text" placeholder="Описание поста" />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={'Посты про JS'} />
    </div>
  );
}

export default App;
