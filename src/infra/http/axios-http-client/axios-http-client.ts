import axios from 'axios';

import {
  HttpPostParams,
  HttpResponse,
  IHttpPostClient,
} from '@/data/protocols/http';

/**
 * Design pattern Adapter
 * Adaptando HttpPostClient e axios
 */
export class AxiosHttpClient implements IHttpPostClient<any, any> {
  // eslint-disable-next-line class-methods-use-this
  async post(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    const httpResponse = await axios.post(params.url, params.body);

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }
}
