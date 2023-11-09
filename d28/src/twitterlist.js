import { useRef, useState, useEffect } from 'react';
import Form from './form';

const twitterlist = ({Twitterclone, setTwitterclone,seteditTwitterclone,editTwitterclone, setHidden, Hidden }) => {
const deleteItem = (textarea) => {
    // console.log('deleteItem: ' + textarea);
    // Lấy giá trị hiện tại của localStorage.setItem("twitterclone", JSON.stringify(newTweets))
    let tweets = JSON.parse(localStorage.getItem('twitterclone'));

    // Xóa item khỏi mảng
    tweets.splice(
        tweets.findIndex((item) => item.textarea === textarea),
        
    );

    // Cập nhật localStorage
    localStorage.setItem('twitterclone', JSON.stringify(tweets));

    // Kiểm tra localStorage để đảm bảo rằng item đã được xóa
    let tweetsAfterDelete = JSON.parse(localStorage.getItem('twitterclone'));

    // console.log(tweetsAfterDelete);
    setTwitterclone(tweetsAfterDelete);
};
const handleEdit = ({ twitterclone }) => {
  // Tìm kiếm đối tượng twitterclone cần chỉnh sửa dựa trên id
  const findedit = Twitterclone.find((twitterclone) => twitterclone.id === twitterclone.id);

  // Nếu tìm thấy, gán đối tượng đó cho biến findedit
  if (findedit) {
    seteditTwitterclone(twitterclone);
    setHidden(!Hidden);
   

    
  }
};

  return (
   
    <div class="list-group">
       {Twitterclone.map((twitterclone, index) => (
                    // < key={index} text={twitterclone.text} time={twitterclone.time} />
                    <li
                    class="list-group-item"
                    key={index}
                    style={{ margin: 10, borderRadius: 10 }}
                    >
                      <div                     class="list-group-item-container" >
                      {twitterclone.textarea}  
                  
                    
                  <i className="far fa-edit" style={{margin:10}} onClick={() => handleEdit({twitterclone})}  ></i>
                  <i className="far fa-trash-alt" style={{margin:10}} onClick={() => deleteItem(twitterclone.textarea)} ></i>            
                       </div>
                       <div class="list-group-item-form"  style={{display:'none'}} >
                       <button type="button" class="btn btn-secondary" >Secondary</button>

                       </div>
                      
                   
                                
                               
                   
                    
                  
                  </li>
        ))}
    </div>
  )
}

export default twitterlist