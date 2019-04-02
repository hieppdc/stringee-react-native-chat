const clientEvents = {
  ios: {
    onConnect: "didConnect",
    onDisConnect: "didDisConnect",
    onFailWithError: "didFailWithError",
    onRequestAccessToken: "requestAccessToken",
    onIncomingCall: "incomingCall",
    onCustomMessage: "didReceiveCustomMessage",
    onObjectChange: "objectChangeNotification"
  },
  android: {
    onConnect: "onConnectionConnected",
    onDisConnect: "onConnectionDisconnected",
    onFailWithError: "onConnectionError",
    onRequestAccessToken: "onRequestNewToken",
    onIncomingCall: "onIncomingCall",
    onCustomMessage: "onCustomMessage",
    onObjectChange: "onChangeEvent"
  }
};

const callEvents = {
  ios: {
    onChangeSignalingState: "didChangeSignalingState",
    onChangeMediaState: "didChangeMediaState",
    onReceiveLocalStream: "didReceiveLocalStream",
    onReceiveRemoteStream: "didReceiveRemoteStream",
    onReceiveDtmfDigit: "didReceiveDtmfDigit",
    onReceiveCallInfo: "didReceiveCallInfo",
    onHandleOnAnotherDevice: "didHandleOnAnotherDevice"
  },
  android: {
    onChangeSignalingState: "onSignalingStateChange",
    onChangeMediaState: "onMediaStateChange",
    onReceiveLocalStream: "onLocalStream",
    onReceiveRemoteStream: "onRemoteStream",
    onReceiveDtmfDigit: "onDTMF",
    onReceiveCallInfo: "onCallInfo",
    onHandleOnAnotherDevice: "onHandledOnAnotherDevice"
  }
};

const roomEvents = {
  ios: {
    onRoomConnect: "didRoomConnect",
    onRoomDisConnect: "didRoomDisConnect",
    onRoomError: "didRoomError",
    onStreamAdd: "didStreamAdd",
    onStreamRemove: "didStreamRemove"
  },
  android: {
    onRoomConnect: "onRoomConnected",
    onRoomDisConnect: "onRoomDisconnected",
    onRoomError: "onRoomError",
    onStreamAdd: "onStreamAdded",
    onStreamRemove: "onStreamRemoved"
  }
};

export type RNStringeeEventCallback = (
  status: boolean,
  code: int,
  message: string
) => void;

export { clientEvents, callEvents, roomEvents };
