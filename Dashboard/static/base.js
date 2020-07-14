
async function sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
}

window.u_param = 'r';
window.s_t = '';
window.e_t = '';
var time_var = 'todayOption';
var last_time_var = 'todayOption';
var wid_var = '';
var last_wid_var = '';

widVarClick = function (e) {
    wid_var = e.target.id
}

a_doms = document.querySelectorAll(".aerobox-control-area");
for (var i = 0; i < a_doms.length; i++) {
    a_doms[i].addEventListener('click', widVarClick);
}

draw = function (data, dom, x_var, y_var) {
    d = document.getElementById(dom);
    var trace1 = {
        x: [],
        y: [],
        type: 'scattergl',
        mode: d.data[0].mode,
        marker: d.data[0].marker,
        line: d.data[0].line,
    };

    data.forEach(function (val) {
        trace1.x.push(val[x_var]);
        trace1.y.push(val[y_var]);
        //trace2.x.push(val["time"]);
        //trace2.y.push(val["pm10"]);
    });

    plot_data = [trace1];

    Plotly.react(dom, plot_data, d.layout, d.config);
};

function animation(dom, x_var, y_var, data) {
    x = [];
    y = [];
    data.forEach(function (val) {
        x.push(val[x_var]);
        y.push(val[y_var]);
        //trace2.x.push(val["time"]);
        //trace2.y.push(val["pm10"]);
    });
    Plotly.animate(dom, {
        data: [
            {
                x: x,
                y: y
            }
        ],
        traces: [0],
        layout: {}
    }, {
        transition: {
            duration: 500,
            easing: 'cubic-in-out'
        },
        frame: {
            duration: 500
        }
    })
};

fetchData = function (w_id, u = null, s_t = null, e_t = null, mean = null) {
    var query = '';
    if (u != null) {
        query = `?m=goada&w_id=${w_id}&o=-&s_t=${s_t}&e_t=${e_t}&mean=${mean}&u=${u}`;
    } else {
        query = `?m=goada&w_id=${w_id}&o=-&s_t=${s_t}&e_t=${e_t}&mean=${mean}`;
    }

    var url_base = "/device/data/api/"
    fetch(
        url_base + query
    ).then(
        response => { return response.json(); }
    ).then(
        data => {
            draw(data, 'chart1', 'receive_time', 'pm2_5');
            draw(data, 'chart2', 'receive_time', 'rh');
            draw(data, 'chart3', 'receive_time', 'temp');
            draw(data, 'chart4', 'receive_time', 'co2');
            draw(data, 'chart5', 'receive_time', 'pressure');
            draw(data, 'chart6', 'receive_time', 'pm10');
        }
    ).catch(
        function (err) {
            console.log(err);
        }
    )
};

fetchAndDrawAll = function (w_id, time_option, mean = 'r') {
    let now_dateTime = new Date();
    let past = new Date();

    if (time_option === 'todayOption') {
        past.setHours(0, 0, 0);
    } else if (time_option === 'yesterdayOption') {
        now_dateTime.setHours(0, 0, 0);
        past.setDate(past.getDate() - 1);
        past.setHours(0, 0, 0);
    } else if (time_option === 'thisWeekOption') {
        past.setDate(past.getDate() - 7);
    } else if (time_option === 'thisMonthOption') {
        past.setMonth(past.getMonth() - 1);
    }

    past = past.toJSON();
    now_dateTime = now_dateTime.toJSON();

    fetchData(
        w_id,
        u = null,
        s_t = past,
        e_t = now_dateTime,
        mean = mean,
    );
}

$('.device-dropdown-menu a').click(function (e) {
    $(`#deviceDropDownBtn`).text($(this).text());
    if (wid_var != last_wid_var) {
        fetchAndDrawAll(wid_var, time_var, window.u_param);
        last_wid_var = wid_var;
    }
});

$('.data-dropdown-menu a').click(function (e) {
    $(`#dataDropDownBtn`).text($(this).text());
});

