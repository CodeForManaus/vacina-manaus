var defaultData = 'https://raw.githubusercontent.com/pvfrota/vacina-manaus/master/db/uncategorized_service_group_by_area_percent.csv';

function uncategorizedServiceGroupByAreaPercent() {
    Highcharts.chart('uncategorized-service-group-by-area-percent', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Porcentagem de categorizados como "outros" por zona de Manaus'
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
uncategorizedServiceGroupByAreaPercent();