import { useState, useEffect } from "react";
import { search } from "../api/api";
import { useParams, Route, Routes } from "react-router-dom";
import ListCategories from "../components/ListCategories";
import ListPosts from "../components/ListPosts";
import '../assets/css/blog.css';

function Category() {
    const [subCategories, setSubCategories] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        search(`/categorias?id=${id}`,(response) => {
            setSubCategories(response[0].subcategorias);
        }); 
    }, [id]);
    return (
        <>
            <div className="container">
                <h2 className="title-page">Pet news</h2>
            </div>
            <ListCategories />
            <Routes >
                <Route path="/" element={<ListPosts url={`/posts?categoria=${id}`} />} />
            </Routes>
            
        </>
    )
};

export default Category;