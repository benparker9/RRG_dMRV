// Initial Reporting Page Setup
let haChartInstanceBraz = null;
let treeChartInstanceBraz = null;
let haPieChartInstanceBraz = null;
let treePieChartInstanceBraz = null;



// load Braz data 
document.addEventListener("DOMContentLoaded", function () {
  const dataSelectorBraz = document.getElementById('dataSelector2Braz');
  const chartsHaBraz = document.getElementById('chartsHaBraz');
  const chartsTreeBraz = document.getElementById('chartsTreeBraz'); 
  const haBarCtxBraz = document.getElementById('haSiteBraz').getContext('2d');
  const treeBarCtxBraz = document.getElementById('treeSiteBraz').getContext('2d');
  const haPieCtxBraz = document.getElementById('haPieBraz').getContext('2d');
  const treePieCtxBraz = document.getElementById('treePieBraz').getContext('2d');

  // toggle logic
  toggleCharts(dataSelectorBraz.value);
  dataSelectorBraz.addEventListener('input', function () { toggleCharts(this.value); });

  function toggleCharts(selected) {
    chartsHaBraz.style.display = selected==='ha' ? 'flex' : 'none';
    chartsTreeBraz.style.display = selected==='tree' ? 'flex' : 'none';
  }

  const pieOptionsBraz = { maintainAspectRatio:false, responsive:true, plugins:{legend:{position:'right'}} };

  fetch('./rPages/haSiteBraz.json').then(r=>r.json()).then(data=>{
    const sitesBraz = data.map(row=>row.Site);
    const reportedBraz = data.map(row=>row["Forecasted Hectares Restored"]||0);
    const verifiedBraz = data.map(row=>row["Hectares Planted to Date"]||0);
    window.haChartInstanceBraz = new Chart(haBarCtxBraz,{
      type:'bar',
      data:{labels:sitesBraz,datasets:[
        {label:'Forecasted Hectares Restored',data:reportedBraz,backgroundColor:'#c1e3aa'},
        {label:'Hectares Planted to Date',data:verifiedBraz,backgroundColor:'#627c49'}
      ]},
      options:{responsive:true,maintainAspectRatio:false,scales:{y:{beginAtZero:true}}}
    });
    const totalArea = 150, areaPlanted = 0;
    window.haPieChartInstanceBraz = new Chart(haPieCtxBraz,{
      type:'pie', data:{labels:['Available Hectares Left to Plant','Hectares Planted to Date'],datasets:[{data:[totalArea-areaPlanted,areaPlanted],backgroundColor:['#ec6e6e','#627c49']}]},
      options:pieOptionsBraz
    });
  });

  fetch('./rPages/treeSiteBraz.json').then(r=>r.json()).then(data=>{
    console.log("Tree JSON data:", data);
    const sites = data.map(r=>r.Site);
    const reported = data.map(r=>r["Forecasted Trees Planted"]||0);
    const planted = data.map(r=>r["Trees Planted to Date"]||0);
    window.treeChartInstanceBraz = new Chart(treeBarCtxBraz,{
      type:'bar',
      data:{labels:sites,datasets:[{label:'Forecasted Trees Planted',data:reported,backgroundColor:'#c1e3aa'},{label:'Trees Planted to Date',data:planted,backgroundColor:'#627c49'}]},
      options:{responsive:true,maintainAspectRatio:false,scales:{y:{beginAtZero:true}}}
    });
    const totalTree = 1500000, treesPlanted = 0;
    window.treePieChartInstanceBraz = new Chart(treePieCtxBraz,{
      type:'pie',data:{labels:['Trees Left to Plant','Trees Planted to Date'],datasets:[{data:[totalTree-treesPlanted,treesPlanted],backgroundColor:['#ec6e6e','#627c49']}]},
      options:pieOptionsBraz
    });
  });

});

