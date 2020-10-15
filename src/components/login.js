import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";


const Login = () => {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
  



    const[input, newInput] = useState('')
    const [name, newName] = useState('')


const handleChange = (e) =>{
    e.preventDefault()
    newInput(e.target.value)
}    

const handleSubmit = (e) => {
    e.preventDefault()
    

    dispatch()
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value = {input}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h1>{name}</h1>
    </div>
  );
}

export default Login
