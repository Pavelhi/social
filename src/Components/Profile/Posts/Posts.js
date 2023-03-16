import React from "react"
import ava_min from "./../img/cat.jpeg";
import Post from "./Post/Post.js"

function Posts(){
    return(
        <div className='posts'>
            <h2>My posts</h2>
            <input placeholder='enter the post'/>
            <button>Add posts</button>
            <Post message="Hi, world"/>
            <Post message="I'm Elon Mask, really"/>
            <Post message="Give me some fish"/>
        </div>
    )
}

export default Posts