const scheduleBraz = document.getElementById("scheduleBraz");
const pLogBraz = document.getElementById("logBraz");
const speciesBraz = document.getElementById("speciesTableBraz");
const stakeBraz = document.getElementById("stakeholdersBraz");
const scheduleBtnBraz = document.getElementById("timeBraz");
const pLogBtnBraz = document.getElementById("pLogBraz");
const speciesBtnBraz = document.getElementById("speciesBraz");
const stakeBtnBraz = document.getElementById("stakeBraz");

// Buttons for audit information
function showScheduleBraz() {
  //toggle underline
  const off = [pLogBtnBraz, speciesBtnBraz, stakeBtnBraz];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = scheduleBtnBraz;
  on.classList.add("active-link");
  // hide/show section
  const hide = [pLogBraz, speciesBraz, stakeBraz];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = scheduleBraz;
    show.style.display = "flex";
}
function showLogBraz() {
  // toggle underline
  const off = [scheduleBtnBraz, speciesBtnBraz, stakeBtnBraz];
  off.forEach(element => {
    element.classList.remove("active-link");
  });
  pLogBtnBraz.classList.add("active-link");

  // hide other sections
  const hide = [scheduleBraz, speciesBraz, stakeBraz];
  hide.forEach(element => {
    element.style.display = "none";
  });

  // show pLog section
  pLogBraz.style.display = "flex";

}


function showSpeciesBraz() {
  //toggle underline
  const off = [scheduleBtnBraz, pLogBtnBraz, stakeBtnBraz];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = speciesBtnBraz;
  on.classList.add("active-link");
  // hide/show section
  const hide = [scheduleBraz, pLogBraz, stakeBraz];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = speciesBraz;
    show.style.display = "flex";
}
function showStakeholdersBraz() {
  //toggle underline
  const off = [scheduleBtnBraz, pLogBtnBraz, speciesBtnBraz];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = stakeBtnBraz;
  on.classList.add("active-link");
  // hide/show section
  const hide = [scheduleBraz, pLogBraz, speciesBraz];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = stakeBraz;
    show.style.display = "flex";
}



fetch('./rPages/ganttDatesBraz.json')
  .then(res => {
    if (!res.ok) throw new Error("HTTP error " + res.status);
    return res.json();
  })
  .then(data => {
    console.log("Fetched gantt data:", data);

    // Pick a color for each site
    function generateRainbowColors(n) {
      const colors = [];
      for (let i = 0; i < n; i++) {
        const hue = Math.round((360 * i) / n);
        colors.push(`hsl(${hue}, 70%, 50%)`);
      }
      return colors;
    }
    const colors = generateRainbowColors(data.length);

    const borderColors = colors.map(c => c.replace('0.5', '1'));

    // Convert data into Chart.js horizontal bars
    const tasks = data.map((d, i) => ({
      x: [new Date(d["Start Date"]), new Date(d["End Date"])],
      y: d.Site,
      backgroundColor: colors[i % colors.length],
      borderColor: borderColors[i % borderColors.length]
    }));

    const ctx_ganttBraz = document.getElementById('ganttChartBraz').getContext('2d');
    new Chart(ctx_ganttBraz, {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Schedule',
          data: tasks,
          borderWidth: 1,
          backgroundColor: colors,   // <-- array of colors for each bar
          borderColor: borderColors, // <-- array of border colors
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y', 
        responsive: true,
        maintainAspectRatio: false, 
        scales: {
          x: {
            type: 'time',
            min: new Date(2025, 10, 1),
            max: new Date(2026,4, 1),
            time: { unit: 'month' }
          },
          y: {ticks: {
        autoSkip: false,  // don't skip any labels
        maxRotation: 0,   // don't rotate labels
        minRotation: 0,
        font: {
          size: 12,       // font size for site labels
          family: 'Inter'
        }
      } }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                const start = new Date(context.raw.x[0]);
                const end = new Date(context.raw.x[1]);
                return `${context.raw.y}: ${start.toLocaleDateString()} → ${end.toLocaleDateString()}`;
              }
            }
          },
          legend: { display: false },
          title: {
            display: false
          }
        }
      }
    });
  });
