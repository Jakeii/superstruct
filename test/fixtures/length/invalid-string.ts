import { string, length } from '../../..'

export const Struct = length(string(), 1, 5)

export const data = ''

export const error = {
  value: '',
  type: 'string & Length<1,5>',
  path: [],
  branch: [data],
}
