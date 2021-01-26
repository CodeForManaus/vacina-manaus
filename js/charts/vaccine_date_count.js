var defaultData = 'https://raw.githubusercontent.com/pvfrota/pvfrota.github.io/master/vacina-manaus/db/vaccine_date_count.csv';

function vaccineDateCount() {
    Highcharts.chart('vaccine-date-count-chart', {
        chart: {
            type: 'column'

        },
        title: {
            text: 'Vacinas aplicadas por data de vacinação'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Número de vacinas aplicadas'
            }
    
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                }
            }
        },
        accessibility: {
            announceNewData: {
                enabled: true,
                minAnnounceInterval: 15000,
                announcementFormatter: function (allSeries, newSeries, newPoint) {
                    if (newPoint) {
                        return 'New point added. Value: ' + newPoint.y;
                    }
                    return false;
                }
            }
        },
        data: {
            csvURL: defaultData,
            enablePolling: true,
            dataRefreshRate: 10,
            dateFormat: "dd/mm/YYYY"
        }
    });
}

// Create the chart
vaccineDateCount();