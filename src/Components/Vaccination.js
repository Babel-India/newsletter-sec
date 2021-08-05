import React from "react";
import "./Styles/BSTC.css"

function Vaccination(){
    return(
        <div>
            <h1 className="Vaccine-head" >Vaccination</h1>
            <div className="Vaccine-des">
            <img className='controller' src={ require("../Images/Head/vaccine.png").default } alt='controller' />
                 <img className='controller1' src={ require("../Images/Head/vaccine.png").default } alt='controller' />
                
                <h3 className='about-des'>
                A special thanks to Madhur Saxena, Sumit Sharma, Naveen Yadav for taking an initiative and lending a helping 
                hand to our Babel family in such hard times when there is shortage of vaccines and some are stocking the vaccine. 
                Thank you from the whole team for the vaccination drive and providing free vaccine with no hassle of waiting for getting vaccination slot 
                and standing in queue for getting vaccination. 
                This is One of a great way to show that we all are present for each others support in this tough times.               
                 </h3>
            </div>
        </div>
    )
}
export default Vaccination;