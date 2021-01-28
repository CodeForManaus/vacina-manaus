
const data = [
    {
        id: 'area-count-chart',
        data: {
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Vacinas aplicadas por zona (área) de Manaus'
            },
            accessibility: {
                announceNewData: {
                    enabled: true,
                    minAnnounceInterval: 15000,
                    announcementFormatter: (_allSeries, newSeries, newPoint) => {
                        if (newPoint) {
                            return 'New point added. Value: ' + newPoint.y;
                        }
                        return false;
                    }
                }
            },
            data: {
                csvURL: 'https://raw.githubusercontent.com/pvfrota/vacina-manaus/master/db/area_count.csv',
                enablePolling: true,
                dataRefreshRate: 10
            }
        }
    },
    {
        id: 'area-count-chart',
        data: {
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Vacinas aplicadas por grupo prioritário'
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
                csvURL: 'https://raw.githubusercontent.com/pvfrota/vacina-manaus/master/db/priority_group_count.csv',
                enablePolling: true,
                dataRefreshRate: 10
            }
        }
    },
]

export default data;