export interface Common {
  [prop: string]: any;
}

export interface Action extends Common {
  type: string;
}

export interface Route extends Common {
  name: string;
  path: string;
}

export interface Key extends Common {
  name: string;
  value: string | number;
}

export interface Claim {
  readonly value: string | number;
  readonly content: string;
  readonly title?: string;
  icon?: string;
}