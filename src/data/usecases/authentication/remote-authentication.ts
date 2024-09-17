import { IHttpPostClient } from '@/data/protocols/https/http-post-client';

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient,
  ) {
    // eslint-disable-next-line no-console
    console.log('Remove eslint warning');
  }

  async auth(): Promise<void> {
    await this.httpPostClient.post({ url: this.url });
  }
}
