// headers
const discuss = document.getElementById('discuss');
  if (discuss) {
    const textWidth = discuss.offsetWidth + "px";
    discuss.style.setProperty('--text-width', textWidth);
  }
  function copyEmail() {
    const email = "ben@reducereusegrow.com"; // The email address to copy
    navigator.clipboard.writeText(email).then(() => {
        alert(`Submit a bug by emailing: ${email}`);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}

//sidebar toggle
//
//sidebar btns
const tanzCon = document.getElementById("wWrapper");
const philCon = document.getElementById("wWrapperPhil");
const malCon = document.getElementById("wWrapperMal");
const brazCon = document.getElementById("wWrapperBraz");
const tanzConBtn = document.getElementById("tanzConBtn");
const philConBtn = document.getElementById("philConBtn");
const malConBtn = document.getElementById("malConBtn");
const brazConBtn = document.getElementById("brazConBtn");
const canvaConBtn = document.getElementById("canvaConBtn");
const canvaCon = document.getElementById("wWrapperCanva");
const indoConBtn = document.getElementById("indoConBtn");
const indoCon = document.getElementById("wWrapperIndo");

// Buttons for audit information
function showTanzContent() {
  //toggle off
  const off = [philConBtn, malConBtn, brazConBtn, canvaConBtn, indoConBtn];
  off.forEach(element => {
      element.classList.remove("active-side");
      element.classList.add("off-side");
  });
  const on = tanzConBtn;
  on.classList.add("active-side");
  // hide/show section
  const hide = [philCon, malCon, brazCon, canvaCon, indoCon];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = tanzCon;
    show.style.display = "flex";
}

function showPhilContent() {
  //toggle off
  const off = [tanzConBtn, malConBtn, brazConBtn, canvaConBtn, indoConBtn];
  off.forEach(element => {
      element.classList.remove("active-side");
      element.classList.add("off-side");
  });
  const on = philConBtn;
  on.classList.add("active-side");
  // hide/show section
  const hide = [tanzCon, malCon, brazCon, canvaCon, indoCon];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = philCon;
    show.style.display = "block";

    if (!window.haChartPhilInitialized) {
    // delay slightly to ensure section is visible
    setTimeout(() => {
      initPhilCharts();
      window.haChartPhilInitialized = true;
    }, 50);
  }
}

function showMalContent() {
  //toggle off
  const off = [philConBtn, tanzConBtn, brazConBtn, canvaConBtn, indoConBtn];
  off.forEach(element => {
      element.classList.remove("active-side");
      element.classList.add("off-side");
  });
  const on = malConBtn;
  on.classList.add("active-side");
  // hide/show section
  const hide = [philCon, tanzCon, brazCon, canvaCon, indoCon];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = malCon;
    show.style.display = "block";
}

function showBrazContent() {
  //toggle off
  const off = [philConBtn, malConBtn, tanzConBtn, canvaConBtn, indoConBtn];
  off.forEach(element => {
      element.classList.remove("active-side");
      element.classList.add("off-side");
  });
  const on = brazConBtn;
  on.classList.add("active-side");
  // hide/show section
  const hide = [philCon, malCon, tanzCon, canvaCon, indoCon];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = brazCon;
    show.style.display = "block";
}



function showCanvaContent() {
  //toggle off
  const off = [philConBtn, malConBtn, tanzConBtn, brazConBtn, indoConBtn];
  off.forEach(element => {
      element.classList.remove("active-side");
      element.classList.add("off-side");
  });
  const on = canvaConBtn;
  on.classList.add("active-side");
  // hide/show section
  const hide = [philCon, malCon, tanzCon, brazCon, indoCon];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = canvaCon;
    show.style.display = "block";
}
function showIndoContent() {
  //toggle off
  const off = [philConBtn, malConBtn, tanzConBtn, brazConBtn, canvaConBtn];
  off.forEach(element => {
      element.classList.remove("active-side");
      element.classList.add("off-side");
  });
  const on = indoConBtn;
  on.classList.add("active-side");
  // hide/show section
  const hide = [philCon, malCon, tanzCon, brazCon, canvaCon];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = indoCon;
    show.style.display = "block";
}

//add # for each btn
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".sidebar button");
  const sections = {
    canvaConBtn: "wWrapperCanva",
    tanzConBtn: "wWrapper",
    philConBtn: "wWrapperPhil",
    malConBtn: "wWrapperMal",
    brazConBtn: "wWrapperBraz",
    indoConBtn: "wWrapperIndo"
  };

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // update button styles
      buttons.forEach(b => b.classList.remove("active-side"));
      btn.classList.add("active-side");

      // show/hide content
      for (let id in sections) {
        document.getElementById(sections[id]).style.display = "none";
      }
      const sectionId = sections[btn.id];
      document.getElementById(sectionId).style.display = "block";

      // update URL hash so you can "pick the tab"
      window.location.hash = sectionId;
    });
  });

  // if URL already has a hash, open that section
  const hash = window.location.hash.replace("#", "");
  if (hash && document.getElementById(hash)) {
    document.querySelector(`#${Object.keys(sections).find(k => sections[k] === hash)}`).click();
  }
});




// TANZANIA PAGE 
  // Funfetti for TANZ completion
function launchConfetti() {
    const duration = 3 * 1000; // 3 seconds
    const end = Date.now() + duration;

    (function frame() {
        confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 } });

        if (Date.now() < end) requestAnimationFrame(frame);
    })();
}

