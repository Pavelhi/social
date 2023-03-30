import React from "react"
import ava_min from "./../img/cat.jpeg";
import Post from "./Post/Post.js"

let postsItems = [
    {message: 'Hi, world', id:1},
    {message: 'I`m Elon Mask, really', id:2},
    {message: 'Give me some fish', id:3}
]

function Posts(){
    return(
        <div className='posts'>
            <h2>My posts</h2>
            <input placeholder='enter the post'/>
            <button>Add posts</button>
            {/*<Post message="Hi, world"/>
            <Post message="I'm Elon Mask, really"/>
    <Post message="Give me some fish"/>*/}

    {postsItems.map((e)=><Post message={e.message}/> )}
        </div>
    )
}

export default Posts