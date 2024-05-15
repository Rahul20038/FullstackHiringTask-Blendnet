import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface StockPrice {
    symbol: string;
    price: string;
}

const Dashboard: React.FC = () => {
    const [stocks, setStocks] = useState<StockPrice[]>([]);

    useEffect(() => {
        // Fetch stocks data
        axios.get('/api/stocks')
            .then(response => setStocks(response.data))
            .catch(error => console.error('Error fetching stock data', error));
    }, []);

    return (
        <div>
            {stocks.map(stock => (
                <div key={stock.symbol}>{stock.symbol}: ${stock.price}</div>
            ))}
        </div>
    );
};

export default Dashboard;
