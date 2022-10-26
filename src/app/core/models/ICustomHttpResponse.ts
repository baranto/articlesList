import {HttpHeaders} from '@angular/common/http';

export interface ICustomHttpResponse<T> {
  body: T;
  headers: HttpHeaders;
  ok: boolean;
  status: number;
  statusText: string;
  type: string;
  url: string;
}
