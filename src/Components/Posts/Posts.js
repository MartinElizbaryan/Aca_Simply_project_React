import React, {useEffect, useState} from 'react';
import axios from "axios";

export default function Posts() {

  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/v1/posts').then(res => {
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <h1>Posts</h1>
    </>
  )
}
