const apiKey = 'GaZl6ARXu_AkbrblodSKST2DcrjJ9jqF';

let stockChart;

async function getData(ticker, days) {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - days);

  const startDateString = startDate.toISOString().split('T')[0];
  const endDateString = endDate.toISOString().split('T')[0];

  const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${startDateString}/${endDateString}?apiKey=${apiKey}`;

  const stockData = await fetch(url).then((res) => res.json());
  return stockData;
}

async function populateChart() {
  const ticker = document.getElementById('stockInput').value.toUpperCase();
  const days = parseInt(document.getElementById('list-of-days').value);

  const stockData = await getData(ticker, days);

  if (!stockData.results || stockData.results.length === 0) {
    alert('No data found for the given ticker and date range.');
    return;
  }

  const labels = stockData.results.map((result) =>
    new Date(result.t).toLocaleDateString()
  );
  const costData = stockData.results.map((result) => result.c);

  if (stockChart) {
    stockChart.destroy();
  }

  const ctx = document.getElementById('myChart').getContext('2d');
  stockChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: `${ticker} Closing Prices`,
          data: costData,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Date',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Closing Price (USD)',
          },
        },
      },
    },
  });
}

async function populateTop5Stocks() {
  const url = 'https://apewisdom.io/api/v1.0/filter/all-stocks/page/4';

  try {
    const redditData = await fetch(url).then((res) => res.json());
    console.log(redditData);

    if (!redditData.results || redditData.results.length === 0) {
      console.error('No results from ApeWisdom');
      return;
    }

    const top5Stocks = redditData.results.slice(0, 5);
    console.log(top5Stocks);

    let tableHTML =
      '<tr><th>Ticker</th><th>Comment Count</th><th>Sentiment</th></tr>';

    top5Stocks.forEach((stock) => {
      const mentions = stock.mentions;
      const upvotes = Number(stock.upvotes);

      let sentimentIcon =
        upvotes > 1
          ? '<img src="https://imagedelivery.net/4-5JC1r3VHAXpnrwWHBHRQ/589fd70e-dfe5-498a-d9b4-a9363fdd7e00/w=430,h=242,fit=cover" class="sentiment-icon" alt="Bullish">'
          : '<img src="https://investmentu.com/wp-content/uploads/2022/03/bearish-stocks.jpg" class="sentiment-icon" alt="Bearish">';

      tableHTML += `
          <tr>
            <td>
              <a href="https://finance.yahoo.com/quote/${stock.ticker}" target="_blank">
                ${stock.ticker}
              </a>
            </td>
            <td>${mentions}</td>
            <td>${sentimentIcon}</td>
          </tr>
        `;
    });

    document.getElementById('topStocksTable').innerHTML = tableHTML;
  } catch (error) {
    console.error('Error fetching ApeWisdom data:', error);
  }
}

window.onload = () => {
  populateTop5Stocks();
  console.log('Annyang loaded');
};
