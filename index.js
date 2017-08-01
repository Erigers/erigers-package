import Notification from './notification.js';
const notification = new Notification({height: 15});
(function() {
  console.log(notification.getWidth());
  console.log(notification.getHeight());
})();