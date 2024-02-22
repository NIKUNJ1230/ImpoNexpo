import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { RWebShare } from 'react-web-share';

function LikeShare_Product({ ProductId, ProductName, ProductDescription, Like, Comment, Share, Saved }) {
    const [likeCount, setLikeCount] = useState(Like);
    const [commentCount, setCommentCount] = useState(Comment);
    const [savedCount, setSavedCount] = useState(Saved)
    const [visibleInput, setVisibleInput] = useState(false);
    const [commentValue, setCommentValue] = useState()


    const toggleComment = () => {
        setVisibleInput(!visibleInput)
    }
    const LikeProduct = async () => {
        try {
            const response = await fetch(`http://91.107.205.100:97/Like/Product/${ProductId}/65d08c6227dbbda864619b31`, {
                method: 'GET',
            })
            if (response.statusCode === 200 || response.ok) {
                const result = await response.json()
                console.log(result)
                if (result.message === "Product liked successfully") {
                    setLikeCount(likeCount + 1)

                }
                else {
                    if (result.message === "Like removed successfully") {
                        setLikeCount(likeCount - 1)
                    }
                }
            }
            else {
                toast.error(response?.message || "Something Wrong")
            }
        }
        catch (error) {
            // console.error('Error fetching data:', error);
            toast.error("error somethig went wrong . Please try again.");
        }
    }

    const SaveProduct = async () => {
        try {
            const response = await fetch(`http://91.107.205.100:97/Save/Product/65d08c6227dbbda864619b31/${ProductId}`)
            if (response.ok || response.status === 200) {
                const responseData = await response.json()
                console.log(responseData)
                if (responseData.message === "Saved!") {
                    setSavedCount(savedCount + 1)
                }
                else {
                    if (responseData.message === "Unsaved!") {
                        setSavedCount(savedCount - 1)
                    }
                }
            }
            else {
                toast.error(response?.message)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const postComment = async () => {
        try {
            const response = await fetch(`http://91.107.205.100:97/Comment/Product/${ProductId}/65d08c6227dbbda864619b31`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Message: commentValue })
            })
            if (response.statusCode === 200 || response.ok) {
                const responseData = await response.json();
                setCommentCount(commentCount + 1)
                setVisibleInput(false)
                setCommentValue("")
            }
            else {
                toast.error("Something went wrong")
            }
        }
        catch (error) {
            console.log(error)
        }
    }



    return (
        <>

            <div className="d-flex align-items-center justify-content-between">
                <div onClick={LikeProduct}>
                    <svg width="20" height="20" viewBox="0 0 12 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.13939 0.64502C7.69941 0.645716 7.26604 0.75101 6.87578 0.952035C6.48551 1.15306 6.14979 1.44393 5.89688 1.80014C5.64397 1.44393 5.30825 1.15306 4.91799 0.952035C4.52772 0.75101 4.09435 0.645716 3.65437 0.64502C2.91225 0.685915 2.21429 1.00702 1.70442 1.5421C1.19455 2.07719 0.911656 2.78546 0.914078 3.52085C0.914078 5.01373 1.76627 6.55144 3.37817 7.96756C4.12511 8.62251 4.94443 9.19191 5.82054 9.66493C5.84414 9.67699 5.87032 9.68329 5.89688 9.68329C5.92344 9.68329 5.94962 9.67699 5.97322 9.66493C6.84911 9.19186 7.66821 8.62246 8.41497 7.96756C10.0287 6.55144 10.8797 5.01373 10.8797 3.52085C10.8821 2.78546 10.5992 2.07719 10.0893 1.5421C9.57947 1.00702 8.88151 0.685915 8.13939 0.64502ZM5.89688 9.33209C5.28675 8.99679 1.24614 6.67242 1.24614 3.52085C1.24148 2.8719 1.48867 2.24591 1.93674 1.77196C2.38482 1.29801 2.99961 1.01224 3.65437 0.973563C4.08194 0.973728 4.50178 1.08628 4.87094 1.29971C5.2401 1.51314 5.54532 1.81978 5.75537 2.18825C5.77114 2.21195 5.79261 2.23139 5.81785 2.24485C5.84309 2.2583 5.87131 2.26534 5.89998 2.26534C5.92866 2.26534 5.95688 2.2583 5.98212 2.24485C6.00736 2.23139 6.02883 2.21195 6.0446 2.18825C6.25413 1.82069 6.55837 1.51463 6.92634 1.30126C7.29432 1.08788 7.71288 0.974814 8.13939 0.973563C8.79415 1.01224 9.40895 1.29801 9.85702 1.77196C10.3051 2.24591 10.5523 2.8719 10.5476 3.52085C10.5476 6.67242 6.50701 8.99925 5.89688 9.33209Z"
                            fill="#336CCC" stroke="#336CCC" stroke-width="0.489058" />
                    </svg>
                    <div className="text-blue">
                        {likeCount}
                    </div>
                </div>
                <div onClick={toggleComment}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12"
                        fill="none">
                        <path
                            d="M7.84322 6.59544H4.41657C4.32565 6.59544 4.23846 6.63182 4.17418 6.69659C4.10989 6.76135 4.07377 6.84919 4.07377 6.94078C4.07377 7.03237 4.10989 7.1202 4.17418 7.18497C4.23846 7.24973 4.32565 7.28611 4.41657 7.28611H7.84322C7.93413 7.28611 8.02132 7.24973 8.08561 7.18497C8.1499 7.1202 8.18601 7.03237 8.18601 6.94078C8.18601 6.84919 8.1499 6.76135 8.08561 6.69659C8.02132 6.63182 7.93413 6.59544 7.84322 6.59544ZM8.52881 4.52409H3.73164C3.64073 4.52409 3.55353 4.56047 3.48925 4.62523C3.42496 4.69 3.38884 4.77783 3.38884 4.86942C3.38884 4.96101 3.42496 5.04885 3.48925 5.11361C3.55353 5.17838 3.64073 5.21476 3.73164 5.21476H8.52881C8.61973 5.21476 8.70692 5.17838 8.77121 5.11361C8.83549 5.04885 8.87161 4.96101 8.87161 4.86942C8.87161 4.77783 8.83549 4.69 8.77121 4.62523C8.70692 4.56047 8.61973 4.52409 8.52881 4.52409ZM6.13023 0.727051C3.10268 0.727051 0.647461 2.89103 0.647461 5.55976C0.661554 6.30885 0.856042 7.04328 1.2142 7.69989C1.57236 8.35651 2.08347 8.91567 2.70358 9.32928V11.7738L5.10217 10.3059C5.4408 10.3631 5.78353 10.3923 6.12689 10.3931C9.15511 10.3931 11.6097 8.22916 11.6097 5.56043C11.6097 2.8917 9.15844 0.727051 6.13023 0.727051ZM6.13023 9.70247C5.74088 9.70125 5.35275 9.65873 4.97224 9.57561L3.35853 10.5529L3.37918 8.95139C2.77484 8.61408 2.26825 8.12385 1.90943 7.52907C1.5506 6.93428 1.35194 6.25552 1.33306 5.55976C1.33306 3.27228 3.48112 1.41705 6.13023 1.41705C8.77933 1.41705 10.9274 3.27161 10.9274 5.55976C10.9274 7.84792 8.78 9.70247 6.13023 9.70247Z"
                            fill="#336CCC" stroke="#336CCC" stroke-width="0.260831" />
                    </svg>
                    <div className="text-blue">
                        {commentCount}
                    </div>
                </div>
                <RWebShare
                    data={{
                        text: ProductDescription,
                        url: "https://on.natgeo.com/2zHaNup",
                        title: ProductName,
                    }}
                    onClick={() => console.log("shared successfully!")}
                >
                    <div>
                        <svg width="20" height="20" viewBox="0 0 11 10" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.3943 5.18476L6.17432 0.727051V5.20547C4.8687 5.16304 3.58832 5.59151 2.54398 6.42032C1.49965 7.24913 0.753614 8.42887 0.428711 9.76532C0.982306 8.69966 1.82589 7.834 2.85033 7.28031C3.87477 6.72663 5.03293 6.51041 6.17497 6.65962V9.64179L10.3943 5.18476Z"
                                fill="#336CCC" />
                        </svg>
                        <div className="text-blue">
                            {Share}
                        </div>
                    </div>
                </RWebShare>

                <div onClick={SaveProduct}>
                    <svg width="20" height="20" viewBox="0 0 12 11" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.0687 2.55285H5.86821L4.8123 1.18714C4.5878 0.899252 4.25973 0.727051 3.90341 0.727051H1.38458C0.737126 0.727051 0.204102 1.2929 0.204102 1.97411V9.30506C0.204102 9.98395 0.737126 10.5498 1.38458 10.5498H10.0709C10.7183 10.5498 11.2513 9.98395 11.2513 9.30275V3.78437C11.2492 3.10284 10.7161 2.55285 10.0687 2.55285ZM0.692949 9.30275V1.97411C0.692949 1.5755 1.00581 1.24134 1.38458 1.24134H3.90341C4.10836 1.24134 4.3039 1.34413 4.43354 1.51402L5.23018 2.55285H2.63313C1.98785 2.55285 1.45048 3.10317 1.45048 3.78437V10.0355H1.38458C1.00581 10.0355 0.692949 9.70103 0.692949 9.30275ZM10.7596 9.30275C10.7596 9.69938 10.4467 10.0355 10.068 10.0355H1.94223V3.78437C1.94223 3.38775 2.26016 3.06681 2.63603 3.06681H10.0687C10.4453 3.06681 10.7603 3.38808 10.7603 3.78437L10.7596 9.30275Z"
                            fill="#336CCC" />
                    </svg>
                    <div className="text-blue">
                        {savedCount}
                    </div>
                </div>
            </div>


            {visibleInput && (
                <div className="comment-input d-flex">
                    <input type="text" name="comment_input" value={commentValue} onChange={(e) => setCommentValue(e.target.value)} autoFocus/>
                    <button onClick={postComment}>Post</button>
                </div>
            )}
        </>
    )
}

export default LikeShare_Product
