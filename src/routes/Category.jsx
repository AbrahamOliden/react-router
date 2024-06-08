import { useState, useEffect } from "react";
import { search } from "../api/api";
import { useParams } from "react-router-dom";
import ListCategories from "../components/ListCategories";
import ListPosts from "../components/ListPosts";
import '../assets/css/blog.css';

function Category() {
    const { id } = useParams();
    return (
        <>
            <div className="container">
                <h2 className="title-page">Pet news</h2>
            </div>
            <ListCategories />
            <ListPosts url={`/posts?categoria=${id}`} />
        </>
    )
};

export default Category;