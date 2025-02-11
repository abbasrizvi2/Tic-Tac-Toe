/* eslint-disable react/prop-types */
import '../App.css'

function Square({ value, onSqaureClick }) {
    // console.log("sqaure renders")
    return (
      <div className=" border w-[100px] h-[90px] text-2xl text-center">
        <button className=" w-[100px] h-[90px]" onClick={onSqaureClick}>
          {value}
        </button>
      </div>
    );
}
  
export default Square
