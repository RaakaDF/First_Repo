const ctx2 = document.getElementById('circleChart');

  const circleChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [16, 13, 3, 5, 2, 3],
        backgroundColor: ['rgba(30,24, 42, 0.2)'],
        borderColor: ['rgba(255,24, 12, 0.2)', 'rgba(25,240, 16, 0.2)', 'rgba(315,14, 27, 0.2)', 'rgba(75,145, 27, 0.2)'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });