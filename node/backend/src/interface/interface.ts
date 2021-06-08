export interface RequestCompare {
  stock_name: string;
  stocks: string[];
}

export interface StockInfoCompare {
  name: string;
  lastPrice: number;
  priceAt: string;
}

export interface ResponseCompare {
  lastPrices: StockInfoCompare[];
}

export interface RequestGains {
  stock_name: string;
  purchasedAmount: number;
  purchasedAt: string;
}

export interface ResponseGains {
  name: string;
  purchasedAmount: number;
  purchasedAt: string;
  priceAtDate: number;
  lastPrice: number;
  capitalGains: number;
}

export interface RequestInfo {
  stock_name: string;
}

export interface ResponseInfo {
  name: string;
  lastPrice: number;
  priceAt: string;
}

export interface RequestHistory {
  stock_name: string;
  from: string;
  to: string;
}

export interface PriceHistory {
  opening: number;
  low: number;
  high: number;
  closing: number;
  pricedAt: string;
}

export interface ResponseHistory {
  name: string;
  prices: PriceHistory[];
}