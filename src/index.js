import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import ReactDOM from "react-dom";

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";

import maps from "fusioncharts/fusioncharts.maps";
import usa from "fusioncharts/maps/fusioncharts.usa";

import {defaultChartConfig} from "./fusionConfig";
import {dataSourceProps} from "./data";


ReactFC.fcRoot(FusionCharts, charts, maps, usa);

const Chart = ({clickChart, handler}) => {
    const [id, setId] = useState(null);
    const chartProps = {
        type: "USA",
        width: "600",
        height: "400",
        dataFormat: "json",
        containerBackgroundOpacity: Number(!false),
        dataEmptyMessage: "There is no data available.",
        events: {
            dataPlotClick: (e) => {
                console.log(e)
            },
            dataPlotRollOver: (e) => {
                console.log(e)
            },
            entityClick: (e) => {
                setId(e.eventId);
                handler(e.eventId)
                clickChart();
            },
            entityRollOver: (e) => {

            },
            chartMouseMove: (e) => {
            }
        },
        dataSource: {
            chart: {...defaultChartConfig},
            ...dataSourceProps
        }
    };
    return (<Link to={`/users/${id}`}><ReactFC {...chartProps} /></Link>);
};

const App = () => {
    const [loading, setLoading] = useState(true);
    const [comm, setComm] = useState(null);

    const clickChart = () => {
        setTimeout(()=> {
            setLoading(false);
        }, 200);
    };

    const resetChartLoading = () => {
        setLoading(true)
    };

    const handler = num => {
        setComm(num);
    };

    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <div onClick={resetChartLoading}>Home</div>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Switch>

                <Route path='/users/:id'>
                    {
                        loading? 'Loading...' : 'Commitments: ' + comm
                    }

                </Route>
                <Route path='/users'>
                    <Chart/>
                </Route>
                <Route exact path='/'>
                    <Chart clickChart={clickChart} handler={handler}/>
                </Route>
            </Switch>
        </Router>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
