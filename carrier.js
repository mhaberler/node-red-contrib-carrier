module.exports = function (RED) {
  c = require("carrier");

  function CarrierNode(config) {
    RED.nodes.createNode(this, config);
    const { PassThrough } = require("stream");

    var node = this;
    const mockedStream = new PassThrough();

    var lines = c.carry(mockedStream);

    lines.on("line", function (line) {
      node.send({ payload: line, topic: "line" });
    });

    node.on("input", function (msg) {
      mockedStream.emit("data", msg.payload);
    });
  }
  RED.nodes.registerType("carrier", CarrierNode);
};
