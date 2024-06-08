import { search } from "../api/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../assets/css/blog.css';

function ListCategories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        search('/categorias', setCategories)
    }, []);

    return (
        <ul className="category-list container flex">
            {
            categories.map(category => {
                <Link to={`/category/${category.id}`} key={category.id} >
                    <li className={`category-list__category category-list__category--${category.id}`} >
                        {category.nombre}
                    </li>
                </Link>
            })
            }
        </ul>
    );
};

export default ListCategories;