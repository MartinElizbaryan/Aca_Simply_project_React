import React, {useEffect, useState} from 'react'

function x() {
  console.log("awds")
}

export default function Home() {
  const [post, setPost] = useState({name: "", })

  return (
    <>
      <h1>Posts Create</h1>

      <input type="text" placeholder="name" onChange={x}/>
      <input type="text" placeholder="address"/>

      <br/><br/>

      <textarea placeholder="description" cols="30" rows="10"></textarea>

      <br/><br/>

      <input type="file" />
    </>
  )
}
