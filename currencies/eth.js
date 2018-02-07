// Generated by CoffeeScript 2.2.0
var ETH;

ETH = class ETH {
  constructor() {
    this.ws = null;
    this.socketUrl = "ws://ethersocket.herokuapp.com";
  }

  start(txCb, blockCb) {
    if (this.ws) {
      this.stop();
    }
    this.ws = new WebSocket(this.socketUrl);
    return this.ws.onmessage = ({data}) => {
      data = JSON.parse(data);
      if (data.type === 'tx') {
        return typeof txCb === "function" ? txCb({
          amount: data.ethers,
          fee: data.fee,
          link: 'https://etherscan.io/tx/' + data.hash,
          recipients: [data.to]
        }) : void 0;
      } else {
        return typeof blockCb === "function" ? blockCb(data) : void 0;
      }
    };
  }

  stop() {
    this.ws.close();
    return this.ws = null;
  }

};

//# sourceMappingURL=eth.js.map