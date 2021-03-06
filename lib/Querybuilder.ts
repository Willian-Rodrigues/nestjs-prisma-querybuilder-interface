import { stringify } from 'qs';
import { Query } from './Query';

export function QueryString(query: Query): string {
  return stringify(query);
}
