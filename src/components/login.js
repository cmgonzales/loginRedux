import React from 'react'

const Login = () => {


const handleChange = (e) =>{
    e.preventDefault()
}    

const handleSubmit = (e) => {
    e.preventDefault()
    console.log('test')
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login
