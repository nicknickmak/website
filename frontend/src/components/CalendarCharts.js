import Chart from "react-google-charts";

// var CHARTWIDTH = 700;
var CHARTWIDTH = Math.min(700, window.innerWidth - 80);
var CHARTHEIGHT = Math.min(140, window.innerWidth - 310);
console.log(window.innerWidth - 330);
// var CELL_SIZE = 12;
var CELL_SIZE = Math.max(
    5.2,
    Math.min(
        window.innerWidth / ((window.innerWidth / 24) + 70),
        12
    )
);
// console.log(
//     Math.max(
//         5.2,
//         Math.min(
//             window.innerWidth / ((window.innerWidth / 24) + 70),
//             12
//         )
//     )
// );
// console.log(window.innerWidth / ((window.innerWidth / 24) + 70));


//need size 6 for smallest

////////////////////////////////////////////////////////////////////////////////////////////////////
//WEBSITE BACKLOG
////////////////////////////////////////////////////////////////////////////////////////////////////
/*

Add Dates to the Experiences and Project Cards

Make tabs for About Me

Sounds aren't working at first page
- look at console


Add Login feature

Add Create feature for Projects/Experiences
Add Create feature for datasets



Mobile View

Decorate the Experience and Project Card More
- add more to current card View
- add Radial slider

Add blurry Amimations in the background with GIF

*/

