// Initial Reporting Page Setup
let haChartInstanceMal = null;
let treeChartInstanceMal = null;
let haPieChartInstanceMal = null;
let treePieChartInstanceMal = null;



// load mal data 
document.addEventListener("DOMContentLoaded", function () {
  const dataSelector = document.getElementById('dataSelector2Mal');
  const chartsHa = document.getElementById('chartsHaMal');
  const chartsTree = document.getElementById('chartsTreeMal'); 
  const haBarCtx = document.getElementById('haSiteMal').getContext('2d');
  const treeBarCtx = document.getElementById('treeSiteMal').getContext('2d');
  const haPieCtx = document.getElementById('haPieMal').getContext('2d');
  const treePieCtx = document.getElementById('treePieMal').getContext('2d');

  // toggle logic
  toggleCharts(dataSelector.value);
  dataSelector.addEventListener('input', function () { toggleCharts(this.value); });

  function toggleCharts(selected) {
    chartsHa.style.display = selected==='ha' ? 'flex' : 'none';
    chartsTree.style.display = selected==='tree' ? 'flex' : 'none';
  }

  const pieOptions = { maintainAspectRatio:false, responsive:true, plugins:{legend:{position:'right'}} };

  fetch('./rPages/haSiteMal.json').then(r=>r.json()).then(data=>{
    const sites = data.map(row=>row.Site);
    const reported = data.map(row=>row["Total Capacity"]||0);
    const verified = data.map(row=>row["Area Planted"]||0);
    window.haChartInstanceMal = new Chart(haBarCtx,{
      type:'bar',
      data:{labels:sites,datasets:[
        {label:'Forecasted Hectares Restored',data:reported,backgroundColor:'#c1e3aa'},
        {label:'Hectares Planted to Date',data:verified,backgroundColor:'#627c49'}
      ]},
      options:{responsive:true,maintainAspectRatio:false,scales:{y:{beginAtZero:true}}}
    });
    const totalArea = 627, areaPlanted = 90;
    window.haPieChartInstanceMal = new Chart(haPieCtx,{
      type:'pie', data:{labels:['Available Hectares Left to Plant','Hectares Planted to Date'],datasets:[{data:[totalArea-areaPlanted,areaPlanted],backgroundColor:['#ec6e6e','#627c49']}]},
      options:pieOptions
    });
  });

  fetch('./rPages/treeSiteMal.json').then(r=>r.json()).then(data=>{
    console.log("Tree JSON data:", data);
    const sites = data.map(r=>r.Site);
    const reported = data.map(r=>r["Total Capacity"]||0);
    const planted = data.map(r=>r["Trees Planted"]||0);
    window.treeChartInstanceMal = new Chart(treeBarCtx,{
      type:'bar',
      data:{labels:sites,datasets:[{label:'Forecasted Trees Planted',data:reported,backgroundColor:'#c1e3aa'},{label:'Trees Planted to Date',data:planted,backgroundColor:'#627c49'}]},
      options:{responsive:true,maintainAspectRatio:false,scales:{y:{beginAtZero:true}}}
    });
    const totalTree = 1500000, treesPlanted = 182700;
    window.treePieChartInstanceMal = new Chart(treePieCtx,{
      type:'pie',data:{labels:['Trees Left to Plant','Trees Planted to Date'],datasets:[{data:[totalTree-treesPlanted,treesPlanted],backgroundColor:['#ec6e6e','#627c49']}]},
      options:pieOptions
    });
  });
});



const scheduleMal = document.getElementById("scheduleMal");
const pLogMal = document.getElementById("logMal");
const speciesMal = document.getElementById("speciesTableMal");
const stakeMal = document.getElementById("stakeholdersMal");
const scheduleBtnMal = document.getElementById("timeMal");
const pLogBtnMal = document.getElementById("pLogMal");
const speciesBtnMal = document.getElementById("speciesMal");
const stakeBtnMal = document.getElementById("stakeMal");
const mediaBtnMal = document.getElementById("mediaBtnMal");
const mediaMal = document.getElementById("mediaMal");
// Buttons for audit information
function showScheduleMal() {
  //toggle underline
  const off = [pLogBtnMal, speciesBtnMal, stakeBtnMal, mediaBtnMal];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = scheduleBtnMal;
  on.classList.add("active-link");
  // hide/show section
  const hide = [pLogMal, speciesMal, stakeMal, mediaMal];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = scheduleMal;
    show.style.display = "flex";
}
function showLogMal() {
  // toggle underline
  const off = [scheduleBtnMal, speciesBtnMal, stakeBtnMal, mediaBtnMal];
  off.forEach(element => {
    element.classList.remove("active-link");
  });
  pLogBtnMal.classList.add("active-link");

  // hide other sections
  const hide = [scheduleMal, speciesMal, stakeMal, mediaMal];
  hide.forEach(element => {
    element.style.display = "none";
  });

  // show pLog section
  pLogMal.style.display = "flex";

}


function showSpeciesMal() {
  //toggle underline
  const off = [scheduleBtnMal, pLogBtnMal, stakeBtnMal, mediaBtnMal];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = speciesBtnMal;
  on.classList.add("active-link");
  // hide/show section
  const hide = [scheduleMal, pLogMal, stakeMal, mediaMal];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = speciesMal;
    show.style.display = "flex";
}
function showStakeholdersMal() {
  //toggle underline
  const off = [scheduleBtnMal, pLogBtnMal, speciesBtnMal, mediaBtnMal];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = stakeBtnMal;
  on.classList.add("active-link");
  // hide/show section
  const hide = [scheduleMal, pLogMal, speciesMal, mediaMal];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = stakeMal;
    show.style.display = "flex";
}

function showMediaMal() {
  //toggle underline
  const off = [scheduleBtnMal, pLogBtnMal, speciesBtnMal, stakeBtnMal];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = mediaBtnMal;
  on.classList.add("active-link");
  // hide/show section
  const hide = [scheduleMal, pLogMal, speciesMal, stakeMal];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = mediaMal;
    show.style.display = "flex";
}
fetch('./rPages/pLogMalGantt.json')
  .then(res => res.json())
  .then(data => {
    // Clean and map JSON
    const cleaned = data.map(d => ({
      site: d.Site,
      date: d["Planting Date"],
      count: d["Trees Planted"]
    }));

    // Unique sorted dates for labels
    const labels = [...new Set(cleaned.map(d => d.date))]
      .sort((a, b) => new Date(a) - new Date(b));

    // Unique sites
    const sites = [...new Set(cleaned.map(d => d.site))];

    // Predefined colors
    const colors = [
      'rgba(255,99,132,0.5)',
      'rgba(54,162,235,0.5)',
      'rgba(255,206,86,0.5)',
      'rgba(75,192,192,0.5)',
      'rgba(153,102,255,0.5)',
      'rgba(255,159,64,0.5)',
      'rgba(199,199,199,0.5)'
    ];
    const borderColors = colors.map(c => c.replace('0.5', '1'));

    // Map sites to colors (loop if more sites than colors)
    const colorMap = {};
    sites.forEach((site, i) => {
      const colorIndex = i % colors.length;
      colorMap[site] = { bg: colors[colorIndex], border: borderColors[colorIndex] };
    });

    // Build datasets
    const datasets = sites.map(site => {
      const sitePoints = cleaned.filter(d => d.site === site);

      const dataPoints = labels.map(labelDate => {
        const point = sitePoints.find(p => p.date === labelDate);
        return point ? point.count : null;
      });

      return {
        label: site,
        data: dataPoints,
        borderColor: colorMap[site].border,
        backgroundColor: colorMap[site].bg,
        fill: false,
        spanGaps: false,
        tension: 0.2
      };
    });

    // Render chart
    const ctx = document.getElementById('ganttChartMal').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: { labels, datasets },
      options: {
        interaction: { mode: 'nearest', intersect: false },
        responsive: true,
        plugins: {
          legend: { display: true },
          title: {
            display: true,
            text: 'Partner Reported Planting Events',
            font: { size: 14, weight: 'bold' }
          }
        },
        scales: {
          x: { 
            title: { display: true, text: 'Date Planted' },
            ticks: { autoSkip: false }
          },
          y: { 
            title: { display: true, text: 'Trees Planted' },
            beginAtZero: true 
          }
        }
      }
    });
  })
  .catch(err => console.error('Error loading JSON:', err));




  fetch('./rPages/ganttDatesMal.json')
  .then(res => {
    if (!res.ok) throw new Error("HTTP error " + res.status);
    return res.json();
  })
  .then(data => {
    console.log("Fetched gantt data:", data);

    // Pick a color for each site
    const colors = [
      'rgba(255,99,132,0.5)',
      'rgba(54,162,235,0.5)',
      'rgba(255,206,86,0.5)',
      'rgba(75,192,192,0.5)',
      'rgba(153,102,255,0.5)',
      'rgba(255,159,64,0.5)',
      'rgba(199,199,199,0.5)'
    ];

    const borderColors = colors.map(c => c.replace('0.5', '1'));

    // Convert data into Chart.js horizontal bars
    const tasks = data.map((d, i) => ({
      x: [new Date(d["Start Date"]), new Date(d["End Date"])],
      y: d.Site,
      backgroundColor: colors[i % colors.length],
      borderColor: borderColors[i % borderColors.length]
    }));

    const ctx_gantt = document.getElementById('ganttMalCanvas').getContext('2d');
    new Chart(ctx_gantt, {
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
            min: new Date(2024, 12, 1),
            max: new Date(2027, 4, 1),
            time: { unit: 'month' }
          },
          y: { }
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
            display: true,
            text: 'Per Parcel Planting Schedule',
            font: { size: 14, weight: 'bold' }
          }
        }
      }
    });
  });




  // pLog database

