import { DEFAULT_TRUNCATE_LENGTH } from '../constants/strings';

export function truncate(str: string, length?: number) {
  if(!length) {
    length = DEFAULT_TRUNCATE_LENGTH;
  }
  
  return str.length > length ? str.slice(0, length) + '...': str;
}
