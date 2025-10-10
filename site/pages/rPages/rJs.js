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

//add #
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

      
        const totalAreaCanva = 5855;
        const areaPlantedCanva = 4161;
        const areaRemainingCanva = totalAreaCanva - areaPlantedCanva;
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
      const treesPlantedCanva = 6596455;
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
        const areaPlantedCanva2 = 0;
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
      const treesPlantedCanva2 = 0;
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
      const reported = data.map(row => row["Total Capacity"] ?? 0);
      const verified = data.map(row => row["Area Planted"] ?? 0);

      haChartInstance = new Chart(haBarCtx, {
          type: 'bar',
          data: {
            labels: sites,
            datasets: [
              {
                label: 'Forecasted Hectares Planted',
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
              label: 'Forecasted Trees Planted',
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
    const cleaned = data.filter(d => d["Date Planted"] && d.Site && d["Trees Planted"])
      .map(d => ({
        site: d.Site.trim(),
        date: d["Date Planted"].trim().slice(0, 10),
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
    const totalArea = 1292, areaPlanted = 144;
    window.haPieChartInstancePhil = new Chart(haPieCtx,{
      type:'pie', data:{labels:['Available Hectares Left to Plant','Hectares Planted to Date'],datasets:[{data:[totalArea-areaPlanted,areaPlanted],backgroundColor:['#ec6e6e','#627c49']}]},
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
    const totalTree = 3000630, treesPlanted = 130630;
    window.treePieChartInstancePhil = new Chart(treePieCtx,{
      type:'pie',data:{labels:['Trees Left to Plant','Trees Planted to Date'],datasets:[{data:[totalTree-treesPlanted,treesPlanted],backgroundColor:['#ec6e6e','#627c49']}]},
      options:pieOptions
    });
  });
}



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