function celebrate() {
    launchConfetti();
    alert("🎉 Congratulations Project Forest Instance 1 was completed this September!");
}

// Trigger on page load if hash matches
window.addEventListener('load', () => {
    if (window.location.pathname === "/site/pages/reporting.html" && window.location.hash === "#wWrapper") {
        celebrate();
    }
});
window.addEventListener('hashchange', () => {
    if (window.location.hash === "#wWrapper") {
        celebrate();
    }
});
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
        label: function(ctx) {
          let label = ctx.label || '';
          let value = ctx.parsed;
          return `${label}: ${value.toLocaleString()}`;
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
      const reported = data.map(row => row["Forecasted Hectares"] ?? 0);
      const verified = data.map(row => row["Hectares Planted to Date"] ?? 0);

      haChartInstance = new Chart(haBarCtx, {
          type: 'bar',
          data: {
            labels: sites,
            datasets: [
              {
                label: 'Land Available for Planting',
                data: reported,
                backgroundColor: '#c1e3aa',
              },
              {
                label: 'Hectares Planted to Date',
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
        const totalAreaTanz = 4028;
        const areaPlantedTanz = 4028;
        const areaRemaining = totalAreaTanz - areaPlantedTanz;
        haPieChartInstance = new Chart(haPieCtx, {
        type: 'pie',
        data: {
          labels: ['Available Hectares Left to Plant', 'Hectares Planted to Date'],
          datasets: [{
            data: [areaRemaining, areaPlantedTanz],
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
      const reportedTree = data.map(row => row["Forecasted Trees Planted"] ?? 0);
      const verifiedTree = data.map(row => row["Trees Planted to Date"] ?? 0);

      treeChartInstance = new Chart(treeBarCtx, {
        type: 'bar',
        data: {
          labels: sitesTree,
          datasets: [
            {
              label: 'Forecasted Trees Planted (based on site capacity)',
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
                  label: ctx => {
                    const value = ctx.parsed.y.toLocaleString(); // adds commas
                    return `${ctx.dataset.label}: ${value}`;
                }
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

      const totalTreeTanz = 6490000;
      const treesPlantedTanz = 6490000;
      const treesRemaining = totalTreeTanz - treesPlantedTanz;
      treePieChartInstance = new Chart(treePieCtx, {
        type: 'pie',
        data: {
          labels: ['Trees Left to Plant', 'Trees Planted to Date'],
          datasets: [{
            data: [treesRemaining, treesPlantedTanz],
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
const mediaBtn = document.getElementById("mediaBtn");
const media = document.getElementById("media");

// Buttons for audit information
function showSchedule() {
  //toggle underline
  const off = [pLogBtn, speciesBtn, stakeBtn, mediaBtn];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = scheduleBtn;
  on.classList.add("active-link");
  // hide/show section
  const hide = [pLog, species, stake, media];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = schedule;
    show.style.display = "flex";
}
function showLog() {
  // toggle underline
  const off = [scheduleBtn, speciesBtn, stakeBtn, mediaBtn];
  off.forEach(element => {
    element.classList.remove("active-link");
  });
  pLogBtn.classList.add("active-link");

  // hide other sections
  const hide = [schedule, species, stake, media];
  hide.forEach(element => {
    element.style.display = "none";
  });

  // show pLog section
  pLog.style.display = "flex";

}
function showSpecies() {
  //toggle underline
  const off = [scheduleBtn, pLogBtn, stakeBtn, mediaBtn];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = speciesBtn;
  on.classList.add("active-link");
  // hide/show section
  const hide = [schedule, pLog, stake, media];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = species;
    show.style.display = "flex";
}
function showStakeholders() {
  //toggle underline
  const off = [scheduleBtn, pLogBtn, speciesBtn, mediaBtn];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = stakeBtn;
  on.classList.add("active-link");
  // hide/show section
  const hide = [schedule, pLog, species, media];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = stake;
    show.style.display = "block";
}
function showMedia() {
  //toggle underline
  const off = [scheduleBtn, pLogBtn, speciesBtn, stakeBtn];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = mediaBtn;
  on.classList.add("active-link");
  // hide/show section
  const hide = [schedule, pLog, species, stake];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = media;
    show.style.display = "block";
}
const schedule2 = document.getElementById("schedule2");
const pLog2 = document.getElementById("log2");
const species2 = document.getElementById("speciesTable2");
const stake2 = document.getElementById("stakeholders2");
const scheduleBtn2 = document.getElementById("time2");
const pLogBtn2 = document.getElementById("pLog2");
const speciesBtn2 = document.getElementById("species2");
const stakeBtn2 = document.getElementById("stake2");

// Buttons for audit information
function showSchedule2() {
  //toggle underline
  const off = [pLogBtn2, speciesBtn2, stakeBtn2];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = scheduleBtn2;
  on.classList.add("active-link");
  // hide/show section
  const hide = [pLog2, species2, stake2];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = schedule2;
    show.style.display = "flex";
}
function showLog2() {
  // toggle underline
  const off = [scheduleBtn2, speciesBtn2, stakeBtn2];
  off.forEach(element => {
    element.classList.remove("active-link");
  });
  pLogBtn2.classList.add("active-link");

  // hide other sections
  const hide = [schedule2, species2, stake2];
  hide.forEach(element => {
    element.style.display = "none";
  });

  // show pLog section
  pLog2.style.display = "flex";

}


function showSpecies2() {
  //toggle underline
  const off = [scheduleBtn2, pLogBtn2, stakeBtn2];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = speciesBtn2;
  on.classList.add("active-link");
  // hide/show section
  const hide = [schedule2, pLog2, stake2];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = species2;
    show.style.display = "flex";
}
function showStakeholders2() {
  //toggle underline
  const off = [scheduleBtn2, pLogBtn2, speciesBtn2];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = stakeBtn2;
  on.classList.add("active-link");
  // hide/show section
  const hide = [schedule2, pLog2, species2];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = stake2;
    show.style.display = "block";
}
fetch('./rPages/ganttDatesTanz.json')
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

    const ctx_gantt = document.getElementById('ganttTanz').getContext('2d');
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
            min: new Date(2023, 10, 1),
            max: new Date(2026, 1, 1),
            time: { unit: 'month' }
          },
          y: {ticks: {
        autoSkip: false,  // don't skip any labels
        maxRotation: 0,   // don't rotate labels
        minRotation: 0,
        font: {
          size: 8,       // font size for site labels
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
fetch('./rPages/pLogGanttRaw.json')
  .then(res => res.json())
  .then(data => {
    // Clean data: remove entries missing any key value
    const cleaned = data.filter(d => d["Planting Date"] && d.Site && d["Trees Planted"])
      .map(d => ({
        site: d.Site.trim(),
        date: d["Planting Date"].trim().slice(0, 10),
        count: +d["Trees Planted"]
      }));

    // Get unique sorted dates from the data only
    const labels = [...new Set(cleaned.map(d => d.date))]
    .sort((a, b) => new Date(a) - new Date(b));

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
            font: { size: 14, weight: 'bold' }
          }
        },
        scales: {
          x: { title: { display: true, text: 'Planting Date' } },
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
    { data: 'Planting Date' },
    { data: 'Trees Planted' },
    { data: 'Hectares Planted' }
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
    { data: 'TREE SPECIES',
      render: function (data, type, row) {
      if (!data) return '';

      if (type === 'display') {
        return `<a href="${row.LINK}" target="_blank" rel="noopener noreferrer">${data}</a>`;
      }

      return data;
    }
     },
    { data: 'VOLUME' },
    { data: 'VALUE' }
  ],
  dom: 'Bflrtip',
  buttons: [
    { extend: 'csvHtml5', text: 'Download CSV', title: 'Tree_Planting_Data' },
    { extend: 'excelHtml5', text: 'Download Excel' }
  ]
});
// instance 1 vs 2
const inst1Tanz = document.getElementById("inst1Tanz");
const inst2Tanz = document.getElementById("inst2Tanz");
const instBtn1Tanz = document.getElementById("instBtn1Tanz");
const instBtn2Tanz = document.getElementById("instBtn2Tanz");
function showTanz1() {
  //toggle off
  const off = [instBtn2Tanz];
  off.forEach(element => {
      element.classList.remove("active-instance");
      element.classList.add("off-instance");
  });
  const on = instBtn1Tanz;
  on.classList.add("active-instance");
  on.classList.remove("off-instance");
  // hide/show section
  const hide = [inst2Tanz];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = inst1Tanz;
    show.style.display = "block";
}
function showTanz2() {
 //toggle off
  const off = [instBtn1Tanz];
  off.forEach(element => {
      element.classList.remove("active-instance");
      element.classList.add("off-instance");
  });
  const on = instBtn2Tanz;
  on.classList.add("active-instance");
  on.classList.remove("off-instance");
  // hide/show section
  const hide = [inst1Tanz];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = inst2Tanz;
    show.style.display = "block";
}
//INSTANCE 2
// Initial Reporting Page Setup
let haChartInstance2 = null;
let treeChartInstance2 = null;
let haPieChartInstance2 = null;
let treePieChartInstance2 = null;

window.addEventListener ('load', function () {
  const dataSelector2 = document.getElementById('dataSelector3');
  const chartsHa2 = document.getElementById('chartsHa2');
  const chartsTree2 = document.getElementById('chartsTree2'); 
  const haBarCtx2 = document.getElementById('haSite2').getContext('2d');
  const treeBarCtx2 = document.getElementById('treeSite2').getContext('2d');
  const haPieCtx2 = document.getElementById('haPie2').getContext('2d');
  const treePieCtx2 = document.getElementById('treePie2').getContext('2d');

  // Toggle UI initially
  toggleCharts(dataSelector2.value);

  dataSelector2.addEventListener('input', function () {
    toggleCharts(this.value);
  });

  function toggleCharts(selected) {
    if (selected === 'ha') {
      chartsHa2.style.display = 'flex';
      chartsTree2.style.display = 'none';
    } else if (selected === 'tree') {
      chartsHa2.style.display = 'none';
      chartsTree2.style.display = 'flex';
    }
  }
  // ---- Reusable pie chart options
  const pieOptions2 = {
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
              label: ctx => {
                const label = ctx.label || '';
                const value = ctx.parsed.toLocaleString(); // 👈 adds commas
                return `${label}: ${value}`;
              }
            }
      }
    }
  };

  // ---- Load HA JSON and build charts
  fetch('./rPages/haSite2Tanz.json')
    .then(res => res.json())
    .then(data => {
      const sites2 = data.map(row => row.Site);
      const reported2 = data.map(row => row["Total Capacity"] ?? 0);
      const verified2 = data.map(row => row["Area Planted"] ?? 0);

      haChartInstance2 = new Chart(haBarCtx2, {
          type: 'bar',
          data: {
            labels: sites2,
            datasets: [
              {
                label: 'Forecasted Hectares Planted',
                data: reported2,
                backgroundColor: '#c1e3aa',
              },
              {
                label: 'Hectares Planted to Date',
                data: verified2,
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
                  label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y} ha`,
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
                display: true
              },
            },
          },
        });

      
        const totalArea2 = 7000;
        const areaPlanted2 = 0;
        const areaRemaining2 = totalArea2 - areaPlanted2;
        haPieChartInstance2 = new Chart(haPieCtx2, {
        type: 'pie',
        data: {
          labels: ['Available Hectares Left to Plant', 'Hectares Planted to Date'],
          datasets: [{
            data: [areaRemaining2, areaPlanted2],
            backgroundColor: ['#ec6e6e', '#627c49'],
            borderWidth: 1
          }]
        },
        options: pieOptions2
      });
    });

  // ---- Load Tree JSON and build charts
  fetch('./rPages/treeSite2Tanz.json')
    .then(res => res.json())
    .then(data => {
      const sitesTree2 = data.map(row => row.Site);
      const reportedTree2 = data.map(row => row["Total Capacity"] ?? 0);
      const verifiedTree2 = data.map(row => row["Trees Planted"] ?? 0);

      treeChartInstance2 = new Chart(treeBarCtx2, {
        type: 'bar',
        data: {
          labels: sitesTree2,
          datasets: [
            {
              label: 'Forecasted Trees Planted',
              data: reportedTree2,
              backgroundColor: '#c1e3aa'
            },
            {
              label: 'Trees Planted to Date',
              data: verifiedTree2,
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
                  label: ctx => {
                    const value = ctx.parsed.y.toLocaleString(); // adds commas
                    return `${ctx.dataset.label}: ${value}`;
                }
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

      const totalTree2 = 10000000;
      const treesPlanted2= 0;
      const treesRemaining2 = totalTree2 - treesPlanted2;
      treePieChartInstance2 = new Chart(treePieCtx2, {
        type: 'pie',
        data: {
          labels: ['Trees Left to Plant', 'Trees Planted to Date'],
          datasets: [{
            data: [treesRemaining2, treesPlanted2],
            backgroundColor: ['#ec6e6e', '#627c49'],
            borderWidth: 1
          }]
        },
        options: pieOptions2
      });
    });  
  }
  );
fetch('./rPages/ganttDatesTanz2.json')
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

    const ctx_gantt2 = document.getElementById('ganttTanz2').getContext('2d');
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
            min: new Date(2025, 8, 1),
            max: new Date(2029, 12, 1),
            time: { unit: 'month' }
          },
          y: {ticks: {
        autoSkip: false,  // don't skip any labels
        maxRotation: 0,   // don't rotate labels
        minRotation: 0,
        font: {
          size: 8,       // font size for site labels
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
fetch('./rPages/pLogGanttRaw2.json')
  .then(res => res.json())
  .then(data => {
    // Clean data: remove entries missing any key value
    const cleaned = data.filter(d => d["End Date"] && d.Site && d["Projected # of Trees Planted"])
      .map(d => ({
        site: d.Site.trim(),
        date: d["End Date"].trim().slice(0, 10),
        count: +d["Projected # of Trees Planted"]
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
    const ctx2 = document.getElementById('ganttChart2').getContext('2d');
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


// PHILIPPINES PAGE
// Initial Reporting Page Setup
let haChartInstancePhil = null;
let treeChartInstancePhil = null;
let haPieChartInstancePhil = null;
let treePieChartInstancePhil = null;
// load phil data 
function initPhilCharts() {
  const dataSelector = document.getElementById('dataSelector2Phil');
  const chartsHa = document.getElementById('chartsHaPhil');
  const chartsTree = document.getElementById('chartsTreePhil'); 
  const haBarCtx = document.getElementById('haSitePhil').getContext('2d');
  const treeBarCtx = document.getElementById('treeSitePhil').getContext('2d');
  const haPieCtx = document.getElementById('haPiePhil').getContext('2d');
  const treePieCtx = document.getElementById('treePiePhil').getContext('2d');

  // toggle logic
  toggleCharts(dataSelector.value);
  dataSelector.addEventListener('input', function () { toggleCharts(this.value); });

  function toggleCharts(selected) {
    chartsHa.style.display = selected==='ha' ? 'flex' : 'none';
    chartsTree.style.display = selected==='tree' ? 'flex' : 'none';
  }

  const pieOptions = { maintainAspectRatio:false, responsive:true, plugins:{legend:{position:'right'}} };

  fetch('./rPages/haSitePhil.json').then(r=>r.json()).then(data=>{
    const sites = data.map(row=>row.Site);
    const reported = data.map(row=>row["Total Capacity"]||0);
    const verified = data.map(row=>row["Area Planted"]||0);
    window.haChartInstancePhil = new Chart(haBarCtx,{
      type:'bar',
      data:{labels:sites,datasets:[
        {label:'Forecasted Hectares Restored',data:reported,backgroundColor:'#c1e3aa'},
        {label:'Hectares Planted to Date',data:verified,backgroundColor:'#627c49'}
      ]},
      options:{responsive:true,maintainAspectRatio:false,scales:{y:{beginAtZero:true}}}
    });
    const totalAreaPhil = 1292, areaPlantedPhil = 171;
    window.haPieChartInstancePhil = new Chart(haPieCtx,{
      type:'pie', data:{labels:['Available Hectares Left to Plant','Hectares Planted to Date'],
        datasets:[{data:[totalAreaPhil-areaPlantedPhil,areaPlantedPhil],backgroundColor:['#ec6e6e','#627c49']}]},
      options:pieOptions
    });
  });

  fetch('./rPages/treeSitePhil.json').then(r=>r.json()).then(data=>{
    console.log("Tree JSON data:", data);
    const sites = data.map(r=>r.Site);
    const reported = data.map(r=>r["Total Capacity"]||0);
    const planted = data.map(r=>r["Trees Planted"]||0);
    window.treeChartInstancePhil = new Chart(treeBarCtx,{
      type:'bar',
      data:{labels:sites,datasets:[{label:'Forecasted Trees Planted',data:reported,backgroundColor:'#c1e3aa'},{label:'Trees Planted to Date',data:planted,backgroundColor:'#627c49'}]},
      options:{responsive:true,maintainAspectRatio:false,scales:{y:{beginAtZero:true}}}
    });
    const totalTreePhil = 3000630, treesPlantedPhil = 200755;
    window.treePieChartInstancePhil = new Chart(treePieCtx,{
      type:'pie',data:{labels:['Trees Left to Plant','Trees Planted to Date'],
        datasets:[{data:[totalTreePhil-treesPlantedPhil,treesPlantedPhil],backgroundColor:['#ec6e6e','#627c49']}]},
      options:pieOptions
    });
  });
}
const schedulePhil = document.getElementById("schedulePhil");
const pLogPhil = document.getElementById("logPhil");
const speciesPhil = document.getElementById("speciesTablePhil");
const stakePhil = document.getElementById("stakeholdersPhil");
const scheduleBtnPhil = document.getElementById("timePhil");
const pLogBtnPhil = document.getElementById("pLogPhil");
const speciesBtnPhil = document.getElementById("speciesPhil");
const stakeBtnPhil = document.getElementById("stakePhil");
const mediaBtnPhil = document.getElementById("mediaBtnPhil");
const mediaPhil = document.getElementById("mediaPhil");

// Buttons for audit information
function showSchedulePhil() {
  //toggle underline
  const off = [pLogBtnPhil, speciesBtnPhil, stakeBtnPhil, mediaBtnPhil];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = scheduleBtnPhil;
  on.classList.add("active-link");
  // hide/show section
  const hide = [pLogPhil, speciesPhil, stakePhil, mediaPhil];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = schedulePhil;
    show.style.display = "flex";
}
function showLogPhil() {
  // toggle underline
  const off = [scheduleBtnPhil, speciesBtnPhil, stakeBtnPhil, mediaBtnPhil];
  off.forEach(element => {
    element.classList.remove("active-link");
  });
  pLogBtnPhil.classList.add("active-link");

  // hide other sections
  const hide = [schedulePhil, speciesPhil, stakePhil, mediaPhil];
  hide.forEach(element => {
    element.style.display = "none";
  });

  // show pLog section
  pLogPhil.style.display = "flex";

}


function showSpeciesPhil() {
  //toggle underline
  const off = [scheduleBtnPhil, pLogBtnPhil, stakeBtnPhil, mediaBtnPhil];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = speciesBtnPhil;
  on.classList.add("active-link");
  // hide/show section
  const hide = [schedulePhil, pLogPhil, stakePhil, mediaPhil];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = speciesPhil;
    show.style.display = "flex";
}
function showStakeholdersPhil() {
  //toggle underline
  const off = [scheduleBtnPhil, pLogBtnPhil, speciesBtnPhil, mediaBtnPhil];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = stakeBtnPhil;
  on.classList.add("active-link");
  // hide/show section
  const hide = [schedulePhil, pLogPhil, speciesPhil, mediaPhil];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = stakePhil;
    show.style.display = "flex";
}
function showMediaPhil() {
  //toggle underline
  const off = [scheduleBtnPhil, pLogBtnPhil, speciesBtnPhil, stakeBtnPhil];
  off.forEach(element => {
      element.classList.remove("active-link");
  });
  const on = mediaBtnPhil;
  on.classList.add("active-link");
  // hide/show section
  const hide = [schedulePhil, pLogPhil, speciesPhil, stakePhil];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = mediaPhil;
    show.style.display = "flex";
}


// pLog database

$('#ganttTablePhil').DataTable({
  ajax: {
    url: './rPages/rawLogPhil.json',
    dataSrc: ''
  },
  columns: [
    { data: 'Site' },
    { data: 'Start Date' },
    { data: 'End Date' },
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

$('#speciesListPhil').DataTable({
  ajax: {
    url: './rPages/speciesListPhil.json',
    dataSrc: function(json) {
      console.log('Loaded JSON:', json);
      return json;
    }
  },
  columns: [
    { data: 'Species',
      render: function (data, type, row) {
      if (!data) return '';

      if (type === 'display') {
        return `<a href="${row.Link}" target="_blank" rel="noopener noreferrer">${data}</a>`;
      }

      return data;
    }
     },
    { data: 'Volume' }
  ],
  dom: 'Bflrtip',
  buttons: [
    { extend: 'csvHtml5', text: 'Download CSV', title: 'Tree_Planting_Data' },
    { extend: 'excelHtml5', text: 'Download Excel' }
  ]
});


document.querySelectorAll(".clickable-row").forEach(row => {
  row.addEventListener("click", () => {
    window.open(row.dataset.href, "_blank")
  });
});

fetch('./rPages/pLogPhil.json')
  .then(res => res.json())
  .then(data => {
    // Clean and map JSON
    const cleaned = data.map(d => ({
      site: d.Site,
      date: d["Planting Date"],
      count: d["Trees Planted"]
    }));

    const labels = data.map(d => d["Planting Date"]);

    console.log(labels);

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
    const ctx_log = document.getElementById('ganttChartPhil').getContext('2d');
    new Chart(ctx_log, {
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




fetch('./rPages/ganttDatesPhil.json')
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

    const ctx_gantt = document.getElementById('ganttPhilCanvas').getContext('2d');
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
            min: new Date(2024, 0, 1),
            max: new Date(2028, 0, 4),
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
            text: 'Parcel Planting Schedule',
            font: { size: 14, weight: 'bold' }
          }
        }
      }
    });
  });


//MALAWI PAGE
// Initial Reporting Page Setup
let haChartInstanceMal = null;
let treeChartInstanceMal = null;
let haPieChartInstanceMal = null;
let treePieChartInstanceMal = null;
// load mal data 
function initMalCharts() {
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
    const totalAreaMal = 627, areaPlantedMal = 90;
    window.haPieChartInstanceMal = new Chart(haPieCtx,{
      type:'pie', data:{labels:['Available Hectares Left to Plant','Hectares Planted to Date'],
        datasets:[{data:[totalAreaMal-areaPlantedMal,areaPlantedMal],backgroundColor:['#ec6e6e','#627c49']}]},
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
    const totalTreeMal = 1500000, treesPlantedMal = 182700;
    window.treePieChartInstanceMal = new Chart(treePieCtx,{
      type:'pie',data:{labels:['Trees Left to Plant','Trees Planted to Date'],
        datasets:[{data:[totalTreeMal-treesPlantedMal,treesPlantedMal],backgroundColor:['#ec6e6e','#627c49']}]},
      options:pieOptions
    });
  });
}
document.addEventListener("DOMContentLoaded", initMalCharts);

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
    console.log(data);
    // Clean and map JSON
    const cleaned = data.map(d => ({
      site: d.Site,
      date: d["Planting Date"],
      count: d["Trees Planted"]
    }));
    
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

  // BRAZIL PAGE
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


//INDONESIA PAGE 
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
      options:{responsive:true,maintainAspectRatio:false,indexAxis: 'y', scales:{ 
      y: {
      ticks: {
        autoSkip: false,font: {
          size: 10   // <-- set tick font size
        }
      }
    },x:{beginAtZero:true, title: {
        display: true,
        text: 'Hectares'}}}}
    });
    const totalArea = 1000, areaPlanted = 15;
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
      options:{responsive:true,maintainAspectRatio:false,indexAxis: 'y', scales:{ 
      y: {
      ticks: {
        autoSkip: false,font: {
          size: 10   // <-- set tick font size
        }
      }
    },x:{beginAtZero:true, title: {
        display: true,
        text: 'Trees'}}}}
    });
    const totalTree = 10000000, treesPlanted = 120000;
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



  // pLog database

$('#ganttTableIndo').DataTable({
  ajax: {
    url: './rPages/rawLogIndo.json',
    dataSrc: ''
  },
  columns: [
    { data: 'Site' },
    { data: 'Date Planted' },
    { data: 'Trees Planted' },
    { data: 'Area Planted' },
    { data: 'Males Employed'},
    { data: 'Females Employed'},
    { data: 'Species Planted'}
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


//CANVA PAGE
const instBtn1Canva = document.getElementById("instBtn1Canva");
const instBtn2Canva = document.getElementById("instBtn2Canva");
const inst1Canva = document.getElementById("inst1Canva");
const inst2Canva = document.getElementById("inst2Canva");
function showCanva1(){
  //toggle off
  const off = [instBtn2Canva];
  off.forEach(element => {
      element.classList.remove("active-instance1");
      element.classList.add("off-instance1");
  });
  const on = instBtn1Canva;
  on.classList.add("active-instance1");
  on.classList.remove("off-instance1");
  // hide/show section
  const hide = [inst2Canva];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = inst1Canva;
    show.style.display = "block";
}
function showCanva2(){
  //toggle off
  const off = [instBtn1Canva];
  off.forEach(element => {
      element.classList.remove("active-instance1");
      element.classList.add("off-instance1");
  });
  const on = instBtn2Canva;
  on.classList.add("active-instance1");
  on.classList.remove("off-instance1");
  // hide/show section
  const hide = [inst1Canva];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = inst2Canva;
    show.style.display = "block";
    
}
// Initial Reporting Page Setup
let haChartInstanceCanva = null;
let treeChartInstanceCanva = null;
let haPieChartInstanceCanva = null;
let treePieChartInstanceCanva = null;
function initCanvaCharts () {
  const dataSelectorCanva = document.getElementById('dataSelectorCanva');
  const chartsHaCanva = document.getElementById('chartsHaCanva');
  const chartsTreeCanva = document.getElementById('chartsTreeCanva'); 
  const haBarCtxCanva = document.getElementById('haSiteCanva').getContext('2d');
  const treeBarCtxCanva = document.getElementById('treeSiteCanva').getContext('2d');
  const haPieCtxCanva = document.getElementById('haPieCanva').getContext('2d');
  const treePieCtxCanva = document.getElementById('treePieCanva').getContext('2d');

  // Toggle UI initially
  toggleCharts(dataSelectorCanva.value);

  dataSelectorCanva.addEventListener('input', function () {
    toggleCharts(this.value);
  });

  function toggleCharts(selected) {
    if (selected === 'ha') {
      chartsHaCanva.style.display = 'flex';
      chartsTreeCanva.style.display = 'none';
    } else if (selected === 'tree') {
      chartsHaCanva.style.display = 'none';
      chartsTreeCanva.style.display = 'flex';
    }
  }
  // ---- Reusable pie chart options
  const pieOptionsCanva = {
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
  fetch('./rPages/haSiteCanva.json')
    .then(res => res.json())
    .then(data => {
      const sitesCanva = data.map(row => row.Site);
      const reportedCanva = data.map(row => row["Forecasted Acres Planted"] ?? 0);
      const verifiedCanva = data.map(row => row["Hectares Planted to Date"] ?? 0);

      haChartInstanceCanva = new Chart(haBarCtxCanva, {
          type: 'bar',
          data: {
            labels: sitesCanva,
            datasets: [
              {
                label: 'Forecasted Hectares Planted',
                data: reportedCanva,
                backgroundColor: '#c1e3aa',
              },
              {
                label: 'Hectares Restored',
                data: verifiedCanva,
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
                  maxRotation: 0,
                  minRotation: 0,
                  autoSkip: false,
                },
              },
              y: {
                beginAtZero: true,
              },
            },
          },
        });



      
        const totalAreaCanva = 6153;
        const areaPlantedCanva = 4028+ 171+ 90;
        const areaRemainingCanva = totalAreaCanva - areaPlantedCanva;
        console.log(areaPlantedCanva, areaRemainingCanva);
        haPieChartInstanceCanva = new Chart(haPieCtxCanva, {
        type: 'pie',
        data: {
          labels: ['Available Hectares Left to Plant', 'Hectares Planted to Date'],
          datasets: [{
            data: [areaRemainingCanva, areaPlantedCanva],
            backgroundColor: ['#ec6e6e', '#627c49'],
            borderWidth: 1
          }]
        },
        options: pieOptionsCanva
      });
    });

  // ---- Load Tree JSON and build charts
  fetch('./rPages/treeSiteCanva.json')
    .then(res => res.json())
    .then(data => {
      const sitesTreeCanva = data.map(row => row.Site);
      const reportedTreeCanva = data.map(row => row["Forecasted Trees Planted"] ?? 0);
      const verifiedTreeCanva = data.map(row => row["Trees Planted to Date"] ?? 0);

      treeChartInstanceCanva = new Chart(treeBarCtxCanva, {
        type: 'bar',
        data: {
          labels: sitesTreeCanva,
          datasets: [
            {
              label: 'Forecasted Trees Planted',
              data: reportedTreeCanva,
              backgroundColor: '#c1e3aa'
            },
            {
              label: 'Trees Planted to Date',
              data: verifiedTreeCanva,
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
                  label: ctx => {
                    const value = ctx.parsed.y.toLocaleString(); // adds commas
                    return `${ctx.dataset.label}: ${value}`;
                }
              }
            }
          },
          scales: {
            x: {ticks: {
                  maxRotation: 0,
                  minRotation: 0,
                  autoSkip: false,
                },
            },
            y: { beginAtZero: true }
          }
        }
      });

      const totalTreeCanva = 10490000;
      const treesPlantedCanva = 6490000 + 200755+182700;
      const treesRemainingCanva = totalTreeCanva - treesPlantedCanva;
      treePieChartInstanceCanva = new Chart(treePieCtxCanva, {
        type: 'pie',
        data: {
          labels: ['Trees Left to Plant', 'Trees Planted to Date'],
          datasets: [{
            data: [treesRemainingCanva, treesPlantedCanva],
            backgroundColor: ['#ec6e6e', '#627c49'],
            borderWidth: 1
          }]
        },
        options: {...pieOptionsCanva,
          plugins: {
            ...pieOptionsCanva.plugins,
          tooltip: {
            callbacks: {
              label: ctx => {
                const label = ctx.label || '';
                const value = ctx.parsed.toLocaleString(); // 👈 adds commas
                return `${label}: ${value}`;
              }
            }
            }
          }
        }
      });
    });  
};

window.addEventListener("load", initCanvaCharts);
//canva agreement 2025
// Initial Reporting Page Setup
let haChartInstanceCanva2 = null;
let treeChartInstanceCanva2 = null;
let haPieChartInstanceCanva2 = null;
let treePieChartInstanceCanva2 = null;

function initCanvaCharts2 () {
  const dataSelectorCanva2 = document.getElementById('dataSelectorCanva2');
  const chartsHaCanva2 = document.getElementById('chartsHaCanva2');
  const chartsTreeCanva2 = document.getElementById('chartsTreeCanva2'); 
  const haBarCtxCanva2 = document.getElementById('haSiteCanva2').getContext('2d');
  const treeBarCtxCanva2 = document.getElementById('treeSiteCanva2').getContext('2d');
  const haPieCtxCanva2 = document.getElementById('haPieCanva2').getContext('2d');
  const treePieCtxCanva2 = document.getElementById('treePieCanva2').getContext('2d');

  // Toggle UI initially
  toggleCharts(dataSelectorCanva2.value);

  dataSelectorCanva2.addEventListener('input', function () {
    toggleCharts(this.value);
  });

  function toggleCharts(selected) {
    if (selected === 'ha') {
      chartsHaCanva2.style.display = 'flex';
      chartsTreeCanva2.style.display = 'none';
    } else if (selected === 'tree') {
      chartsHaCanva2.style.display = 'none';
      chartsTreeCanva2.style.display = 'flex';
    }
  }
  // ---- Reusable pie chart options
  const pieOptionsCanva2 = {
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
  fetch('./rPages/haSiteCanva2.json')
    .then(res => res.json())
    .then(data => {
      const sitesCanva2 = data.map(row => row.Site);
      const reportedCanva2 = data.map(row => row["Forecasted Hectares Planted"] ?? 0);
      const verifiedCanva2 = data.map(row => row["Hectares Planted to Date"] ?? 0);

      haChartInstanceCanva2 = new Chart(haBarCtxCanva2, {
          type: 'bar',
          data: {
            labels: sitesCanva2,
            datasets: [
              {
                label: 'Forecasted Hectares Planted',
                data: reportedCanva2,
                backgroundColor: '#c1e3aa',
              },
              {
                label: 'Hectares Restored',
                data: verifiedCanva2,
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
                  maxRotation: 45,
                  minRotation: 30,
                  autoSkip: false,
                },
              },
              y: {
                beginAtZero: true,
              },
            },
          },
        });

      
        const totalAreaCanva2 = 13203;
        const areaPlantedCanva2 = 15;
        const areaRemainingCanva2 = totalAreaCanva2 - areaPlantedCanva2;
        haPieChartInstanceCanva2 = new Chart(haPieCtxCanva2, {
        type: 'pie',
        data: {
          labels: ['Available Hectares Left to Plant', 'Hectares Planted to Date'],
          datasets: [{
            data: [areaRemainingCanva2, areaPlantedCanva2],
            backgroundColor: ['#ec6e6e', '#627c49'],
            borderWidth: 1
          }]
        },
        options: pieOptionsCanva2
      });
    });

  // ---- Load Tree JSON and build charts
  fetch('./rPages/treeSiteCanva2.json')
    .then(res => res.json())
    .then(data => {
      const sitesTreeCanva2 = data.map(row => row.Site);
      const reportedTreeCanva2 = data.map(row => row["Forecasted Trees Planted"] ?? 0);
      const verifiedTreeCanva2 = data.map(row => row["Trees Planted to Date"] ?? 0);

      treeChartInstanceCanva2 = new Chart(treeBarCtxCanva2, {
        type: 'bar',
        data: {
          labels: sitesTreeCanva2,
          datasets: [
            {
              label: 'Forecasted Trees Planted',
              data: reportedTreeCanva2,
              backgroundColor: '#c1e3aa'
            },
            {
              label: 'Trees Planted to Date',
              data: verifiedTreeCanva2,
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
                  label: ctx => {
                    const value = ctx.parsed.y.toLocaleString(); // adds commas
                    return `${ctx.dataset.label}: ${value}`
                  },
                },
              },
          },
          scales: {
            x: {ticks: {
                  maxRotation: 45,
                  minRotation: 30,
                  autoSkip: false,
                },
            },
            y: { beginAtZero: true }
          }
        }
      });

      const totalTreeCanva2 = 30000000;
      const treesPlantedCanva2 = 120000;
      const treesRemainingCanva2 = totalTreeCanva2 - treesPlantedCanva2;
      treePieChartInstanceCanva2 = new Chart(treePieCtxCanva2, {
        type: 'pie',
        data: {
          labels: ['Trees Left to Plant', 'Trees Planted to Date'],
          datasets: [{
            data: [treesRemainingCanva2, treesPlantedCanva2],
            backgroundColor: ['#ec6e6e', '#627c49'],
            borderWidth: 1
          }]
        },
        options: {...pieOptionsCanva2,
          plugins: {
            ...pieOptionsCanva2.plugins,
          tooltip: {
            callbacks: {
              label: ctx => {
                const label = ctx.label || '';
                const value = ctx.parsed.toLocaleString(); // 👈 adds commas
                return `${label}: ${value}`;
              }
            }
            }
          }
        }
});
    });
};
window.addEventListener("load", initCanvaCharts2);
fetch('./rPages/ganttDatesCanva.json')
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

    const ctx_ganttCanva = document.getElementById('ganttChartOPOT').getContext('2d');
    new Chart(ctx_ganttCanva, {
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
            min: new Date(2023, 9, 1),
            max: new Date(2027,11, 1),
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


fetch('./rPages/ganttDatesCanva2.json')
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

    const ctx_ganttCanva2 = document.getElementById('ganttChartOPOT2').getContext('2d');
    new Chart(ctx_ganttCanva2, {
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
            max: new Date(2030,12, 1),
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
