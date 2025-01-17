export interface Order {
  price: number,
  size: number,
}
export interface Row{
  price_abc: number,
  price_def:number,
  ratio:number,
  timestamp: Date,
  upper_bound:number,
  lower_bound:number,
  trigger_alert: number | undefined,
}
export interface ServerRespond {
  stock: string,
  top_bid: Order,
  top_ask: Order,
  timestamp: Date,
}

class DataStreamer {
  static API_URL: string = 'http://localhost:8080/query?id=1';

  static getData(callback: (data: ServerRespond[]) => void): void {
    const request = new XMLHttpRequest();
    request.open('GET', DataStreamer.API_URL, false);

    request.onload = () => {
      if (request.status === 200) {
        callback(JSON.parse(request.responseText));
      } else {
        alert ('Request failed');
      }
    }

    request.send();
  }
}

export default DataStreamer;