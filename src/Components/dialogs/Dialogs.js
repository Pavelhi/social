import React from "react";
import "./Dialogs.css";
import Dialogsitem from "./dialogsitem/Dialogsitem";
import Message from "./message/Message";

let dialogNames = [
  { name: "Ivan Ivanov", id: 1 },
  { name: "Ilon Mask", id: 2 },
  { name: "Bill Gates", id: 3 },
];
let dialogMessages = [
  { message: "Привет", id: 1 },
  { message: "Го на Марс", id: 2 },
  { message: "Собираюсь выпустить новый чип", id: 3 },
];

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div className="dialog">
        {/*<Dialogsitem name={dialogNames[0].name} id={dialogNames[0].id} />
        <Dialogsitem name={dialogNames[1].name} id={dialogNames[1].id} />
        <Dialogsitem name={dialogNames[2].name} id={dialogNames[2].id} />*/}

        {dialogNames.map((e) => (<Dialogsitem name={e.name} id={e.id} />))}
      </div>
      <div className="messages">
        {/*<Message
          message={dialogMessages[0].message}
          id={dialogMessages[0].id}
        />
        <Message
          message={dialogMessages[1].message}
          id={dialogMessages[1].id}
        />
        <Message
          message={dialogMessages[2].message}
          id={dialogMessages[2].id}
      />*/}

      {dialogMessages.map((e)=><Message message={e.message} id={e.id} />)}
      </div>
      <div className="code">
        <input type="text" />
        <button>отправить</button>
      </div>
    </div>
  );
};
export default Dialogs;
