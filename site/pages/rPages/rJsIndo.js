// Initial Reporting Page Setup
let haChartInstanceIndo = null;
let treeChartInstanceIndo = null;
let haPieChartInstanceIndo = null;
let treePieChartInstanceIndo = null;



// load Indo data 

  const dataSelectorIndo = document.getElementById('dataSelector2Indo');
  const chartsHaIndo = document.getElementById('chartsHaIndo');
  const chartsTreeIndo = document.getElementById('chartsTreeIndo'); 
  const haBarCtxIndo = document.getElementById('haSiteIndo').getContext('2d');
  const treeBarCtxIndo = document.getElementById('treeSiteIndo').getContext('2d');
  const haPieCtxIndo = document.getElementById('haPieIndo').getContext('2d');
  const treePieCtxIndo = document.getElementById('treePieIndo').getContext('2d');

  // toggle logic
  toggleCharts(dataSelectorIndo.value);
  dataSelectorIndo.addEventListener('input', function () { toggleCharts(this.value); });

  function toggleCharts(selected) {
    chartsHaIndo.style.display = selected==='ha' ? 'flex' : 'none';
    chartsTreeIndo.style.display = selected==='tree' ? 'flex' : 'none';
  }

  const pieOptionsIndo = { maintainAspectRatio:false, responsive:true, plugins:{legend:{position:'right'}} };

  fetch('./rPages/haSiteIndo.json').then(r=>r.json()).then(data=>{
    const sitesIndo = data.map(row=>row.Site);
    const reportedIndo = data.map(row=>row["Forecasted Hectares Planted"]||0);
    const verifiedIndo = data.map(row=>row["Hectares Planted to Date"]||0);
    window.haChartInstanceIndo = new Chart(haBarCtxIndo,{
      type:'bar',
      data:{labels:sitesIndo,datasets:[
        {label:'Forecasted Hectares Restored',data:reportedIndo,backgroundColor:'#c1e3aa'},
        {label:'Hectares Planted to Date',data:verifiedIndo,backgroundColor:'#627c49'}
      ]},
      options:{responsive:true,maintainAspectRatio:false,scales:{y:{beginAtZero:true}}}
    });
    const totalArea = 10000, areaPlanted = 0;
    window.haPieChartInstanceIndo = new Chart(haPieCtxIndo,{
      type:'pie', data:{labels:['Available Hectares Left to Plant','Hectares Planted to Date'],datasets:[{data:[totalArea-areaPlanted,areaPlanted],backgroundColor:['#ec6e6e','#627c49']}]},
      options:pieOptionsIndo
    });
  });

  fetch('./rPages/treeSiteIndo.json').then(r=>r.json()).then(data=>{
    console.log("Tree JSON data:", data);
    const sites = data.map(r=>r.Site);
    const reported = data.map(r=>r["Forecasted Trees Planted"]||0);
    const planted = data.map(r=>r["Trees Planted to Date"]||0);
    window.treeChartInstanceIndo = new Chart(treeBarCtxIndo,{
      type:'bar',
      data:{labels:sites,datasets:[{label:'Forecasted Trees Planted',data:reported,backgroundColor:'#c1e3aa'},{label:'Trees Planted to Date',data:planted,backgroundColor:'#627c49'}]},
      options:{responsive:true,maintainAspectRatio:false,scales:{y:{beginAtZero:true}}}
    });
    const totalTree = 10000000, treesPlanted = 0;
    window.treePieChartInstanceIndo = new Chart(treePieCtxIndo,{
      type:'pie',data:{labels:['Trees Left to Plant','Trees Planted to Date'],datasets:[{data:[totalTree-treesPlanted,treesPlanted],backgroundColor:['#ec6e6e','#627c49']}]},
      options:pieOptionsIndo
    });
  });




const scheduleIndo = document.getElementById("scheduleIndo");
const pLogIndo = document.getElementById("logIndo");
const speciesIndo = document.getElementById("speciesTableIndo");
const stakeIndo = document.getElementById("stakeholdersIndo");
const scheduleBtnIndo = document.getElementById("timeIndo");
const pLogBtnIndo = document.getElementById("pLogIndo");
const speciesBtnIndo = document.getElementById("speciesIndo");
const stakeBtnIndo = document.getElementById("stakeIndo");

// Buttons for audit information
function showScheduleIndo() {
  //toggle underline
  const off = [pLogBtnIndo, speciesBtnIndo, stakeBtnIndo];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = scheduleBtnIndo;
  on.classList.add("active-link");
  // hide/show section
  const hide = [pLogIndo, speciesIndo, stakeIndo];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = scheduleIndo;
    show.style.display = "flex";
}
function showLogIndo() {
  // toggle underline
  const off = [scheduleBtnIndo, speciesBtnIndo, stakeBtnIndo];
  off.forEach(element => {
    element.classList.remove("active-link");
  });
  pLogBtnIndo.classList.add("active-link");

  // hide other sections
  const hide = [scheduleIndo, speciesIndo, stakeIndo];
  hide.forEach(element => {
    element.style.display = "none";
  });

  // show pLog section
  pLogIndo.style.display = "flex";

}


function showSpeciesIndo() {
  //toggle underline
  const off = [scheduleBtnIndo, pLogBtnIndo, stakeBtnIndo];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = speciesBtnIndo;
  on.classList.add("active-link");
  // hide/show section
  const hide = [scheduleIndo, pLogIndo, stakeIndo];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = speciesIndo;
    show.style.display = "flex";
}
function showStakeholdersIndo() {
  //toggle underline
  const off = [scheduleBtnIndo, pLogBtnIndo, speciesBtnIndo];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = stakeBtnIndo;
  on.classList.add("active-link");
  // hide/show section
  const hide = [scheduleIndo, pLogIndo, speciesIndo];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = stakeIndo;
    show.style.display = "flex";
}




  fetch('./rPages/ganttDatesIndo.json')
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

    const ctx_gantt2 = document.getElementById('ganttChartIndo').getContext('2d');
    new Chart(ctx_gantt2, {
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
            min: new Date(2025, 9, 1),
            max: new Date(2027, 1, 1),
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
                return `${start.toLocaleDateString()} → ${end.toLocaleDateString()}`;
              }
            }
          },
          legend: { display: false },
          title: {
            display: true,
            text: 'Per Parcel Planting Schedule',
            font: { size: 14, weight: 'bold' },
            align: 'center'
          }
        }
      }
    });
  });







