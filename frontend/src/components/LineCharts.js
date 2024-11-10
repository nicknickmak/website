import Chart from "react-google-charts";

var CHARTWIDTH = 350;
var CHARTHEIGHT = 140;

export function BicepChart() {
    return (
        <Chart
            width={CHARTWIDTH}
            height={CHARTHEIGHT}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
                [
                    { type: 'date', label: 'date' },
                    { type: 'number', label: 'right bicep' },
                    { type: 'number', label: 'left bicep' },
                ],
                [new Date(2021, 0, 19), 12.5, 12.125],
                [new Date(2021, 0, 21), 13.0, 12.25],
                [new Date(2021, 0, 22), 13.25, 12.5],
                [new Date(2021, 0, 24), 13.4, 12.625],
                [new Date(2021, 0, 25), 13.5, 12.75],
                [new Date(2021, 0, 26), 13.625, 12.875],
                [new Date(2021, 0, 27), 13.625, 13],
                [new Date(2021, 0, 28), 13.750, 13.125],
                [new Date(2021, 0, 31), 13.875, 13.250],
                [new Date(2021, 1, 2), 14, 13.375],
                [new Date(2022, 5, 17), 14.5, 14],

            ]}
            options={{
                title: 'Circumference of Biceps',
                hAxis: {
                    title: 'Date', textStyle: { color: '#FFF' },
                    gridlines: { color: '#aaaaaa', minSpacing: 20 }
                },
                vAxis: {
                    title: 'Circumference (in.)', textStyle: { color: '#FFF' },
                    gridlines: { color: '#aaaaaa', minSpacing: 20 },
                    minorGridlines: { color: '#888888', minSpacing: 20 }
                },
                titleTextStyle: { color: '#FFF' },
                legendTextStyle: { color: '#FFF' },
                intervals: { style: 'none' },
                legend: 'none',
                colors: ['white', '#DDDDDD'],
                focusTarget: 'category',
                backgroundColor: {
                    'fill': 'transparent',
                }
            }}
        />
    )
}

export function SplitsChart() {
    return (
        <Chart
            width={CHARTWIDTH}
            height={CHARTHEIGHT}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
                [
                    { type: 'date', label: 'date' },
                    { type: 'number', label: 'distance' },
                ],
                [new Date(2021, 0, 26), 8.5],
                [new Date(2021, 0, 27), 7.5],
                [new Date(2021, 0, 28), 6.5],
                [new Date(2021, 0, 31), 6.0],
                [new Date(2021, 1, 1), 5.5],
                [new Date(2021, 1, 3), 5],
                [new Date(2021, 1, 6), 4],
                [new Date(2021, 1, 7), 5],

            ]}
            options={{
                title: 'ROAD TO CENTER SPLITS',
                hAxis: {
                    title: 'Date',
                    textStyle: { color: '#FFF' },
                    gridlines: { color: '#aaaaaa', minSpacing: 20 },
                    minorGridlines: { color: '#888888', minSpacing: 20 },
                },
                vAxis: {
                    title: 'Distance to Ground (in.)', textStyle: { color: '#FFF' },
                    gridlines: { color: '#aaaaaa', minSpacing: 20 },
                    minorGridlines: { color: '#888888', minSpacing: 20 },
                    minValue: 0.0,
                },
                titleTextStyle: { color: '#FFF' },
                legendTextStyle: { color: '#FFF' },
                intervals: { style: 'none' },
                legend: 'none',
                colors: ['blue'],
                focusTarget: 'category',
                backgroundColor: {
                    'fill': 'transparent',
                }
            }}
        />
    )
}

export function ShouldersChart() {
    return (
        <Chart
            width={CHARTWIDTH}
            height={CHARTHEIGHT}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
                [
                    { type: 'date', label: 'date' },
                    { type: 'number', label: 'Both Shoulder Circumference' },
                ],
                [new Date(2021, 0, 31), 44.0],
                [new Date(2021, 1, 2), 46.0],
            ]}
            options={{
                title: 'Circumference Around Both Shoulders',
                hAxis: {
                    title: 'Date', textStyle: { color: '#FFF' },
                    gridlines: { color: '#aaaaaa', minSpacing: 20 }
                },
                vAxis: {
                    title: 'Circumference (in.)', textStyle: { color: '#FFF' },
                    gridlines: { color: '#aaaaaa', minSpacing: 20 },
                    minorGridlines: { color: '#888888', minSpacing: 20 }
                },
                titleTextStyle: { color: '#FFF' },
                legendTextStyle: { color: '#FFF' },
                intervals: { style: 'none' },
                legend: 'none',
                colors: ['white'],
                focusTarget: 'category',
                backgroundColor: {
                    'fill': 'transparent',
                }
            }}
        />
    )
}

export function WaistChart() {
    return (
        <Chart
            width={CHARTWIDTH}
            height={CHARTHEIGHT}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
                [
                    { type: 'date', label: 'date' },
                    { type: 'number', label: 'Both Shoulder Circumference' },
                ],
                [new Date(2021, 1, 28), 27],
            ]}
            options={{
                title: 'Waistline',
                hAxis: {
                    title: 'Date', textStyle: { color: '#FFF' },
                    gridlines: { color: '#aaaaaa', minSpacing: 20 }
                },
                vAxis: {
                    title: 'Circumference (in.)', textStyle: { color: '#FFF' },
                    gridlines: { color: '#aaaaaa', minSpacing: 20 },
                    minorGridlines: { color: '#888888', minSpacing: 20 }
                },
                titleTextStyle: { color: '#FFF' },
                legendTextStyle: { color: '#FFF' },
                intervals: { style: 'none' },
                legend: 'none',
                colors: ['white'],
                focusTarget: 'category',
                backgroundColor: {
                    'fill': 'transparent',
                }
            }}
        />
    )
}