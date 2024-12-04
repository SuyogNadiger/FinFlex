import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

const topics = [
  {
    mainHeading: "Fundamentals of Investing",
    subtopics: [
      {
        title: "What Is Investing?",
        content:
          "Investing is the act of allocating money to an asset, like stocks, bonds, or real estate, with the expectation that it will grow over time. The goal is to generate a return on the initial investment, either through income or capital appreciation, thereby increasing wealth over the long term.",
      },
      {
        title: "Why Start Investing Early?",
        content:
          "Starting to invest early allows you to take advantage of compound interest, where your investments generate earnings that are reinvested to create additional earnings. The longer your money stays invested, the more time it has to grow, which can lead to significantly larger returns in the future.",
      },
      {
        title: "Financial Independence and Goal-Based Investing",
        content:
          "Goal-based investing focuses on achieving specific financial goals such as buying a house, funding education, or retirement. Financial independence refers to having enough income from your investments to support your lifestyle without needing active work, often achieved through strategic long-term investing.",
      },
      {
        title: "Understanding Risk Tolerance",
        content:
          "Risk tolerance refers to the level of risk an individual is willing to take with their investments. It varies from person to person and is influenced by factors such as age, income, financial goals, and personal comfort with market volatility. Understanding risk tolerance is key to creating a balanced portfolio.",
      },
      {
        title: "Asset Classes",
        content:
          "Asset classes are categories of investments with similar characteristics and behaviors. The major asset classes include stocks, bonds, real estate, and commodities. Each class has different levels of risk and return, and diversifying across multiple asset classes can reduce overall portfolio risk.",
      },
    ],
  },
  {
    mainHeading: "Stock Market Essentials",
    subtopics: [
      {
        title: "What Is the Stock Market?",
        content:
          "The stock market is a public marketplace where individuals and institutions can buy and sell shares of publicly listed companies. It allows businesses to raise capital by offering shares to the public, while providing investors opportunities to share in a company's growth and profits.",
      },
      {
        title: "Types of Markets",
        content:
          "There are two main types of markets in the stock market: the primary market, where new shares are issued to the public via initial public offerings (IPOs), and the secondary market, where existing shares are bought and sold between investors, typically through exchanges like the NYSE or NASDAQ.",
      },
      {
        title: "Stock Market Indices",
        content:
          "Stock market indices, such as the S&P 500 and Dow Jones Industrial Average, track the performance of a group of stocks. These indices are used as benchmarks to measure the overall health of the market or specific sectors, and are often used to gauge investment performance.",
      },
      {
        title: "Understanding Stock Prices",
        content:
          "Stock prices are determined by supply and demand in the market. Factors influencing stock prices include company performance, economic indicators, investor sentiment, and news. A rise in demand for a company's shares leads to a higher price, while low demand can lead to a price decrease.",
      },
      {
        title: "Types of Stocks",
        content:
          "Stocks can be categorized into different types, such as common stocks, which give shareholders voting rights, and preferred stocks, which provide fixed dividends. Additionally, stocks are often classified by market capitalization: large-cap, mid-cap, and small-cap stocks, each with different risk profiles.",
      },
      {
        title: "The Role of Stock Exchanges",
        content:
          "Stock exchanges, such as the NYSE and NASDAQ, serve as platforms where buyers and sellers can transact shares of publicly traded companies. They facilitate the efficient exchange of securities and provide liquidity, transparency, and regulatory oversight to ensure fair trading practices.",
      },
      {
        title: "Bulls vs. Bears",
        content:
          "The terms 'bull market' and 'bear market' refer to market trends. A bull market is characterized by rising stock prices, while a bear market is defined by declining prices. These terms also refer to investor sentiment, with bulls being optimistic about price increases, and bears being pessimistic.",
      },
    ],
  },
  {
    mainHeading: "Core Investment Strategies",
    subtopics: [
      {
        title: "The Buy-and-Hold Strategy",
        content:
          "The buy-and-hold strategy involves purchasing assets and holding them for the long term, regardless of market fluctuations. This strategy is based on the belief that, over time, the value of investments will increase, and short-term market volatility will not significantly impact long-term returns.",
      },
      {
        title: "Value Investing",
        content:
          "Value investing is a strategy where investors seek stocks that are undervalued based on their intrinsic value. These stocks typically trade at a lower price than their actual worth, providing an opportunity for long-term growth as the market eventually corrects the price.",
      },
      {
        title: "Growth Investing",
        content:
          "Growth investing focuses on purchasing stocks of companies with high potential for future growth. These companies typically reinvest their profits into expanding their business rather than paying dividends. Growth investing tends to be higher risk, but it offers the potential for high returns over time.",
      },
      {
        title: "Dollar-Cost Averaging",
        content:
          "Dollar-cost averaging is a strategy where an investor regularly invests a fixed amount of money into a particular asset or portfolio, regardless of market conditions. This approach reduces the impact of market volatility and avoids trying to time the market, helping to lower the average cost per share over time.",
      },
      {
        title: "Diversification",
        content:
          "Diversification is the practice of spreading investments across various asset classes, sectors, or geographic regions to reduce risk. By holding a variety of investments, you lower the impact of any one investment's poor performance on your overall portfolio, helping to stabilize returns.",
      },
      {
        title: "Portfolio Allocation",
        content:
          "Portfolio allocation refers to the process of distributing investments across different asset classes, such as stocks, bonds, and real estate, based on an investor's risk tolerance and financial goals. Proper allocation helps to manage risk while seeking optimal returns for the investor's circumstances.",
      },
      {
        title: "Risk-Adjusted Returns",
        content:
          "Risk-adjusted returns measure how much return an investment has generated relative to the amount of risk taken. Common metrics include the Sharpe ratio and the Sortino ratio, which help investors compare different investments or strategies based on both their returns and risks.",
      },
      {
        title: "Active vs. Passive Investing",
        content:
          "Active investing involves selecting individual stocks or assets in an attempt to outperform the market, often with the help of a fund manager. Passive investing, on the other hand, aims to match market performance by investing in index funds or ETFs that track the performance of a market index.",
      },
    ],
  },
  {
    mainHeading: "Advanced Topics",
    subtopics: [
      {
        title: "Fundamental Analysis",
        content:
          "Fundamental analysis is the process of evaluating a company's financial health, industry position, and economic factors to estimate its intrinsic value. Analysts use metrics like earnings per share, revenue, and debt-to-equity ratios to determine whether a stock is undervalued or overvalued.",
      },
      {
        title: "Technical Analysis",
        content:
          "Technical analysis involves studying historical market data, such as stock prices and volume, to forecast future price movements. By using charts and indicators like moving averages or RSI (Relative Strength Index), traders aim to identify patterns and trends that can indicate potential buy or sell opportunities.",
      },
      {
        title: "Behavioral Finance",
        content:
          "Behavioral finance studies how psychological factors and emotions influence investor decisions. It suggests that investors often act irrationally due to biases like herd behavior, overconfidence, or loss aversion, which can lead to market inefficiencies and create opportunities for those who recognize these biases.",
      },
      {
        title: "Derivatives Trading",
        content:
          "Derivatives are financial contracts whose value is derived from an underlying asset, such as options or futures. Derivatives are used to hedge risks or speculate on price movements. However, they can be highly complex and risky, requiring a solid understanding of the underlying assets.",
      },
      {
        title: "Algorithmic Trading",
        content:
          "Algorithmic trading involves using computer programs to execute trades based on predefined criteria. This allows traders to capitalize on market opportunities at high speed and with precision. Algorithmic trading is commonly used by institutional investors for high-frequency trading and arbitrage strategies.",
      },
      {
        title: "Margin Trading",
        content:
          "Margin trading allows investors to borrow funds from a broker to trade larger positions than their available capital. While this can amplify potential profits, it also increases the risk of significant losses, as investors are required to repay the borrowed funds regardless of market outcomes.",
      },
      {
        title: "Short Selling",
        content:
          "Short selling involves borrowing shares of a stock to sell them, with the expectation that the price will decrease. The investor plans to buy back the shares at a lower price, return them to the lender, and pocket the difference. Short selling is risky, as losses can be theoretically unlimited.",
      },
    ],
  },
  {
    mainHeading: "Wealth Preservation and Advanced Concepts",
    subtopics: [
      {
        title: "Tax-Efficient Investing",
        content:
          "Tax-efficient investing involves strategies to minimize taxes on investment returns. This includes holding investments in tax-advantaged accounts, such as IRAs, using tax-loss harvesting, or selecting investments that generate long-term capital gains, which are taxed at a lower rate than short-term gains.",
      },
      {
        title: "Estate Planning",
        content:
          "Estate planning is the process of organizing and managing your assets to ensure that they are distributed according to your wishes after your death. This includes setting up wills, trusts, and other legal instruments, as well as minimizing estate taxes to ensure wealth preservation for future generations.",
      },
      {
        title: "Sustainable Investing",
        content:
          "Sustainable investing focuses on aligning investment decisions with environmental, social, and governance (ESG) factors. It seeks to generate positive social or environmental impacts while still achieving financial returns, making it an increasingly popular approach for socially-conscious investors.",
      },
    ],
  },
];

