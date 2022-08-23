import React, { useEffect, useState } from 'react';
import Post from './Post';

const List = ({ title, body }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(o => {
                    const newState = [...o, ...data];
                    return newState;
                })
            })
    }, [])


    return (
        <>
        {
            posts.map( (post, index) => (
                <Post key={index} title={post.title} body={post.body} />
            ))
        }
        </>
    )
}

export default List