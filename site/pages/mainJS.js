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
        alert(`Submit a bug by emailing: ${email}`);
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
const indoConBtn = document.getElementById("indoConBtn");
const indoCon = document.getElementById("wWrapperIndo");
// Buttons for audit information
function showTanzContent() {
  //toggle off
  const off = [philConBtn, malConBtn, brazConBtn, indoConBtn];
  off.forEach(element => {
      element.classList.remove("active-side");
      element.classList.add("off-side");
  });
  const on = tanzConBtn;
  on.classList.add("active-side");
  // hide/show section
  const hide = [philCon, malCon, brazCon, indoCon];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = tanzCon;
    show.style.display = "flex";
}

function showPhilContent() {
  //toggle off
  const off = [tanzConBtn, malConBtn, brazConBtn, indoConBtn];
  off.forEach(element => {
      element.classList.remove("active-side");
      element.classList.add("off-side");
  });
  const on = philConBtn;
  on.classList.add("active-side");
  // hide/show section
  const hide = [tanzCon, malCon, brazCon, indoCon];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = philCon;
    show.style.display = "block";
}

function showMalContent() {
  //toggle off
  const off = [philConBtn, tanzConBtn, brazConBtn, indoConBtn];
  off.forEach(element => {
      element.classList.remove("active-side");
      element.classList.add("off-side");
  });
  const on = malConBtn;
  on.classList.add("active-side");
  // hide/show section
  const hide = [philCon, tanzCon, brazCon, indoCon];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = malCon;
    show.style.display = "block";
}

function showBrazContent() {
  //toggle off
  const off = [philConBtn, malConBtn, tanzConBtn, indoConBtn];
  off.forEach(element => {
      element.classList.remove("active-side");
      element.classList.add("off-side");
  });
  const on = brazConBtn;
  on.classList.add("active-side");
  // hide/show section
  const hide = [philCon, malCon, tanzCon, indoCon];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = brazCon;
    show.style.display = "block";
}
function showIndoContent() {
  //toggle off
  const off = [philConBtn, malConBtn, tanzConBtn, brazConBtn];
  off.forEach(element => {
      element.classList.remove("active-side");
      element.classList.add("off-side");
  });
  const on = indoConBtn;
  on.classList.add("active-side");
  // hide/show section
  const hide = [philCon, malCon, tanzCon, brazCon];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = indoCon;
    show.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".sidebar button");
  const sections = {
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







// inventory table 
fetch('./pages/inventory.json')
  .then(res => res.json())
  .then(data => {
    // 1. Initialize DataTable
    const dt = $('#invTable').DataTable({
      scrollX: false,
      autoWidth: false,
      responsive: true,
      data: data,       // use fetched JSON directly
      columns: [
        { data: 'Latin_Name' },
        { data: 'Age' },
        { data: 'DBH' }
      ],
      dom: 'Bflrtip',
      buttons: [
        { extend: 'csvHtml5', text: 'Download CSV', title: 'RRG_Inventory_2024' },
        { extend: 'excelHtml5', text: 'Download Excel' }
      ]
    });

    // 2. Convert JSON to scatter points
const dataPoints = dt.rows({ search: 'none' }).data().toArray().map(row => ({
  x: Number(row.Age),
  y: Number(row.DBH),
  label: row.Latin_Name
}));

    // 3. Create Chart.js scatter chart
    const ctx_inventory = document.getElementById('invChartCanvas').getContext('2d');
    new Chart(ctx_inventory, {
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
          x: { title: { display: true, text: 'Age (years)' },
          min: 0,
          max: 605},
          y: { title: { display: true, text: 'DBH (cm)' } }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => {
                const raw = ctx.raw;
                return `${raw.label}: ${raw.x} yr, ${raw.y}cm`;
              }
            }
          }
        },
        hover: {
          mode: 'nearest',
          intersect: true
        }
      }
    });
  });



  fetch('./pages/haBiomass.json')
  .then(res => res.json())
  .then(data => {
  const labels = data.map(d => d["Project Lifetime"]);
  const values = data.map(d => d["Biomass (tC/ha)"]);

  const ctx_ha = document.getElementById('biomassHa').getContext('2d');
  new Chart(ctx_ha, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Biomass (tC/ha)',
      data: values,
      borderColor: 'green',
      backgroundColor: 'rgba(0,128,0,0.2)',
      fill: true,
      tension: 0.3, // smooth curve
      pointRadius: 3,
      pointHoverRadius: 6
    }]
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
      legend: { display: false }
    }
  }
});


  });


  
 fetch('./pages/siteBiomass.json')
  .then(res => res.json())
  .then(data => {
    // Extract labels (Year)
    const labels = data.map(d => d.Year);

    // Extract each series
    const high = data.map(d => d["Net Co2e Removals High"]);
    const midHigh = data.map(d => d["Net Co2e Removals Mid High"]);
    const midLow = data.map(d => d["Net Co2e Removals Mid Low"]);
    const low = data.map(d => d["Net Co2e Removals Low"]);

    const ctx = document.getElementById('biomassSite').getContext('2d');
    new Chart(ctx, {
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
          x: { title: { display: true, text: 'Year' } },
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
  });


   fetch('./pages/biomassSiteRemovals.json')
  .then(res => res.json())
  .then(data => {
    // Extract labels (Year)
    const labels = data.map(d => d.SiteName);

    // Extract each series
    const bio23 = data.map(d => d["Biomass_2023"]);
    const bio25 = data.map(d => d["Biomass_2025"]);

    const ctx_remote = document.getElementById('biomassSiteCanvas').getContext('2d');
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
          title: { display: false, text: 'Site' } },
          y: { title: { display: true, text: 'Net Carbon Removals (tC)' } }
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
  });


// Toggle between site level and total biomass charts
const bioSiteRemote = document.getElementById('biomassSiteCanvas');
const bioTotalRemote = document.getElementById('biomassTotalsCanvas');
const biomassSiteBtn = document.getElementById('biomassSiteBtn');
const biomassTotalBtn = document.getElementById('biomassTotalBtn');

function showBioSite() {
  //toggle off
  const off = [biomassTotalBtn];
  off.forEach(element => {
      element.classList.remove("active-side");
      element.classList.add("off-side");
  });
  const on = biomassSiteBtn;
  on.classList.add("active-side");
  // hide/show section
  const hide = [bioTotalRemote];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = bioSiteRemote;
    show.style.display = "block";
}
function showBioTotal() {
  //toggle off
  const off = [biomassSiteBtn];
  off.forEach(element => {
      element.classList.remove("active-side");
      element.classList.add("off-side");
  });
  const on = biomassTotalBtn;
  on.classList.add("active-side");
  // hide/show section
  const hide = [bioSiteRemote];
    hide.forEach(element => {
        element.style.display = "none";
    });
    const show = bioTotalRemote;
    show.style.display = "block";
}



  const year = [0,1];
  const obs = [0, 7126]

  const ctx_obs = document.getElementById('biomassTotalsCanvas').getContext('2d');
    new Chart(ctx_obs, {
      type: 'line',
      data: {
        labels: year,
        datasets: [
          { label: 'Observed', data: obs, backgroundColor: 'rgba(0,128,0,0.2)', fill: true, tension: 0.3 },

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
