import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PostDetails = () => {
    const [post, setPost] = useState({});
    const {id} = useParams();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id).then((res) => {
            return res.json()
        }).then((data) => {
            setPost(data)
        })
    }, [])
  return (
    <div>
        {
            post.id ?
                <div>
                    <Link to={'/'}>Back</Link>
                    <h1>{post.id}</h1>
                    <h1>{post.title}</h1>
                    <h1>{post.id}</h1>
                </div>
            : <></>
        }
    </div>
  )
}

export default PostDetails;