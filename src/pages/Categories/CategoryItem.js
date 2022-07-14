import React from "react";
import { TbFiles } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import useCategoryPosts from "../../hooks/useCategoryPosts";

const CategoryItem = ({ cate }) => {
    const navigate = useNavigate();

    const handleCategory = (id) => {
        navigate(`/categories/${id}`);
    };

    const [isLoading, categoryPosts] = useCategoryPosts(cate.id);

    if (categoryPosts.length === 0) return;

    return (
        <div
            className="bg-white rounded p-7 text-center cursor-pointer duration-300 hover:bg-white/50"
            onClick={() => handleCategory(cate.id)}
        >
            <TbFiles className="mx-auto text-[25px] mb-4" />
            <h2 className="text-[22px] mb-2">{cate.cateName}</h2>
            <p className="font-medium">
                Total {categoryPosts?.length ? categoryPosts.length : 0} Posts
            </p>
        </div>
    );
};

export default CategoryItem;
