// Sidebar.js
import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import AccordionMenu from "./AccordionMenu";
import "./index.css";
// import InputRange from "react-input-range";
// import "react-input-range/lib/css/index.css";

const Sidebar = () => {
  // const categoryMenu = [
  //   "Mobile Accessory",
  //   "Electronics",
  //   "Smartphone",
  //   "Modren tech",
  //   "Laptop",
  //   "Computer",
  // ];

  // category 
  const [categoryMenu, setCategoryMenu] = useState([])

  const handleCategory = async () => {
    try {
      const response = await fetch("http://localhost:3000/Admin/Find/Categories");

      if (response.status === 200 || response.ok) {
        const responseData = await response.json();
        const categoryNames = responseData.Category.map(category => category.name);
        const uniqueCategoryNames = Array.from(new Set(categoryNames)); // Remove duplicates
        setCategoryMenu(uniqueCategoryNames);
      }
      else {
        console.log(response?.message || "Something Went Wrong")
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    handleCategory()
  }, [])



  const Ratings = [
    <div className="d-flex align-items-center">
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
          fill="#FF9017"
        />
      </svg>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
          fill="#FF9017"
        />
      </svg>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
          fill="#FF9017"
        />
      </svg>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
          fill="#FF9017"
        />
      </svg>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
          fill="#FF9017"
        />
      </svg>
    </div>,
    <div className="d-flex align-items-center">
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
          fill="#FF9017"
        />
      </svg>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
          fill="#FF9017"
        />
      </svg>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
          fill="#FF9017"
        />
      </svg>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
          fill="#FF9017"
        />
      </svg>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.70039 15.3882L15.4478 18.9219L13.9226 12.2619L19.0004 7.78082L12.3137 7.20293L9.70039 0.921875L7.08709 7.20293L0.400391 7.78082L5.47819 12.2619L3.95299 18.9219L9.70039 15.3882Z"
          fill="#BDC4CD"
        />
      </svg>
    </div>,
    <div className="d-flex align-items-center">
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
          fill="#FF9017"
        />
      </svg>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
          fill="#FF9017"
        />
      </svg>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
          fill="#FF9017"
        />
      </svg>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.70039 15.3882L15.4478 18.9219L13.9226 12.2619L19.0004 7.78082L12.3137 7.20293L9.70039 0.921875L7.08709 7.20293L0.400391 7.78082L5.47819 12.2619L3.95299 18.9219L9.70039 15.3882Z"
          fill="#BDC4CD"
        />
      </svg>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.70039 15.3882L15.4478 18.9219L13.9226 12.2619L19.0004 7.78082L12.3137 7.20293L9.70039 0.921875L7.08709 7.20293L0.400391 7.78082L5.47819 12.2619L3.95299 18.9219L9.70039 15.3882Z"
          fill="#BDC4CD"
        />
      </svg>
    </div>,
    <div className="d-flex align-items-center">
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
          fill="#FF9017"
        />
      </svg>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
          fill="#FF9017"
        />
      </svg>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.70039 15.3882L15.4478 18.9219L13.9226 12.2619L19.0004 7.78082L12.3137 7.20293L9.70039 0.921875L7.08709 7.20293L0.400391 7.78082L5.47819 12.2619L3.95299 18.9219L9.70039 15.3882Z"
          fill="#BDC4CD"
        />
      </svg>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.70039 15.3882L15.4478 18.9219L13.9226 12.2619L19.0004 7.78082L12.3137 7.20293L9.70039 0.921875L7.08709 7.20293L0.400391 7.78082L5.47819 12.2619L3.95299 18.9219L9.70039 15.3882Z"
          fill="#BDC4CD"
        />
      </svg>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.70039 15.3882L15.4478 18.9219L13.9226 12.2619L19.0004 7.78082L12.3137 7.20293L9.70039 0.921875L7.08709 7.20293L0.400391 7.78082L5.47819 12.2619L3.95299 18.9219L9.70039 15.3882Z"
          fill="#BDC4CD"
        />
      </svg>
    </div>,
  ];
  const Brands = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"];
  const Country = ["China", "United States", "Canada", "India", "Nigeria"];
  const Condition = ["Any", "Refurbished", "Brand new", "Old items"];
  const Exporter = [
    "Manufacturer",
    "Supplier",
    "Distributor",
    "Brands",
    "Personal",
  ];
  const Management_Certification = [
    "ISO 9001",
    "ISO 14001",
    "BCI",
    "ISO 9000",
    "Lenovo",
  ];
  const Product_Certification = [
    "CE",
    "ROHS",
    "OEKO-TEX-STA",
    "GRS",
    "RCS",
    "CPS",
    "BCI",
    "FSC",
  ];
  const Price_range = [
    // <InputRange
    //   maxValue={20}
    //   minValue={0}
    //   value={{ min: 2, max: 10 }}
    //   onChange={(e) => {
    //     console.log(e);
    //   }}
    // />
    ,
    <div className="main-box">
      <div>
        <label htmlFor="">Min</label>
        <br />
        <input type="text" placeholder="0" />
      </div>
      <div>
        <label htmlFor="">Max</label>
        <br />
        <input type="text" placeholder="999999" />
      </div>
    </div>,
  ];
  const Min_Order = [
    <div className="min_order">
      <input type="text" placeholder="Less than" />
    </div>,
  ];
  return (
    <div>
      <AccordionMenu
        menuList={categoryMenu}
        isShowmore
        menuTitle={"Category"}
      />
      <AccordionMenu
        menuList={Brands}
        isShowmore
        menuTitle={"Brands"}
        isShowCheckbox
      />
      <AccordionMenu
        menuList={Country}
        isShowmore
        menuTitle={"Country of Origin"}
        isShowCheckbox
      />
      <AccordionMenu menuList={Price_range} menuTitle={"Price range"} />
      <AccordionMenu menuList={Min_Order} menuTitle={"Min.Order"} />
      <AccordionMenu
        menuList={Condition}
        menuTitle={"Condition"}
        isShowCheckbox
        chekcType="radio"
      />
      <AccordionMenu
        menuList={Exporter}
        isShowmore
        menuTitle={"Exporter  Type"}
        isShowCheckbox
      />
      <AccordionMenu
        menuList={Management_Certification}
        isShowmore
        menuTitle={"Management Certification"}
        isShowCheckbox
      />
      <AccordionMenu
        menuList={Product_Certification}
        isShowmore
        menuTitle={"Product Certification"}
        isShowCheckbox
      />
      <AccordionMenu
        menuList={Ratings}
        menuTitle={"Ratings"}
        isShowCheckbox
        chekcType="checkbox"
      />
    </div>
  );
};

export default Sidebar;
