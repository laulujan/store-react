import { UserErrors } from '../redux/types'
export const isThereAnyError = (errors: UserErrors) => {
  const reducer = (previous: boolean, current: boolean) => previous || current;
  return (Object.values(errors)).reduce(reducer);
};