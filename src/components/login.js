import React, {useState} from 'react'
import { user } from './actions'
import { useSelector, useDispatch } from "react-redux";



const Login = () => {

    const users = useSelector((state) => state.user);
    const dispatch = useDispatch();
  
    const[name, newName] = useState('')
    


const handleChange = (e) =>{
    e.preventDefault()
    newName(e.target.value)
}    

const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(user(name))
    console.log(name)
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value = {name}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
     <h1>{users}</h1>
    </div>
  );
}

export default Login
