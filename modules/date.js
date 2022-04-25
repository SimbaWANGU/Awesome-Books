import DateTime from '../node_modules/luxon/src/datetime.js';
import { time } from './declarations.js';

const timeNow = () => {
  time.innerHTML = `${DateTime.now().toLocaleString(DateTime.DATETIME_MED)}`;
};

export default timeNow;