import React from "react";
import "./Dialogs.css";
import Dialogsitem from "./dialogsitem/Dialogsitem";
import Message from './message/Message';

function Dialogs() {
  return (
    <div className="dialogs">
      <div className="dialog">
        <Dialogsitem name={'Иван Иванов'} id={'1'}/>
        <Dialogsitem name={'Илон Маск'} id={'2'}/>
        <Dialogsitem name={'Билл Гейтс'} id={'3'}/>
      </div>
      <div className="messages">
        <Message message={'Привет'}/>
        <Message message={'Го на Марс'}/>
        <Message message={'Собираюсь выпустить новый чип'}/>
      </div>
      <div className="code">
        <input type="text"/>
        <button>отправить</button>
      </div>
    </div>
  );
}
export default Dialogs;
