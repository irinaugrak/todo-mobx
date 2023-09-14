export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export interface IShow {
  [key: string]: string,
  showAll: string,
  onlyDone: string,
  onlyNotDone: string
}

export interface ILang {
  [key: string]: string,
  en: string,
  ru: string,
}

export interface IEnum {
  value: string,
  text: string
}





