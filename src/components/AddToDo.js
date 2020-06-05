import React, { useState } from "react";


const AddToDo = ({ add }) => {
  const [value, setValue] = useState({
    title: ''
  });

  const handleOnChange = ({ target: { name, value } }) => {
    setValue(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    add(value)
  }

  return (
    <form onSubmit={handleOnSubmit} >
      <input name="title" value={value.title} onChange={handleOnChange} />
      <button type="submit">Wyślij</button>
    </form>
  )
}

export default AddToDo;