$('.alarm-dropdown-menu a').click(function (e) {
    $(`#alarmDropDownBtn`).text($(this).text());
});

timeVarClick = function (e) {
    time_var = e.target.id;
    if (wid_var != '' && last_time_var != time_var) {
        fetchAndDrawAll(wid_var, time_var, window.u_param);
        last_time_var = time_var;
    }
};

Plotly.newPlot(
    'chart1',
    [{
        x: [],
        y: [],
        mode: 'lines+markers',
        marker: { color: '#993300', size: 8 },
        line: { width: 4 },
        type: 'scattergl',
    }],
    {
        title: {
            text: 'PM2.5'
        },
        xaxis: {
            title: {
                text: 'Time(UTC)'
            }
        },
        yaxis: {
            title: {
                text: 'PM2.5(μg／m^3)'
            }
        }
    },
    {}
);

Plotly.newPlot(
    'chart2',
    [{
        x: [],
        y: [],
        mode: 'lines+markers',
        marker: { color: '#0033cc', size: 8 },
        line: { width: 4 },
        type: 'scattergl',
    }],
    {
        title: {
            text: 'RH'
        },
        xaxis: {
            title: {
                text: 'Time(UTC)'
            }
        },
        yaxis: {
            title: {
                text: 'RH(%)'
            }
        }
    },
    {}
);

Plotly.newPlot(
    'chart3',
    [{
        x: [],
        y: [],
        mode: 'lines+markers',
        marker: { color: '#ff6600', size: 8 },
        line: { width: 4 },
        type: 'scattergl',
    }],
    {
        title: {
            text: 'Temperature'
        },
        xaxis: {
            title: {
                text: 'Time(UTC)'
            }
        },
        yaxis: {
            title: {
                text: 'Temp(°C)'
            }
        }
    },
    {}
);

Plotly.newPlot(
    'chart4',
    [{
        x: [],
        y: [],
        mode: 'lines+markers',
        marker: { color: '#ff0066', size: 8 },
        line: { width: 4 },
        type: 'scattergl',
    }],
    {
        title: {
            text: 'CO2'
        },
        xaxis: {
            title: {
                text: 'Time(UTC)'
            }
        },
        yaxis: {
            title: {
                text: 'CO2(ppm)'
            }
        }
    },
    {}
);

Plotly.newPlot(
    'chart5',
    [{
        x: [],
        y: [],
        mode: 'lines+markers',
        marker: { color: 'pink', size: 8 },
        line: { width: 4 },
        type: 'scattergl',
    }],
    {
        title: {
            text: 'Pressure'
        },
        xaxis: {
            title: {
                text: 'Time(UTC)'
            }
        },
        yaxis: {
            title: {
                text: 'hPa'
            }
        }
    },
    {}
);

Plotly.newPlot(
    'chart6',
    [{
        x: [],
        y: [],
        mode: 'lines+markers',
        marker: { color: 'black', size: 8 },
        line: { width: 4 },
        type: 'scattergl',
    }],
    {
        title: {
            text: 'PM10'
        },
        xaxis: {
            title: {
                text: 'Time(UTC)'
            }
        },
        yaxis: {
            title: {
                text: 'PM10(μg／m^3)'
            }
        }
    },
    {}
);

document.querySelector('#todayOption').addEventListener("click", timeVarClick);
document.querySelector('#yesterdayOption').addEventListener("click", timeVarClick);
document.querySelector('#thisWeekOption').addEventListener("click", timeVarClick);
document.querySelector('#thisMonthOption').addEventListener("click", timeVarClick);

