// Initial Reporting Page Setup
let haChartInstanceMal = null;
let treeChartInstanceMal = null;
let haPieChartInstanceMal = null;
let treePieChartInstanceMal = null;



// load mal data 

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
        {label:'Capacity of Site',data:reported,backgroundColor:'#c1e3aa'},
        {label:'Hectares Claimed Restored',data:verified,backgroundColor:'#627c49'}
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
      data:{labels:sites,datasets:[{label:'Capacity of Site',data:reported,backgroundColor:'#c1e3aa'},{label:'Trees Planted to Date',data:planted,backgroundColor:'#627c49'}]},
      options:{responsive:true,maintainAspectRatio:false,scales:{y:{beginAtZero:true}}}
    });
    const totalTree = 1500000, treesPlanted = 182700;
    window.treePieChartInstanceMal = new Chart(treePieCtx,{
      type:'pie',data:{labels:['Trees Left to Plant','Trees Planted to Date'],datasets:[{data:[totalTree-treesPlanted,treesPlanted],backgroundColor:['#ec6e6e','#627c49']}]},
      options:pieOptions
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

// Buttons for audit information
function showScheduleMal() {
  //toggle underline
  const off = [pLogBtnMal, speciesBtnMal, stakeBtnMal];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = scheduleBtnMal;
  on.classList.add("active-link");
  // hide/show section
  const hide = [pLogMal, speciesMal, stakeMal];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = scheduleMal;
    show.style.display = "flex";
}
function showLogMal() {
  // toggle underline
  const off = [scheduleBtnMal, speciesBtnMal, stakeBtnMal];
  off.forEach(element => {
    element.classList.remove("active-link");
  });
  pLogBtnMal.classList.add("active-link");

  // hide other sections
  const hide = [scheduleMal, speciesMal, stakeMal];
  hide.forEach(element => {
    element.style.display = "none";
  });

  // show pLog section
  pLogMal.style.display = "flex";

}


function showSpeciesMal() {
  //toggle underline
  const off = [scheduleBtnMal, pLogBtnMal, stakeBtnMal];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = speciesBtnMal;
  on.classList.add("active-link");
  // hide/show section
  const hide = [scheduleMal, pLogMal, stakeMal];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = speciesMal;
    show.style.display = "flex";
}
function showStakeholdersMal() {
  //toggle underline
  const off = [scheduleBtnMal, pLogBtnMal, speciesBtnMal];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = stakeBtnMal;
  on.classList.add("active-link");
  // hide/show section
  const hide = [scheduleMal, pLogMal, speciesMal];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = stakeMal;
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