const Documentation = () => {
  return (
    <div className="exo-2-text flex justify-center min-h-screen bg-gradient-to-br from-slate-900 to-black text-white">
      {/* Index Sidebar */}
      <div className="w-1/5 bg-gray-950 p-4 sticky top-0 h-screen overflow-y-auto">
        <Link to="/dashboard">
          <img
            src="/logo_white_png.png"
            alt="Logo"
            className="w-15 h-10 shadow-sm bg-transparent mb-6 cursor-pointer"
          />
        </Link>
        <h2 className="text-lg font-bold mb-4">Index</h2>
        <ul className="space-y-4">
          {topics.map((topic, index) => (
            <li key={index}>
              <a
                href={`#${topic.mainHeading.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                {topic.mainHeading}
              </a>
              <ul className="mt-2 ml-4 space-y-2">
                {topic.subtopics.map((subtopic, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${subtopic.title.replace(/\s+/g, "-").toLowerCase()}`}
                      className="text-gray-300 hover:text-gray-500"
                    >
                      {subtopic.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* Documentation Content */}
      <div className="w-4/5 p-8">
        <h1 className="text-4xl font-bold mb-16 mt-6 montserrat flex justify-center">The Comprehensive Guide to Investing</h1>
        {topics.map((topic, index) => (
          <div
            key={index}
            id={topic.mainHeading.replace(/\s+/g, "-").toLowerCase()}
            className="mb-10 text-blue-700"
          >
            <h2 className="text-2xl font-bold mb-4">{topic.mainHeading}</h2>
            {topic.subtopics.map((subtopic, idx) => (
              <div
                key={idx}
                id={subtopic.title.replace(/\s+/g, "-").toLowerCase()}
                className="mb-6 text-white pl-4"
              >
                <h3 className="text-xl font-semibold mb-2">{subtopic.title}</h3>
                <p className="text-gray-300 leading-7 ">{subtopic.content}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documentation;
