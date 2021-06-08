import InfoService from './info';
import { RequestCompare, ResponseCompare, StockInfoCompare } from '../interface/interface'

class CompareService {
  public async execute({ stock_name, stocks }: RequestCompare): Promise<ResponseCompare> {
    const stockInfoService = new InfoService();
    const lastPrices: StockInfoCompare[] = [];
    const mainStockPrice = await stockInfoService.execute({ stock_name });
    lastPrices.push(mainStockPrice);

    for (const stock of stocks) {
      const lastPrice = await stockInfoService.execute({ stock_name: stock });
      lastPrices.push(lastPrice);
    }

    return {
      lastPrices,
    };
  }
}

export default CompareService;