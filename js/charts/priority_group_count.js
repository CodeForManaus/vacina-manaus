
function priorityGroupCount () {
  var defaultData = 'https://raw.githubusercontent.com/CodeForManaus/vacina-manaus-backend/master/analytics/priority_group_count.csv'

  Highcharts.chart('priority-group-count-chart', {
    chart: {
      type: 'bar'
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
priorityGroupCount()
