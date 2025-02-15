import { useState } from 'react'
import Square2 from './Square2'
import { winner } from './winner'

const Game2 = () => {

    const [data, setData] = useState([])
    const [user, setUser] = useState(true)

    // console.log(data)
 
    //  don't write like this (although it works) bcoz react re renders when there has change in useState so if u do data.slice same array
    //  const  hanldeClick = (index) => { will come as before and react thinks it same think sometimes gives problem
    //         const newData = data.slice()
    //         newData[index] = 'X' 
    //         setData(newData)
    //    }
    

    const hanldeClick = (index) => {
        if (winner(data) || data[index]) return; // ye logic bhi  2 kaam krta h ek sath agar winner h game stop sath me koi value allready h toh change nhi kr skte usko
        setData((prevData) => {
            const newData = [...prevData]
            if (user) {
                newData[index] = 'X'
            }
            else {
                newData[index] = 'O'
            }
             
            return newData
        })
        setUser(!user)
    }

const decider = winner(data); //--> ye nho ho rha tha mjhse logic build
  let status;
  if (decider) {
    status = "winner is :  " + decider;
  } else {
    status = "NextPlayer is :  " + (user ? "X" : "O");
  }
    

    return (
        <div className='flex flex-col justify-center items-center'>

            {/* <h1 className='m-9 text-2xl'>winner is: {winner(data)}</h1> */}
            <h1 className='m-9 text-2xl'>{status}</h1>
           

                <div className=' flex mt-9 items-center border-indigo-700 w-[300px] h-[270px] flex-wrap'>
                    <Square2 value={data[0]} onBoxClick={() => hanldeClick(0)} />
                    <Square2 value={data[1]} onBoxClick={() => hanldeClick(1)} />
                    <Square2 value={data[2]} onBoxClick={() => hanldeClick(2)} />
                    <Square2 value={data[3]} onBoxClick={() => hanldeClick(3)} />
                    <Square2 value={data[4]} onBoxClick={() => hanldeClick(4)} />
                    <Square2 value={data[5]} onBoxClick={() => hanldeClick(5)} />
                    <Square2 value={data[6]} onBoxClick={() => hanldeClick(6)} />
                    <Square2 value={data[7]} onBoxClick={() => hanldeClick(7)} />
                    <Square2 value={data[8]} onBoxClick={() => hanldeClick(8)} />
                </div>
          
        {/* <div className='mt-9 text-2xl'>
               {user===true ?<div>Next Player is: X</div> : <div>Next Player is: O</div>} 
            </div> */}  {/** ye cheez upar winner function k sarth aa gyi */}

        
        </div>
    )
}

export default Game2