const PubSub = {
 publish: function (channel, payload) {
   console.log(`PUBLISHED ON ${channel}`);
   const event = new CustomEvent(channel, {
     detail: payload
   });
   document.dispatchEvent(event);
 },

 subscribe: function (channel, callback) {
   console.log(`SUBSCRIBED ON ${channel}`);
   document.addEventListener(channel, callback);
 }
};

module.exports = PubSub;
