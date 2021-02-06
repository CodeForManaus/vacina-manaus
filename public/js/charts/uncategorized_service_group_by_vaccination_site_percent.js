function uncategorizedServiceGroupByVaccinationSitePercent () {
  const defaultData = 'https://raw.githubusercontent.com/CodeForManaus/vacina-manaus-backend/master/analytics/uncategorized_service_group_by_vaccination_site_percent.csv'

  Highcharts.chart('uncategorized-service-group-by-vaccination-site-percent', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Porcentagem de categorizados como "Outros" por unidade de saúde'
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
uncategorizedServiceGroupByVaccinationSitePercent()
