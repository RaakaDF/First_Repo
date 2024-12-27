const ctx = document.getElementById('barChart').getContext('2d');

  const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Rose', 'Barbara', 'Yahn', 'Grace', 'Paul', 'Oriane'],
      datasets: [{
        label: 'Nomber of Votes',
        data: [12, 19, 3, 5, 6, 3],
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

/*const responses = [];

function submitForm() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const experience = document.getElementById('experience').value;

    const response = { age: parseInt(age), gender, experience: parseInt(experience) };
    responses.push(response);

    addRowToTable(response);
    generateChart();
}

function addRowToTable(response) {
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.insertCell(0).innerText = response.age;
    newRow.insertCell(1).innerText = response.gender;
    newRow.insertCell(2).innerText = response.experience;
}

function generateChart() {
    const genderGroups = ['male', 'female', 'other'];
    const ageGroups = ['<20', '20-30', '30-40', '>40'];

    const data = genderGroups.map(gender => {
        return ageGroups.map(ageGroup => {
            const filteredResponses = responses.filter(response => {
                let ageMatch = false;
                if (ageGroup === '<20') ageMatch = response.age < 20;
                else if (ageGroup === '20-30') ageMatch = response.age >= 20 && response.age <= 30;
                else if (ageGroup === '30-40') ageMatch = response.age > 30 && response.age <= 40;
                else if (ageGroup === '>40') ageMatch = response.age > 40;
                
                return response.gender === gender && ageMatch;
            });
            const totalExperience = filteredResponses.reduce((sum, response) => sum + response.experience, 0);
            const averageExperience = filteredResponses.length ? totalExperience / filteredResponses.length : 0;
            return averageExperience;
        });
    });

    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ageGroups,
            datasets: genderGroups.map((gender, index) => ({
                label: gender,
                data: data[index],
                backgroundColor: `rgba(${index * 60 + 60}, 99, 132, 0.2)`,
                borderColor: `rgba(${index * 60 + 60}, 99, 132, 1)`,
                borderWidth: 1
            }))
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Average Experience (years)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Age Groups'
                    }
                }
            }
        }
    });
}
*/