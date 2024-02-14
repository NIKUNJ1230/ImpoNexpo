import React from 'react'
import "./Category_page.css"
import { Link } from 'react-router-dom'
import cat_1 from "../../../assets/category page/cat-1.svg"
import Single_category_page from './Single_category_page'
function Category_page() {
    const list = ["Shop all Grocery", "EBT/SNAP eligible food", "Exclusively online", "Everyday meals", "Recipes", "Fresh Produce", "Meat & Seafood", "Deli", "Dairy & Eggs", "Bread & Bakery", "Frozen", "Pantry", "Breakfast & Cereal", "Bake Center", "Cookies", "Snacks", "Candy", "Beverages", "Alcohol", "Organic Foods", "Gluten Free Foods", "Food Gifts & Flowers Shop", "Deals"]
    return (
        <div>
            <div className="container">
                <div className="category-page-title">
                    <h2>Browse Departments</h2>
                </div>
                <div className="category-page-categories">
                    <div className="row">
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />

                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />

                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                        <Single_category_page title={"Grocery"} img={cat_1} list={list} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category_page
