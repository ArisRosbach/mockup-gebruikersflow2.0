import './style.css';
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="mockup">

    <header class="header">
      <button class="menu-button">☰ <span>Menu</span></button>

      <div class="logo">ChipSoft</div>

      <button class="profile-button">
        <div>
          <strong>Voornaam achternaam</strong><br>
          <span>01-01-1999</span><br>
          <span>Patiëntnr: 123</span>
        </div>
        <div class="avatar"></div>
      </button>
    </header>

    <div class="page">
      <aside class="sidebar">
        <a href="#">☰ <span>Contact<br><small>Contact opnemen</small></span></a>
        <a href="#">☰ <span>FAQ<br><small>Veelgestelde vragen</small></span></a>
        <a href="#">☰ <span>Machtigingen<br><small>Naar mijn machtigingen</small></span></a>
      </aside>

      <main class="dashboard">
        <section class="card">
          <h2>Volgende afspraak</h2>
          <p><strong>Maandag</strong> 30 maart 2026</p>
          <p>12:30 — Afspraak — Waar: Drachten, Polikliniek Cardiologie</p>
          <p>14:00 — Afspraak — Waar: Drachten, Polikliniek Cardiologie</p>
          <a href="#">Bekijk alle afspraken</a>
        </section>

        <section class="card">
          <h2>Nieuwe meldingen</h2>
          <p><strong>Bevestig uw opname</strong><br>Klik op Bevestigen om te laten weten of u ook echt komt.</p>
          <p><strong>In te plannen afspraak bij Radiologie</strong><br>U heeft 4 te plannen afspraken bij Radiologie</p>
          <p><strong>Ongelezen e-consult berichten</strong><br>U heeft 4 ongelezen e-consult berichten</p>
        </section>
      </main>

      <div class="background-image"></div>
    </div>

  </div>
`;