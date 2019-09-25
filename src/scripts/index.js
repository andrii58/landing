import '../styles/index.scss';

document.querySelector('.item').addEventListener('click', function() {
  console.log('hello');
  showDateFilter();
});

document.querySelector('#filter-location').addEventListener('click', function() {
  showLocationFilter();
});

document.querySelector('#filter-date').addEventListener('click', function() {
	showDateFilter();
});

document.querySelector('#filter-guest').addEventListener('click', function() {
	showGuestFilter();
});

document.querySelector('#input-location').addEventListener('blur', function() {
  clearFilters();
});

document.querySelector('#input-date').addEventListener('blur', function() {
  clearFilters();
});

document.querySelector('#input-guest').addEventListener('blur', function() {
  clearFilters();
});


function showLocationFilter() {
  document.querySelector('#filter-location').style.width="63%";
  document.querySelector('#filter-date').style.width="28%";
  document.querySelector('#filter-guest').style.width="24%";
  document.querySelector('.dropdown-location').style.display="block";
}

function showDateFilter() {
  document.querySelector('#filter-location').style.width="48%";
  document.querySelector('#filter-date').style.width="63%";
  document.querySelector('#filter-guest').style.width="24%";
  document.querySelector('.dropdown-location').style.display="none";
}

function showGuestFilter() {
  document.querySelector('#filter-location').style.width="48%";
  document.querySelector('#filter-date').style.width="28%";
  document.querySelector('#filter-guest').style.width="39%";
  document.querySelector('.dropdown-location').style.display="none";
}

function clearFilters() {
  document.querySelector('.dropdown-location').style.display="none";
  document.querySelector('#filter-location').style.width="48%";
  document.querySelector('#filter-date').style.width="28%";
  document.querySelector('#filter-guest').style.width="24%";
}