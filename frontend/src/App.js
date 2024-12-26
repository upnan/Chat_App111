import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
// 导入标题组件
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput/ChatInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []  // 初始 chatHistory 状态
    };
    // 绑定 send 方法
    this.send = this.send.bind(this);
  }

  componentDidMount() {
    // 在 componentDidMount 中执行 connect(上面不需要再一次连接)
    connect((msg) => {
      console.log("New Message");

      // 更新 chatHistory 状态
      this.setState(prevState => ({
        chatHistory: [...prevState.chatHistory, msg]  // 使用 prevState 确保基于最新状态更新
      }), () => {
        // 回调中执行，可以确保获取到更新后的状态
        console.log(this.state);
      });
    });
  }

  send(event) {
    if(event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send} />
      </div>
    );
  }
}

export default App;
