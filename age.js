let ageEl = document.getElementById("age");

setInterval(() => {
	let time = dayjs().diff(dayjs('2006-02-18 2:19:00'), 'year', true);
	ageEl.innerText = time.toString().substring(0, 12);
}, 50);