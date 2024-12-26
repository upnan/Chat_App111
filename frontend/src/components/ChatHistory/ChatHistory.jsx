import React,{Component} from "react";
import"./ChatHistory.scss";
import Message from "../Message";
/*该组件将从我们的App.js接收array聊天消息 
通过其props发挥作用，
并随后将它们渲染为一个在另一个之下。
*/
class ChatHistory extends Component {
    render() {
        console.log(this.props.chatHistory);
        const messages = this.props.chatHistory.map(msg => <Message message={msg.data} />);
      
        return (
          <div className='ChatHistory'>
            <h2>Chat History</h2>
            {messages}
          </div>
        );
      };
}

export default ChatHistory;