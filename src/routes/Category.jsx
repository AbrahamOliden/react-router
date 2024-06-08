import { useState, useEffect } from "react";
import { search } from "../api/api";
import ListCategories from "../components/ListCategories";
import '../assets/css/blog.css';

function Category() {
    return (
        <>
            <div className="container">
                <h2 className="title-page">Pet news</h2>
            </div>
            < ListCategories />
        </>
    )
};

export default Category;