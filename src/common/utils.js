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
  getDateTime() {
    const oneDayMs = 24 * 60 * 60 * 1000;
    const today = new Date().setHours(0, 0, 0, 0);
    const defaultStartDate = today - oneDayMs * 30;
    return {
      oneTimes: oneDayMs,
      today,
      defaultStartDate,
      // yesterday: today,
      yesterday: new Date(today).getTime() - oneDayMs,
      defaultSNDate: [
        new Date(defaultStartDate), new Date(new Date(today).getTime() - oneDayMs),
      ],
    };
  },
  getUrlParams(key) {
    const search = window.location.search.slice(1);
    const arr = search.split('&');
    const obj = {};
    arr.map((item) => {
      const [k, v] = item.split('=');
      obj[k] = v;
    });
    return obj[key] || '';
  },
  compareVersion(v1, v2) {
    v1 = v1.split('.');
    v2 = v2.split('.');
    const len = Math.max(v1.length, v2.length);
    while (v1.length < len) {
      v1.push('0');
    }
    while (v2.length < len) {
      v2.push('0');
    }
    for (let i = 0; i < len; i++) {
      const num1 = parseInt(v1[i]);
      const num2 = parseInt(v2[i]);
      if (num1 > num2) {
        return 1;
      } if (num1 < num2) {
        return -1;
      }
    }
    return 0;
  },
  numToWan(num) {
    return `${(+num / 10000).toFixed(1)}万`;
  },
  checkData(rule, value, callback) {
    if (value) {
      if (/[\u4e00-\u9fa5/\s+/]/ig.test(value)) {
        callback(new Error('只能输入英文、数字、下划线，特殊符号!'));
      } else {
        callback();
      }
    }
    callback();
  },
  checkChineseData(rule, value, callback) {
    if (value) {
      if (/[^\u4E00-\u9FA5]/g.test(value)) {
        callback(new Error('只能输入中文!'));
      } else {
        callback();
      }
    }
    callback();
  },
  checkUnderlineData(rule, value, callback) {
    if (value) {
      const reg = new RegExp('^[A-Za-z_]+$');
      if (!reg.test(value)) {
        callback(new Error('只能输入英文、下划线'));
      } else {
        callback();
      }
    }
    callback();
  },
  checkUnderlineDollarData(rule, value, callback) {
    if (value) {
      const reg = new RegExp('^[A-Za-z_$]+$');
      if (!reg.test(value)) {
        callback(new Error('只能输入英文、下划线'));
      } else {
        callback();
      }
    }
    callback();
  },
  checkDollarData(rule, value, callback) {
    if (value) {
      if (value.indexOf('$') !== 0) {
        callback(new Error('全局属性或事件必须以$开头'));
      } else {
        callback();
      }
    }
    callback();
  },

};
