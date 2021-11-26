import axios from 'axios';
import miniProgramAdapter from 'axios-miniprogram-adapter';

if (
  // browser
  typeof XMLHttpRequest === 'undefined' &&
  // node
  (typeof process === 'undefined' ||
    Object.prototype.toString.call(process) !== '[object process]')
) {
  axios.defaults.adapter = miniProgramAdapter;
}
