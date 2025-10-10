document.addEventListener("DOMContentLoaded", () => {
  fetch('./pages/inventoryPhil.json')
    .then(res => res.json())
    .then(data => {
      console.log("Sample row:", data[0]); // 👈 check JSON keys here

      // 1. Initialize DataTable
      const dt = $('#invTablePhil').DataTable({
        scrollX: false,
        autoWidth: false,
        responsive: true,
        data: data,
        columns: [
          { data: 'Latin_Name' }, // ⚠️ must match JSON key
          { data: 'Age' },
          { data: 'DBH' }
        ],
        dom: 'Bflrtip',
        buttons: [
          { extend: 'csvHtml5', text: 'Download CSV', title: 'RRG_Inventory_2024' },
          { extend: 'excelHtml5', text: 'Download Excel' }
        ]
      });

      // 2. Convert DataTable rows into scatter points
      const dataPoints = dt.rows({ search: 'none' }).data().toArray().map(row => ({
        x: Number(row.Age),
        y: Number(row.DBH),
        label: row.Latin_Name
      }));

      // 3. Build Chart.js scatter plot
      const ctx = document.getElementById('invChartCanvasPhil').getContext('2d');
      new Chart(ctx, {
        type: 'scatter',
        data: {
          datasets: [{
            label: 'Tree Measurements',
            data: dataPoints,
            pointRadius: 4,
            pointHoverRadius: 5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          parsing: false,
          scales: {
            x: {
              title: { display: true, text: 'Age (years)' }, max: 305,
              beginAtZero: true
              // remove or adjust max: 605 if your data is small
            },
            y: {
              title: { display: true, text: 'DBH (cm)' },
              beginAtZero: true
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: ctx => {
                  const raw = ctx.raw;
                  return `${raw.label}: ${raw.x} yr, ${raw.y} cm`;
                }
              }
            }
          }
        }
      });
    })
    .catch(err => console.error("Error loading inventoryPhil.json:", err));
});

 fetch('./pages/haBiomassPhil.json')
  .then(res => res.json())
  .then(data => {
  const agro = data.map(d => d["Agroforestry"]);
  const labels = data.map(d => d["Project Lifetime"]);
  const miya = data.map(d => d["Miyawaki"]);
  const iam = data.map(d => d["Integrated Agroforestry"]);
  const inst2 = data.map(d => d["Project Instance 2"]);

  const ctx_ha = document.getElementById('biomassHaPhil').getContext('2d');
  new Chart(ctx_ha, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
          
          { label: 'Agroforestry', data: agro, borderColor: 'green', backgroundColor: 'rgba(0,128,0,0.2)', fill: false, tension: 0.3 },
          { label: 'Miyawaki', data: miya, borderColor: 'blue', backgroundColor: 'rgba(0,0,255,0.2)', fill: false, tension: 0.3 },
          { label: 'Integrated Agroforestry', data: iam, borderColor: 'orange', backgroundColor: 'rgba(255,165,0,0.2)', fill: false, tension: 0.3 },
          { label: 'Project Instance 2', data: inst2, borderColor: 'red', backgroundColor: 'rgba(255,0,0,0.2)', fill: false, tension: 0.3 },
        ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { title: { display: true, text: 'Project Lifetime (years)' } },
      y: { title: { display: true, text: 'Biomass (tC/ha)' } }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: ctx => `${ctx.dataset.label}: ${ctx.formattedValue}`
        }
      },
      legend: { display: true }
    }
  }
});


  });
