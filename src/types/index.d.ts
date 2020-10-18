export interface Introduction {
  readonly title: string;
  readonly list: {
    readonly align: string;
    readonly avatar: any;
    readonly name: string;
    readonly text: string;
  }[];
}

export type QuestionValue = number | number[]
export interface QuestionOpt {
  readonly title: string;
  readonly score: Array<string>;
}

export interface Question {
  readonly title: string;
  readonly multiple?: boolean;
  value?: QuestionValue;
  readonly options: QuestionOpt[];
}

export interface TGroup {
  readonly top?: boolean;
  readonly name: string;
  readonly logo: any;
  readonly qq: number;
  readonly joinLink: string;
  readonly factor: string[];
  readonly comment: string;
  readonly introduction: string;
  readonly desc: string;
  readonly parts: string[];
}
