$(document).ready(function(){
	$.ajax({
		url: "http://localhost:8080/chartjs/data.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var month = [];
			var num = [];

			for(var i in data) {
				month.push("month "+ data[i].month);
				num.push(data[i].num);
			}

			var chartdata = {
				labels: month,
				datasets : [
					{
						label: 'No.Enrollments for Course c1',
						backgroundColor: 'rgba(100,100,250,0.7)',
						borderColor: 'rgba(200, 200, 200, 0.75)',
						hoverBackgroundColor: 'rgba(250, 100, 100, 0.5)',
						hoverBorderColor: 'rgba(200, 200, 200, 1)',
						data: num
					}
				]
				
				
			};

			var ctx = $("#mycanvas");

			var barGraph = new Chart(ctx, {
				type: 'bar',
				data: chartdata
			});
		},
		error: function(data) {
			console.log(data);
		}
	});
});