import { useState, useEffect } from 'react';
import '../assets/css/componentes/card.css';
import { search } from '../api/api';

const ListPosts = ({url}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        search(url, setPosts);
    }, [url]);

    return (
        <section className='posts container'>

        </section>
    )
};

export default ListPosts;