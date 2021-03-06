class Erigers {
  constructor(options) {
    this.height = options.height || '70px';
    this.width = options.width || '200px';
    this.background = options.background || 'red';
    this.color = options.color || 'white';
    this.position = options.position || 'absolute';
    this.top = options.top || '10px';
    this.right = options.right || '10px';
    this.left = options.left || '10px';
    this['padding-top'] = options['padding-top'] || '20px';
    this.message = options.message || 'Notification Box';
    this.className = options.className || 'erigers-notification'
  }

  getStyles () {
    return {
      width: this.width,
      height: this.height,
      background: this.background,
      color: this.color,
      position: this.position,
      top: this.top,
      right: this.right,
      'padding-top': this['padding-top'],
      'text-align': 'center',
      'box-sizing': 'border-box'
    };
  }

  getMessage () {
    return this.message;
  }

  returnNotification () {
    const div = document.createElement('div');
    div.className = this.className;
    div.innerText = this.getMessage();
    Object.assign(div.style, this.getStyles());
    document.getElementById('app').appendChild(div);
    return;
  }

  notify (options) {
    for (let key in options) {
      if (options.hasOwnProperty(key)) {
        this[key] = options[key];
      }
    }
    return this.returnNotification();
  }
}

export default new Erigers({});