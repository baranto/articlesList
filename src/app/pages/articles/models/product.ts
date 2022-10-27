import {ILanguage} from "./ILanguage";
import {Category} from "./category";

  export interface MaxValues {
    s: number;
    b?: any;
  }

  export interface MinValues {
    s: number;
    a: number;
    b: number;
    h: number;
  }

  export interface Properties {
    maxValues: MaxValues;
    minValues: MinValues;
    glue_dots: number;
  }

  export interface MaterialCategory {
    active: boolean;
    _id: string;
    code: string;
    name_it: string;
    name_en: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    name_de: string;
    name_es: string;
    name_fr: string;
    updated_by: string;
    id: string;
    created_by: string;
  }

  export interface DimensionBoundary {
    _id: string;
    minA: number;
    minB: number;
    minH: number;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    materialCategory: MaterialCategory;
    id: string;
  }

  export interface UpdatedBy {
    isActive: boolean;
    blocked: boolean;
    roles: string[];
    _id: string;
    username?: any;
    registrationToken?: any;
    firstname: string;
    lastname: string;
    email: string;
    __v: number;
    password: string;
    preferedILanguage: string;
    id: string;
  }

  export class Product {
    deleted?: boolean;
    availabilityCheck?: boolean;
    custom?: boolean;
    active?: boolean;
    categories?: Category[];
    mockupImages?: any[];
    _id?: string;
    code?: string;
    model?: string;
    variant?: string;
    properties?: Properties;
    url?: ILanguage;
    mockup?: string;
    dieline?: string;
    title?: ILanguage;
    description?: ILanguage;
    variantName?: ILanguage;
    pictures?: any[];
    previews?: string[];
    __v?: number;
    metaDescription?: ILanguage;
    metaTitle?: ILanguage;
    createdAt?: Date;
    dimensionBoundaries?: DimensionBoundary[];
    updatedAt?: Date;
    defaultDimensionA?: number;
    defaultDimensionB?: number;
    defaultDimensionH?: number;
    updated_by?: UpdatedBy;
    id?: string;
    modelName?: ILanguage;

    constructor(_id?: string, deleted?: boolean, availabilityCheck?: boolean, custom?: boolean, active?: boolean, categories?: Category[], mockupImages?: any[], code?: string, model?: string, variant?: string, properties?: Properties, url?: ILanguage, mockup?: string, dieline?: string, title?: ILanguage, description?: ILanguage, variantName?: ILanguage, pictures?: any[], previews?: string[], _v?: number, metaDescription?: ILanguage, metaTitle?: ILanguage, createdAt?: Date, dimensionBoundaries?: DimensionBoundary[], updatedAt?: Date, defaultDimensionA?: number, defaultDimensionB?: number, defaultDimensionH?: number, updated_by?: UpdatedBy, id?: string, modelName?: ILanguage) {
      this._id = _id;
      this.deleted = deleted;
      this.availabilityCheck = availabilityCheck;
      this.custom = custom;
      this.active = active;
      this.categories = categories;
      this.mockupImages = mockupImages;
      this.code = code;
      this.model = model;
      this.variant = variant;
      this.properties = properties;
      this.url = url;
      this.mockup = mockup;
      this.dieline = dieline;
      this.title = title;
      this.description = description;
      this.variantName = variantName;
      this.pictures = pictures;
      this.previews = previews;
      this.__v = _v;
      this.metaDescription = metaDescription;
      this.metaTitle = metaTitle;
      this.createdAt = createdAt;
      this.dimensionBoundaries = dimensionBoundaries;
      this.updatedAt = updatedAt;
      this.defaultDimensionA = defaultDimensionA;
      this.defaultDimensionB = defaultDimensionB;
      this.defaultDimensionH = defaultDimensionH;
      this.updated_by = updated_by;
      this.id = id;
      this.modelName = modelName;
    }


  }

