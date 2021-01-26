var defaultData = 'https://raw.githubusercontent.com/pvfrota/pvfrota.github.io/master/vacina-manaus/db/uncategorized_service_group_by_area_count.csv';

function uncategorizedServiceGroupByAreaCount() {
    Highcharts.chart('uncategorized-service-group-by-area-count', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Quantidade de categorizados como "outros" por zona de Manaus'
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
uncategorizedServiceGroupByAreaCount();