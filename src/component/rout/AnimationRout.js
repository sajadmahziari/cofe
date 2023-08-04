import { Routes, Route } from "react-router-dom";
 import rout from "./Rout";
const AnimationRout = () => {

   return (
      <Routes>
         {rout.map((routing,index) => {
            return <Route {...routing} key={index}  />
         })}
       
      </Routes>
   );
}

export default AnimationRout;