function serviceGroupCount () {
  const defaultData = 'https://raw.githubusercontent.com/CodeForManaus/vacina-manaus-backend/master/analytics/service_group_count.csv'

  Highcharts.chart('service-group-count-chart', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Vacinas aplicadas por grupo de atendimento'
    },
    accessibility: {
      announceNewData: {
        enabled: true,
        minAnnounceInterval: 15000,
        announcementFormatter: function (allSeries, newSeries, newPoint) {
          if (newPoint) {
            return 'New point added. Value: ' + newPoint.y
          }
          return false
        }
      }
    },
    data: {
      csvURL: defaultData,
      enablePolling: true,
      dataRefreshRate: 10
    }
  })
}

// Create the chart
serviceGroupCount()
