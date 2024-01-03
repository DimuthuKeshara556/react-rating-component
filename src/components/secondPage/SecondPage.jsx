import thankYouImage from "../../images/illustration-thank-you.svg"
const SecondPage = (props) => {
  return (
    <div className=" bg-Dark-Blue w-[400px] h-full px-7 py-10 rounded-[40px] flex flex-col items-center justify-center max-sm:w-[350px]">
  <img className="mb-6" src={thankYouImage} alt="thankImage"/>
  <div className=" py-1 px-5 bg- bg-slate-700 rounded-[50px] ">
      <p className="text-Orange font-OverpassFont font-medium">You selected {props.selectedRating} out of 5</p>
  </div>
  <div className="flex flex-col  text-center">
      <h1 className="text-pure-White text-[25px] mt-8 mb-2 font-semibold font-OverpassFont ">Thank you!</h1>
      <p className="text-[15px] text-Medium-Grey font-[500] font-OutfitFont ">We appreciate you taking the time to give a rating.If you ever need more support,don't hesitate to get in touch </p>
  </div>
</div>
  )
}

export default SecondPage