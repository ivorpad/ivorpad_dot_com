import moment from 'moment';
import axios from 'axios';

export const getAge = (dateOfBirth) => {
  return moment().diff(dateOfBirth, 'years', false);
  // e.g. getAge("1983-04-26");
}

export const getData = async (url) => await axios.get(url, { crossdomain: true });

