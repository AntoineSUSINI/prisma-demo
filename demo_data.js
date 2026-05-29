window.PRISMA_DEMO_DATA = {
  "summary": {
    "count": 45,
    "valid": 45,
    "mae": 21.026210315350056,
    "median": 11.829477742776806,
    "p90": 49.399944472662476,
    "p95": 52.90002574212771,
    "max": 81.63421972287874,
    "excluded": [
      "NOVN",
      "MUV2"
    ],
    "model": "lseg_complete10/calibration_model.pkl",
    "dataset": "portfolios_without_novn_muv2.json"
  },
  "byTemplate": [
    {
      "template": "call_butterfly",
      "count": 4,
      "mae": 33.953700470807064,
      "median": 36.18355059132449,
      "max": 51.61822295780247
    },
    {
      "template": "put_butterfly",
      "count": 4,
      "mae": 32.50527471560093,
      "median": 38.593408490915365,
      "max": 46.76734796742304
    },
    {
      "template": "straddle",
      "count": 8,
      "mae": 28.336167067576994,
      "median": 24.506154290127242,
      "max": 75.96604781526028
    },
    {
      "template": "put_vertical",
      "count": 4,
      "mae": 25.615161132164147,
      "median": 9.484236715389155,
      "max": 81.63421972287874
    },
    {
      "template": "single_option",
      "count": 2,
      "mae": 22.22476502533216,
      "median": 22.22476502533216,
      "max": 36.269727690368605
    },
    {
      "template": "strangle",
      "count": 2,
      "mae": 21.79088787323318,
      "median": 21.79088787323318,
      "max": 23.50162688606473
    },
    {
      "template": "risk_reversal",
      "count": 4,
      "mae": 21.00930243120902,
      "median": 17.30444247516447,
      "max": 40.053034070279345
    },
    {
      "template": "future_option_hedge",
      "count": 5,
      "mae": 13.66609225182828,
      "median": 9.224461032878784,
      "max": 38.7278228986993
    },
    {
      "template": "directional_future",
      "count": 6,
      "mae": 13.460136629865973,
      "median": 9.971587936965653,
      "max": 35.79836457217365
    },
    {
      "template": "underlying_basket",
      "count": 2,
      "mae": 7.901267023854852,
      "median": 7.901267023854852,
      "max": 9.432427100361773
    },
    {
      "template": "call_vertical",
      "count": 2,
      "mae": 5.781975206084589,
      "median": 5.781975206084589,
      "max": 10.360273763812122
    },
    {
      "template": "future_spread",
      "count": 2,
      "mae": 1.3336506778325763,
      "median": 1.3336506778325763,
      "max": 2.3348883083834204
    }
  ],
  "byDate": [
    {
      "date": "2020-01-06",
      "count": 5,
      "mae": 16.082468173039704,
      "median": 17.04173347273301,
      "max": 23.50162688606473
    },
    {
      "date": "2020-09-14",
      "count": 4,
      "mae": 39.176756979162036,
      "median": 34.24757796006145,
      "max": 81.63421972287874
    },
    {
      "date": "2021-05-14",
      "count": 5,
      "mae": 9.952700241275174,
      "median": 7.704341108700974,
      "max": 20.080148860401636
    },
    {
      "date": "2022-01-13",
      "count": 5,
      "mae": 17.946034527306644,
      "median": 6.636051332566795,
      "max": 38.7278228986993
    },
    {
      "date": "2022-09-14",
      "count": 5,
      "mae": 29.451523160018827,
      "median": 36.269727690368605,
      "max": 51.61822295780247
    },
    {
      "date": "2023-05-19",
      "count": 4,
      "mae": 26.920822745122855,
      "median": 23.57649573338744,
      "max": 51.155008809488756
    },
    {
      "date": "2024-01-18",
      "count": 5,
      "mae": 30.468775844183476,
      "median": 16.315517232305233,
      "max": 75.96604781526028
    },
    {
      "date": "2024-09-23",
      "count": 3,
      "mae": 2.6875424690931475,
      "median": 3.0157738111691534,
      "max": 3.646960009398925
    },
    {
      "date": "2025-05-28",
      "count": 5,
      "mae": 22.989292441914454,
      "median": 11.420072847199725,
      "max": 53.22047643820902
    },
    {
      "date": "2026-01-30",
      "count": 4,
      "mae": 9.818136486910547,
      "median": 7.875660398615613,
      "max": 23.18881210312922
    }
  ],
  "portfolios": [
    {
      "id": "P001",
      "date": "2020-01-06",
      "template": "future_option_hedge",
      "legs": 3,
      "positions": "-2x FDAX 2020-06-19 | 10x ODAX 2020-02-21 13150C | -5x ODAX 2020-02-21 13150P",
      "proxy": 7537.783970453192,
      "hybrid": 5697.8143560888075,
      "scenario": 7537.783970453192,
      "robustFactor": 0.7559004580687445,
      "nettingFactor": 0.0717693153701185,
      "api": 6276.816883623846,
      "error": -9.224461032878784,
      "absError": 9.224461032878784,
      "status": "ok"
    },
    {
      "id": "P002",
      "date": "2020-01-06",
      "template": "underlying_basket",
      "legs": 3,
      "positions": "-2x BAY 2020-02-21 58P | -40x BAY 2020-02-21 62C | -25x BAY 2020-06-19 64P",
      "proxy": 24233.37750303618,
      "hybrid": 19579.775517610145,
      "scenario": 24233.37750303618,
      "robustFactor": 0.8079672557057723,
      "nettingFactor": 0.6399982559695643,
      "api": 21618.96900925823,
      "error": -9.432427100361773,
      "absError": 9.432427100361773,
      "status": "ok"
    },
    {
      "id": "P003",
      "date": "2020-01-06",
      "template": "call_butterfly",
      "legs": 3,
      "positions": "10x DTE 2020-06-19 10C | -20x DTE 2020-06-19 13C | 10x DTE 2020-06-19 14C",
      "proxy": 200.72010298368784,
      "hybrid": 106.191179210896,
      "scenario": 200.72010298368784,
      "robustFactor": 0.5290510398927305,
      "nettingFactor": 0.0381111839071291,
      "api": 87.6077436927487,
      "error": 21.212092373160218,
      "absError": 21.212092373160218,
      "status": "ok"
    },
    {
      "id": "P004",
      "date": "2020-01-06",
      "template": "directional_future",
      "legs": 1,
      "positions": "5x FESX 2020-03-20",
      "proxy": 21864.994621141104,
      "hybrid": 15297.460518790487,
      "scenario": 21864.994621141104,
      "robustFactor": 0.6996324848852002,
      "nettingFactor": 1.0,
      "api": 13070.09052660204,
      "error": 17.04173347273301,
      "absError": 17.04173347273301,
      "status": "ok"
    },
    {
      "id": "P005",
      "date": "2020-01-06",
      "template": "strangle",
      "legs": 2,
      "positions": "-2x BAY 2020-02-21 59P | -2x BAY 2020-02-21 61C",
      "proxy": 1373.3015990417746,
      "hybrid": 960.1670680249132,
      "scenario": 1373.3015990417746,
      "robustFactor": 0.6991669336836661,
      "nettingFactor": 0.8051798056753896,
      "api": 1255.147042924505,
      "error": -23.50162688606473,
      "absError": 23.50162688606473,
      "status": "ok"
    },
    {
      "id": "P006",
      "date": "2020-09-14",
      "template": "put_vertical",
      "legs": 2,
      "positions": "-20x BAS 2020-12-18 42P | 20x BAS 2020-12-18 44P",
      "proxy": 363.2684394457575,
      "hybrid": 581.229503113212,
      "scenario": 363.2684394457575,
      "robustFactor": 1.6,
      "nettingFactor": 0.1168537004734508,
      "api": 320.0,
      "error": 81.63421972287874,
      "absError": 81.63421972287874,
      "status": "ok"
    },
    {
      "id": "P007",
      "date": "2020-09-14",
      "template": "directional_future",
      "legs": 1,
      "positions": "1x FSTX 2020-12-18",
      "proxy": 2189.7029075925066,
      "hybrid": 3344.281485903713,
      "scenario": 2189.7029075925066,
      "robustFactor": 1.527276359869577,
      "nettingFactor": 1.0,
      "api": 3579.7446406501786,
      "error": -6.577652273646506,
      "absError": 6.577652273646506,
      "status": "ok"
    },
    {
      "id": "P009",
      "date": "2020-09-14",
      "template": "directional_future",
      "legs": 1,
      "positions": "-3x FESX 2020-12-18",
      "proxy": 9250.85523503802,
      "hybrid": 11239.083733517717,
      "scenario": 9250.85523503802,
      "robustFactor": 1.2149237500711496,
      "nettingFactor": 1.0,
      "api": 8276.302714635718,
      "error": 35.79836457217365,
      "absError": 35.79836457217365,
      "status": "ok"
    },
    {
      "id": "P010",
      "date": "2020-09-14",
      "template": "straddle",
      "legs": 2,
      "positions": "15x BAS 2020-12-18 44C | 15x BAS 2020-12-18 44P",
      "proxy": 6674.970909984307,
      "hybrid": 5722.388639966473,
      "scenario": 6674.970909984307,
      "robustFactor": 0.8572904237540605,
      "nettingFactor": 0.6931288227887552,
      "api": 8502.400932399098,
      "error": -32.69679134794925,
      "absError": 32.69679134794925,
      "status": "ok"
    },
    {
      "id": "P011",
      "date": "2021-05-14",
      "template": "future_option_hedge",
      "legs": 3,
      "positions": "-3x FSMI 2021-09-17 | 15x OSMI 2021-06-18 11100C | -7x OSMI 2021-06-18 11100P",
      "proxy": 63560.01115038576,
      "hybrid": 45918.09520551529,
      "scenario": 63560.01115038576,
      "robustFactor": 0.7224368651678029,
      "nettingFactor": 0.5023810102856922,
      "api": 42633.46744693632,
      "error": 7.704341108700974,
      "absError": 7.704341108700974,
      "status": "ok"
    },
    {
      "id": "P012",
      "date": "2021-05-14",
      "template": "underlying_basket",
      "legs": 4,
      "positions": "20x BAS 2021-06-18 48P | 5x BAS 2021-06-18 61C | -1x BAS 2021-07-16 61P | -15x BAS 2021-09-17 48P",
      "proxy": 3941.503628218547,
      "hybrid": 3813.0407507371183,
      "scenario": 3941.503628218547,
      "robustFactor": 0.9674076470305092,
      "nettingFactor": 0.8963739169047452,
      "api": 4072.4608631058495,
      "error": -6.3701069473479315,
      "absError": 6.3701069473479315,
      "status": "ok"
    },
    {
      "id": "P013",
      "date": "2021-05-14",
      "template": "strangle",
      "legs": 2,
      "positions": "10x ALV 2021-07-16 180P | 10x ALV 2021-07-16 205C",
      "proxy": 9289.79826827213,
      "hybrid": 8951.524277603288,
      "scenario": 9289.79826827213,
      "robustFactor": 0.9635865084579752,
      "nettingFactor": 0.6074207647197996,
      "api": 11200.626815442132,
      "error": -20.080148860401636,
      "absError": 20.080148860401636,
      "status": "ok"
    },
    {
      "id": "P014",
      "date": "2021-05-14",
      "template": "put_vertical",
      "legs": 2,
      "positions": "15x SIE 2021-06-18 110P | -15x SIE 2021-06-18 145P",
      "proxy": 19855.154923899117,
      "hybrid": 15648.422153405074,
      "scenario": 19855.154923899117,
      "robustFactor": 0.7881289374664857,
      "nettingFactor": 0.9415927047344632,
      "api": 17960.930590316188,
      "error": -12.875215041240262,
      "absError": 12.875215041240262,
      "status": "ok"
    },
    {
      "id": "P015",
      "date": "2021-05-14",
      "template": "straddle",
      "legs": 2,
      "positions": "15x OESX 2021-08-20 4400C | 15x OESX 2021-08-20 4400P",
      "proxy": 32880.19273383683,
      "hybrid": 26702.970699362384,
      "scenario": 32880.19273383683,
      "robustFactor": 0.812129384870743,
      "nettingFactor": 0.7309112135862219,
      "api": 25992.41874271946,
      "error": 2.7336892486850672,
      "absError": 2.7336892486850672,
      "status": "ok"
    },
    {
      "id": "P016",
      "date": "2022-01-13",
      "template": "put_butterfly",
      "legs": 3,
      "positions": "-10x NESN 2022-03-18 110P | 20x NESN 2022-03-18 120P | -10x NESN 2022-03-18 125P",
      "proxy": 485.6,
      "hybrid": 370.197156048396,
      "scenario": 485.6,
      "robustFactor": 0.7623499918624299,
      "nettingFactor": 0.0216331119142262,
      "api": 582.4502623548694,
      "error": -36.44141311711764,
      "absError": 36.44141311711764,
      "status": "ok"
    },
    {
      "id": "P017",
      "date": "2022-01-13",
      "template": "directional_future",
      "legs": 1,
      "positions": "-2x FDAX 2022-06-17",
      "proxy": 77472.52983533926,
      "hybrid": 61806.42856493026,
      "scenario": 77472.52983533926,
      "robustFactor": 0.7977850819676877,
      "nettingFactor": 1.0,
      "api": 57960.16243341007,
      "error": 6.636051332566795,
      "absError": 6.636051332566795,
      "status": "ok"
    },
    {
      "id": "P018",
      "date": "2022-01-13",
      "template": "put_butterfly",
      "legs": 3,
      "positions": "-5x ALV 2022-03-18 190P | 10x ALV 2022-03-18 195P | -5x ALV 2022-03-18 215P",
      "proxy": 4048.549914130984,
      "hybrid": 3520.0424686404463,
      "scenario": 4048.549914130984,
      "robustFactor": 0.8694575942744722,
      "nettingFactor": 0.3413085098971593,
      "api": 3747.394411022241,
      "error": -6.066933913149963,
      "absError": 6.066933913149963,
      "status": "ok"
    },
    {
      "id": "P019",
      "date": "2022-01-13",
      "template": "future_option_hedge",
      "legs": 3,
      "positions": "-3x FDAX 2022-06-17 | 15x ODAX 2022-06-17 13650C | -7x ODAX 2022-06-17 13650P",
      "proxy": 6745.782347054441,
      "hybrid": 4873.3859355974855,
      "scenario": 6745.782347054441,
      "robustFactor": 0.7224345057212613,
      "nettingFactor": 0.0282569086301351,
      "api": 7953.668640728016,
      "error": -38.7278228986993,
      "absError": 38.7278228986993,
      "status": "ok"
    },
    {
      "id": "P020",
      "date": "2022-01-13",
      "template": "put_vertical",
      "legs": 2,
      "positions": "15x BAY 2022-03-18 38P | -15x BAY 2022-03-18 49P",
      "proxy": 4803.347753868832,
      "hybrid": 4568.273314796798,
      "scenario": 4803.347753868832,
      "robustFactor": 0.9510602914638662,
      "nettingFactor": 0.860050572466277,
      "api": 4484.945213533968,
      "error": 1.8579513749995336,
      "absError": 1.8579513749995336,
      "status": "ok"
    },
    {
      "id": "P021",
      "date": "2022-09-14",
      "template": "call_butterfly",
      "legs": 3,
      "positions": "2x BAS 2022-10-21 33C | -4x BAS 2022-10-21 34C | 2x BAS 2022-10-21 39C",
      "proxy": 102.21376522055944,
      "hybrid": 88.08938911950692,
      "scenario": 102.21376522055944,
      "robustFactor": 0.8618153233023498,
      "nettingFactor": 0.0237305756132866,
      "api": 182.07142131773557,
      "error": -51.61822295780247,
      "absError": 51.61822295780247,
      "status": "ok"
    },
    {
      "id": "P022",
      "date": "2022-09-14",
      "template": "single_option",
      "legs": 1,
      "positions": "-40x NESN 2022-10-21 114P",
      "proxy": 48385.49434362682,
      "hybrid": 36243.53018539858,
      "scenario": 48385.49434362682,
      "robustFactor": 0.7490577636347423,
      "nettingFactor": 1.0,
      "api": 26596.90512316202,
      "error": 36.269727690368605,
      "absError": 36.269727690368605,
      "status": "ok"
    },
    {
      "id": "P023",
      "date": "2022-09-14",
      "template": "put_butterfly",
      "legs": 3,
      "positions": "5x DTE 2022-12-16 14P | -10x DTE 2022-12-16 17P | 5x DTE 2022-12-16 19P",
      "proxy": 82.18333998249489,
      "hybrid": 67.72265134965254,
      "scenario": 82.18333998249489,
      "robustFactor": 0.8240435514555324,
      "nettingFactor": 0.0738589243572191,
      "api": 114.29096773359456,
      "error": -40.74540386471308,
      "absError": 40.74540386471308,
      "status": "ok"
    },
    {
      "id": "P024",
      "date": "2022-09-14",
      "template": "straddle",
      "legs": 2,
      "positions": "-50x ALV 2022-10-21 140C | -50x ALV 2022-10-21 140P",
      "proxy": 106033.78629501598,
      "hybrid": 98386.8332112588,
      "scenario": 106033.78629501598,
      "robustFactor": 0.9278819199902832,
      "nettingFactor": 0.8254883509453544,
      "api": 90876.78688169103,
      "error": 8.263987523397809,
      "absError": 8.263987523397809,
      "status": "ok"
    },
    {
      "id": "P025",
      "date": "2022-09-14",
      "template": "call_vertical",
      "legs": 2,
      "positions": "-30x ALV 2022-11-18 140C | 30x ALV 2022-11-18 170C",
      "proxy": 16358.275467959053,
      "hybrid": 15760.4561067031,
      "scenario": 16358.275467959053,
      "robustFactor": 0.9634546219479612,
      "nettingFactor": 0.1858228656699232,
      "api": 14280.914290257098,
      "error": 10.360273763812122,
      "absError": 10.360273763812122,
      "status": "ok"
    },
    {
      "id": "P026",
      "date": "2023-05-19",
      "template": "call_butterfly",
      "legs": 3,
      "positions": "-10x BAS 2023-09-15 42C | 20x BAS 2023-09-15 44C | -10x BAS 2023-09-15 46C",
      "proxy": 190.42,
      "hybrid": 185.12216920990247,
      "scenario": 190.42,
      "robustFactor": 0.972178180915358,
      "nettingFactor": 0.0127659656815118,
      "api": 378.9992887661013,
      "error": -51.155008809488756,
      "absError": 51.155008809488756,
      "status": "ok"
    },
    {
      "id": "P027",
      "date": "2023-05-19",
      "template": "risk_reversal",
      "legs": 2,
      "positions": "2x NESN 2023-09-15 100P | -2x NESN 2023-09-15 110C",
      "proxy": 1688.975452546048,
      "hybrid": 1098.9623806183176,
      "scenario": 1688.975452546048,
      "robustFactor": 0.6506680597173189,
      "nettingFactor": 1.0,
      "api": 1004.7629346102744,
      "error": 9.37529070422778,
      "absError": 9.37529070422778,
      "status": "ok"
    },
    {
      "id": "P029",
      "date": "2023-05-19",
      "template": "directional_future",
      "legs": 1,
      "positions": "-3x FSTX 2023-06-16",
      "proxy": 5617.760773132379,
      "hybrid": 7300.195486811103,
      "scenario": 5617.760773132379,
      "robustFactor": 1.2994849338770658,
      "nettingFactor": 1.0,
      "api": 6442.838891517413,
      "error": 13.307124541364512,
      "absError": 13.307124541364512,
      "status": "ok"
    },
    {
      "id": "P030",
      "date": "2023-05-19",
      "template": "straddle",
      "legs": 2,
      "positions": "40x BMW 2023-06-09 92C | 40x BMW 2023-06-09 92P",
      "proxy": 27421.731934636857,
      "hybrid": 22338.93388132281,
      "scenario": 27421.731934636857,
      "robustFactor": 0.814643434432605,
      "nettingFactor": 0.6963198174840798,
      "api": 33768.009409382445,
      "error": -33.84586692541037,
      "absError": 33.84586692541037,
      "status": "ok"
    },
    {
      "id": "P031",
      "date": "2024-01-18",
      "template": "single_option",
      "legs": 1,
      "positions": "5x DBK 2024-03-15 9P",
      "proxy": 10.141856471277723,
      "hybrid": 16.226970354044358,
      "scenario": 10.141856471277723,
      "robustFactor": 1.6,
      "nettingFactor": 1.0,
      "api": 15.0,
      "error": 8.179802360295717,
      "absError": 8.179802360295717,
      "status": "ok"
    },
    {
      "id": "P032",
      "date": "2024-01-18",
      "template": "risk_reversal",
      "legs": 2,
      "positions": "30x DBK 2024-02-02 12P | -30x DBK 2024-02-02 13C",
      "proxy": 1823.4756866949376,
      "hybrid": 1844.8925348841813,
      "scenario": 1823.4756866949376,
      "robustFactor": 1.0117450692353689,
      "nettingFactor": 1.0,
      "api": 3077.541133686494,
      "error": -40.053034070279345,
      "absError": 40.053034070279345,
      "status": "ok"
    },
    {
      "id": "P033",
      "date": "2024-01-18",
      "template": "call_butterfly",
      "legs": 3,
      "positions": "-1x BAS 2024-02-02 35C | 2x BAS 2024-02-02 40C | -1x BAS 2024-02-02 41C",
      "proxy": 17.464,
      "hybrid": 13.79844584745527,
      "scenario": 17.464,
      "robustFactor": 0.7901079848519967,
      "nettingFactor": 0.0103979394101712,
      "api": 15.649726795538925,
      "error": -11.829477742776806,
      "absError": 11.829477742776806,
      "status": "ok"
    },
    {
      "id": "P034",
      "date": "2024-01-18",
      "template": "straddle",
      "legs": 2,
      "positions": "30x BAY 2024-03-15 34C | 30x BAY 2024-03-15 34P",
      "proxy": 772.3378935842064,
      "hybrid": 732.9524967939135,
      "scenario": 772.3378935842064,
      "robustFactor": 0.949004966456435,
      "nettingFactor": 0.0952617124548351,
      "api": 3049.6544686449834,
      "error": -75.96604781526028,
      "absError": 75.96604781526028,
      "status": "ok"
    },
    {
      "id": "P035",
      "date": "2024-01-18",
      "template": "straddle",
      "legs": 2,
      "positions": "5x NESN 2024-03-15 82C | 5x NESN 2024-03-15 82P",
      "proxy": 4241.937560080452,
      "hybrid": 2080.994336307491,
      "scenario": 4241.937560080452,
      "robustFactor": 0.4905763714890755,
      "nettingFactor": 0.8250986557928959,
      "api": 2486.7147020365283,
      "error": -16.315517232305233,
      "absError": 16.315517232305233,
      "status": "ok"
    },
    {
      "id": "P036",
      "date": "2024-09-23",
      "template": "directional_future",
      "legs": 1,
      "positions": "3x FSTX 2024-12-20",
      "proxy": 7924.479472412186,
      "hybrid": 8510.407561311384,
      "scenario": 7924.479472412186,
      "robustFactor": 1.07393900014998,
      "nettingFactor": 1.0,
      "api": 8631.235675993561,
      "error": -1.3998935867113649,
      "absError": 1.3998935867113649,
      "status": "ok"
    },
    {
      "id": "P038",
      "date": "2024-09-23",
      "template": "straddle",
      "legs": 2,
      "positions": "-40x ALV 2024-10-11 325C | -40x ALV 2024-10-11 325P",
      "proxy": 140917.4104956766,
      "hybrid": 129016.77689268973,
      "scenario": 140917.4104956766,
      "robustFactor": 0.91554887674187,
      "nettingFactor": 0.93529733048178,
      "api": 133900.05847794205,
      "error": -3.646960009398925,
      "absError": 3.646960009398925,
      "status": "ok"
    },
    {
      "id": "P040",
      "date": "2024-09-23",
      "template": "future_option_hedge",
      "legs": 3,
      "positions": "-2x FESX 2025-03-21 | 25x OESX 2024-11-08 4150C | -12x OESX 2024-11-08 4150P",
      "proxy": 106928.32422922202,
      "hybrid": 78344.04178852917,
      "scenario": 106928.32422922202,
      "robustFactor": 0.73267810333007,
      "nettingFactor": 0.8504392402165525,
      "api": 76050.5298267584,
      "error": 3.0157738111691534,
      "absError": 3.0157738111691534,
      "status": "ok"
    },
    {
      "id": "P041",
      "date": "2025-05-28",
      "template": "future_spread",
      "legs": 2,
      "positions": "-2x FSTX 2025-06-20 | 2x FSTX 2025-09-19",
      "proxy": 297.7607877980042,
      "hybrid": 297.7607877980042,
      "scenario": 297.7607877980042,
      "robustFactor": 1.0,
      "nettingFactor": 0.0297715997421968,
      "api": 304.87938081533315,
      "error": -2.3348883083834204,
      "absError": 2.3348883083834204,
      "status": "ok"
    },
    {
      "id": "P042",
      "date": "2025-05-28",
      "template": "straddle",
      "legs": 2,
      "positions": "5x DBK 2025-07-18 26C | 5x DBK 2025-07-18 26P",
      "proxy": 186.86441037777024,
      "hybrid": 169.82835410832195,
      "scenario": 186.86441037777024,
      "robustFactor": 0.9088319908804052,
      "nettingFactor": 0.1677824467813454,
      "api": 363.0399396522199,
      "error": -53.22047643820902,
      "absError": 53.22047643820902,
      "status": "ok"
    },
    {
      "id": "P043",
      "date": "2025-05-28",
      "template": "risk_reversal",
      "legs": 2,
      "positions": "30x DTE 2025-09-19 27P | -30x DTE 2025-09-19 33C",
      "proxy": 7427.150690720789,
      "hybrid": 5374.423323310211,
      "scenario": 7427.150690720789,
      "robustFactor": 0.7236184570786774,
      "nettingFactor": 1.0,
      "api": 4823.568308630202,
      "error": 11.420072847199725,
      "absError": 11.420072847199725,
      "status": "ok"
    },
    {
      "id": "P044",
      "date": "2025-05-28",
      "template": "put_butterfly",
      "legs": 3,
      "positions": "-5x OSMI 2025-09-19 10350P | 10x OSMI 2025-09-19 11600P | -5x OSMI 2025-09-19 14000P",
      "proxy": 11501.186632635832,
      "hybrid": 7320.647921199754,
      "scenario": 11501.186632635832,
      "robustFactor": 0.6365124012879368,
      "nettingFactor": 0.1251854894350135,
      "api": 13752.1758576291,
      "error": -46.76734796742304,
      "absError": 46.76734796742304,
      "status": "ok"
    },
    {
      "id": "P045",
      "date": "2025-05-28",
      "template": "call_vertical",
      "legs": 2,
      "positions": "-15x ALV 2025-07-18 330C | 15x ALV 2025-07-18 350C",
      "proxy": 9586.201140530136,
      "hybrid": 9149.089476402174,
      "scenario": 9586.201140530136,
      "robustFactor": 0.9544019932692768,
      "nettingFactor": 0.1608152137105721,
      "api": 9260.556634114895,
      "error": -1.203676648357055,
      "absError": 1.203676648357055,
      "status": "ok"
    },
    {
      "id": "P046",
      "date": "2026-01-30",
      "template": "risk_reversal",
      "legs": 2,
      "positions": "50x OESX 2026-03-20 6100C | -50x OESX 2026-03-20 6100P",
      "proxy": 303220.1861089564,
      "hybrid": 258038.15968967575,
      "scenario": 303220.1861089564,
      "robustFactor": 0.8509926829111393,
      "nettingFactor": 0.9999999999999998,
      "api": 209465.57993728807,
      "error": 23.18881210312922,
      "absError": 23.18881210312922,
      "status": "ok"
    },
    {
      "id": "P047",
      "date": "2026-01-30",
      "template": "future_option_hedge",
      "legs": 3,
      "positions": "-1x FDAX 2026-03-20 | 15x ODAX 2026-06-19 27000C | -7x ODAX 2026-06-19 27000P",
      "proxy": 32742.146513728345,
      "hybrid": 23635.304798361503,
      "scenario": 32742.146513728345,
      "robustFactor": 0.7218617993921546,
      "nettingFactor": 0.2265635659939447,
      "api": 26162.052119163534,
      "error": -9.65806240769318,
      "absError": 9.65806240769318,
      "status": "ok"
    },
    {
      "id": "P048",
      "date": "2026-01-30",
      "template": "future_spread",
      "legs": 2,
      "positions": "-3x FDAX 2026-03-20 | 3x FDAX 2026-06-19",
      "proxy": 2121.407319538405,
      "hybrid": 2121.407319538405,
      "scenario": 2121.407319538405,
      "robustFactor": 1.0,
      "nettingFactor": 0.0063264649452168,
      "api": 2114.378848377433,
      "error": 0.33241304728173215,
      "absError": 0.33241304728173215,
      "status": "ok"
    },
    {
      "id": "P050",
      "date": "2026-01-30",
      "template": "put_vertical",
      "legs": 2,
      "positions": "20x BAS 2026-06-19 37P | -20x BAS 2026-06-19 44P",
      "proxy": 3556.370888143415,
      "hybrid": 3213.888484904072,
      "scenario": 3556.370888143415,
      "robustFactor": 0.9036989071131064,
      "nettingFactor": 0.5395686246116077,
      "api": 3029.3050978826345,
      "error": 6.093258389538048,
      "absError": 6.093258389538048,
      "status": "ok"
    }
  ],
  "featureFamilies": [
    {
      "id": "moneyness",
      "label": "Moneyness",
      "description": "Strike-to-spot context for option rows. Values below 1 are lower strikes; values above 1 are higher strikes.",
      "stats": [
        {
          "label": "Rows",
          "value": "301,260"
        },
        {
          "label": "Median",
          "value": "0.9973"
        },
        {
          "label": "Mean",
          "value": "0.989"
        },
        {
          "label": "P10 / P90",
          "value": "0.8481 / 1.12"
        },
        {
          "label": "Min / Max",
          "value": "0.687 / 1.232"
        }
      ],
      "notes": [
        "Used directly and through log/moneyness-squared interactions.",
        "Option rows: 301,260"
      ]
    },
    {
      "id": "ttm",
      "label": "Time to maturity",
      "description": "Remaining calendar time between valuation date and contract maturity, in days.",
      "stats": [
        {
          "label": "Rows",
          "value": "305,052"
        },
        {
          "label": "Median",
          "value": "57 d"
        },
        {
          "label": "Mean",
          "value": "68.25 d"
        },
        {
          "label": "P10 / P90",
          "value": "17 d / 144 d"
        },
        {
          "label": "Min / Max",
          "value": "15 d / 184 d"
        }
      ],
      "notes": [
        "Also transformed as sqrt(TTM) and log(TTM)."
      ]
    },
    {
      "id": "vol",
      "label": "Volatility level",
      "description": "Reference volatility used by the proxy before ML correction.",
      "stats": [
        {
          "label": "Rows",
          "value": "305,052"
        },
        {
          "label": "Median",
          "value": "22.87%"
        },
        {
          "label": "Mean",
          "value": "24.82%"
        },
        {
          "label": "P10 / P90",
          "value": "12.13% / 39.91%"
        },
        {
          "label": "Min / Max",
          "value": "7.31% / 92.51%"
        }
      ],
      "notes": [
        "Comes from LSEG surfaces when retained; otherwise from proxy/HV inputs."
      ]
    },
    {
      "id": "spot",
      "label": "Spot level",
      "description": "Underlying reference spot used for repricing and scale-sensitive features.",
      "stats": [
        {
          "label": "Rows",
          "value": "305,052"
        },
        {
          "label": "Median",
          "value": "109.5"
        },
        {
          "label": "Mean",
          "value": "2,709"
        },
        {
          "label": "P10 / P90",
          "value": "15.07 / 1.189e+04"
        },
        {
          "label": "Min / Max",
          "value": "4.367 / 2.529e+04"
        }
      ],
      "notes": [
        "Underlyings represented: 14",
        "Products represented: 17"
      ]
    },
    {
      "id": "instrument",
      "label": "Instrument flags",
      "description": "Binary flags tell the model whether the row is a call, put, or future.",
      "stats": [
        {
          "label": "Options",
          "value": "301,260 (98.8%)"
        },
        {
          "label": "Futures",
          "value": "3,792 (1.2%)"
        },
        {
          "label": "Calls",
          "value": "150,629"
        },
        {
          "label": "Puts",
          "value": "150,631"
        }
      ],
      "notes": [
        "Features: is_call, is_put, is_future."
      ]
    },
    {
      "id": "asset",
      "label": "Asset class flags",
      "description": "Product groups are encoded as index, single-stock or fixed-income families.",
      "stats": [
        {
          "label": "Single stock",
          "value": "223,313 (73.2%)"
        },
        {
          "label": "Index",
          "value": "81,739 (26.8%)"
        }
      ],
      "notes": [
        "Features: is_index, is_equity, is_fi."
      ]
    },
    {
      "id": "depth",
      "label": "ITM / OTM depth",
      "description": "Directional option location: how far a call/put is in or out of the money.",
      "stats": [
        {
          "label": "Rows",
          "value": "301,260"
        },
        {
          "label": "Median",
          "value": "0"
        },
        {
          "label": "Mean",
          "value": "0.0396"
        },
        {
          "label": "P10 / P90",
          "value": "0 / 0.1463"
        },
        {
          "label": "Min / Max",
          "value": "0 / 0.313"
        },
        {
          "label": "Median OTM depth",
          "value": "0"
        }
      ],
      "notes": [
        "Helps distinguish cheap wings from near-the-money options."
      ]
    },
    {
      "id": "regime",
      "label": "Vol regime and rank",
      "description": "Product-relative volatility context: current vol versus product median and percentile rank.",
      "stats": [
        {
          "label": "Rows",
          "value": "305,052"
        },
        {
          "label": "Median",
          "value": "1"
        },
        {
          "label": "Mean",
          "value": "1.111"
        },
        {
          "label": "P10 / P90",
          "value": "0.7294 / 1.576"
        },
        {
          "label": "Min / Max",
          "value": "0.4901 / 4.304"
        },
        {
          "label": "Median vol rank",
          "value": "0.50"
        },
        {
          "label": "High-regime rows",
          "value": "37,924"
        }
      ],
      "notes": [
        "Features: spot_percentile, vol_regime, vol_rank."
      ]
    },
    {
      "id": "intrinsic",
      "label": "Intrinsic value",
      "description": "Option intrinsic value as a percentage of spot; zero for out-of-the-money options and futures.",
      "stats": [
        {
          "label": "Rows",
          "value": "301,260"
        },
        {
          "label": "Median",
          "value": "0%"
        },
        {
          "label": "Mean",
          "value": "3.96%"
        },
        {
          "label": "P10 / P90",
          "value": "0% / 14.63%"
        },
        {
          "label": "Min / Max",
          "value": "0% / 31.3%"
        }
      ],
      "notes": [
        "Zero-intrinsic option rows: 50.0%"
      ]
    },
    {
      "id": "product",
      "label": "Product encoding",
      "description": "A deterministic product id captures recurring product-level biases not explained by generic features.",
      "stats": [
        {
          "label": "Distinct products",
          "value": "17"
        },
        {
          "label": "OESX",
          "value": "30,783 rows"
        },
        {
          "label": "DBK",
          "value": "29,240 rows"
        },
        {
          "label": "DTE",
          "value": "28,193 rows"
        },
        {
          "label": "OSMI",
          "value": "25,878 rows"
        },
        {
          "label": "BAY",
          "value": "25,121 rows"
        },
        {
          "label": "ALV",
          "value": "21,580 rows"
        }
      ],
      "notes": [
        "Unknown products map to 0 at inference."
      ]
    },
    {
      "id": "notional",
      "label": "Notional scale",
      "description": "Approximate economic scale per row: multiplier times spot times position size.",
      "stats": [
        {
          "label": "Rows",
          "value": "305,052"
        },
        {
          "label": "Median",
          "value": "1.095e+04 EUR"
        },
        {
          "label": "Mean",
          "value": "2.841e+04 EUR"
        },
        {
          "label": "P10 / P90",
          "value": "1,507 EUR / 9.831e+04 EUR"
        },
        {
          "label": "Min / Max",
          "value": "436.7 EUR / 6.322e+05 EUR"
        }
      ],
      "notes": [
        "Used through log_notional and log_position_size."
      ]
    },
    {
      "id": "target",
      "label": "Calibration target",
      "description": "The supervised label is the log-ratio between official API margin and local proxy margin.",
      "stats": [
        {
          "label": "Rows",
          "value": "305,052"
        },
        {
          "label": "Median",
          "value": "-0.1196"
        },
        {
          "label": "Mean",
          "value": "-0.1297"
        },
        {
          "label": "P10 / P90",
          "value": "-0.4663 / 0.2105"
        },
        {
          "label": "Min / Max",
          "value": "-7.581 / 5.224"
        },
        {
          "label": "Median API/proxy ratio",
          "value": "0.887"
        },
        {
          "label": "Mean API/proxy ratio",
          "value": "1.325"
        }
      ],
      "notes": [
        "Target = log(api_margin / local_margin_scaled).",
        "Prediction is exponentiated into a multiplicative correction factor."
      ]
    }
  ]
};
