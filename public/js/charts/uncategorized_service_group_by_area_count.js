<<<<<<< HEAD:public/js/charts/uncategorized_service_group_by_area_count.js
var defaultData = 'https://raw.githubusercontent.com/pvfrota/vacina-manaus/master/db/uncategorized_service_group_by_area_count.csv';
=======
var defaultData = 'https://raw.githubusercontent.com/CodeForManaus/vacina-manaus-backend/master/analytics/uncategorized_service_group_by_area_percent.csv';
>>>>>>> 71a705f9008588b91da4759c808f30330390d5f6:js/charts/uncategorized_service_group_by_area_percent.js

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