////////////////////////////////////////////////////////////////////////////////////////////////////
//Track Amount of Programming Practice
////////////////////////////////////////////////////////////////////////////////////////////////////
// export function ProgrammingChart() {
//     return (
//         <Chart
//             width={CHARTWIDTH}
//             height={CHARTHEIGHT}
//             chartType="Calendar"
//             loader={<div>Loading Chart</div>}
//             data={[
//                 [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Problem Count' }],
//                 [new Date(2021, 0, 26), 1],
//                 [new Date(2021, 0, 28), 2],
//                 [new Date(2021, 0, 31), 6],
//                 [new Date(2021, 1, 1), 4],
//                 [new Date(2021, 1, 2), 4],
//                 [new Date(2021, 1, 3), 2],
//                 [new Date(2021, 1, 4), 3],
//                 [new Date(2021, 1, 8), 2],
//                 [new Date(2021, 1, 9), 2],
//                 [new Date(2021, 1, 10), 3],
//                 [new Date(2021, 1, 17), 2],
//                 [new Date(2021, 1, 18), 2],
//                 [new Date(2021, 1, 19), 2],
//                 [new Date(2021, 1, 20), 4],
//                 [new Date(2021, 1, 21), 2],
//             ]}
//             options={{
//                 title: 'Programming Practice',
//                 noDataPattern: {
//                     backgroundColor: 'transparent',
//                     color: '',
//                 },
//                 colorAxis: { colors: ['#EEEEEE', '#d2d8ff'] },
//                 calendar: {
//                     underYearSpace: 10, // Bottom padding for the year labels.
//                     yearLabel: {
//                         color: '#eaeeb2',
//                     },
//                     cellSize: CELL_SIZE,
//                     cellColor: {
//                         stroke: 'white',      // Color the border of the squares.
//                         strokeOpacity: 0.5, // Make the borders half transparent.
//                         strokeWidth: 1      // ...and two pixels thick.
//                     },
//                     dayOfWeekLabel: {
//                         color: 'white',
//                     },
//                     monthLabel: {
//                         color: '#d2e8ff',
//                     },
//                 },
//             }}
//             rootProps={{ 'data-testid': '1' }}
//         />
//     )
// }
////////////////////////////////////////////////////////////////////////////////////////////////////
//Track Workouts and Intensity
////////////////////////////////////////////////////////////////////////////////////////////////////
export function WorkoutChart() {
    return (
        <Chart
            width={CHARTWIDTH}
            height={CHARTHEIGHT}
            chartType="Calendar"
            loader={<div>Loading Chart</div>}
            data={[
                [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Intensity' }],
                // [new Date(2021, 0, 25), 1],
                // [new Date(2021, 0, 27), 3.5],
                // [new Date(2021, 0, 28), 4.5],
                // [new Date(2021, 0, 30), 4.5],
                // [new Date(2021, 0, 31), 4],
                // [new Date(2021, 1, 1), 3.5],
                // [new Date(2021, 1, 2), 4.5],
                // [new Date(2021, 1, 3), 4],
                // [new Date(2021, 1, 4), 4.5],
                // [new Date(2021, 1, 5), 4.5],
                // [new Date(2021, 1, 7), 5],
                // [new Date(2021, 1, 8), 4.5],
                // [new Date(2021, 1, 9), 2],
                // [new Date(2021, 1, 11), 6],
                // [new Date(2021, 1, 15), 3],
                // [new Date(2021, 1, 17), 6],
                // [new Date(2021, 1, 19), 4],
                // [new Date(2021, 1, 23), 4],
                // [new Date(2021, 1, 25), 3.],
                // [new Date(2021, 2, 1), 3.5],
                // [new Date(2021, 2, 5), 4],
                // [new Date(2021, 2, 14), 5],
                // [new Date(2021, 2, 15), 3],
                [new Date(2022, 5, 14), 5],
                [new Date(2022, 5, 15), 5],
                [new Date(2022, 5, 16), 5],
                [new Date(2022, 5, 17), 2],


            ]}
            options={{
                title: 'Workout Chart',
                noDataPattern: {
                    backgroundColor: 'transparent',
                    color: '',
                },
                colorAxis: { colors: ['#c55bf6', '#7537c8'] },
                calendar: {
                    underYearSpace: 10, // Bottom padding for the year labels.
                    yearLabel: {
                        color: '#eaeeb2',
                    },
                    cellSize: CELL_SIZE,
                    cellColor: {
                        stroke: 'white',      // Color the border of the squares.
                        strokeOpacity: 0.5, // Make the borders half transparent.
                        strokeWidth: 1      // ...and two pixels thick.
                    },
                    dayOfWeekLabel: {
                        color: 'white',
                    },
                    monthLabel: {
                        color: '#d2e8ff',
                    },
                },
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    )
}
////////////////////////////////////////////////////////////////////////////////////////////////////
//Track Number of SWE Internship Applications Submitted
////////////////////////////////////////////////////////////////////////////////////////////////////
// export function ApplicationsChart() {
//     return (
//         <Chart
//             width={CHARTWIDTH}
//             height={CHARTHEIGHT}
//             chartType="Calendar"
//             loader={<div>Loading Chart</div>}
//             data={[
//                 [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Apps Submitted' }],
//                 [new Date(2021, 0, 25), 1],
//                 [new Date(2021, 0, 27), 5],
//                 [new Date(2021, 0, 28), 7],
//                 [new Date(2021, 0, 31), 2],
//                 [new Date(2021, 1, 1), 3],
//                 [new Date(2021, 1, 2), 12],
//                 [new Date(2021, 1, 9), 1],
//             ]}
//             options={{
//                 title: 'Internship Applications Submitted',
//                 noDataPattern: {
//                     backgroundColor: 'transparent',
//                     color: '',
//                 },
//                 colorAxis: { colors: ['#dfdfdd', '#FFFF00'] },
//                 calendar: {
//                     underYearSpace: 10, // Bottom padding for the year labels.
//                     yearLabel: {
//                         color: '#eaeeb2',
//                     },
//                     cellSize: CELL_SIZE,
//                     cellColor: {
//                         stroke: 'white',      // Color the border of the squares.
//                         strokeOpacity: 0.5, // Make the borders half transparent.
//                         strokeWidth: 1      // ...and two pixels thick.
//                     },
//                     dayOfWeekLabel: {
//                         color: 'white',
//                     },
//                     monthLabel: {
//                         color: '#d2e8ff',
//                     },
//                 },
//             }}
//             rootProps={{ 'data-testid': '1' }}
//         />
//     )
// }

////////////////////////////////////////////////////////////////////////////////////////////////////
//Track Consistency of Skin Care Routine
////////////////////////////////////////////////////////////////////////////////////////////////////
// export function SkinCareChart() {
//     return (
//         <Chart
//             width={CHARTWIDTH}
//             height={CHARTHEIGHT}
//             chartType="Calendar"
//             loader={<div>Loading Chart</div>}
//             data={[
//                 [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Done Skin Care' }],
//                 [new Date(2021, 0, 26), 1],
//                 [new Date(2021, 0, 27), 2],
//                 [new Date(2021, 0, 28), 2],
//                 [new Date(2021, 0, 30), 1],
//                 [new Date(2021, 0, 31), 2],
//                 [new Date(2021, 1, 1), 2],
//                 [new Date(2021, 1, 2), 2],
//                 [new Date(2021, 1, 3), 2],
//                 [new Date(2021, 1, 4), 2],
//                 [new Date(2021, 1, 5), 2],
//                 [new Date(2021, 1, 6), 1],
//                 [new Date(2021, 1, 7), 1],
//                 [new Date(2021, 1, 8), 1],
//                 [new Date(2021, 1, 17), 1],
//                 [new Date(2021, 1, 18), 2],
//                 [new Date(2021, 1, 20), 1],
//                 [new Date(2021, 2, 1), 1],
//             ]}
//             options={{
//                 title: 'Skin Care',
//                 noDataPattern: {
//                     backgroundColor: 'transparent',
//                     color: '',
//                 },
//                 colorAxis: { colors: ['#c3c5af', '#eaeeb2'] },
//                 calendar: {
//                     underYearSpace: 10, // Bottom padding for the year labels.
//                     yearLabel: {
//                         color: '#eaeeb2',
//                     },
//                     cellSize: CELL_SIZE,
//                     cellColor: {
//                         stroke: 'white',      // Color the border of the squares.
//                         strokeOpacity: 0.5, // Make the borders half transparent.
//                         strokeWidth: 1      // ...and two pixels thick.
//                     },
//                     dayOfWeekLabel: {
//                         color: 'white',
//                     },
//                     monthLabel: {
//                         color: '#d2e8ff',
//                     },
//                 },
//             }}
//             rootProps={{ 'data-testid': '1' }}
//         />
//     )
// }