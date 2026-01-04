const dateInput = document.getElementById('date');
const slotsDiv = document.getElementById('slots');
const timeInput = document.getElementById('time');
const bookingForm = document.getElementById('bookingForm');

function formatTime(hour) {
  const period = hour >= 12 ? "PM" : "AM";
  const h = hour % 12 || 12;
  return `${h}:00 ${period}`;
}

function generateSlots(date) {
  slotsDiv.innerHTML = '';
  timeInput.value = '';
  if (!date) return;

  const day = new Date(date).getDay();
  let start = 9;
  let end = day === 0 ? 22 : 20;

  for (let h = start; h <= end; h++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = formatTime(h);

    btn.onclick = () => {
      document.querySelectorAll('.slots button').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      timeInput.value = btn.textContent;
    };

    slotsDiv.appendChild(btn);
  }
}

dateInput.addEventListener('change', () => generateSlots(dateInput.value));

bookingForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!dateInput.value || !timeInput.value) return alert("Select date & time");

  const msg = `Hello Doctor! I would like to book an appointment on ${dateInput.value} at ${timeInput.value}.`;
  window.open(`https://wa.me/919022736809?text=${encodeURIComponent(msg)}`, "_blank");
});

/* SERVICES TOGGLE */
document.querySelectorAll('.service-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const content = btn.nextElementSibling;
    content.style.maxHeight
      ? content.style.maxHeight = null
      : content.style.maxHeight = content.scrollHeight + "px";
  });
});
