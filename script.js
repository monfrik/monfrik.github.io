const headerButton = document.querySelector('.header__button');
const main = document.querySelector('.main');
const selectStyle = document.querySelector('.graphs__style__select');
const zoomSlider = document.querySelector('.graphs__slider');
const selectsValues = document.querySelectorAll('.selects__value');
const selectsItemsContainers = document.querySelectorAll('.selects__items');
const visualization = document.getElementById("visualization");

const groups = new vis.DataSet();

let stock = {};
let indexes = {};

let currentIndex;
let currentStock;

let currentGraphStyle;
let zoom = 1;

document.addEventListener('DOMContentLoaded', fetchGraph);

headerButton.addEventListener('click', () => {
	main.scrollIntoView({
		behavior: 'smooth',
	});
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
	while (selectsItemsContainers[0].childElementCount !== 0) {
		selectsItemsContainers[0].removeChild(selectsItemsContainers[0].firstChild);
	}
	while (selectsItemsContainers[1].childElementCount !== 0) {
		selectsItemsContainers[1].removeChild(selectsItemsContainers[1].firstChild);
	}

	// fill selects
	stockNames.forEach((stockName) => {
		const option = document.createElement('button');
		option.innerHTML = stockName;
		option.setAttribute('value', stockName);
		option.classList.add('selects__option');
		option.addEventListener('click', () => {
			currentStock = selectsValues[0].innerHTML = stockName;
			updateGraph();
		})
		selectsItemsContainers[0].appendChild(option);
	});
	indexesNames.forEach((indexName) => {
		const option = document.createElement('button');
		option.innerHTML = indexName;
		option.setAttribute('value', indexName);
		option.classList.add('selects__option');
		option.addEventListener('click', () => {
			currentIndex = selectsValues[1].innerHTML = indexName;
			updateGraph();
		})
		selectsItemsContainers[1].appendChild(option);
	});

	currentStock = selectsValues[0].innerHTML = stockNames[0];
	currentIndex = selectsValues[1].innerHTML = indexesNames[0];
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