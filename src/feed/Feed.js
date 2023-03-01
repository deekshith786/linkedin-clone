import React, { useEffect, useState } from 'react';
import '../feed/Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from '../inputOption/InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from '../post/Post';
import { db } from '../config/firebase';
import firebase from 'firebase/compat/app';
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";

function Feed() {

  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);
  
  useEffect(()=>{
    let cities = [];
    const q = query(collection(db, "posts"), orderBy("timestamp","desc"))
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
          cities.push(doc.data());
        });
        setPosts(cities); 
    });        
  },[posts])

  const sendPost = (e) => {
    /**to prevent refresh when click enter */
    e.preventDefault();

    db.collection('posts').add({
      name: "Deekshith",
      description: 'this is despppp',
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDayIcon} title="article" color="#7FC15E" />
        </div>
      </div>
      
      {
        posts.map((item, i) => {
          return(
          <Post
            key={i}
            name={item.name}
            description={item.description}
            message={item.message}
            photoUrl={item.photoUrl}
          />
          )
        })
      }
    </div>
  )
}

export default Feed
