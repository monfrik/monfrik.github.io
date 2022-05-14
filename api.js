// https://query1.finance.yahoo.com/v7/finance/spark?symbols=%5EIXIC&range=1mo&interval=1d&indicators=close&includeTimestamps=false&includePrePost=false&corsDomain=finance.yahoo.com&.tsrc=finance

const nasdaq = `
	{
	  "spark": {
	    "result": [
	      {
	        "symbol": "^IXIC",
	        "response": [
	          {
	            "meta": {
	              "currency": "USD",
	              "symbol": "^IXIC",
	              "exchangeName": "NIM",
	              "instrumentType": "INDEX",
	              "firstTradeDate": 34612200,
	              "regularMarketTime": 1652476559,
	              "gmtoffset": -14400,
	              "timezone": "EDT",
	              "exchangeTimezoneName": "America/New_York",
	              "regularMarketPrice": 11805.002,
	              "chartPreviousClose": 13643.59,
	              "priceHint": 2,
	              "currentTradingPeriod": {
	                "pre": {
	                  "timezone": "EDT",
	                  "start": 1652428800,
	                  "end": 1652448600,
	                  "gmtoffset": -14400
	                },
	                "regular": {
	                  "timezone": "EDT",
	                  "start": 1652448600,
	                  "end": 1652472000,
	                  "gmtoffset": -14400
	                },
	                "post": {
	                  "timezone": "EDT",
	                  "start": 1652472000,
	                  "end": 1652486400,
	                  "gmtoffset": -14400
	                }
	              },
	              "dataGranularity": "1d",
	              "range": "1mo",
	              "validRanges": [
	                "1d",
	                "5d",
	                "1mo",
	                "3mo",
	                "6mo",
	                "1y",
	                "2y",
	                "5y",
	                "10y",
	                "ytd",
	                "max"
	              ]
	            },
	            "timestamp": [
	              1649943000,
	              1650288600,
	              1650375000,
	              1650461400,
	              1650547800,
	              1650634200,
	              1650893400,
	              1650979800,
	              1651066200,
	              1651152600,
	              1651239000,
	              1651498200,
	              1651584600,
	              1651671000,
	              1651757400,
	              1651843800,
	              1652103000,
	              1652189400,
	              1652275800,
	              1652362200,
	              1652448600
	            ],
	            "indicators": {
	              "quote": [
	                {
	                  "close": [
	                    13351.08,
	                    13332.36,
	                    13619.66,
	                    13453.07,
	                    13174.65,
	                    12839.29,
	                    13004.85,
	                    12490.74,
	                    12488.93,
	                    12871.53,
	                    12334.64,
	                    12536.02,
	                    12563.76,
	                    12964.86,
	                    12317.69,
	                    12144.66,
	                    11623.25,
	                    11737.67,
	                    11364.24,
	                    11370.96,
	                    11805.0
	                  ]
	                }
	              ]
	            }
	          }
	        ]
	      }
	    ],
	    "error": null
	  }
	}
`;

// https://query1.finance.yahoo.com/v7/finance/spark?symbols=IMOEX.ME&range=1mo&interval=1d&indicators=close&includeTimestamps=false&includePrePost=false&corsDomain=finance.yahoo.com&.tsrc=finance

