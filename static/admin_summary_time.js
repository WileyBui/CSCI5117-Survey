function display_time(timestampList) {
    var ctx = document.getElementById("timeChart");
    var counts = {};
    var my_data = [];

    for (var i = 0; i < timestampList.length; i++) {
        if (timestampList[i] in counts) {
            counts[timestampList[i]] += 1;
        } else {
            counts[timestampList[i]] = 1;
        }
    }

    for (var key in counts) {
        my_data.push({ t: key, y: counts[key] })
    }

    var myChart = new Chart(ctx, {
        type: 'line',
        options: {
            scales: {
                xAxes: [{
                    type: 'time',
                }]
            }
        },
        data: {
            labels: timestampList,
            datasets: [{
                label: '# Filled-Out Survey / Day',
                data: my_data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }
    });
}