$('#ganttTableMal').DataTable({
  ajax: {
    url: './rPages/pLogMalRaw.json',
    dataSrc: ''
  },
  columns: [
    { data: 'Site' },
    { data: 'Planting Date' },
    { data: 'Trees Planted' },
    { data: 'Area Planted' }
  ],
  dom: 'Bflrtip',   // Show Buttons, filter, table, pagination
  buttons: [
  {
    extend: 'csvHtml5',
    text: 'Download CSV',
    title: 'Tree_Planting_Data'
  },
  {
    extend: 'excelHtml5',
    text: 'Download Excel'
  }
]
});


// inst 1 and 2
const inst1Mal = document.getElementById("inst1Mal");
const inst2Mal = document.getElementById("inst2Mal");
const instBtn1Mal = document.getElementById("instBtn1Mal");
const instBtn2Mal = document.getElementById("instBtn2Mal");


function showMal1() {
  //toggle off
  const off = [instBtn2Mal];
  off.forEach(element => {
      element.classList.remove("active-instance");
      element.classList.add("off-instance");
  });
  const on = instBtn1Mal;
  on.classList.add("active-instance");
  on.classList.remove("off-instance");
  // hide/show section
  const hide = [inst2Mal];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = inst1Mal;
    show.style.display = "block";
}
function showMal2() {
 //toggle off
  const off = [instBtn1Mal];
  off.forEach(element => {
      element.classList.remove("active-instance");
      element.classList.add("off-instance");
  });
  const on = instBtn2Mal;
  on.classList.add("active-instance");
  on.classList.remove("off-instance");
  // hide/show section
  const hide = [inst1Mal];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = inst2Mal;
    show.style.display = "block";
}




// Initial Reporting Page Setup
let haChartInstanceMal2 = null;
let treeChartInstanceMal2 = null;
let haPieChartInstanceMal2 = null;
let treePieChartInstanceMal2 = null;



// load mal data 

document.addEventListener("DOMContentLoaded", function () {

  const dataSelectorMal2 = document.getElementById('dataSelector2Mal2');
  const chartsHaMal2 = document.getElementById('chartsHaMal2');
  const chartsTreeMal2 = document.getElementById('chartsTreeMal2'); 
  const haBarCtx2 = document.getElementById('haSiteMal2').getContext('2d');
  const treeBarCtx2= document.getElementById('treeSiteMal2').getContext('2d');
  const haPieCtx2 = document.getElementById('haPieMal2').getContext('2d');
  const treePieCtx2 = document.getElementById('treePieMal2').getContext('2d');

  // toggle logic
  toggleCharts(dataSelectorMal2.value);
  dataSelectorMal2.addEventListener('input', function () { toggleCharts(this.value); });

  function toggleCharts(selected) {
    chartsHaMal2.style.display = selected==='ha' ? 'flex' : 'none';
    chartsTreeMal2.style.display = selected==='tree' ? 'flex' : 'none';
  }

  const pieOptions2 = { maintainAspectRatio:false, responsive:true, plugins:{legend:{position:'right'}} };

  fetch('./rPages/haSiteMal2.json').then(r=>r.json()).then(data=>{
    const sites2 = data.map(row=>row.Site);
    const reported2 = data.map(row=>row["Capacity"]||0);
    const verified2 = data.map(row=>row["Area Planted to Date"]||0);
    window.haChartInstanceMal2 = new Chart(haBarCtx2,{
      type:'bar',
      data:{labels:sites2,datasets:[
        {label:'Forecasted Hectares Planted',data:reported2,backgroundColor:'#c1e3aa'},
        {label:'Hectares Planted to Date',data:verified2,backgroundColor:'#627c49'}
      ]},
      options:{responsive:true,maintainAspectRatio:false,scales:{x: {display: false}, y:{beginAtZero:true}}}
    });
    const totalArea2 = 3323, areaPlanted2 = 0;
    window.haPieChartInstanceMal2 = new Chart(haPieCtx2,{
      type:'pie', data:{labels:['Available Hectares Left to Plant','Hectares Planted to Date'],datasets:[{data:[totalArea2-areaPlanted2,
        areaPlanted2],backgroundColor:['#ec6e6e','#627c49']}]},
      options:pieOptions2
    });
  });

  fetch('./rPages/treeSiteMal2.json').then(r=>r.json()).then(data=>{
    console.log("Tree JSON data:", data);
    const sites3 = data.map(r=>r.Site);
    const reported3 = data.map(r=>r["Capacity"]||0);
    const planted3 = data.map(r=>r["Trees Planted to Date"]||0);
    window.treeChartInstanceMal2 = new Chart(treeBarCtx2,{
      type:'bar',
      data:{labels:sites3,datasets:[{label:'Forecasted Trees Planted',data:reported3,backgroundColor:'#c1e3aa'},{label:'Trees Planted to Date',
        data:planted3,backgroundColor:'#627c49'}]},
      options:{responsive:true,maintainAspectRatio:false,scales:{x: {display: false}, y:{beginAtZero:true}}}
    });
    const totalTree2 = 5330560, treesPlanted2 = 0;
    window.treePieChartInstanceMal2 = new Chart(treePieCtx2,{
      type:'pie',data:{labels:['Trees Left to Plant','Trees Planted to Date'],datasets:[{data:[totalTree2-treesPlanted2,treesPlanted2]
        ,backgroundColor:['#ec6e6e','#627c49']}]},
      options:pieOptions2
    });
  });
});


const scheduleMal2 = document.getElementById("scheduleMal2");
const pLogMal2 = document.getElementById("logMal2");
const speciesMal2 = document.getElementById("speciesTableMal2");
const stakeMal2 = document.getElementById("stakeholdersMal2");
const scheduleBtnMal2 = document.getElementById("timeMal2");
const pLogBtnMal2 = document.getElementById("pLogMal2");
const speciesBtnMal2 = document.getElementById("speciesMal2");
const stakeBtnMal2 = document.getElementById("stakeMal2");

