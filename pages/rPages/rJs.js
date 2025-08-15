const discuss = document.getElementById('discuss');
  if (discuss) {
    const textWidth = discuss.offsetWidth + "px";
    discuss.style.setProperty('--text-width', textWidth);
  }
  function copyEmail() {
    const email = "ben@reducereusegrow.com"; // The email address to copy
    navigator.clipboard.writeText(email).then(() => {
        alert(`Email copied to clipboard!: ${email}`);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

//sidebar toggle

const tanzCon = document.getElementById("wWrapper");
const philCon = document.getElementById("wWrapperPhil");
const malCon = document.getElementById("wWrapperMal");
const brazCon = document.getElementById("wWrapperBraz");
const tanzConBtn = document.getElementById("tanzConBtn");
const philConBtn = document.getElementById("philConBtn");
const malConBtn = document.getElementById("malConBtn");
const brazConBtn = document.getElementById("brazConBtn");
// Buttons for audit information
function showTanzContent() {
  //toggle off
  const off = [philConBtn, malConBtn, brazConBtn];
  off.forEach(element => {
      element.classList.remove("active-side");
      element.classList.add("off-side");
  });
  const on = tanzConBtn;
  on.classList.add("active-side");
  // hide/show section
  const hide = [philCon, malCon, brazCon];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = tanzCon;
    show.style.display = "flex";
}

function showPhilContent() {
  //toggle off
  const off = [tanzConBtn, malConBtn, brazConBtn];
  off.forEach(element => {
      element.classList.remove("active-side");
      element.classList.add("off-side");
  });
  const on = philConBtn;
  on.classList.add("active-side");
  // hide/show section
  const hide = [tanzCon, malCon, brazCon];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = philCon;
    show.style.display = "block";
}

function showMalContent() {
  //toggle off
  const off = [philConBtn, tanzConBtn, brazConBtn];
  off.forEach(element => {
      element.classList.remove("active-side");
      element.classList.add("off-side");
  });
  const on = malConBtn;
  on.classList.add("active-side");
  // hide/show section
  const hide = [philCon, tanzCon, brazCon];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = malCon;
    show.style.display = "block";
}

function showBrazContent() {
  //toggle off
  const off = [philConBtn, malConBtn, tanzConBtn];
  off.forEach(element => {
      element.classList.remove("active-side");
      element.classList.add("off-side");
  });
  const on = brazConBtn;
  on.classList.add("active-side");
  // hide/show section
  const hide = [philCon, malCon, tanzCon];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = brazCon;
    show.style.display = "block";
}










// Initial Reporting Page Setup
let haChartInstance = null;
let treeChartInstance = null;
let haPieChartInstance = null;
let treePieChartInstance = null;

window.onload = function () {
  const dataSelector = document.getElementById('dataSelector2');
  const chartsHa = document.getElementById('chartsHa');
  const chartsTree = document.getElementById('chartsTree'); 
  const haBarCtx = document.getElementById('haSite').getContext('2d');
  const treeBarCtx = document.getElementById('treeSite').getContext('2d');
  const haPieCtx = document.getElementById('haPie').getContext('2d');
  const treePieCtx = document.getElementById('treePie').getContext('2d');

  // Toggle UI initially
  toggleCharts(dataSelector.value);

  dataSelector.addEventListener('input', function () {
    toggleCharts(this.value);
  });

  function toggleCharts(selected) {
    if (selected === 'ha') {
      chartsHa.style.display = 'flex';
      chartsTree.style.display = 'none';
    } else if (selected === 'tree') {
      chartsHa.style.display = 'none';
      chartsTree.style.display = 'flex';
    }
  }
  // ---- Reusable pie chart options
  const pieOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 20,
          padding: 10
        }
      },
      tooltip: {
        callbacks: {
          label: context => {
            const label = context.label || '';
            const value = context.parsed;
            return `${label}: ${value}`;
          }
        }
      }
    }
  };

  // ---- Load HA JSON and build charts
  fetch('./rPages/haSite.json')
    .then(res => res.json())
    .then(data => {
      const sites = data.map(row => row.Site);
      const reported = data.map(row => row["Total Capacity"] ?? 0);
      const verified = data.map(row => row["Area Planted"] ?? 0);

      haChartInstance = new Chart(haBarCtx, {
          type: 'bar',
          data: {
            labels: sites,
            datasets: [
              {
                label: 'Capacity of Site',
                data: reported,
                backgroundColor: '#c1e3aa',
              },
              {
                label: 'Hectares Claimed Restored',
                data: verified,
                backgroundColor: '#627c49',
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'top' },
              tooltip: {
                callbacks: {
                  label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y}`,
                },
              },
            },
            scales: {
              x: {
                ticks: {
                  maxRotation: 60,
                  minRotation: 45,
                  autoSkip: false,
                },
              },
              y: {
                beginAtZero: true,
              },
            },
          },
        });

      
        const totalArea = 4028;
        const areaPlanted = 3927;
        const areaRemaining = totalArea - areaPlanted;
        haPieChartInstance = new Chart(haPieCtx, {
        type: 'pie',
        data: {
          labels: ['Available Hectares Left to Plant', 'Hectares Planted to Date'],
          datasets: [{
            data: [areaRemaining, areaPlanted],
            backgroundColor: ['#ec6e6e', '#627c49'],
            borderWidth: 1
          }]
        },
        options: pieOptions
      });
    });

  // ---- Load Tree JSON and build charts
  fetch('./rPages/treeSite.json')
    .then(res => res.json())
    .then(data => {
      const sitesTree = data.map(row => row.Site);
      const reportedTree = data.map(row => row["Capacity"] ?? 0);
      const verifiedTree = data.map(row => row["Trees Planted"] ?? 0);

      treeChartInstance = new Chart(treeBarCtx, {
        type: 'bar',
        data: {
          labels: sitesTree,
          datasets: [
            {
              label: 'Capacity of Site',
              data: reportedTree,
              backgroundColor: '#c1e3aa'
            },
            {
              label: 'Trees Planted to Date',
              data: verifiedTree,
              backgroundColor: '#627c49'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'top' },
            tooltip: {
                callbacks: {
                  label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y}`,
                },
              },
          },
          scales: {
            x: {ticks: {
                  maxRotation: 60,
                  minRotation: 45,
                  autoSkip: false,
                },
            },
            y: { beginAtZero: true }
          }
        }
      });

      const totalTree = 6490000;
      const treesPlanted = 6283125;
      const treesRemaining = totalTree - treesPlanted;
      treePieChartInstance = new Chart(treePieCtx, {
        type: 'pie',
        data: {
          labels: ['Trees Left to Plant', 'Trees Planted to Date'],
          datasets: [{
            data: [treesRemaining, treesPlanted],
            backgroundColor: ['#ec6e6e', '#627c49'],
            borderWidth: 1
          }]
        },
        options: pieOptions
      });
    });  
};
const schedule = document.getElementById("schedule");
const pLog = document.getElementById("log");
const species = document.getElementById("speciesTable");
const stake = document.getElementById("stakeholders");
const scheduleBtn = document.getElementById("time");
const pLogBtn = document.getElementById("pLog");
const speciesBtn = document.getElementById("species");
const stakeBtn = document.getElementById("stake");

