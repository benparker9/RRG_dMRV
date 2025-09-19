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
