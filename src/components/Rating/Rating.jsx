import { useState } from "react"
import style from "./rating.module.css"
import starImage from "../../images/star.svg" 
import SecondPage from "../secondPage/SecondPage"

const Rating = () => {
    const [selectedRating,setSelectedRating]=useState(undefined)
    const [submited,setSubmited]=useState(false)
    function handleRatingClicked(rating){
      setSelectedRating(rating)
    }
    function handleSubmited(){
      setSubmited(true)
    }
  return !submited?(
    <div className=" bg-Dark-Blue w-[400px] h-full p-7 text-white rounded-[40px]  max-sm:w-[350px]">
           <div className="mb-5 bg-slate-700  w-10 h-10 rounded-full p-1  flex justify-center items-center ">
           <img  src={starImage} alt="star_icon"/>
           </div>
        <h1 className="mb-3 font-bold text-[30px] font-OverpassFont text-ure-White">How did we do?</h1>
    <div >
        <p className="mb-5 text-[15px] font-OutfitFont text-Medium-Grey font-medium ">Please let us know how we did with your support request.All feedback is appresiated to help us improve our offering!</p>
        <div className="w-full flex items-center justify-between mb-3">
          {[1,2,3,4,5].map((rating)=>(
             <button onClick={()=>handleRatingClicked(rating)} className={style.btn}>{rating}</button>
          ))}
        </div>
        <button onClick={handleSubmited} className={style.submitBtn} disabled={selectedRating===undefined}>SUBMIT</button>
    </div>
    </div>
  ):<SecondPage selectedRating={selectedRating}/>
}

export default Rating