import { useParams } from "react-router-dom";
import ListPosts from "../components/ListPosts";

function SubCategory() {
    const { subcategoria } = useParams();

    return (
        <ListPosts url={`/posts?subcategoria=${subcategoria}`} />
    );
};

export default SubCategory;