import * as React from 'react';

import '../pages/css/posts.css';
import allPosts from '../pages/content/posts.json';

function Posts(){

    return(
        <div className='Post'>
            {allPosts.map(post => {
                return(
                    <div className='post-cont' key={post.title}>
                        <img src={post.image} alt={post.title}/>
                        <div className='post-text'>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <span>{post.date}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}


export default Posts;