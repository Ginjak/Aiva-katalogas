const data = [
  {
    imones: [
      {
        pavadinimas: 'UAB "Durys ir Langai"',
        imonesKodas: "1234586",
        pvmKodas: "LT1254545",
        adresas: "Aguonu 6, Vilnius",
        telefonas: "8-52123258",
        mobTelefonas: "866666666",
        svetaine: "www.aiva.lt",
        elPastas: "teas@test.lt",
        rejestras: "jasdlasjdlkasd",
        numeravimui: "ADL",
        identifikavimui: "Identifikavimui",
      },
    ],
    id: "imone-1",
    darbuotojai: [
      {
        darbuotojas: "Jonas Jonaitis",
        pareigos: "Saltkalvis",
        padalinys: "IT",
        vartotojas: "demo",
      },
    ],
  },
  {
    imones: [
      {
        pavadinimas: 'UAB "Testas"',
        imonesKodas: "12",
        pvmKodas: "LT125",
        adresas: "Aguon ",
        telefonas: "8-52128",
        mobTelefonas: "86666666",
        svetaine: "www.ai",
        elPastas: "teas@",
        rejestras: "jasd",
        numeravimui: "A",
        identifikavimui: "Iden",
      },
    ],
    id: "imone-2",
    darbuotojai: [
      {
        darbuotojas: "Jonas Jonaitis",
        pareigos: "Saltkalvis",
        padalinys: "IT",
        vartotojas: "demo",
      },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  // Function to handle showing the modal
  function showModal(company) {
    const modal = document.getElementById("editModal");
    const kompanijosPavadinimas = document.getElementById(
      "kompanijosPavadinimas"
    );
    const imonesKodas = document.getElementById("imonesKodas");
    const pvmKodas = document.getElementById("pvmKodas");
    const adresas = document.getElementById("adresas");
    const telefonas = document.getElementById("telefonas");
    const mobTelefonas = document.getElementById("mobTelefonas");
    const svetaine = document.getElementById("svetaine");
    const elPastas = document.getElementById("elPastas");
    const rejestras = document.getElementById("rejestras");
    const numeravimui = document.getElementById("numeravimui");
    const identifikavimui = document.getElementById("identifikavimui");

    const saveChangesBtn = document.getElementById("saveChangesBtn");

    // Set current company name in input
    kompanijosPavadinimas.value = company.imones[0].pavadinimas;
    imonesKodas.value = company.imones[0].imonesKodas;
    pvmKodas.value = company.imones[0].pvmKodas;
    adresas.value = company.imones[0].adresas;
    telefonas.value = company.imones[0].telefonas;
    mobTelefonas.value = company.imones[0].mobTelefonas;
    svetaine.value = company.imones[0].svetaine;
    elPastas.value = company.imones[0].elPastas;
    rejestras.value = company.imones[0].rejestras;
    numeravimui.value = company.imones[0].numeravimui;
    identifikavimui.value = company.imones[0].identifikavimui;

    // Show modal
    modal.style.display = "block";

    // Handle save changes
    saveChangesBtn.onclick = () => {
      const newKompanijosPavadinimas = kompanijosPavadinimas.value;
      const newImonesKodas = imonesKodas.value;
      const newPvmKodas = pvmKodas.value;
      const newAdresas = adresas.value;
      const newTelefonas = telefonas.value;
      const newMobTelefonas = mobTelefonas.value;
      const newSvetaine = svetaine.value;
      const newElPastas = elPastas.value;
      const newRejestras = rejestras.value;
      const newNumeravimui = numeravimui.value;
      const newIdentifikavimui = identifikavimui.value;

      company.imones[0].pavadinimas = newKompanijosPavadinimas;
      company.imones[0].imonesKodas = newImonesKodas;
      company.imones[0].pvmKodas = newPvmKodas;
      company.imones[0].adresas = newAdresas;
      company.imones[0].telefonas = newTelefonas;
      company.imones[0].mobTelefonas = newMobTelefonas;
      company.imones[0].svetaine = newSvetaine;
      company.imones[0].elPastas = newElPastas;
      company.imones[0].rejestras = newRejestras;
      company.imones[0].numeravimui = newNumeravimui;
      company.imones[0].identifikavimui = newIdentifikavimui;

      // Update the displayed company name
      document.querySelector(`#${company.id} .imone-tile`).textContent =
        newKompanijosPavadinimas;

      // Close the modal
      modal.style.display = "none";
    };
  }

  // Close the modal when the close button is clicked
  document.querySelector("#close-edit-modal").onclick = () => {
    document.getElementById("editModal").style.display = "none";
  };

  document.querySelector("#close-nauja-modal").onclick = () => {
    document.getElementById("naujaImone").style.display = "none";
  };

  document.querySelector("#close-modal-btn").onclick = () => {
    document.getElementById("editModal").style.display = "none";
  };
  document.querySelector("#close-nauja-modal-btn").onclick = () => {
    document.getElementById("naujaImone").style.display = "none";
  };

  // Close the modal when clicking outside of it
  window.onclick = (event) => {
    const modal = document.getElementById("editModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
    const naujaImone = document.getElementById("naujaImone");
    if (event.target === naujaImone) {
      naujaImone.style.display = "none";
    }
  };

  document.querySelector("#nauja-imone-btn").onclick = () => {
    console.log("test");
    document.getElementById("naujaImone").style.display = "block";
  };

  function addDataObject(newImone, newDarbuotojai, newId) {
    // Default values for imone
    const defaultImone = {
      pavadinimas: "",
      imonesKodas: "",
      pvmKodas: "",
      adresas: "",
      telefonas: "",
      mobTelefonas: "",
      svetaine: "",
      elPastas: "",
      rejestras: "",
      numeravimui: "",
      identifikavimui: "",
    };

    // Merge default values with provided newImone
    const imoneToAdd = { ...defaultImone, ...newImone };

    // Create the new object with the specified or default values
    const newObject = {
      imones: [imoneToAdd],
      id: newId,
      darbuotojai: newDarbuotojai,
    };

    data.push(newObject);
  }

  document.querySelector("#naujaImoneIssaugoti").onclick = () => {
    // Get values from input fields
    const pavadinimas = document.querySelector(
      "#naujaKompanijaPavadinimas"
    ).value;
    const imonesKodas = document.querySelector("#naujaImonesKodas").value;
    const pvmKodas = document.querySelector("#naujaPvmKodas").value;
    const adresas = document.querySelector("#naujaAdresas").value;
    const telefonas = document.querySelector("#naujaTelefonas").value;
    const mobTelefonas = document.querySelector("#naujaMobTelefonas").value;
    const svetaine = document.querySelector("#naujaSvetaine").value;
    const elPastas = document.querySelector("#naujaElPastas").value;
    const rejestras = document.querySelector("#naujaRejestras").value;
    const numeravimas = document.querySelector("#naujaNumeravimui").value;
    const indentifikacija = document.querySelector(
      "#naujaIdentifikavimui"
    ).value;

    // Prepare newImone object with values from the modal
    let newImone = {
      pavadinimas: pavadinimas,
      imonesKodas: imonesKodas,
      pvmKodas: pvmKodas,
      adresas: adresas,
      telefonas: telefonas,
      mobTelefonas: mobTelefonas,
      svetaine: svetaine,
      elPastas: elPastas,
      rejestras: rejestras,
      numeravimui: numeravimas,
      identifikavimui: indentifikacija,
    };

    const newDarbuotojai = [{}];

    const index = data.length;

    if (!pavadinimas.trim()) {
      const pavlabel = document.querySelector("#naujaKompanijaLabel");
      let alertMsg = document.getElementById("alertMessage");

      if (!alertMsg) {
        alertMsg = document.createElement("p");
        alertMsg.classList.add("alert");
        alertMsg.id = "alertMessage";
        alertMsg.textContent = "Pavadinimas yra privalomas*";
        pavlabel.insertAdjacentElement("afterend", alertMsg);
      }

      return;
    } else {
      addDataObject(newImone, newDarbuotojai, `imone-${index + 1}`);
      createHtmlStructure(data);

      document.querySelector("#naujaKompanijaPavadinimas").value = "";
      document.querySelector("#naujaImonesKodas").value = "";
      document.querySelector("#naujaPvmKodas").value = "";
      document.querySelector("#naujaAdresas").value = "";
      document.querySelector("#naujaTelefonas").value = "";
      document.querySelector("#naujaMobTelefonas").value = "";
      document.querySelector("#naujaSvetaine").value = "";
      document.querySelector("#naujaElPastas").value = "";
      document.querySelector("#naujaRejestras").value = "";
      document.querySelector("#naujaNumeravimui").value = "";
      document.querySelector("#naujaIdentifikavimui").value = "";
    }

    console.log(data);

    document.getElementById("naujaImone").style.display = "none";
    const pridetiDarb = document.querySelector("#naujas-darbuotojas-btn");
    const alertMessageId = document.querySelector("#alertMessage");
    if (pridetiDarb) {
      pridetiDarb.remove();
    }

    if (alertMessageId) {
      alertMessageId.remove();
    }
  };

  // Adding hover effect to show buttons
  function addHoverEffect(imoneElement) {
    imoneElement.addEventListener("mouseover", () => {
      imoneElement
        .querySelectorAll(".imone-btn")
        .forEach((btn) => (btn.style.display = "inline-block"));
    });

    imoneElement.addEventListener("mouseout", () => {
      imoneElement
        .querySelectorAll(".imone-btn")
        .forEach((btn) => (btn.style.display = "none"));
    });
  }

  // Function to create the HTML structure for each imone and darbuotojai
  function createHtmlStructure(data) {
    const imonesWraper = document.querySelector(".imones-wraper");

    const darbuotojaiDiv = document.querySelector(".darbuotojai-wraper");
    imonesWraper.innerHTML = "";
    darbuotojaiDiv.innerHTML = "";

    data.forEach((company) => {
      const imoneDiv = document.createElement("div");
      imoneDiv.className = "imone";
      imoneDiv.id = company.id;
      imoneDiv.innerHTML = `
        <p class="imone-tile">${company.imones[0].pavadinimas}</p>
        <div class="imone-btn-wraper">
          <button class="imone-btn show-button"><i class="fa-regular fa-address-book"></i></button>
          <button class="imone-btn edit-button"><i class="fa-solid fa-pen-to-square"></i></button>
        </div>
      `;

      imonesWraper.prepend(imoneDiv);

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

      addHoverEffect(imoneDiv);

      imoneDiv.querySelector(".show-button").addEventListener("click", () => {
        // Hide all other tables
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
        }
      });

      imoneDiv.querySelector(".edit-button").addEventListener("click", () => {
        showModal(company);
      });
    });
  }

  // Call the function to create the HTML structure
  createHtmlStructure(data);
});
