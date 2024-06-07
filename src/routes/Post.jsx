import { useState } from 'react';
import '../assets/css/componentes/card.css';

function Post({ url }) {

    const [post, setPost] = useState([]);

    return (
        <main className='container flex flex--center' >
            <article className='card post' >
                <h2 className='post-card__title' >{post.title}</h2>
                <p className='text__card' >{post.body}</p>
            </article>
        </main>
    );
};

export default Post;