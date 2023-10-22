document.addEventListener("DOMContentLoaded", function () {
	const toggleSwitch = document.getElementById('toggle-switch');
	const toggleLabel = document.getElementById('toggle-label');
	const monthlyPrices = document.querySelectorAll('.monthly-price');
	const yearlyPrices = document.querySelectorAll('.yearly-price');
	const table = document.querySelectorAll('.table');
	const tableMobile = document.querySelectorAll('.table-mobile');

	const handleScreenSizeChange = () => {
		if (window.matchMedia('(max-width: 768px)').matches) {
			table.forEach(price => price.style.display = 'none');
			tableMobile.forEach(price => price.style.display = 'table');
			if (toggleSwitch.checked) {
				toggleLabel.textContent = 'Годовая';
				monthlyPrices.forEach(price => price.style.display = 'none');
				yearlyPrices.forEach(price => price.style.display = 'block');
			} else {
				toggleLabel.textContent = 'Ежемесячно';
				monthlyPrices.forEach(price => price.style.display = 'block');
				yearlyPrices.forEach(price => price.style.display = 'none');

			}
		} else {

			table.forEach(price => price.style.display = 'table');
			tableMobile.forEach(price => price.style.display = 'none');
			if (toggleSwitch.checked) {
				toggleLabel.textContent = 'Годовая';
				monthlyPrices.forEach(price => price.style.display = 'none');
				yearlyPrices.forEach(price => price.style.display = 'table-cell');

			} else {
				toggleLabel.textContent = 'Ежемесячно';
				monthlyPrices.forEach(price => price.style.display = 'table-cell');
				yearlyPrices.forEach(price => price.style.display = 'none');
			}
		}
	};

	toggleSwitch.addEventListener('change', handleScreenSizeChange);

	const screenSizeMediaQuery = window.matchMedia('(max-width: 768px)');
	screenSizeMediaQuery.addEventListener('change', handleScreenSizeChange);

	handleScreenSizeChange();
});
