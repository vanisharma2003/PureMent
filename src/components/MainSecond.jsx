import React from 'react'
import './MainSecond.css'
const MainSecond = () => {
  return (
    <>
    <div className='main_1'>
      {/* card 1 */}
    <div className="card" style={{width: "18rem",height:"18rem"}}>
     <img src='src/soup.jpg'/>
</div>
{/* card 2 */}
<div className="card" style={{width: "18rem",height:"18rem",padding:'2rem'}}>
     <h3 className='pacifico-regular'>Know What ?</h3>
     <p>Soup is one of the oldest dishes in the world, with evidence of its existence dating back over 20,000 years. Originally boiled in animal hides over hot rocks, it has evolved into a staple of comfort and nourishment across cultures. </p>
</div>
{/* card 3  */}
<div className="card" style={{width: "18rem",height:"18rem"}}>
<img src='src/chilly_potato.jpg'/>
</div>
    </div>
  <div className='main_2'>
     {/* card 4  */}
<div className="card" style={{width: "18rem",height:"18rem",padding:'2rem'}}>
     <h3 className='pacifico-regular'>Know What ?</h3>
     <p>Soup is one of the oldest dishes in the world, with evidence of its existence dating back over 20,000 years. Originally boiled in animal hides over hot rocks, it has evolved into a staple of comfort and nourishment across cultures. </p>
</div>
{/* card 5  */}
<div className="card" style={{width: "18rem",height:"18rem"}}>
     <img src='src/drink.webp'/>
</div>
{/* card 6  */}
<div className="card" style={{width: "18rem",height:"18rem",padding:'2rem'}}>
     <h3 className='pacifico-regular'>Know What ?</h3>
     <p>Soup is one of the oldest dishes in the world, with evidence of its existence dating back over 20,000 years. Originally boiled in animal hides over hot rocks, it has evolved into a staple of comfort and nourishment across cultures. </p>
</div></div>   

   
    </>
  )
}

export default MainSecond
