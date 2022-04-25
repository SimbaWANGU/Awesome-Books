import DateTime from '../node_modules/luxon/src/datetime.js';
import { time } from '../index.js'; /* eslint-disable-line */

const timeNow = () => {
  time.innerHTML = `${DateTime.now().toLocaleString(DateTime.DATE_MED)}`;
};

export default timeNow;