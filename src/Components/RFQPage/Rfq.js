import React, { useEffect, useState } from 'react';
import check from "../../assets/images/check.png"
import Topbar from '../Topbar/Topbar'
import Navbar from '../Navbar/Navbar'
// import Footer from '../Footer/Footer'

export default function Rfq() {
    const [formData, setFormData] = useState({
        ProductName: '',
        ProductCategory: '',
        SourcingType: '',
        ProductDescription: '',
        UploadProductImage: '',
        Quantity: 0,
        QuantityUnit: '',
        MaxBudget: 0,
        MaxBudgetUnit: '',
        TradeTerms: '',
        ShippingMethod: '',
        LeadTime: '',
        Destination: '',
        PaymentMethod: '',
        FullName: '',
        MobileNumber: '',
        CompanyName: '',
        Email: '',
        Website: '',

        ReferredByAffiliate: false // Assuming it's a boolean value, change as per requirement
        // Add other fields here
    });
    const [progress, setProgress] = useState(0);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Calculate progress based on filled fields
        const filledFields = Object.values(formData).filter(val => val !== '').length;
        const totalFields = Object.keys(formData).length;
        const newProgress = (filledFields / totalFields) * 100;
        var roundedProgress = parseInt(newProgress);
        setProgress(roundedProgress);
    };
    
    useEffect(() => {
        // Update progress bar percentage when formData changes
    }, [formData]);

    // const handleCheckboxChange = (e) => {
    //     const { name, checked } = e.target;
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [name]: checked
    //     }));
    // };

    useEffect(() => {
        
    })
    return (
        <>
            <Topbar />
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 my-5 fw-bold">
                        <h2 className='fw-bold'>Request for Quotations- RFQ</h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid px-5" style={{ backgroundColor: "#F7F7F7", height: "500px" }}>
                <div className="row">
                    <div className="col-9 border bgWhite">
                        <form>
                            <div className="row">
                                <div className="col-12 p-0" style={{ backgroundColor: "#1D5DC7" }}>
                                    <h4 className='fw-bolder text-center p-0 pt-3 pb-1 colorWhite'>BASIC PRODUCT INFORMATION</h4>
                                </div>
                                <div className="col-12 p-3 pt-5">
                                    <div className="row my-2">
                                        <div className="col-12 mx-5 ">
                                            <div className="my-1">Product Name <span className='colorRed'>*</span></div>
                                            <div className=""><input type="text" name="ProductName" id="" value={formData.ProductName} onChange={handleChange} placeholder='Product Name' className='border inputBlue w-75 py-3 px-4 rounded-5 fs-small' /></div>
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-12 mx-5 ">
                                            <div className="my-1">Product category</div>
                                            <div className=""><input type="text" name="ProductCategory" id="" value={formData.ProductCategory} onChange={handleChange} placeholder='Product Category' className='border inputBlue w-75 py-3 px-4 rounded-5 fs-small' /></div>
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-12 mx-5 ">
                                            <div className="my-1">Sourcing Type</div>
                                            <div className=""><input type="text" name="SourcingType" id=""  value={formData.SourcingType} onChange={handleChange} placeholder='Sourcing Type' className='border inputBlue w-75 py-3 px-4 rounded-5 fs-small' /></div>
                                        </div>
                                    </div>
                                    <div className="row my-4">
                                        <div className="col-12 mx-5 ">
                                            <div className=""><textarea name="ProductDescription" id=""   value={formData.ProductDescription} onChange={handleChange}  className='border inputBlue w-75 py-2 px-4 rounded-5 fs-small' rows="10" cols="50" /></div>
                                        </div>
                                    </div>
                                    <div className="row my-4">  
                                        <div className="col-12 mx-5 ">
                                            <div className=""><input type="file" id="uploadFile" className="custom-file-input" name='UploadProductImage'  value={formData.UploadProductImage} onChange={handleChange} />
                                                <label htmlFor="uploadFile" className="custom-file-label">Upload Product Image</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row my-4 mx-5">
                                        <div className="col-6 ">
                                            <div className="row p-0 m-0">
                                                <div className="col-7  m-0 p-0"><input type="number" className=' w-100 inputBlue py-2 border-0 rounded-start-4 ps-3' placeholder='Enter quantity' name='Quantity'  min="1"  value={formData.Quantity} onChange={handleChange}  /></div>
                                                <div className="col-5  m-0 p-0 ">
                                                    <select   className='w-100 py-2 rounded-end-4 text-center colorWhite' style={{ backgroundColor: "#537FFF" }} name='QuantityUnit'  value={formData.QuantityUnit} onChange={handleChange}>
                                                        <option value="$">Units-($)</option>
                                                        <option value="Rs">Units - Rs</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 ">
                                            <div className="row p-0 m-0">
                                                <div className="col-9  m-0 p-0"><input type="number" className=' w-100 inputBlue py-2 border-0 rounded-start-4 ps-3' placeholder='Max Budget' name='MaxBudget' min="1" value={formData.MaxBudget} onChange={handleChange}/></div>
                                                <div className="col-3  m-0 p-0 ">
                                                    <select id="cars" className='w-100 py-2 rounded-end-4 text-center colorWhite' style={{ backgroundColor: "#537FFF" }} name='MaxBudgetUnit'  value={formData.MaxBudgetUnit} onChange={handleChange}>
                                                        <option value="$">$</option>
                                                        <option value="Rs">Units - Rs</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-12 mx-5 ">
                                            <div className="my-1">Trade Terms <span className='colorRed'>*</span></div>
                                            <div className=""><input type="text" id="" placeholder='Select Trade Terms' className='border inputBlue w-75 py-3 px-4 rounded-5 fs-small'  name='TradeTerms'  value={formData.TradeTerms} onChange={handleChange}/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 p-0 my-5" style={{ backgroundColor: "#1D5DC7" }}>
                                    <h4 className='fw-bolder text-center p-0 pt-3 pb-1 colorWhite'>SHIPPING AND PAYMENT</h4>
                                </div>
                                <div className="col-12 p-3 ">
                                    <div className="row my-2">
                                        <div className="col-12 mx-5 ">
                                            <div className="my-1">Shipping Method <span className='colorRed'>*</span></div>
                                            <div className=""> <select id="cars" className='w-75 py-3 rounded-5 border-0 px-4 fs-small inputBlue' name='ShippingMethod' value={formData.ShippingMethod} onChange={handleChange}>
                                                <option value="">Select Shipping Method</option>
                                                <option value="in">India</option>
                                            </select></div>
                                        </div>
                                    </div>
                                    <div className="row my-4">
                                            <div className="">Lead time <span className='fw-bold mx-4'>Ship in</span> <input type="number"  id="" className='me-5 ms-3' style={{ borderRadius: "1px solid black", width: "50px" }} min="1" name='LeadTime' value={formData.LeadTime} onChange={handleChange}/> Day(s) after Supplier receives the Initial Payment.</div>
                                        <div className="col-12 mx-5 ">
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-12 mx-5 ">
                                            <div className="my-1">Destination <span className='colorRed'>*</span></div>
                                            <div className="">
                                                <select id="cars" className='w-75 py-3 rounded-5 border-0 px-4 fs-small inputBlue' name='Destination' value={formData.Destination} onChange={handleChange}>
                                                    <option value="">Select Country</option>
                                                    <option value="in">India</option>
                                                </select></div>
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col-12 mx-5 ">
                                            <div className="my-1">Payment Method <span className='colorRed'>*</span></div>
                                            <div className="">
                                                <select id="cars" className='w-75 py-3 rounded-5 border-0 px-4 fs-small inputBlue' name='PaymentMethod' value={formData.PaymentMethod} onChange={handleChange} >
                                                    <option value="">Select your preferred Payment Method</option>
                                                    <option value="Gpay">G Pay</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 p-0 my-5" style={{ backgroundColor: "#1D5DC7" }}>
                                    <h4 className='fw-bolder text-center p-0 pt-3 pb-1 colorWhite'>PERSONAL/COMPANY DETAILS</h4>
                                </div>
                                <div className="row my-2">
                                    <div className="col-12 mx-5 ">
                                        <div className="my-1">Full name <span className='colorRed'>*</span></div>
                                        <div className=""><input type="text"  id="" placeholder='Full Name' className='border-0 inputBlue w-75 py-3 px-4 rounded-5 fs-small' name='FullName' value={formData.FullName} onChange={handleChange}/></div>
                                    </div>
                                </div>
                                <div className="row my-2 mx-5">
                                    <div className="col-5">
                                        <div className="my-1">**Mobile Number <span className='colorRed'>*</span></div>
                                        <div className="inputBlue py-2 rounded-5"><span style={{ width: "50px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <input type="number"  id="" placeholder='Mobile Number' className='border-0  w-50 py-2 px-4 rounded-2 fs-small' name='MobileNumber' value={formData.MobileNumber} onChange={handleChange}/></div>
                                    </div>
                                    <div className="col-5">
                                        <div className="my-1">Company Name <span className='colorRed'>*</span></div>
                                        <div className=""><input type="text" id="" placeholder='Company Name (if any)' className='border-0 inputBlue w-75 py-3 px-4 rounded-5 fs-small' name='CompanyName' value={formData.CompanyName} onChange={handleChange} /></div>
                                    </div>
                                </div>
                                <div className="row my-2 mx-5">
                                    <div className="col-8 ">
                                        <div className="my-1">**Email</div>
                                        <div className=""><input type="email" id="" placeholder='**Email' className='border-0 inputBlue w-100 py-3 px-4 rounded-3 fs-small' name='Email' value={formData.Email} onChange={handleChange}/></div>
                                    </div>
                                    <div className="col-4 pt-2">
                                        <div className="mt-4"><button className='btn py-3 colorWhite px-5' style={{ backgroundColor: "#1D5DC7" }}>Please verify your email</button></div>
                                    </div>
                                    <div className="col-9 my-4 text-center">Manufacturers, Brands and Suppliers want to work with Verified Buyers.</div>
                                </div>
                                <div className="row my-2">
                                    <div className="col-12 mx-5 ">
                                        <div className=""><input type="text" id="" placeholder='Website (if any)' className='border-0 inputBlue w-75 py-3 px-4 rounded-5 fs-small' name='Website' value={formData.Website} onChange={handleChange}/></div>
                                    </div>
                                    <div className="col-9 my-4 text-center fw-bold">Were you referred by our Affiliate Partner? <span className='ms-4'><button className='btn px-3 py-1 colorWhite' style={{ backgroundColor: "#537FFF" }} onClick={(e)=>e.preventDefault()}>No</button></span></div>
                                </div>
                                <div className="row my-2 mx-5">
                                    <div className="col-9 mt-4 ps-5">By registering, you agree to our <span className='fw-bolder text-decoration-underline' style={{ color: "#4CB5F1" }}>Terms and Conditions</span>& <span className='fw-bolder text-decoration-underline' style={{ color: "#4CB5F1" }}>Terms and Conditions</span> Privacy Policies</div>
                                    <div className="col-9 ps-5">And you agree to share your Business Card with our Trusted, Reliable and Certified Suppliers</div>
                                </div>
                                <div className="row my-5 mx-5">
                                    <div className="col-11 d-flex justify-content-center">
                                        <div className="row">
                                            <span><button className='btn border colorWhite py-4 px-5 rounded-4' style={{ backgroundColor: "#1D5DC7" }} onClick={(e)=>e.preventDefault()}>Post Buy Requirement</button></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-3 border" >
                        <div className="row  ">
                            <div className="col-10 ms-auto me-auto my-5 border rounded-5 px-4" style={{ backgroundColor: "#BCEBFA" }}>
                                <h4 className='fw-bold mt-3'>RFQ Score</h4>
                                <div className="">
                                    <p style={{ lineHeight: "20px", fontWeight: 500 }}>Provide as much details as possible about your request to ensure faster response from the right suppliers. The higher the score the better responses you will get.</p>
                                </div>
                                <div className="mainSideContent">
                                    <h1 style={{ color: "#FF8888" }}>{progress}%</h1>
                                </div>
                                <div className="row pb-3">
                                    <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Product Name </div>
                                    <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Product Category </div>
                                    <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> About Your Product </div>
                                    <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Sourcing Type </div>
                                    <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Quantity </div>
                                    <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Max Budget </div>
                                    <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Trade Terms </div>
                                    <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Shiping Method </div>
                                    <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Destination </div>
                                    <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Lead Time </div>
                                    <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> PaymentMethod </div>
                                    <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Full Name </div>
                                    <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Company Name </div>
                                    <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Mobile Number </div>
                                    <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Email </div>
                                    <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Website </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}








// import React, { useEffect, useState } from 'react';
// import check from "../../assets/images/check.png"
// import Topbar from '../Topbar/Topbar'
// import Navbar from '../Navbar/Navbar'
// // import Footer from '../Footer/Footer'

// export default function Rfq() {
//     const [formData, setFormData] = useState({
//         ProductName: '',
//         ProductCategory: '',
//         SourcingType: '',
//         ProductDescription: '',
//         UploadProductImage: '',
//         Quantity: 0,
//         QuantityUnit: '',
//         MaxBudget: 0,
//         MaxBudgetUnit: '',
//         TradeTerms: '',
//         ShippingMethod: '',
//         LeadTime: '',
//         Destination: '',
//         PaymentMethod: '',
//         FullName: '',
//         MobileNumber: '',
//         CompanyName: '',
//         Email: '',
//         Website: '',

//         ReferredByAffiliate: false // Assuming it's a boolean value, change as per requirement
//         // Add other fields here
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         console.log(`${name}: ${value}`);
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleCheckboxChange = (e) => {
//         const { name, checked } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: checked
//         }));
//     };

//     useEffect(() => {
        
//     })
//     return (
//         <>
//             <Topbar />
//             <Navbar />
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12 my-5 fw-bold">
//                         <h2 className='fw-bold'>Request for Quotations- RFQ</h2>
//                     </div>
//                 </div>
//             </div>
//             <div className="container-fluid px-5" style={{ backgroundColor: "#F7F7F7", height: "500px" }}>
//                 <div className="row">
//                     <div className="col-9 border bgWhite">
//                         <form>
//                             <div className="row">
//                                 <div className="col-12 p-0" style={{ backgroundColor: "#1D5DC7" }}>
//                                     <h4 className='fw-bolder text-center p-0 pt-3 pb-1 colorWhite'>BASIC PRODUCT INFORMATION</h4>
//                                 </div>
//                                 <div className="col-12 p-3 pt-5">
//                                     <div className="row my-2">
//                                         <div className="col-12 mx-5 ">
//                                             <div className="my-1">Product Name <span className='colorRed'>*</span></div>
//                                             <div className=""><input type="text" name="ProductName" id="" value={formData.ProductName} onChange={handleChange} placeholder='Product Name' className='border inputBlue w-75 py-3 px-4 rounded-5 fs-small' /></div>
//                                         </div>
//                                     </div>
//                                     <div className="row my-2">
//                                         <div className="col-12 mx-5 ">
//                                             <div className="my-1">Product category</div>
//                                             <div className=""><input type="text" name="ProductCategory" id="" value={formData.ProductCategory} onChange={handleChange} placeholder='Product Category' className='border inputBlue w-75 py-3 px-4 rounded-5 fs-small' /></div>
//                                         </div>
//                                     </div>
//                                     <div className="row my-2">
//                                         <div className="col-12 mx-5 ">
//                                             <div className="my-1">Sourcing Type</div>
//                                             <div className=""><input type="text" name="SourcingType" id=""  value={formData.SourcingType} onChange={handleChange} placeholder='Sourcing Type' className='border inputBlue w-75 py-3 px-4 rounded-5 fs-small' /></div>
//                                         </div>
//                                     </div>
//                                     <div className="row my-4">
//                                         <div className="col-12 mx-5 ">
//                                             <div className=""><textarea name="ProductDescription" id=""   value={formData.ProductDescription} onChange={handleChange}  className='border inputBlue w-75 py-2 px-4 rounded-5 fs-small' rows="10" cols="50" /></div>
//                                         </div>
//                                     </div>
//                                     <div className="row my-4">
//                                         <div className="col-12 mx-5 ">
//                                             <div className=""><input type="file" id="uploadFile" className="custom-file-input" name='UploadProductImage'  value={formData.UploadProductImage} onChange={handleChange} />
//                                                 <label htmlFor="uploadFile" className="custom-file-label">Upload Product Image</label>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="row my-4 mx-5">
//                                         <div className="col-6 ">
//                                             <div className="row p-0 m-0">
//                                                 <div className="col-7  m-0 p-0"><input type="number" className=' w-100 inputBlue py-2 border-0 rounded-start-4 ps-3' placeholder='Enter quantity' name='Quantity'  value={formData.Quantity} onChange={handleChange}  /></div>
//                                                 <div className="col-5  m-0 p-0 ">
//                                                     <select   className='w-100 py-2 rounded-end-4 text-center colorWhite' style={{ backgroundColor: "#537FFF" }} name='QuantityUnit'  value={formData.QuantityUnit} onChange={handleChange}>
//                                                         <option value="$">Units-($)</option>
//                                                         <option value="Rs">Units - Rs</option>
//                                                     </select>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="col-6 ">
//                                             <div className="row p-0 m-0">
//                                                 <div className="col-9  m-0 p-0"><input type="number" className=' w-100 inputBlue py-2 border-0 rounded-start-4 ps-3' placeholder='Max Budget' name='MaxBudget'  value={formData.MaxBudget} onChange={handleChange}/></div>
//                                                 <div className="col-3  m-0 p-0 ">
//                                                     <select id="cars" className='w-100 py-2 rounded-end-4 text-center colorWhite' style={{ backgroundColor: "#537FFF" }} name='MaxBudgetUnit'  value={formData.MaxBudgetUnit} onChange={handleChange}>
//                                                         <option value="$">$</option>
//                                                         <option value="Rs">Units - Rs</option>
//                                                     </select>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="row my-2">
//                                         <div className="col-12 mx-5 ">
//                                             <div className="my-1">Trade Terms <span className='colorRed'>*</span></div>
//                                             <div className=""><input type="text" id="" placeholder='Select Trade Terms' className='border inputBlue w-75 py-3 px-4 rounded-5 fs-small'  name='TradeTerms'  value={formData.TradeTerms} onChange={handleChange}/></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-12 p-0 my-5" style={{ backgroundColor: "#1D5DC7" }}>
//                                     <h4 className='fw-bolder text-center p-0 pt-3 pb-1 colorWhite'>SHIPPING AND PAYMENT</h4>
//                                 </div>
//                                 <div className="col-12 p-3 ">
//                                     <div className="row my-2">
//                                         <div className="col-12 mx-5 ">
//                                             <div className="my-1">Shipping Method <span className='colorRed'>*</span></div>
//                                             <div className=""> <select id="cars" className='w-75 py-3 rounded-5 border-0 px-4 fs-small inputBlue' name='ShippingMethod' value={formData.ShippingMethod} onChange={handleChange}>
//                                                 <option value="">Select Shipping Method</option>
//                                                 <option value="in">India</option>
//                                             </select></div>
//                                         </div>
//                                     </div>
//                                     <div className="row my-4">
//                                             <div className="">Lead time <span className='fw-bold mx-4'>Ship in</span> <input type="number"  id="" className='me-5 ms-3' style={{ borderRadius: "1px solid black", width: "50px" }} name='LeadTime' value={formData.LeadTime} onChange={handleChange}/> Day(s) after Supplier receives the Initial Payment.</div>
//                                         <div className="col-12 mx-5 ">
//                                         </div>
//                                     </div>
//                                     <div className="row my-2">
//                                         <div className="col-12 mx-5 ">
//                                             <div className="my-1">Destination <span className='colorRed'>*</span></div>
//                                             <div className="">
//                                                 <select id="cars" className='w-75 py-3 rounded-5 border-0 px-4 fs-small inputBlue' name='Destination' value={formData.Destination} onChange={handleChange}>
//                                                     <option value="">Select Country</option>
//                                                     <option value="in">India</option>
//                                                 </select></div>
//                                         </div>
//                                     </div>
//                                     <div className="row my-2">
//                                         <div className="col-12 mx-5 ">
//                                             <div className="my-1">Payment Method <span className='colorRed'>*</span></div>
//                                             <div className="">
//                                                 <select id="cars" className='w-75 py-3 rounded-5 border-0 px-4 fs-small inputBlue' name='PaymentMethod' value={formData.PaymentMethod} onChange={handleChange} >
//                                                     <option value="">Select your preferred Payment Method</option>
//                                                     <option value="Gpay">G Pay</option>
//                                                 </select>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-12 p-0 my-5" style={{ backgroundColor: "#1D5DC7" }}>
//                                     <h4 className='fw-bolder text-center p-0 pt-3 pb-1 colorWhite'>PERSONAL/COMPANY DETAILS</h4>
//                                 </div>
//                                 <div className="row my-2">
//                                     <div className="col-12 mx-5 ">
//                                         <div className="my-1">Full name <span className='colorRed'>*</span></div>
//                                         <div className=""><input type="text"  id="" placeholder='Full Name' className='border-0 inputBlue w-75 py-3 px-4 rounded-5 fs-small' name='FullName' value={formData.FullName} onChange={handleChange}/></div>
//                                     </div>
//                                 </div>
//                                 <div className="row my-2 mx-5">
//                                     <div className="col-5">
//                                         <div className="my-1">**Mobile Number <span className='colorRed'>*</span></div>
//                                         <div className="inputBlue py-2 rounded-5"><span style={{ width: "50px" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <input type="number"  id="" placeholder='Mobile Number' className='border-0  w-50 py-2 px-4 rounded-2 fs-small' name='MobileNumber' value={formData.MobileNumber} onChange={handleChange}/></div>
//                                     </div>
//                                     <div className="col-5">
//                                         <div className="my-1">Company Name <span className='colorRed'>*</span></div>
//                                         <div className=""><input type="text" id="" placeholder='Company Name (if any)' className='border-0 inputBlue w-75 py-3 px-4 rounded-5 fs-small' name='CompanyName' value={formData.CompanyName} onChange={handleChange} /></div>
//                                     </div>
//                                 </div>
//                                 <div className="row my-2 mx-5">
//                                     <div className="col-8 ">
//                                         <div className="my-1">**Email</div>
//                                         <div className=""><input type="email" id="" placeholder='**Email' className='border-0 inputBlue w-100 py-3 px-4 rounded-3 fs-small' name='Email' value={formData.Email} onChange={handleChange}/></div>
//                                     </div>
//                                     <div className="col-4 pt-2">
//                                         <div className="mt-4"><button className='btn py-3 colorWhite px-5' style={{ backgroundColor: "#1D5DC7" }}>Please verify your email</button></div>
//                                     </div>
//                                     <div className="col-9 my-4 text-center">Manufacturers, Brands and Suppliers want to work with Verified Buyers.</div>
//                                 </div>
//                                 <div className="row my-2">
//                                     <div className="col-12 mx-5 ">
//                                         <div className=""><input type="text" id="" placeholder='Website (if any)' className='border-0 inputBlue w-75 py-3 px-4 rounded-5 fs-small' name='Website' value={formData.Website} onChange={handleChange}/></div>
//                                     </div>
//                                     <div className="col-9 my-4 text-center fw-bold">Were you referred by our Affiliate Partner? <span className='ms-4'><button className='btn px-3 py-1 colorWhite' style={{ backgroundColor: "#537FFF" }} onClick={(e)=>e.preventDefault()}>No</button></span></div>
//                                 </div>
//                                 <div className="row my-2 mx-5">
//                                     <div className="col-9 mt-4 ps-5">By registering, you agree to our <span className='fw-bolder text-decoration-underline' style={{ color: "#4CB5F1" }}>Terms and Conditions</span>& <span className='fw-bolder text-decoration-underline' style={{ color: "#4CB5F1" }}>Terms and Conditions</span> Privacy Policies</div>
//                                     <div className="col-9 ps-5">And you agree to share your Business Card with our Trusted, Reliable and Certified Suppliers</div>
//                                 </div>
//                                 <div className="row my-5 mx-5">
//                                     <div className="col-11 d-flex justify-content-center">
//                                         <div className="row">
//                                             <span><button className='btn border colorWhite py-4 px-5 rounded-4' style={{ backgroundColor: "#1D5DC7" }} onClick={(e)=>e.preventDefault()}>Post Buy Requirement</button></span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                     <div className="col-3 border" >
//                         <div className="row  ">
//                             <div className="col-10 ms-auto me-auto my-5 border rounded-5 px-4" style={{ backgroundColor: "#BCEBFA" }}>
//                                 <h4 className='fw-bold mt-3'>RFQ Score</h4>
//                                 <div className="">
//                                     <p style={{ lineHeight: "20px", fontWeight: 500 }}>Provide as much details as possible about your request to ensure faster response from the right suppliers. The higher the score the better responses you will get.</p>
//                                 </div>
//                                 <div className="mainSideContent">
//                                     <h1 style={{ color: "#FF8888" }}>0%</h1>
//                                 </div>
//                                 <div className="row">
//                                     <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Product Name </div>
//                                     <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Product Category </div>
//                                     <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> About Your Product </div>
//                                     <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Sourcing Type </div>
//                                     <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Quantity </div>
//                                     <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Max Budget </div>
//                                     <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Trade Terms </div>
//                                     <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Shiping Method </div>
//                                     <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Destination </div>
//                                     <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Lead Time </div>
//                                     <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> PaymentMethod </div>
//                                     <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Full Name </div>
//                                     <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Company Name </div>
//                                     <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Mobile Number </div>
//                                     <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Email </div>
//                                     <div className="my-1"> <img src={check} alt="" style={{ height: "15px" }} /> Website </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
