import { TronWeb } from "tronweb";

export const tronWeb: any = new TronWeb({
  fullHost: 'https://api.trongrid.io',
  solidityNode: 'https://api.trongrid.io',
  eventServer: 'https://api.trongrid.io',
});
(window as any).tronWeb1 = tronWeb;