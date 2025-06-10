
    // Helper to load cars
    function getCars() {
      return JSON.parse(localStorage.getItem('carList') || '[]');
    }

    // Render car cards
    function renderCars(filter='') {
      const grid = document.getElementById('carsGrid');
      grid.innerHTML = '';
      getCars().filter(c => 
        c.model.toLowerCase().includes(filter) ||
        c.plate.toLowerCase().includes(filter)
      ).forEach((car, i) => {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        col.innerHTML = `
          <div class="car card h-100">
            <img src="${car.image}" class="card-img-top" alt="${car.model}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${car.model}</h5>
              <p class="text-muted mb-3">Plate: ${car.plate} | ₹${car.price}/day</p>
              <button class="btn btn-orange mt-auto" onclick="openBooking(${i})">
                <i class="bi bi-calendar-check me-1"></i>Book Now
              </button>
            </div>
          </div>`;
        grid.appendChild(col);
      });
    }

    // Live filter
    document.getElementById('searchInput').addEventListener('input', e => {
      renderCars(e.target.value.trim().toLowerCase()); // live search :contentReference[oaicite:4]{index=4}
    });

    // Booking logic
    let currentCar;
    const bookModal = new bootstrap.Modal(document.getElementById('bookModal'));
    function openBooking(index) {
      currentCar = getCars()[index];
      document.getElementById('bookCarModel').textContent = currentCar.model;
      bookModal.show();
    }

    // Compute duration & cost
    function updateSummary() {
      const p = new Date(pickupDT.value);
      const r = new Date(returnDT.value);
      if (r > p) {
        const hrs = Math.ceil((r - p)/(1000*60*60));
        const days = Math.ceil(hrs/24);
        document.getElementById('durationText').textContent = days + ' day(s)';
        document.getElementById('totalCost').textContent = days * currentCar.price;
      }
    }
    document.getElementById('pickupDT').addEventListener('change', updateSummary);
    document.getElementById('returnDT').addEventListener('change', updateSummary);

    // Handle booking submit
    document.getElementById('bookForm').addEventListener('submit', e => {
      e.preventDefault();
      // Here you’d send booking data to backend :contentReference[oaicite:5]{index=5}
      alert(`Booked ${currentCar.model} from `
        + pickupLoc.value + ' to ' + dropLoc.value);
      bookModal.hide();
    });

    // Initial render
    document.addEventListener('DOMContentLoaded', () => renderCars());