fetchLatestData = function (w_id, u = 1, device_name = 'device') {
    var query = `?m=goada&w_id=${w_id}&u=${u}&mean=r`
    var url_base = "/device/data/api/"
    fetch(
        url_base + query
    ).then(
        response => { return response.json(); }
    ).then(
        data => {
            if (data.len != 0) {
                data.forEach(function (e) {
                    document.querySelector(`#innerDataTBody`).innerHTML += `<tr>
                                <td>${device_name}</td>
                                <td>${e['temp']}</td>
                                <td>${e['rh']}</td>
                                <td>${e['pm2_5']}</td>
                                <td>${e['pm10']}</td>
                                <td>${e['co2']}</td>
                                <td>${e['receive_time']}</td>
                            </tr>`;
                })
            }
        }).catch(
            function (err) {
                console.log(err);

                /*
                <th scope="col">Device</th>
                <th scope="col-2">Temp(°C)</th>
                <th scope="col">RH(%)</th>
                <th scope="col-3">PM2.5(ug/m^3)</th>
                <th scope="col-3">PM10(ug/m^3)</th>
                <th scope="col-2">CO2(ppm)</th>
                <th scope="col-2">Time</th>

                <tr>
                    <td>Select An Aerobox</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                */
            }
        )
};

fetchLatestAlarm = function (w_id, u = 1, device = 'device') {
    var query = `?m=ggaa&w_id=${w_id}&u=${u}`
    var url_base = "/device/data/api/"
    fetch(
        url_base + query
    ).then(
        response => { return response.json(); }
    ).then(
        data => {
            if (data.len != 0) {
                data.forEach(function (e) {
                    document.querySelector(`#innerAlarmTBody`).innerHTML += `<tr>
                                <td>${device}</td>
                                <td>${e['event']}</td>
                                <td>${e['level']}</td>
                                <td>${e['update_time']}</td>
                            </tr>`;
                })
            }
        }).catch(
            function (err) {
                console.log(err);

                /*
                <th scope="col">Device</th>
                <th scope="col-2">Event</th>
                <th scope="col">Level</th>
                <th scope="col-3">Time</th>
                */
            }
        )
};

window.dataAerobox = '';
window.dataAeroboxName = '';

document.querySelectorAll('.aerobox-data-area').forEach(function (e) {
    e.addEventListener('click', function (q) {
        document.querySelector(`#innerDataTBody`).innerHTML = ''
        window.dataAerobox = q.target.id;
        window.dataAeroboxName = q.target.innerText;
        fetchLatestData(window.dataAerobox, 100, window.dataAeroboxName);
    })
})

document.querySelector('#showMoreDataModalBtn').addEventListener('click', function () {
    document.querySelector(`#innerDataTBody`).innerHTML = '';
    if (window.dataAerobox == '') {
        document.querySelectorAll(".aerobox-data-area").forEach(function (e) {
            fetchLatestData(e.id);
        })
    } else {
        fetchLatestData(window.dataAerobox, 100, window.dataAeroboxName);
    }
})

window.alarmGateway = '';
window.alarmGatewayName = '';

document.querySelectorAll('.gateway-alarm-area').forEach(function (e) {
    e.addEventListener('click', function (q) {
        document.querySelector(`#innerAlarmTBody`).innerHTML = ''
        window.alarmGateway = q.target.id;
        window.alarmGatewayName = q.target.innerText;
        fetchLatestAlarm(window.alarmGateway, 100, window.alarmGatewayName);
    })
})

document.querySelector('#showMoreAlarmModalBtn').addEventListener('click', function () {
    document.querySelector(`#innerAlarmTBody`).innerHTML = '';
    if (window.dataAerobox == '') {
        document.querySelectorAll(".gateway-alarm-area").forEach(function (e) {
            fetchLatestAlarm(e.id);
        })
    } else {
        fetchLatestAlarm(window.alarmGateway, 100, window.alarmGatewayName);
    }
})

document.getElementById('user_option').addEventListener('click', function (q) {
    window.u_param = 'u';
    fetchAndDrawAll(wid_var, time_var, window.u_param = 'u');
})
document.getElementById('raw_option').addEventListener('click', function (q) {
    window.u_param = 'r';
    fetchAndDrawAll(wid_var, time_var, window.u_param = 'r');
})

