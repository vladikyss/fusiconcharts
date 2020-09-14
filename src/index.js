import React, {useState} from "react";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Router} from 'react-router';
import {createBrowserHistory} from 'history';
import ReactDOM from "react-dom";

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";

import maps from "fusioncharts/fusioncharts.maps";
import usa from "fusioncharts/maps/fusioncharts.usa";

import {defaultChartConfig} from "./fusionConfig";
import {dataSourceProps} from "./data";


ReactFC.fcRoot(FusionCharts, charts, maps, usa);

const browserHistory = createBrowserHistory();

const Chart = ({handler}) => {
    const chartProps = {
        type: "USA",
        width: "600",
        height: "400",
        dataFormat: "json",
        containerBackgroundOpacity: Number(true),
        dataEmptyMessage: "There is no data available.",
        events: {
            entityClick: (e) => {
                handler(e.eventId);
                browserHistory.push('/users/' + e.eventId);
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
    return <ReactFC {...chartProps} />;
};

const App = () => {
    const [comm, setComm] = useState(1);

    const handler = num => {
        setComm(num);
    };
    return (
        <Router history={browserHistory}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path='/users/:id'>
                    Commitments:{comm}
                </Route>
                <Route exact path='/'>
                    <Chart handler={handler}/>
                </Route>
            </Switch>
        </Router>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
