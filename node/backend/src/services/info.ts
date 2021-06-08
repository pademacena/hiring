import api from './api';
import { RequestInfo, ResponseInfo } from '../interface/interface';
import SrvError from '../error/srvError';
import 'dotenv/config';

class InfoService {
  public async execute({ stock_name }: RequestInfo): Promise<ResponseInfo> {
    const { data } = await api.get('/query', {
      params: {
        symbol: stock_name,
        function: 'GLOBAL_QUOTE',
        apikey: process.env.API_KEY,
      },
    });

    const {
      'Global Quote': { '01. symbol': name, '05. price': price },
    } = data;

    if (!name && !price) {
      throw new SrvError('Stock info not found');
    }

    return {
      name,
      lastPrice: Number(price),
      priceAt: new Date().toISOString(),
    };
  }
}

export default InfoService;