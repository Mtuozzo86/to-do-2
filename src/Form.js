import React from 'react'

function Form({onHandleSubmit, onHandleChange, text}) {
  return (
    <div className="form-section">
      <form onSubmit={onHandleSubmit}>
        <input
          className='task-input'
          value={text}
          onChange={onHandleChange}
          type="text"
        />
        <button className="button-submit">Submit</button>
      </form>
    </div>
  );
}

export default Form