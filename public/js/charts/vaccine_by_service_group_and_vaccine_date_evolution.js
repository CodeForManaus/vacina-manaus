var defaultData = 'https://raw.githubusercontent.com/CodeForManaus/vacina-manaus-backend/master/analytics/vaccine_by_service_group_and_vaccine_date_evolution.csv';

function vaccineByServiceGroupAndVaccineDateEvolution() {
    Highcharts.chart('vaccine-by-service-group-and-vaccine-date-evolution-chart', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Evolução do número de aplicações de vacinas por grupo de atendimento'
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
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
            dataRefreshRate: 10
        }
    });
}

// Create the chart
vaccineByServiceGroupAndVaccineDateEvolution();