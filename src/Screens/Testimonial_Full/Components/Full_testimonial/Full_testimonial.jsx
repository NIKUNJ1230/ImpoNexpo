import React from 'react'
import "./Full_testimonial.css"
import quote from "../../../../assets/testimonial/quote.svg"
import Full_left_testimonial from './Full_left_testimonial'
import Full_right_testimonial from './Full_right_testimonial'
function Full_testimonial() {
    return (
        <section>
            <div className="container-fluid ">
                <div className="full-testimonial">
                    <div className="row">
                        <Full_left_testimonial text={"With Neat, they can just walk in, tap a button, and do their job without the stress of having to solve a technical issue."}
                            name={"Marques Stewart"} desig={"Achievement First’s Senior Director of Network/Cloud Infrastructure"}
                        />
                        <div className="w-60">
                            <div className="full-right-testimonial">

                                <Full_right_testimonial title={""} description1={"As restrictions on social distancing start to ease for educational organizations around the country, our schools and colleges are facing a number of unique challenges. Achievement First, a high-performance charter management organization, has already started thinking about how to address those challenges and provide a well-rounded education while preserving the health and safety of its students and teachers."} description2={"Achievement First supervises 37 charter schools across Connecticut, New York, and Rhode Island, and serves 15,000 students with 2,500 to 2,700 teachers and staff members. Marques Stewart, Achievement First’s senior director of network/cloud infrastructure, shared how the organization continued to support its school communities during COVID-19 through the use of Zoom and Neat — and how the technologies will enable learning post-COVID."}/>
                                
                                <Full_right_testimonial title={"Two leading-edge solutions, one outstanding result"} description1={"As restrictions on social distancing start to ease for educational organizations around the country, our schools and colleges are facing a number of unique challenges. Achievement First, a high-performance charter management organization, has already started thinking about how to address those challenges and provide a well-rounded education while preserving the health and safety of its students and teachers."} description2={"Achievement First supervises 37 charter schools across Connecticut, New York, and Rhode Island, and serves 15,000 students with 2,500 to 2,700 teachers and staff members. Marques Stewart, Achievement First’s senior director of network/cloud infrastructure, shared how the organization continued to support its school communities during COVID-19 through the use of Zoom and Neat — and how the technologies will enable learning post-COVID."}/>
                                
                                <Full_right_testimonial title={"Supporting a frictionless, seamless user experience"} description1={"As restrictions on social distancing start to ease for educational organizations around the country, our schools and colleges are facing a number of unique challenges. Achievement First, a high-performance charter management organization, has already started thinking about how to address those challenges and provide a well-rounded education while preserving the health and safety of its students and teachers."} description2={"Achievement First supervises 37 charter schools across Connecticut, New York, and Rhode Island, and serves 15,000 students with 2,500 to 2,700 teachers and staff members. Marques Stewart, Achievement First’s senior director of network/cloud infrastructure, shared how the organization continued to support its school communities during COVID-19 through the use of Zoom and Neat — and how the technologies will enable learning post-COVID."}/>

                                <Full_right_testimonial title={"Maintaining school communities with Zoom +Neat"} description1={"As restrictions on social distancing start to ease for educational organizations around the country, our schools and colleges are facing a number of unique challenges. Achievement First, a high-performance charter management organization, has already started thinking about how to address those challenges and provide a well-rounded education while preserving the health and safety of its students and teachers."} description2={"Achievement First supervises 37 charter schools across Connecticut, New York, and Rhode Island, and serves 15,000 students with 2,500 to 2,700 teachers and staff members. Marques Stewart, Achievement First’s senior director of network/cloud infrastructure, shared how the organization continued to support its school communities during COVID-19 through the use of Zoom and Neat — and how the technologies will enable learning post-COVID."}/>

                                <Full_right_testimonial title={"Leveraging Zoom + Neat post-COVID"} description1={"As restrictions on social distancing start to ease for educational organizations around the country, our schools and colleges are facing a number of unique challenges. Achievement First, a high-performance charter management organization, has already started thinking about how to address those challenges and provide a well-rounded education while preserving the health and safety of its students and teachers."} description2={"Achievement First supervises 37 charter schools across Connecticut, New York, and Rhode Island, and serves 15,000 students with 2,500 to 2,700 teachers and staff members. Marques Stewart, Achievement First’s senior director of network/cloud infrastructure, shared how the organization continued to support its school communities during COVID-19 through the use of Zoom and Neat — and how the technologies will enable learning post-COVID."}/>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Full_testimonial
