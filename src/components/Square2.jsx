/* eslint-disable react/prop-types */


const Square2 = ({value,onBoxClick}) => {
    return (
        
        <div className=" border w-[100px] h-[90px] text-2xl text-center">
        <button className=" w-[100px] h-[90px]" onClick={onBoxClick}>
          {value}
        </button>
      </div>
        
    )
}

export default Square2