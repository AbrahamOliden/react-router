import { useState, useEffect } from "react";
import { search } from "../api/api";
import { useParams, Route, Routes, Link, useResolvedPath } from "react-router-dom";
import ListCategories from "../components/ListCategories";
import SubCategory from "./SubCategory";
import ListPosts from "../components/ListPosts";
import '../assets/css/blog.css';

function Category() {
    const [subCategories, setSubCategories] = useState([]);
    const { id } = useParams();
    const url = useResolvedPath("").pathname;

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
            <ul className="category-list container flex" >
                {
                subCategories.map(subcategory => (
                    <li className={`category-list__category category-list__category--${id}`} key={subcategory} >
                        <Link to={`${url}/${subcategory}`} >
                            {subcategory}
                        </Link></li>
                ))
                }
            </ul>
            
            <Routes >
                <Route path="/" element={<ListPosts url={`/posts?categoria=${id}`} />} />
                <Route path="/:subcategoria" element={<SubCategory/>} />
            </Routes>
        </>
    )
};

export default Category;