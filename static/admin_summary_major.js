function display_major(majorList) {
  var ctx = document.getElementById("majorPieChart").getContext('2d');
  var counts = {};

  for (var i = 0; i < majorList.length; i++) {
    if (majorList[i] in counts) {
      counts[majorList[i]] += 1;
    } else {
      counts[majorList[i]] = 1;
    }
  }

  var keys = [], values = [];
  for (var key in counts) {
    keys.push(key);
    values.push(counts[key]);
  }

  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: keys,
      datasets: [{
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          "#95a5a6",
          "#9b59b6",
          "#f1c40f",
          "#e74c3c",
          "#34495e"
        ],
        data: values
      }]
    }
  });
}