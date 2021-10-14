const setStyle = (obj, json) => {
  for (const i in json) {
    obj.style[i] = json[i];
  }
};

export default {
  setStyle,
  /* 设置 cookie */
  setCookie(name, value, params = {}) {
    let stringifiedAttributes = '';

    // 过期时间
    if (typeof params.expires === 'number') {
      const date = new Date();
      date.setDate(date.getDate() + params.expires);
      stringifiedAttributes += `;expires=${date}`;
    }

    // path
    const path = params.path ? params.path : '/';
    stringifiedAttributes += `;path=${path}`;

    // domain
    if (params.domain) {
      stringifiedAttributes += `;domain=${params.domain}`;
    }

    document.cookie = `${name}=${value}${stringifiedAttributes}`;
  },
  /* 获取 cookie */
  getCookie(name) {
    const arr = document.cookie.replace(/\s/g, '').split(';');
    for (let i = 0; i < arr.length; i++) {
      const tempArr = arr[i].split('=');
      if (tempArr[0] === name) {
        return decodeURIComponent(tempArr[1]);
      }
    }
    return '';
  },
  /* 删除 cookie */
  removeCookie(name, params = {}) {
    // 设置已过期，系统会立刻删除cookie
    params.expires = -1;
    this.setCookie(name, '', params);
  },

};
