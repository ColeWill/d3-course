const svg = d3.select('svg');

d3.json('menu.json').then((data) => {
  const y = d3.scaleLinear().domain([0, 1000]).range([0, 500]);
  const x = d3
    .scaleBand()
    .domain(data.map((item) => item.name))
    .range([0, 500]);

  console.log(data.map((item) => item.name));
  console.log(x('cutlets'), x('filet'));

  console.log(y(400));

  const rects = svg.selectAll('rect').data(data);

  rects
    .attr('width', x.bandwidth)
    .attr('height', (d) => y(d.orders))
    .attr('fill', 'orange')
    .attr('x', (d, i) => (i + 1) * 70);

  rects
    .enter()
    .append('rect')
    .attr('width', x.bandwidth)
    .attr('height', (d) => y(d.orders))
    .attr('fill', 'orange')
    .attr('x', (d, i) => (i + 1) * 70);
});