// Buttons for audit information
function showSchedule() {
  //toggle underline
  const off = [pLogBtn, speciesBtn, stakeBtn];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = scheduleBtn;
  on.classList.add("active-link");
  // hide/show section
  const hide = [pLog, species, stake];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = schedule;
    show.style.display = "flex";
}
function showLog() {
  // toggle underline
  const off = [scheduleBtn, speciesBtn, stakeBtn];
  off.forEach(element => {
    element.classList.remove("active-link");
  });
  pLogBtn.classList.add("active-link");

  // hide other sections
  const hide = [schedule, species, stake];
  hide.forEach(element => {
    element.style.display = "none";
  });

  // show pLog section
  pLog.style.display = "flex";

}


function showSpecies() {
  //toggle underline
  const off = [scheduleBtn, pLogBtn, stakeBtn];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = speciesBtn;
  on.classList.add("active-link");
  // hide/show section
  const hide = [schedule, pLog, stake];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = species;
    show.style.display = "flex";
}
function showStakeholders() {
  //toggle underline
  const off = [scheduleBtn, pLogBtn, speciesBtn];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = stakeBtn;
  on.classList.add("active-link");
  // hide/show section
  const hide = [schedule, pLog, species];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = stake;
    show.style.display = "block";
}


// sections - gantt schedule
 fetch('./rPages//gantt.svg')
    .then(response => response.text())
    .then(svgText => {
      const container = document.getElementById('gantt');
      container.innerHTML = svgText;
      const svg = container.querySelector('svg');
    if (svg) {
      svg.removeAttribute('width');
      svg.removeAttribute('height');
      svg.style.width = '60vw';
      svg.style.height = '60vh';
      svg.setAttribute('preserveAspectRatio', 'none');
    }
    });

  // gantt schedule from pLog
fetch('./rPages/pLogGanttRaw.json')
  .then(res => res.json())
  .then(data => {
    // Clean data: remove entries missing any key value
    const cleaned = data.filter(d => d["Date Planted"] && d.Site && d["Trees Planted"])
      .map(d => ({
        site: d.Site.trim(),
        date: d["Date Planted"].trim().slice(0, 10),
        count: +d["Trees Planted"]
      }));

    // Get unique sorted dates from the data only
    const labels = [...new Set(cleaned.map(d => d.date))].sort();

    // Get unique sites
    const sites = [...new Set(cleaned.map(d => d.site))];

    // Assign colors (rainbow palette)
    function generateRainbowColors(n) {
      const colors = [];
      for (let i = 0; i < n; i++) {
        const hue = Math.round((360 * i) / n);
        colors.push(`hsl(${hue}, 70%, 50%)`);
      }
      return colors;
    }
    const colors = generateRainbowColors(sites.length);

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
        borderColor: colors[i],
        backgroundColor: colors[i],
        fill: false,
        spanGaps: false,   // don't connect points with missing/null values
        tension: 0.2
      };
    });

    // Render chart
    const ctx = document.getElementById('ganttChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: { labels, datasets },
      options: {
        interaction: { mode: 'nearest', intersect: false },
        responsive: true,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Partner Reported Planting Events',
            font: { size: 18, weight: 'bold' }
          }
        },
        scales: {
          x: { title: { display: true, text: 'Date Planted' } },
          y: { title: { display: true, text: 'Trees Planted' }, beginAtZero: true }
        }
      }
    });
  });

// pLog database

$('#ganttTable').DataTable({
  ajax: {
    url: './rPages/pLogGanttRaw.json',
    dataSrc: ''
  },
  columns: [
    { data: 'Site' },
    { data: 'Date Planted' },
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

//Load species list content

$('#speciesList').DataTable({
  ajax: {
    url: './rPages/speciesList.json',
    dataSrc: function(json) {
      console.log('Loaded JSON:', json);
      return json;
    }
  },
  columns: [
    { data: 'TREE SPECIES' },
    { data: 'VOLUME' },
    { data: 'VALUE' }
  ],
  dom: 'Bflrtip',
  buttons: [
    { extend: 'csvHtml5', text: 'Download CSV', title: 'Tree_Planting_Data' },
    { extend: 'excelHtml5', text: 'Download Excel' }
  ]
});