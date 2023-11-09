import React, { useState, useEffect } from 'react';

function FormWithEdit({Twitterclone, setTwitterclone, editTwitterclone, seteditTwitterclone,Hidden, setHidden} ) {

  

  const handleSubmit = (id) => {
    
    const newtextareaValue = document.querySelector('#newtextareavalue').value;
    setHidden(!Hidden);
    console.log(id);
    // console.log(editTwitterclone)
    const foundItem = Twitterclone.find(item => item.id === id);
    console.log(foundItem);

    if (foundItem) {
      const index = Twitterclone.findIndex(item => item.id === id);
      // console.log(index);

      // Cập nhật thuộc tính "textarea" của foundItem với giá trị mới
      foundItem.textarea = newtextareaValue;
      // console.log(foundItem);
      Twitterclone[index]=foundItem
      console.log(Twitterclone);
    } else {
      console.log("Không tìm thấy mục nào với id:", id);
    }

  
  

   
    
  };

 

  return (
    <div className="container">

      <div className="form-group container" style={{ display: 'flex' }}>
      
      
          <textarea
          id="newtextareavalue"
          // className="form-control"
          className="form-control"

          rows="3"
          placeholder={editTwitterclone.textarea} >
    {editTwitterclone.textarea}
  </textarea>

          <button type="button" className="btn btn-primary" 
          onClick={()=> handleSubmit(editTwitterclone.id)}
          >
            Save
          </button>
          <button type="button" class="btn btn-secondary" onClick={()=>{    setHidden(!Hidden);}}>cancel</button>

      </div>

    
    </div>
  );
}

export default FormWithEdit;