const imoex = `
	{
	  "spark": {
	    "result": [
	      {
	        "symbol": "IMOEX.ME",
	        "response": [
	          {
	            "meta": {
	              "currency": "RUB",
	              "symbol": "IMOEX.ME",
	              "exchangeName": "MCX",
	              "instrumentType": "INDEX",
	              "firstTradeDate": 1362461400,
	              "regularMarketTime": 1652457061,
	              "gmtoffset": 10800,
	              "timezone": "MSK",
	              "exchangeTimezoneName": "Europe/Moscow",
	              "regularMarketPrice": 2307.5,
	              "chartPreviousClose": 2528.42,
	              "priceHint": 2,
	              "currentTradingPeriod": {
	                "pre": {
	                  "timezone": "MSK",
	                  "end": 1652423400,
	                  "start": 1652423400,
	                  "gmtoffset": 10800
	                },
	                "regular": {
	                  "timezone": "MSK",
	                  "end": 1652457600,
	                  "start": 1652423400,
	                  "gmtoffset": 10800
	                },
	                "post": {
	                  "timezone": "MSK",
	                  "end": 1652457600,
	                  "start": 1652457600,
	                  "gmtoffset": 10800
	                }
	              },
	              "dataGranularity": "1d",
	              "range": "1mo",
	              "validRanges": [
	                "1d",
	                "5d",
	                "1mo",
	                "3mo",
	                "6mo",
	                "1y",
	                "2y",
	                "5y",
	                "10y",
	                "ytd",
	                "max"
	              ]
	            },
	            "timestamp": [
	              1649831400,
	              1649917800,
	              1650004200,
	              1650263400,
	              1650349800,
	              1650436200,
	              1650522600,
	              1650609000,
	              1650868200,
	              1650954600,
	              1651041000,
	              1651127400,
	              1651213800,
	              1651645800,
	              1651732200,
	              1651818600,
	              1652250600,
	              1652337000,
	              1652423400
	            ],
	            "indicators": {
	              "quote": [
	                {
	                  "close": [
	                    2528.42,
	                    2404.73,
	                    2424.99,
	                    2342.63,
	                    2317.46,
	                    2330.73,
	                    2271.05,
	                    2232.23,
	                    2186.22,
	                    2318.46,
	                    2424.28,
	                    2383.66,
	                    2445.17,
	                    2373.16,
	                    2404.8,
	                    2393.03,
	                    2387.14,
	                    2297.89,
	                    2307.5
	                  ]
	                }
	              ]
	            }
	          }
	        ]
	      }
	    ],
	    "error": null
	  }
	}
`;

// https://query1.finance.yahoo.com/v7/finance/spark?symbols=%5EGSPC&range=1mo&interval=1d&indicators=close&includeTimestamps=false&includePrePost=false&corsDomain=finance.yahoo.com&.tsrc=finance

const snp500 = `
	{
	  "spark": {
	    "result": [
	      {
	        "symbol": "^GSPC",
	        "response": [
	          {
	            "meta": {
	              "currency": "USD",
	              "symbol": "^GSPC",
	              "exchangeName": "SNP",
	              "instrumentType": "INDEX",
	              "firstTradeDate": -1325583000,
	              "regularMarketTime": 1652475469,
	              "gmtoffset": -14400,
	              "timezone": "EDT",
	              "exchangeTimezoneName": "America/New_York",
	              "regularMarketPrice": 4023.89,
	              "chartPreviousClose": 4446.59,
	              "priceHint": 2,
	              "currentTradingPeriod": {
	                "pre": {
	                  "timezone": "EDT",
	                  "end": 1652448600,
	                  "start": 1652428800,
	                  "gmtoffset": -14400
	                },
	                "regular": {
	                  "timezone": "EDT",
	                  "end": 1652472000,
	                  "start": 1652448600,
	                  "gmtoffset": -14400
	                },
	                "post": {
	                  "timezone": "EDT",
	                  "end": 1652486400,
	                  "start": 1652472000,
	                  "gmtoffset": -14400
	                }
	              },
	              "dataGranularity": "1d",
	              "range": "1mo",
	              "validRanges": [
	                "1d",
	                "5d",
	                "1mo",
	                "3mo",
	                "6mo",
	                "1y",
	                "2y",
	                "5y",
	                "10y",
	                "ytd",
	                "max"
	              ]
	            },
	            "timestamp": [
	              1649943000,
	              1650288600,
	              1650375000,
	              1650461400,
	              1650547800,
	              1650634200,
	              1650893400,
	              1650979800,
	              1651066200,
	              1651152600,
	              1651239000,
	              1651498200,
	              1651584600,
	              1651671000,
	              1651757400,
	              1651843800,
	              1652103000,
	              1652189400,
	              1652275800,
	              1652362200,
	              1652448600
	            ],
	            "indicators": {
	              "quote": [
	                {
	                  "close": [
	                    4392.59,
	                    4391.69,
	                    4462.21,
	                    4459.45,
	                    4393.66,
	                    4271.78,
	                    4296.12,
	                    4175.2,
	                    4183.96,
	                    4287.5,
	                    4131.93,
	                    4155.38,
	                    4175.48,
	                    4300.17,
	                    4146.87,
	                    4123.34,
	                    3991.24,
	                    4001.05,
	                    3935.18,
	                    3930.08,
	                    4023.89
	                  ]
	                }
	              ]
	            }
	          }
	        ]
	      }
	    ],
	    "error": null
	  }
	}
`;

