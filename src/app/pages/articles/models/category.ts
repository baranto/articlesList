import {ILanguage} from "./ILanguage";

export class Category {
  _id: string;
  code: string;
  name: ILanguage;
  url: ILanguage;
  title: ILanguage;
  description: ILanguage;
  __v: number;
  updatedAt: Date;
  updated_by: string;
  id: string;


  constructor(_id: string, code: string, name: ILanguage, url: ILanguage, title: ILanguage, description: ILanguage,
              _v: number, updatedAt: Date, updated_by: string, id: string) {
    this._id = _id;
    this.code = code;
    this.name = name;
    this.url = url;
    this.title = title;
    this.description = description;
    this.__v = _v;
    this.updatedAt = updatedAt;
    this.updated_by = updated_by;
    this.id = id;
  }
}
