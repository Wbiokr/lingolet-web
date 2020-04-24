import {Common} from './common';

export interface Res extends Common {
  list: any[];
}

export interface Err extends Common {
  errorMsg: string;
  errorCode: number;
  result: number; 
}

export interface Any { 
  [prop: string]: any;
}