// https://query1.finance.yahoo.com/v7/finance/spark?symbols=GAZP.ME&range=1mo&interval=1d&indicators=close&includeTimestamps=false&includePrePost=false&corsDomain=finance.yahoo.com&.tsrc=finance

const gazprom = `
	{
	  "spark": {
	    "result": [
	      {
	        "symbol": "GAZP.ME",
	        "response": [
	          {
	            "meta": {
	              "currency": "RUB",
	              "symbol": "GAZP.ME",
	              "exchangeName": "MCX",
	              "instrumentType": "EQUITY",
	              "firstTradeDate": 1267597800,
	              "regularMarketTime": 1652456999,
	              "gmtoffset": 10800,
	              "timezone": "MSK",
	              "exchangeTimezoneName": "Europe/Moscow",
	              "regularMarketPrice": 235.52,
	              "chartPreviousClose": 234.87,
	              "priceHint": 2,
	              "currentTradingPeriod": {
	                "pre": {
	                  "timezone": "MSK",
	                  "end": 1652423400,
	                  "start": 1652423400,
	                  "gmtoffset": 10800
	                },
	                "regular": {
	                  "timezone": "MSK",
	                  "end": 1652457600,
	                  "start": 1652423400,
	                  "gmtoffset": 10800
	                },
	                "post": {
	                  "timezone": "MSK",
	                  "end": 1652457600,
	                  "start": 1652457600,
	                  "gmtoffset": 10800
	                }
	              },
	              "dataGranularity": "1d",
	              "range": "1mo",
	              "validRanges": [
	                "1d",
	                "5d",
	                "1mo",
	                "3mo",
	                "6mo",
	                "1y",
	                "2y",
	                "5y",
	                "10y",
	                "ytd",
	                "max"
	              ]
	            },
	            "timestamp": [
	              1649831400,
	              1649917800,
	              1650004200,
	              1650263400,
	              1650349800,
	              1650436200,
	              1650522600,
	              1650609000,
	              1650868200,
	              1650954600,
	              1651041000,
	              1651127400,
	              1651213800,
	              1651645800,
	              1651732200,
	              1651818600,
	              1652250600,
	              1652337000,
	              1652423400
	            ],
	            "indicators": {
	              "quote": [
	                {
	                  "close": [
	                    234.87,
	                    222.11,
	                    224.0,
	                    216.99,
	                    220.72,
	                    218.92,
	                    218.92,
	                    208.0,
	                    208.0,
	                    225.85,
	                    237.15,
	                    237.53,
	                    240.4,
	                    234.16,
	                    234.16,
	                    240.1,
	                    241.99,
	                    230.56,
	                    235.52
	                  ]
	                }
	              ]
	            }
	          }
	        ]
	      }
	    ],
	    "error": null
	  }
	}
`;

// https://query1.finance.yahoo.com/v7/finance/spark?symbols=AAPL&range=1mo&interval=1d&indicators=close&includeTimestamps=false&includePrePost=false&corsDomain=finance.yahoo.com&.tsrc=finance

