$(document).ready(function () {
  const curDate = new Date().setHours(0, 0, 0, 0)

  let totalVaccinationInPeriod = 0
  let avgVaccination = 0
  let vaccineTrend = 0
  let vaccineCount = 0
  let remainingVaccineCount = 0

  const daysToAvg = 3
  const vaccineTarget = 70 // %

  $('#vaccine-target').text(vaccineTarget)
  $('#vaccine-target2').text(vaccineTarget)

  $.ajax({
    url:'https://raw.githubusercontent.com/CodeForManaus/vacina-manaus-backend/master/analytics/last_update_date.csv',
    type:'get',
    dataType:'text',
    success: function(data){
        let lastUpdate = data.split('\n')[1];

        $('#last-update').text(lastUpdate);
    }
  })

  $.ajax({
    url: 'https://raw.githubusercontent.com/CodeForManaus/vacina-manaus-backend/master/analytics/vaccination_count_statistics.csv',
    type: 'get',
    dataType: 'text',
    success: function (data) {
      const vaccinationStatistics = data.split('\n')[1].split(',')
      vaccineCount = parseInt(vaccinationStatistics[1])
      manausEstimatedPopulation = parseInt(vaccinationStatistics[3])
      remainingVaccineCount = manausEstimatedPopulation * vaccineTarget / 100 - vaccineCount

      $('#vaccine-count').text(vaccineCount)
      $('#remaining-vaccine-count').text(remainingVaccineCount)
      $('#manaus-estimated-population').text(manausEstimatedPopulation)
    }
  })

  $.ajax({
    url: 'https://raw.githubusercontent.com/CodeForManaus/vacina-manaus-backend/master/analytics/vaccine_date_count.csv',
    type: 'get',
    dataType: 'text',
    success: function (data) {
      let vaccinationByDate = data.split('\n')
      vaccinationByDate.pop()

      vaccinationByDate = vaccinationByDate.slice(Math.max(vaccinationByDate.length - daysToAvg, 1))

      for (let i = 0; i < vaccinationByDate.length; i++) {
        let vaccinationDate = vaccinationByDate[i].split(',')[0]
        vaccinationDate = new Date(vaccinationDate.split('/')[2] + '-' + vaccinationDate.split('/')[1] + '-' + vaccinationDate.split('/')[0] + 'T00:00:00')
        dateDiff = Math.abs(vaccinationDate - curDate) / 3600000 / 24

        if (dateDiff <= daysToAvg) {
          totalVaccinationInPeriod = totalVaccinationInPeriod + parseInt(vaccinationByDate[i].split(',')[1])
        }
      }

      avgVaccination = parseInt(totalVaccinationInPeriod / daysToAvg)
      vaccineTrend = parseInt(remainingVaccineCount / avgVaccination)

      $('#vaccine-rate').text(avgVaccination)
      $('#avg-days').text(daysToAvg)
      $('#vaccine-trend').text(vaccineTrend)
    }
  })
})
