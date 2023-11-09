import logo from './logo.svg';
import './App.css';
import { useRef, useState, useEffect } from 'react';

import Form from './form'
import Twitterlist from "./twitterlist.js";
import FormWithEdit from './FormWithEdit.js';

function App() {

  const twittercloneFromLocalStorage = JSON.parse(localStorage.getItem('twitterclone'));
  const [Twitterclone, setTwitterclone] = useState(twittercloneFromLocalStorage ?? []);
  // Cập nhật localStorage
  localStorage.setItem('twitterclone', JSON.stringify(Twitterclone));
  const editTwittercloneFromLocalStorage = JSON.parse(localStorage.getItem('editTwitterclone'));

  const [editTwitterclone, seteditTwitterclone] = useState(editTwittercloneFromLocalStorage ?? null);
  localStorage.setItem('editTwitterclone', JSON.stringify(editTwitterclone));
  const [Hidden, setHidden] = useState(false);



  return (
    <div className="App">

      <header className="App-header">
      <label style={{textAlign:'center'}} for="exampleFormControlTextarea1">twitter post </label>
      {Hidden && <FormWithEdit   Hidden = {Hidden} setHidden = {setHidden}  Twitterclone={Twitterclone}  setTwitterclone={setTwitterclone} editTwitterclone = {editTwitterclone} seteditTwitterclone ={seteditTwitterclone } > </FormWithEdit> }

      {!Hidden && (<Form  Twitterclone={Twitterclone}   setTwitterclone={setTwitterclone} editTwitterclone = {editTwitterclone} seteditTwitterclone ={seteditTwitterclone } />)}

      <Twitterlist Hidden = {Hidden} setHidden = {setHidden} Twitterclone = {Twitterclone}  setTwitterclone={setTwitterclone}       editTwitterclone = {editTwitterclone}  seteditTwitterclone ={seteditTwitterclone }  >
      </Twitterlist>

</header>

    </div>
  );
}

export default App;