document.addEventListener("DOMContentLoaded", () => {
   fetch('./pages/siteBiomassPhil.json')
  .then(res => res.json())
  .then(data => {
    // Extract labels (Year)
    const labels = data.map(d => d.Year);

    // Extract each series
    const high = data.map(d => d["Net Co2e Removals High"]);
    const midHigh = data.map(d => d["Net Co2e Removals Mid High"]);
    const midLow = data.map(d => d["Net Co2e Removals Mid Low"]);
    const low = data.map(d => d["Net Co2e Removals Low"]);

    const ctx_pb = document.getElementById('biomassSitePhil').getContext('2d');
    new Chart(ctx_pb, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          
          { label: 'High', data: high, borderColor: 'green', backgroundColor: 'rgba(0,128,0,0.2)', fill: false, tension: 0.3 },
          { label: 'Mid High', data: midHigh, borderColor: 'blue', backgroundColor: 'rgba(0,0,255,0.2)', fill: false, tension: 0.3 },
          { label: 'Mid Low', data: midLow, borderColor: 'orange', backgroundColor: 'rgba(255,165,0,0.2)', fill: false, tension: 0.3 },
          { label: 'Low', data: low, borderColor: 'red', backgroundColor: 'rgba(255,0,0,0.2)', fill: false, tension: 0.3 },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { title: { display: true, text: 'Year' }, min: -60000, max: 50},
          y: { title: { display: true, text: 'Net CO2e Removals' } }
        },
        plugins: {
          legend: { display: true },
          tooltip: {
            callbacks: {
              label: ctx => `${ctx.dataset.label}: ${ctx.formattedValue}`
            }
          }
        }
      }
    });
    
  })
  .catch(err => console.error("Error loading inventoryPhil.json:", err));
  
});



// Toggle between site level and total biomass charts
const bioSiteRemotePhil = document.getElementById('biomassSiteCanvasPhil');
const bioTotalRemotePhil = document.getElementById('biomassTotalsCanvasPhil');
const biomassSiteBtnPhil = document.getElementById('biomassSiteBtnPhil');
const biomassTotalBtnPhil = document.getElementById('biomassTotalBtnPhil');

function showBioSitePhil() {
  //toggle off
  const off = [biomassTotalBtnPhil];
  off.forEach(element => {
      element.classList.remove("active-side");
      element.classList.add("off-side");
  });
  const on = biomassSiteBtnPhil;
  on.classList.add("active-side");
  // hide/show section
  const hide = [bioTotalRemotePhil];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = bioSiteRemotePhil;
    show.style.display = "block";
}
function showBioTotalPhil() {
  //toggle off
  const off = [biomassSiteBtnPhil];
  off.forEach(element => {
      element.classList.remove("active-side");
      element.classList.add("off-side");
  });
  const on = biomassTotalBtnPhil;
  on.classList.add("active-side");
  // hide/show section
  const hide = [bioSiteRemotePhil];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = bioTotalRemotePhil;
    show.style.display = "block";
}


fetch('./pages/biomassSiteRemovalsPhil.json')
  .then(res => res.json())
  .then(data => {
    // Extract labels (Year)
    const labels = data.map(d => d.Site);

    // Extract each series
    const bio23 = data.map(d => d["Biomass 2023"]);
    const bio25 = data.map(d => d["Biomass 2025"]);

    const ctx_remote = document.getElementById('biomassSiteCanvasPhil').getContext('2d');
    new Chart(ctx_remote, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          
          { label: 'Biomass 2025', data: bio25, borderColor: 'green', backgroundColor: 'rgba(0,128,0,0.2)', fill: true, tension: 0.3 },
          { label: 'Biomass 2023', data: bio23, borderColor: 'red', backgroundColor: 'rgba(255,0,0,0.2)', fill: false, tension: 0.3 },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { ticks: {autoSkip: false,
            maxRotation: 45,
            minRotation: 0
          },
          title: { display: true, text: 'Site' } },
          y: { title: { display: true, text: 'Net Carbon Removals (tC)' } }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => `${ctx.dataset.label}: ${ctx.formattedValue}`
            }
          }
        }
      }
    });
  });




  const yearPhil = [0,1];
  const obsPhil = [0, 5406];

  const ctx_obsPhil = document.getElementById('biomassTotalsCanvasPhil').getContext('2d');
    new Chart(ctx_obsPhil, {
      type: 'line',
      data: {
        labels: yearPhil,
        datasets: [
          { label: 'Observed', data: obsPhil, backgroundColor: 'rgba(0,128,0,0.2)', fill: true, tension: 0.3 },

        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { title: { display: true, text: 'Year' } },
          y: { title: { display: true, text: 'Net Carbon Removals (tC)' }, min:0 }
        },
        plugins: {
          legend: { display: true },
          tooltip: {
            callbacks: {
              label: ctx => `${ctx.dataset.label}: ${ctx.formattedValue}`
            }
          }
        }
      }
    });

