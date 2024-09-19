const svg = d3.select('svg');

d3.json('menu.json').then((data) => {
  const min = d3.min(data, (d) => d.orders);
  const max = d3.max(data, (d) => d.orders);
  const extent = d3.extent(data, (d) => d.orders);

  console.log('min:', min, 'max:', max, 'extent:', extent);

  const y = d3.scaleLinear().domain([0, max]).range([0, 500]);
  const x = d3
    .scaleBand()
    .domain(data.map((item) => item.name))
    .range([0, 500])
    .paddingInner(0.2)
    .paddingOuter(0.2);

  console.log(data.map((item) => item.name));
  console.log(x('cutlets'), x('filet'));

  console.log(y(400));

  const rects = svg.selectAll('rect').data(data);

  rects
    .attr('width', x.bandwidth)
    .attr('height', (d) => y(d.orders))
    .attr('fill', 'orange')
    .attr('x', (d) => x(d.name));

  rects
    .enter()
    .append('rect')
    .attr('width', x.bandwidth)
    .attr('height', (d) => y(d.orders))
    .attr('fill', 'orange')
    .attr('x', (d) => x(d.name));
});
