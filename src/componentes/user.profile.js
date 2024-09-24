import React, {useState} from "react"; 

function UserProfile (){
    const [name,setName] = useState("Wendy")
    
    const newName = name === "Wendy" ? "Dalia": "Wendy"; 
    
}