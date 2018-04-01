import moment from 'moment';

export const getAge = (dateOfBirth) => {
  return moment().diff(dateOfBirth, 'years', false);
  // e.g. getAge("1983-04-26");
}


