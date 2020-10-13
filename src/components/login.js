import React, {useState} from 'react'


const Login = () => {

    const[input, newInput] = useState('')
    const [name, newName] = useState('')


const handleChange = (e) =>{
    e.preventDefault()
    newInput(e.target.value)
}    

const handleSubmit = (e) => {
    e.preventDefault()
    console.log('test')

    newName(input)
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
