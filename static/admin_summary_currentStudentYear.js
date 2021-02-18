function display_current_year(currentStudentYearList) {
    var ctx = document.getElementById("currentStudentYearChart").getContext("2d");
    var counts = { 'PSEO': 0, 'Freshman': 0, 'Sophomore': 0, 'Junior': 0, 'Senior': 0, 'Master/Grad': 0, 'N/A': 0 };

    for (var i = 0; i < currentStudentYearList.length; i++) {
        var elem = currentStudentYearList[i];
        counts[elem] += 1;
    }

    var currentStudentYearChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['PSEO', 'Freshman', 'Sophomore', 'Junior', 'Senior', 'Master/Grad', 'N/A'],
            datasets: [{
                label: '# of Frequencies',
                data: Object.values(counts),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2,
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}