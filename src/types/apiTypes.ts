export interface BaseRequest {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
}
export interface request<T> extends BaseRequest {
  data: T;
}

export interface errorResponse {
  status: string;
  message: string;
}