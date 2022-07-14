import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Layout from "../../components/Layout/Layout";
import useCategories from "../../hooks/useCategories";
import Loader from "../../components/Loader/Loader";
import CategoryItem from "./CategoryItem";

const Categories = () => {
    const [isLoading, categories] = useCategories();

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
                    <CategoryItem key={cate.id} cate={cate} />
                ))}
            </div>
        </Layout>
    );
};

export default Categories;
