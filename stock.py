import requests
from django.conf import settings

def get_stock_price(symbol):
    url = f"https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={symbol}&interval=5min&apikey={settings.ALPHA_VANTAGE_API_KEY}"
    response = requests.get(url)
    data = response.json()
    latest_record = list(data['Time Series (5min)'].values())[0]
    return latest_record['4. close']
