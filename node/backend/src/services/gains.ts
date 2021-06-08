import api from './api';
import InfoService from './info';
import {RequestGains, ResponseGains} from '../interface/interface';
import SrvError from '../error/srvError';
import 'dotenv/config';

class GainsService {
  public async execute({
    stock_name,
    purchasedAmount,
    purchasedAt,
  }: RequestGains): Promise<ResponseGains> {
    const { data } = await api.get('/query', {
      params: {
        symbol: stock_name,
        function: 'TIME_SERIES_DAILY',
        outputsize: 'full',
        apikey: process.env.API_KEY,
      },
    });

    const { 'Time Series (Daily)': stockDates } = data;
    const stockAtDate = stockDates[purchasedAt];

    if (!stockAtDate) {
      throw new SrvError(
        'Stock information was not found at specific date parameter',
      );
    }

    const { '4. close': closing } = stockAtDate;
    const priceAtDate = Number(closing);
    const totalAtDate = purchasedAmount * priceAtDate;
    const stockInfoService = new InfoService();
    const { lastPrice } = await stockInfoService.execute({ stock_name });
    const totalAtMoment = purchasedAmount * lastPrice;
    const capitalGains = totalAtMoment - totalAtDate;

    return {
      name: stock_name,
      purchasedAmount,
      purchasedAt,
      priceAtDate,
      lastPrice,
      capitalGains,
    };
  }
}

export default GainsService;