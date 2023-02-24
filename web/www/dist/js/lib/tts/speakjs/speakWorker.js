if('function' === typeof importScripts) {
  importScripts('speakGenerator.js');
  var self = this;
  self.addEventListener('message', (event) => {
    postMessage(generateSpeech(event.data.text, event.data.args));
  });
}
