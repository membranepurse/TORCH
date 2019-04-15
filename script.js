function makeChart() {
  new Chart(document.getElementById("bar-chart"), {
    type: 'line',
    data: {
      labels: [15,30,45,60,75,90,105,120,135,150],
      datasets: [{
          data: [10,20,30,40,50,60,70,80,90,100],
          label: "Closing",
          borderColor: "#3e95cd",
          fill: false
        }]
    },
    options: {
      title: {
        display: true,
        text: 'Closing Prices Over Time'
      }
    }
  });
}
