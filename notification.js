class Notification {
  constructor(options) {
    this.height = options.height || 10;
    this.width = options.width || 20;
  }
  getHeight () {
    return this.height;
  }
  getWidth () {
    return this.width;
  }
}

export default Notification;