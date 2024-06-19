import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CometChatUsersWithMessages } from "@cometchat/chat-uikit-react"; //import the component in your App.js file
import { UIKitSettingsBuilder } from "@cometchat/uikit-shared";
import { CometChatUIKit } from "@cometchat/chat-uikit-react";

const COMETCHAT_CONSTANTS = {
  APP_ID: "APP_ID", //Replace with your App ID
  REGION: "REGION", //Replace with your App Region
  AUTH_KEY: "AUTH_KEY", //Replace with your Auth Key
};

//create the builder
const UIKitSettings = new UIKitSettingsBuilder()
  .setAppId(COMETCHAT_CONSTANTS.APP_ID)
  .setRegion(COMETCHAT_CONSTANTS.REGION)
  .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
  .subscribePresenceForAllUsers()
  .build();

// //Initialize CometChat UI Kit
CometChatUIKit.init(UIKitSettings)
.then(() => {
  console.log("Initialization completed successfully");
  // You can now call login function.
})
.catch(console.log);

ReactDOM.render(
  <React.StrictMode>
    <CometChatUsersWithMessages />
  </React.StrictMode>,
  document.getElementById('root')
);