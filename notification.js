class Notification {
  constructor(options) {
    this.height = options.height || '100px';
    this.width = options.width || '200px';
    this.background = options.background || 'red';
    this.color = options.color || 'white';
    this.position = options.position || 'absolute';
    this.top = options.top || '10px';
    this.right = options.right || '10px';
    this.left = options.left || '10px';
  }
  getHeight () {
    return this.height;
  }
  getWidth () {
    return this.width;
  }
  getStyles () {
    return `width:${this.width};height:${this.height};background:${this.background};color:${this.color}`;
  }
  getBox () {
    document.getElementById('app').innerHTML =
      `<div style="${this.getStyles()}">Hello Aldo</div>`;
    return;
  }
}

export default Notification;