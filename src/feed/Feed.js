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
// import { doc, onSnapshot, collection, query, where } from "firebase/firestore";

// import { doc, getDoc } from "firebase/firestore";

// import firebase from 'firebase';
import { collection, query, where, onSnapshot } from "firebase/firestore";



function Feed() {

    const [input, setInput] = useState('');

    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     const q = query(collection(db, "buddies"))
    //     const unsub = onSnapshot(q, (querySnapshot) => {
    //       console.log("Data", querySnapshot.docs.map(d => doc.data()));
    //     });
    //   }, [])

    //   useEffect(() => {
    //     const q = query(collection(db, "posts"))
    //     const unsub = onSnapshot(q, (querySnapshot) => {
    //       console.log("Data", querySnapshot.docs.map(d => doc.data()));
    //     });
    //   }, [])

    // db.collection("cities").where("state", "==", "CA")
    // .onSnapshot((querySnapshot) => {
    //     var cities = [];
    //     querySnapshot.forEach((doc) => {
    //         cities.push(doc.data().name);
    //     });
    //     console.log("Current cities in CA: ", cities.join(", "));
    // });


    // const q = query(collection(db, "cities"), where("state", "==", "CA"));
    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //   const cities = [];
    //   querySnapshot.forEach((doc) => {
    //       cities.push(doc.data().name);
    //   });
    //   console.log("Current cities in CA: ", cities.join(", "));
    // });

    const q = query(collection(db, "posts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        

    const cities = [];
    querySnapshot.forEach((doc) => {
        // setPosts(doc.map((item) => ({
        //     id: item.id,
        //     data: item.data(),
        // })))
            console.log("Current cities in CA: ", doc.data());

    });
    // console.log("Current cities in CA: ", posts);
    });

    // useEffect(() => {
    //     db.collection("posts").onSnapShot((snapshot) => (
    //         setPosts(snapshot.docs.map((doc) => ({
    //                 id: doc.id,
    //                 data: doc.data(),
    //             }))
    //         )
    //     )
    //     );
    // }, []);

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

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
        />
      ))}
    </div>
  )
}

export default Feed
