import { useEffect, useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { FormattedMessage, useIntl } from "react-intl";
import { calculateInvestment } from "../../../utils/calculatorUtils";

const InvestCalculator = () => {
  const intl = useIntl();
  const [year, setYear] = useState(20);
  const [investAmount, setInvestAmount] = useState(50000);
  const [startDeposit, setStartDeposit] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);

  const [expectedRate, setExpectedRate] = useState(10); // default 10%

  const handleExpectedRateChange = (e) => {
    let input = e.target.value;

    // Allow only digits + optional decimal with max 2 decimals
    if (!/^\d{0,2}(\.\d{0,2})?$/.test(input)) return;

    // Prevent values greater than 99.99
    if (parseFloat(input) > 99.99) return;

    setExpectedRate(input);
  };

  const chartData = useMemo(() => {
    const results = calculateInvestment(
      startDeposit,
      year,
      expectedRate,
      investAmount
    );

    if (results.length) {
      const balance = Number(
        results[results.length - 1]?.totalBalance
      ).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      setTotalBalance(balance);
    }

    return {
      series: [
        {
          name: intl.formatMessage({
            id: "compound_calculator_total_invested",
          }),
          data: results.map((d) => Math.round(d.investAmount)),
        },
        {
          name: intl.formatMessage({
            id: "compound_calculator_total_balance",
          }),
          data: results.map((d) => Math.round(d.totalBalance)),
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 350,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        xaxis: {
          tickAmount: 4,

          categories: results.map((d) =>
            d.year === 0
              ? intl.formatMessage({ id: "compound_calculator_now" })
              : new Date().getFullYear() + d.year
          ),
        },
        yaxis: {
          labels: {
            formatter: (val) => val.toLocaleString() + " ",
          },
        },
        tooltip: {
          shared: true,
          intersect: false,
          custom: function ({ series, dataPointIndex, w }) {
            const invested = series[0][dataPointIndex];
            const balance = series[1][dataPointIndex];
            const profit = balance - invested;

            return `
                <div className="chart-tooltip">
                  <span className="year">
          ${w.globals.categoryLabels[dataPointIndex]} 
          ${intl.formatMessage({ id: "year" })}
        </span>

              <div className="total-amount">
                <span>${
                  w.globals.seriesNames[1]
                }</span> <span>${balance.toLocaleString()} </span>
              </div>
              <div className="total-invested">
              <div>
                <span>${
                  w.globals.seriesNames[0]
                }</span> <span>${invested.toLocaleString()}  </span>
              </div>
                
              </div>
              <div className="total-profit">
              <div>
                <span> ${intl.formatMessage({
                  id: "compound_calculator_total_profit",
                })}</span>
                <span> ${profit.toLocaleString()} </span>
              </div>
               </div>
            </div>
    `;
          },
        },
      },
    };
  }, [year, investAmount, startDeposit, expectedRate, intl]);

  const yearChanged = (year) => {
    setYear(year[1]);
  };
  const investAmountChanged = (amount) => {
    setInvestAmount(amount[1]);
  };

  const investInputChanged = (e) => {
    let val = Number(e.target.value);
    setInvestAmount(val);
  };
  const yearInputChanged = (e) => {
    let val = Number(e.target.value);
    setYear(val);
  };

  useEffect(() => {}, []);

  return (
    <div className="calculator-container container">
      <div className="calculator-container-inner">
        <div className="calculator-heading">
          <div className="head">
            <FormattedMessage id="compound_calculator_subtitle" />
          </div>
          <div className="title">
            <FormattedMessage id="compound_calculator_title" />
          </div>
        </div>
        <div className="calculator-inner">
          <div className="calculate-part">
            <div className="form-input-wrapper">
              <label htmlFor="years">
                <FormattedMessage id="compound_calculator_years" />
              </label>
              <input
                type="number"
                name=""
                value={year}
                onInput={yearInputChanged}
                id="years"
              />
              <img src="/images/calculator/scale.svg" alt="" />

              <span className="suffix" aria-hidden="true">
                տարի
              </span>
              <RangeSlider
                className="single-thumb custom-slider"
                defaultValue={[1, 1]}
                thumbsDisabled={[true, false]} // first thumb fixed
                rangeSlideDisabled={true} // disables dragging whole range
                min={1} // minimum value
                max={50} // maximum value
                step={1} // step size
                onInput={yearChanged}
                value={[1, year]} // controlled
              />
              <div className="range">
                <span>1</span>
                <span>50</span>
              </div>
            </div>

            <div className="form-input-wrapper">
              <label htmlFor="years">
                <FormattedMessage id="compound_calculator_monthly_contrib" />
              </label>
              <input
                type="number"
                name=""
                value={investAmount}
                onInput={investInputChanged}
                id="years"
              />
              <img src="/images/calculator/scale.svg" alt="" />

              <span className="suffix" aria-hidden="true">
                {/* ֏ */}
              </span>
              <RangeSlider
                className="single-thumb custom-slider"
                thumbsDisabled={[true, false]} // first thumb fixed
                rangeSlideDisabled={true} // disables dragging whole range
                min={50000} // minimum value
                max={5000000} // maximum value
                step={50000} // step size
                value={[50000, investAmount]} // controlled
                onInput={investAmountChanged}
              />
              <div className="range">
                <span>50.000 </span>
                <span>5.000.000 </span>
              </div>
            </div>

            <div className="form-input-wrapper">
              <label htmlFor="month-invest">
                <FormattedMessage id="compound_calculator_initital_dep" />
              </label>
              <div className="input-wrap">
                <input
                  id="month-invest"
                  type="number"
                  value={startDeposit}
                  onInput={(e) => setStartDeposit(e.target.value)}
                />
                <span className="suffix no-scale" aria-hidden="true">
                  {/* ֏ */}
                </span>
              </div>
            </div>
            <div className="form-input-wrapper">
              <label htmlFor="expected-rate">
                <FormattedMessage id="compound_calculator_exp_return" />
              </label>
              <div className="input-wrap">
                <input
                  id="expected-rate"
                  type="number"
                  value={expectedRate}
                  onChange={handleExpectedRateChange}
                  //   onBlur={handleExpectedRateBlur}
                  placeholder="Enter %"
                />
                <span className="suffix no-scale" aria-hidden="true">
                  %
                </span>
              </div>
            </div>
          </div>

          <div className="chart-part">
            <div className="chart-info">
              <div className="total-balace">
                <div className="text">
                  <FormattedMessage id="compound_calculator_total_balance" />՝
                </div>

                <div className="total">{totalBalance} ֏</div>
              </div>

              <div className="legend">
                <ul>
                  <li>
                    <div className="legend-indeficator blue"></div>
                    <span>
                      <FormattedMessage id="compound_calculator_total_invested" />
                    </span>
                  </li>
                  <li>
                    <div className="legend-indeficator green"></div>
                    <span>
                      <FormattedMessage id="compound_calculator_total_balance" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div id="chart">
              <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="area"
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestCalculator;
