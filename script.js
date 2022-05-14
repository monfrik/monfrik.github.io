const selectStyle = document.querySelector('.graphs__style__select');
const zoomSlider = document.querySelector('.graphs__slider');
const selects = document.querySelectorAll('.selects__input');
const visualization = document.getElementById("visualization");

const groups = new vis.DataSet();

let stock = {};
let indexes = {};

let currentIndex;
let currentStock;

let currentGraphStyle;
let zoom = 1;

document.addEventListener('DOMContentLoaded', fetchGraph);

selects.forEach(select => {
	select.addEventListener('change', (e) => {
		if (select.id === 'stock') {
			currentStock = e.target.value;
		}
		if (select.id === 'indexes') {
			currentIndex = e.target.value;
		}
		updateGraph();
 	})
});

selectStyle.addEventListener('change', (e) => {
	currentGraphStyle = e.target.value;
	updateGraph();
});

zoomSlider.addEventListener('change', (e) => {
	zoom = e.target.value;
	console.log(e.target.value)
	updateGraph();
});

function parseResult(result, group) {
	const parsed = JSON.parse(result).spark.result[0].response[0];

	return parsed.timestamp.map((time, index) => ({
		x: new Date(time * 1000).toLocaleDateString('ru').split('.').reverse().join('-'),
		y: parsed.indicators.quote[0].close[index],
		group,
	}));
}

async function fetchStock() {
	stock = {
		'Microsoft': parseResult(msft, 0),
		'Gazprom': parseResult(gazprom, 0),
		'Apple': parseResult(apple, 0),
	};
}

async function fetchIndexes() {
	indexes = {
		'IMOEX': parseResult(imoex, 1),
		'Nasdaq': parseResult(nasdaq, 1),
		'S&P 500': parseResult(snp500, 1),
	}
}

function updateSelects() {
	// get names for select
	const stockNames = Object.entries(stock).map(([name]) => name);
	const indexesNames = Object.entries(indexes).map(([name]) => name);

	// remove all children
	while (selects[0].childElementCount !== 0) {
		selects[0].removeChild(selects[0].firstChild);
	}
	while (selects[1].childElementCount !== 0) {
		selects[1].removeChild(selects[1].firstChild);
	}

	// fill selects
	stockNames.forEach((stockName) => {
		const option = document.createElement('option');
		option.innerHTML = stockName;
		option.setAttribute('value', stockName);
		selects[0].appendChild(option);
	});
	indexesNames.forEach((indexName) => {
		const option = document.createElement('option');
		option.innerHTML = indexName;
		option.setAttribute('value', indexName);
		selects[1].appendChild(option);
	});

	currentIndex = indexesNames[0];
	currentStock = stockNames[0];
}

function updateGraph() {
	let items = [...stock[currentStock], ...indexes[currentIndex]];
	const dataset = new vis.DataSet(items);

	// get dates for set zoom of graphic
	const minDate = items.reduce((date, item) => new Date(item.x).getTime() < date.getTime() ? new Date(item.x) : date, new Date(items[0].x));
	const maxDate = items.reduce((date, item) => new Date(item.x).getTime() > date.getTime() ? new Date(item.x) : date, new Date(items[0].x));

	minDate.setDate(minDate.getDate() - 1);
	maxDate.setDate(maxDate.getDate() + 1);

	// set graph options
	const options = {
		start: minDate.toLocaleDateString('ru').split('.').reverse().join('-'),
		end: maxDate.toLocaleDateString('ru').split('.').reverse().join('-'),
		height: window.screen.height * 0.6,
		graphHeight: window.screen.height * 0.6 * zoom - 50,
		shaded: {
			orientation: "bottom", // top, bottom
		},
	};

	if (currentGraphStyle) {
		options.style = currentGraphStyle;
	}

	while (visualization.childElementCount !== 0) {
		visualization.removeChild(visualization.firstChild);
	}

	new vis.Graph2d(
		visualization,
		dataset,
		groups,
		options,
	);
}

async function fetchGraph() {
	await fetchStock();
	await fetchIndexes();
	updateSelects();
	updateGraph();
}