import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Layout from "../../components/Layout/Layout";
import { TbFiles } from "react-icons/tb";
import useCategories from "../../hooks/useCategories";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";

const Categories = () => {
    const [isLoading, categories] = useCategories();
    const navigate = useNavigate();

    const handleCategory = (id) => {
        navigate(`/categories/${id}`);
    };

    return (
        <Layout>
            <Breadcrumb title="Categories" bottomLink="Categories" />
            {isLoading && (
                <div>
                    <Loader text="Loading categories..." />{" "}
                </div>
            )}
            <div className="grid grid-cols-3 gap-6">
                {categories.map((cate) => (
                    <div
                        key={cate.id}
                        className="bg-white rounded p-7 text-center cursor-pointer duration-300 hover:bg-white/50"
                        onClick={() => handleCategory(cate.id)}
                    >
                        <TbFiles className="mx-auto text-[25px] mb-4" />
                        <h2 className="text-[22px] mb-2">{cate.cateName}</h2>
                        <p className="font-medium">Total 03 Posts</p>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Categories;