const apple = `
	{
	  "spark": {
	    "result": [
	      {
	        "symbol": "AAPL",
	        "response": [
	          {
	            "meta": {
	              "currency": "USD",
	              "symbol": "AAPL",
	              "exchangeName": "NMS",
	              "instrumentType": "EQUITY",
	              "firstTradeDate": 345479400,
	              "regularMarketTime": 1652472004,
	              "gmtoffset": -14400,
	              "timezone": "EDT",
	              "exchangeTimezoneName": "America/New_York",
	              "regularMarketPrice": 147.11,
	              "chartPreviousClose": 170.4,
	              "priceHint": 2,
	              "currentTradingPeriod": {
	                "pre": {
	                  "timezone": "EDT",
	                  "end": 1652448600,
	                  "start": 1652428800,
	                  "gmtoffset": -14400
	                },
	                "regular": {
	                  "timezone": "EDT",
	                  "end": 1652472000,
	                  "start": 1652448600,
	                  "gmtoffset": -14400
	                },
	                "post": {
	                  "timezone": "EDT",
	                  "end": 1652486400,
	                  "start": 1652472000,
	                  "gmtoffset": -14400
	                }
	              },
	              "dataGranularity": "1d",
	              "range": "1mo",
	              "validRanges": [
	                "1d",
	                "5d",
	                "1mo",
	                "3mo",
	                "6mo",
	                "1y",
	                "2y",
	                "5y",
	                "10y",
	                "ytd",
	                "max"
	              ]
	            },
	            "timestamp": [
	              1649943000,
	              1650288600,
	              1650375000,
	              1650461400,
	              1650547800,
	              1650634200,
	              1650893400,
	              1650979800,
	              1651066200,
	              1651152600,
	              1651239000,
	              1651498200,
	              1651584600,
	              1651671000,
	              1651757400,
	              1651843800,
	              1652103000,
	              1652189400,
	              1652275800,
	              1652362200,
	              1652448600
	            ],
	            "indicators": {
	              "quote": [
	                {
	                  "close": [
	                    165.29,
	                    165.07,
	                    167.4,
	                    167.23,
	                    166.42,
	                    161.79,
	                    162.88,
	                    156.8,
	                    156.57,
	                    163.64,
	                    157.65,
	                    157.96,
	                    159.48,
	                    166.02,
	                    156.77,
	                    157.28,
	                    152.06,
	                    154.51,
	                    146.5,
	                    142.56,
	                    147.11
	                  ]
	                }
	              ]
	            }
	          }
	        ]
	      }
	    ],
	    "error": null
	  }
	}
`;


// https://query1.finance.yahoo.com/v7/finance/spark?symbols=MSFT&range=1mo&interval=1d&indicators=close&includeTimestamps=false&includePrePost=false&corsDomain=finance.yahoo.com&.tsrc=finance

const msft = `
	{
	  "spark": {
	    "result": [
	      {
	        "symbol": "MSFT",
	        "response": [
	          {
	            "meta": {
	              "currency": "USD",
	              "symbol": "MSFT",
	              "exchangeName": "NMS",
	              "instrumentType": "EQUITY",
	              "firstTradeDate": 511108200,
	              "regularMarketTime": 1652472004,
	              "gmtoffset": -14400,
	              "timezone": "EDT",
	              "exchangeTimezoneName": "America/New_York",
	              "regularMarketPrice": 261.12,
	              "chartPreviousClose": 287.62,
	              "priceHint": 2,
	              "currentTradingPeriod": {
	                "pre": {
	                  "timezone": "EDT",
	                  "start": 1652428800,
	                  "end": 1652448600,
	                  "gmtoffset": -14400
	                },
	                "regular": {
	                  "timezone": "EDT",
	                  "start": 1652448600,
	                  "end": 1652472000,
	                  "gmtoffset": -14400
	                },
	                "post": {
	                  "timezone": "EDT",
	                  "start": 1652472000,
	                  "end": 1652486400,
	                  "gmtoffset": -14400
	                }
	              },
	              "dataGranularity": "1d",
	              "range": "1mo",
	              "validRanges": [
	                "1d",
	                "5d",
	                "1mo",
	                "3mo",
	                "6mo",
	                "1y",
	                "2y",
	                "5y",
	                "10y",
	                "ytd",
	                "max"
	              ]
	            },
	            "timestamp": [
	              1649943000,
	              1650288600,
	              1650375000,
	              1650461400,
	              1650547800,
	              1650634200,
	              1650893400,
	              1650979800,
	              1651066200,
	              1651152600,
	              1651239000,
	              1651498200,
	              1651584600,
	              1651671000,
	              1651757400,
	              1651843800,
	              1652103000,
	              1652189400,
	              1652275800,
	              1652362200,
	              1652448600
	            ],
	            "indicators": {
	              "quote": [
	                {
	                  "close": [
	                    279.83,
	                    280.52,
	                    285.3,
	                    286.36,
	                    280.81,
	                    274.03,
	                    280.72,
	                    270.22,
	                    283.22,
	                    289.63,
	                    277.52,
	                    284.47,
	                    281.78,
	                    289.98,
	                    277.35,
	                    274.73,
	                    264.58,
	                    269.5,
	                    260.55,
	                    255.35,
	                    261.12
	                  ]
	                }
	              ]
	            }
	          }
	        ]
	      }
	    ],
	    "error": null
	  }
	}
`;
