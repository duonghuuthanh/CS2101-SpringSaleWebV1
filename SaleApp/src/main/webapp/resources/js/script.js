function deleteProduct(url, id) {
    fetch(url, {
        method: 'delete'
    }).then(res => {
        if (res.status === 204)
            location.reload();
        else
            alert("ERROR");
    });
}

function drawChartRevenue(ctx, labels, data, title="Doanh thu") {
    let colors = [];
    for (let i = 0; i < data.length; i++)
        colors.push(`rgba(${parseInt(Math.random()*255)}, 
        ${parseInt(Math.random()*255)}, 
        ${parseInt(Math.random()*255)}, 0.7)`);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                    label: title,
                    data: data,
                    borderWidth: 1,
                    backgroundColor: colors
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
}