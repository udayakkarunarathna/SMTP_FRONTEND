//  Sidebar Control
document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('.sidebar .nav-link').forEach(function(element){
      
      element.addEventListener('click', function (e) {
  
        let nextEl = element.nextElementSibling;
        let parentEl  = element.parentElement;	
  
          if(nextEl) {
              e.preventDefault();	
              let mycollapse = new bootstrap.Collapse(nextEl);
              
              if(nextEl.classList.contains('show')){
                mycollapse.hide();
              } else {
                  mycollapse.show();
                  // find other submenus with class=show
                  var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                  // if it exists, then close all of them
                  if(opened_submenu){
                    new bootstrap.Collapse(opened_submenu);
                  }
              }
          }
      }); // addEventListener
    }) // forEach
  });

//Switch Charts
document.getElementById('switchChartButton').addEventListener('click', function(e){
    e.preventDefault;
    console.log('clicked');
    let scatterChart = document.getElementById('scatterChart');
    let columnChart = document.getElementById('columnChart');
    if (scatterChart.style.display === "none") {
        scatterChart.style.display = "block";
        columnChart.style.display = "none"
      } else {
        scatterChart.style.display = "none";
        columnChart.style.display = "block"
      }
})



// Create a JSON object to store the chart configurations
const pieChartConfigs = {
    type: "pie3D",
    renderAt: "pieChart",
    width: "100%",
    height: "250",
    dataFormat: "jsonurl",
    dataSource: "assets/js/piedata.json"
  };

const scatterChartConfigs = {
    type: "selectscatter",
    renderAt: "scatterChart",
    width: "100%",
    height: "250",
    dataFormat: "jsonurl",
    dataSource: "assets/js/scatterdata.json"
};

const columnChartConfigs = {
    type: "column2d",
    renderAt: "columnChart",
    width: "100%",
    height: "250",
    dataFormat: "jsonurl",
    dataSource: "assets/js/columndata.json"
};



FusionCharts.ready(function(){
// Pie Chart Render
var piecharts = new FusionCharts(pieChartConfigs);
piecharts.render();

// Scatter Chart Render
var scatterCharts = new FusionCharts(scatterChartConfigs);
scatterCharts.render();


// column Chart Render
var columnCharts = new FusionCharts(columnChartConfigs);
columnCharts.render();
});