// Buttons for audit information
function showScheduleMal2() {
  //toggle underline
  const off = [pLogBtnMal2, speciesBtnMal2, stakeBtnMal2];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = scheduleBtnMal2;
  on.classList.add("active-link");
  // hide/show section
  const hide = [pLogMal2, speciesMal2, stakeMal2];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = scheduleMal2;
    show.style.display = "flex";
}
function showLogMal2() {
  // toggle underline
  const off = [scheduleBtnMal2, speciesBtnMal2, stakeBtnMal2];
  off.forEach(element => {
    element.classList.remove("active-link");
  });
  pLogBtnMal2.classList.add("active-link");

  // hide other sections
  const hide = [scheduleMal2, speciesMal2, stakeMal2];
  hide.forEach(element => {
    element.style.display = "none";
  });

  // show pLog section
  pLogMal2.style.display = "flex";

}


function showSpeciesMal2() {
  //toggle underline
  const off = [scheduleBtnMal2, pLogBtnMal2, stakeBtnMal2];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = speciesBtnMal2;
  on.classList.add("active-link");
  // hide/show section
  const hide = [scheduleMal2, pLogMal2, stakeMal2];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = speciesMal2;
    show.style.display = "flex";
}
function showStakeholdersMal2() {
  //toggle underline
  const off = [scheduleBtnMal2, pLogBtnMal2, speciesBtnMal2];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = stakeBtnMal2;
  on.classList.add("active-link");
  // hide/show section
  const hide = [scheduleMal2, pLogMal2, speciesMal2];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = stakeMal2;
    show.style.display = "flex";
}




  fetch('./rPages/ganttDatesMal2.json')
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

    const ctx_gantt2 = document.getElementById('ganttMalCanvas2').getContext('2d');
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
            max: new Date(2029, 12, 1),
            time: { unit: 'month' }
          },
          y: {ticks: {
        autoSkip: false,  // don't skip any labels
        maxRotation: 0,   // don't rotate labels
        minRotation: 0,
        font: {
          size: 7,       // font size for site labels
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

  // gantt schedule from pLog
fetch('./rPages/pLogMalGantt2.json')
  .then(res => res.json())
  .then(data => {
    // Clean data: remove entries missing any key value
    const cleaned = data.filter(d => d["End Date"] && d.Site && d["Trees Planted"])
      .map(d => ({
        site: d.Site.trim(),
        date: new Date(d["End Date"]).toISOString().slice(0, 10),
        count: +d["Trees Planted"]
      }));

    // Get unique sorted dates from the data only
    const labels = [...new Set(cleaned.map(d => d.date))]
    .sort((a, b) => new Date(a) - new Date(b));

    // Get unique sites
    const sites = [...new Set(cleaned.map(d => d.site))];

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

    // Build datasets only for existing dates (no zero fill)
    const datasets = sites.map((site, i) => {
      // Filter data points just for this site
      const sitePoints = cleaned.filter(d => d.site === site);

      // Map sitePoints to a data array aligned to labels, with null where no data
      const dataPoints = labels.map(labelDate => {
        const point = sitePoints.find(p => p.date === labelDate);
        return point ? point.count : null; // null means "no point" (break in line)
      });

      return {
        label: site,
        data: dataPoints,
        borderColor: borderColors,
        backgroundColor: colors,
        fill: false,
        spanGaps: false,   // don't connect points with missing/null values
        tension: 0.2
      };
    });

    // Render chart
    const ctx2 = document.getElementById('ganttChartMal2').getContext('2d');
    new Chart(ctx2, {
      type: 'bar',
      data: { labels, datasets },
      options: {
        interaction: { mode: 'nearest', intersect: false },
        responsive: true,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Planting Projections per Site',
            font: { size: 14, weight: 'bold' }
          }
        },
        scales: {
          x: { title: { display: true, text: 'Expected Date of Completion' } },
          y: { title: { display: true, text: 'Trees Planted' }, beginAtZero: true }
        }
      }
    });
  });






