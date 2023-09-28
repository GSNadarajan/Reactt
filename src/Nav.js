import { useState } from "react";
function Nav(){
    const [color, setColor] = useState("red");

    // usestate is simply used to change the state of the content

    // default value - color 
    // updated value - setColor


    console.log(color);

    function Togglebutton(){
        setColor("Blue")
        console.log(color)
    }



    return(
        <div>
            <h1>This is Navbar</h1>
            <button onClick={() => Togglebutton()} >Click here</button>
        </div>
    )
}

export default Nav;