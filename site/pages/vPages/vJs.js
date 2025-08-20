// move scientific discussion back and forth
const discuss = document.getElementById('discuss');
  if (discuss) {
    const textWidth = discuss.offsetWidth + "px";
    discuss.style.setProperty('--text-width', textWidth);
  }
// Copy email for contact
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




// show validation data 
let siteHaChart = null;
let siteTreeChart = null;

// This must be global so both showBreak and event listener can call it
function loadSiteCharts(metric) {
  const siteHaCanvas = document.getElementById('siteHa');
  const siteTreeCanvas = document.getElementById('siteTree');
  const siteHaCtx = siteHaCanvas.getContext('2d');
  const siteTreeCtx = siteTreeCanvas.getContext('2d');

  if (metric === 'ha') {
    siteHaCanvas.style.display = 'block';
    siteTreeCanvas.style.display = 'none';

    fetch('./vPages/haSite.json')
      .then(res => res.json())
      .then(data => {
        const sites = data.map(row => row.Site);
        const reported = data.map(row => row["Reported Hectares Restored"] ?? 0);
        const verified = data.map(row => row["Verified Hectares Restored"] ?? 0);

        if (siteHaChart) siteHaChart.destroy();

        siteHaChart = new Chart(siteHaCtx, {
          type: 'bar',
          data: {
            labels: sites,
            datasets: [
              {
                label: 'Reported Hectares Restored',
                data: reported,
                backgroundColor: '#c1e3aa',
              },
              {
                label: 'Verified Hectares Restored',
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
      });
  } else if (metric === 'tree') {
  console.log("Metric is tree — loading tree site chart...");

  siteHaCanvas.style.display = 'none';
  siteTreeCanvas.style.display = 'block';

  fetch('./vPages/treeSite.json')
    .then(res => {
      console.log("Fetch response for treeSite.json:", res);
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log("Tree site data loaded:", data);

      const sites = data.map(row => row.Site);
      const reported = data.map(row => row["Reported Trees Planted"] ?? 0);
      const verified = data.map(row => row["Verified Trees Planted"] ?? 0);

      if (siteTreeChart) siteTreeChart.destroy();

      siteTreeChart = new Chart(siteTreeCtx, {
        type: 'bar',
        data: {
          labels: sites,
          datasets: [
            {
              label: 'Reported Trees Planted',
              data: reported,
              backgroundColor: '#c1e3aa',
            },
            {
              label: 'Verified Trees Planted',
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
    })
    .catch(e => {
      console.error("Error loading treeSite.json:", e);
    });
}};

// Call this to show breakdown div and load charts initially
function showBreak() {
  document.getElementById("chartTotal").style.display = "none";
  document.getElementById("chartDensity").style.display = "none";
  document.getElementById("chartBreak").style.display = "block";

  document.getElementById("totals").classList.remove("active-link");
  document.getElementById("density").classList.remove("active-link");
  document.getElementById("break").classList.add("active-link");

  const metric = document.getElementById('dataSelector2').value;
  loadSiteCharts(metric);
}

// Setup event listener on dropdown AFTER DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  const dataSelector = document.getElementById('dataSelector2');
  dataSelector.addEventListener('change', (e) => {
    loadSiteCharts(e.target.value);
  });
});





function showTotals() {
    const tableTotal = document.getElementById("chartTotal");
    const tableBreakdown = document.getElementById("chartBreak");
    const tableDensity = document.getElementById("chartDensity");
    tableDensity.style.display = "none";
    tableTotal.style.display = "block";
    tableBreakdown.style.display = "none";
    document.getElementById("totals").classList.add("active-link");
    document.getElementById("break").classList.remove("active-link");
    document.getElementById("density").classList.remove("active-link");
}






let haChartInstance = null;
let treeChartInstance = null;
let haPieChartInstance = null;
let treePieChartInstance = null;

window.onload = function () {
  const dataSelector = document.getElementById('dataSelector');
  const chartsHa = document.getElementById('chartsHa');
  const chartsTree = document.querySelector('.chartsTree');
  const haBarCtx = document.getElementById('haTotal').getContext('2d');
  const treeBarCtx = document.getElementById('treeTotal').getContext('2d');
  const haPieCtx = document.getElementById('haProgressPie').getContext('2d');
  const treePieCtx = document.getElementById('treeProgressPie').getContext('2d');

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

  // ---- Load HA JSON and build charts
  fetch('./vPages/haValidation.json')
    .then(res => res.json())
    .then(data => {
      const reported = data[0]["Total Reported Hectares Restored"];
      const verified = data[0]["Total Verified Hectares"];
      const verifiedPercent = Math.round((verified / reported) * 100);
      const remainingPercent = 100 - verifiedPercent;

      haChartInstance = new Chart(haBarCtx, {
        type: 'bar',
        data: {
          labels: ['Hectares Restored'],
          datasets: [
            {
              label: 'Reported Hectares Restored',
              data: [reported],
              backgroundColor: '#c1e3aa'
            },
            {
              label: 'Verified Hectares Restored',
              data: [verified],
              backgroundColor: '#627c49'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'top' }
          },
          scales: {
            x: {display: false},
            y: { beginAtZero: true }
          }
        }
      });

      haPieChartInstance = new Chart(haPieCtx, {
        type: 'pie',
        data: {
          labels: ['Percent Verified', 'Percent Remaining'],
          datasets: [{
            data: [verifiedPercent, remainingPercent],
            backgroundColor: ['#627c49', '#ec6e6e'],
            borderWidth: 1
          }]
        },
        options: pieOptions
      });
    });

  // ---- Load Tree JSON and build charts
  fetch('./vPages/treeValidation.json')
    .then(res => res.json())
    .then(data => {
      const reported = data[0]["Total Reported Trees Planted"];
      const verified = data[0]["Total Verified Trees"];
      const verifiedPercent = reported > 0 ? Math.round((verified / reported) * 100) : 0;
      const remainingPercent = 100 - verifiedPercent;

      treeChartInstance = new Chart(treeBarCtx, {
        type: 'bar',
        data: {
          labels: ['Trees Planted'],
          datasets: [
            {
              label: 'Reported Trees Planted',
              data: [reported],
              backgroundColor: '#c1e3aa'
            },
            {
              label: 'Verified Trees Planted',
              data: [verified],
              backgroundColor: '#627c49'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'top' }
          },
          scales: {
            x: {display: false},
            y: { beginAtZero: true }
          }
        }
      });

      treePieChartInstance = new Chart(treePieCtx, {
        type: 'pie',
        data: {
          labels: ['Percent Verified', 'Percent Remaining'],
          datasets: [{
            data: [verifiedPercent, remainingPercent],
            backgroundColor: ['#627c49', '#ec6e6e'],
            borderWidth: 1
          }]
        },
        options: pieOptions
      });
    });

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
            return `${label}: ${value}%`;
          }
        }
      }
    }
  };
};





let densityChartInstance = null;
function showDensity() {
  const tableTotal = document.getElementById("chartTotal");
  const tableBreakdown = document.getElementById("chartBreak");
  const tableDensity = document.getElementById("chartDensity");

  // Step 1: Show the div first
  tableDensity.style.display = "block";
  tableTotal.style.display = "none";
  tableBreakdown.style.display = "none";

  // Step 2: Add active-link styling
  document.getElementById("totals").classList.remove("active-link");
  document.getElementById("break").classList.remove("active-link");
  document.getElementById("density").classList.add("active-link");

  // Step 3: Create chart only if it doesn’t exist yet
  if (!densityChartInstance) {
    // Wait for 100ms so canvas is visible in DOM
    setTimeout(() => {
      const canvas = document.getElementById('densityChart');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        console.error("Canvas context not found.");
        return;
      }

      fetch('./vPages/densityValidation.json')
        .then(res => res.json())
        .then(data => {
          const siteLabels = data.map(row => row["Site"]);
          const expected = data.map(row => row["Expected Density"]);
          const actual = data.map(row => row["Actual Density"] ?? 0);

          densityChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: siteLabels,
              datasets: [
                {
                  label: 'Expected Density',
                  data: expected,
                  backgroundColor: '#c1e3aa'
                },
                {
                  label: 'Actual Density',
                  data: actual,
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
                    label: context => `${context.dataset.label}: ${context.parsed.y}`
                  }
                }
              },
              scales: {
                x: {
                  ticks: {
                    maxRotation: 60,
                    minRotation: 45,
                    autoSkip: false
                  }
                },
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        })
        .catch(err => console.error("Failed to fetch density data:", err));
    }, 100); // Allow time for display block to render
  }
}