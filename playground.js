imoneDiv.querySelector(".show-button").addEventListener("click", () => {
  imonesId = imoneDiv.id;
  console.log(imonesId);

  document
    .querySelectorAll(".darbuotoju-table")
    .forEach((table) => (table.style.display = "none"));

  // Show the clicked table only if it has employees
  if (company.darbuotojai.length > 0) {
    darbuotojuTable.style.display = "grid";
  }
  const darbuotojai = document.querySelector(".darbuotojai");

  // Check if the test button is already appended
  if (!darbuotojai.querySelector("#naujas-darbuotojas-btn")) {
    const naujasDarbBtn = document.createElement("div");
    naujasDarbBtn.className = "flex-center";
    naujasDarbBtn.innerHTML = `
<button id="naujas-darbuotojas-btn" class="btn btn-primary btn-extr-small ">Pridėti darbuotoją</button>
`;
    darbuotojai.appendChild(naujasDarbBtn);
    const naujasDarbBtnElement = document.getElementById(
      "naujas-darbuotojas-btn"
    );
    naujasDarbBtnElement.addEventListener("click", function () {
      const naujasDarbuotojasModal = document.getElementById(
        "naujasDarbuotojasModal"
      );
      naujasDarbuotojasModal.setAttribute("data-id", imonesId);
      if (naujasDarbuotojasModal) {
        naujasDarbuotojasModal.style.display = "block"; // or any other logic to open the modal
      }
    });
  }
});

document
  .querySelector("#naujasDarbuotojasIssaugoti")
  .addEventListener("click", () => {
    const imonesId = document
      .getElementById("naujasDarbuotojasModal")
      .getAttribute("data-id");

    const modal = document.querySelector("#naujasDarbuotojasModal");

    let darbuotojasData = {
      darbuotojas: naujasDarbuotojasModal.querySelector(
        "#naujasDarbuotojasVardas"
      ).value,
      pareigos: naujasDarbuotojasModal.querySelector(
        "#naujasDarbuotojasPareigos"
      ).value,
      padalinys: naujasDarbuotojasModal.querySelector(
        "#naujasDarbuotojasPadalinys"
      ).value,
      vartotojas: naujasDarbuotojasModal.querySelector(
        "#naujasDarbuotojasVartotojas"
      ).value,
    };

    const index = data.findIndex((item) => item.id === imonesId);

    if (index !== -1) {
      data[index].darbuotojai.push(darbuotojasData);
    }
    reset();
    createHtmlStructure(data);
    console.log(`Cia yra: ${imonesId}`);
    console.log(data);
    modal.style.display = "none";
  });

const darbuotojuTable = document.createElement("div");
darbuotojuTable.className = "darbuotoju-table";
darbuotojuTable.id = `darb-${company.id.split("-")[1]}`;
darbuotojuTable.style.display =
  company.darbuotojai.length > 0 ? "none" : "block"; // Show table only if there are employees

const tableHeader = document.createElement("div");
tableHeader.className = "table-header";
tableHeader.innerHTML = `
          <div class="cell">Darbuotojas</div>
          <div class="cell">Pareigos</div>
          <div class="cell">Padalinys</div>
          <div class="cell">Vartotojas</div>
        `;
darbuotojuTable.appendChild(tableHeader);
if (
  company.darbuotojai.length > 0 &&
  Object.keys(company.darbuotojai[0]).length !== 0
) {
  company.darbuotojai.forEach((darbuotojas) => {
    const tableRow = document.createElement("div");
    tableRow.className = "table-row";
    tableRow.innerHTML = `
            <div class="cell">${darbuotojas.darbuotojas}</div>
            <div class="cell">${darbuotojas.pareigos}</div>
            <div class="cell">${darbuotojas.padalinys}</div>
            <div class="cell">${darbuotojas.vartotojas}</div>
          `;
    darbuotojuTable.appendChild(tableRow);
  });
}

darbuotojaiDiv.appendChild(darbuotojuTable);
