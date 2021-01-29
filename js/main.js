$(document).ready(function() {

    var lastUpdate = '28/01/2021';

    var curDate = new Date().setHours(0,0,0,0);

    var totalVaccinationInPeriod = 0;
    var avgVaccination = 0;
    var vaccineTrend = 0;
    var vaccineCount = 0;
    var remainingVaccineCount = 0;

    var daysToAvg = 3;
    var vaccineTarget = 70; //%

    $('#last-update').text(lastUpdate);
    $('#vaccine-target').text(vaccineTarget);
    $('#vaccine-target2').text(vaccineTarget);

    $.ajax({
        url:'https://raw.githubusercontent.com/CodeForManaus/vacina-manaus-backend/master/analytics/vaccination_count_statistics.csv',
        type:'get',
        dataType:'text',
        success: function(data){
            let vaccinationStatistics = data.split('\n')[1].split(',');
            vaccineCount = parseInt(vaccinationStatistics[1]);
            manausEstimatedPopulation = parseInt(vaccinationStatistics[3]);
            remainingVaccineCount = manausEstimatedPopulation*vaccineTarget/100-vaccineCount;

            $('#vaccine-count').text(vaccineCount);
            $('#remaining-vaccine-count').text(remainingVaccineCount);
            $('#manaus-estimated-population').text(manausEstimatedPopulation);
        }
    })

    $.ajax({
        url:'https://raw.githubusercontent.com/CodeForManaus/vacina-manaus-backend/master/analytics/vaccine_date_count.csv',
        type:'get',
        dataType:'text',
        success: function(data){
            let vaccinationByDate = data.split('\n');
            vaccinationByDate.pop();

            vaccinationByDate = vaccinationByDate.slice(Math.max(vaccinationByDate.length - daysToAvg, 1));
            
            for (let i = 0; i < vaccinationByDate.length; i++) {
                let vaccinationDate = vaccinationByDate[i].split(',')[0];
                vaccinationDate = new Date(vaccinationDate.split('/')[2]+'-'+vaccinationDate.split('/')[1]+'-'+vaccinationDate.split('/')[0]+'T00:00:00');
                dateDiff = Math.abs(vaccinationDate-curDate)/3600000/24;

                if (dateDiff <= daysToAvg) {
                    totalVaccinationInPeriod = totalVaccinationInPeriod + parseInt(vaccinationByDate[i].split(',')[1]);
                }
            }

            avgVaccination = parseInt(totalVaccinationInPeriod/daysToAvg);
            vaccineTrend = parseInt(remainingVaccineCount/avgVaccination);

            $('#vaccine-rate').text(avgVaccination);
            $('#avg-days').text(daysToAvg);
            $('#vaccine-trend').text(vaccineTrend);
        }
    })

});