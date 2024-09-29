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
      {
        darbuotojas: "Petras Jonaitis",
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

    modal.style.display = "block";

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

      document.querySelector(`#${company.id} .imone-tile`).textContent =
        newKompanijosPavadinimas;

      modal.style.display = "none";
    };
  }

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

  document.querySelector("#close-naujasDarb-modal-btn").onclick = () => {
    document.getElementById("naujasDarbuotojasModal").style.display = "none";
  };
  document.querySelector("#closeBtnNaujasDarb").onclick = () => {
    document.getElementById("naujasDarbuotojasModal").style.display = "none";
  };

  window.onclick = (event) => {
    const modal = document.getElementById("editModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
    const naujaImone = document.getElementById("naujaImone");
    if (event.target === naujaImone) {
      naujaImone.style.display = "none";
    }
    const naujasDarbuotojas = document.getElementById("naujasDarbuotojasModal");
    if (event.target === naujasDarbuotojas) {
      naujasDarbuotojas.style.display = "none";
    }
  };

  document.querySelector("#nauja-imone-btn").onclick = () => {
    document.getElementById("naujaImone").style.display = "block";
  };

  function addDataObject(newImone, newDarbuotojai, newId) {
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

    const imoneToAdd = { ...defaultImone, ...newImone };

    const newObject = {
      imones: [imoneToAdd],
      id: newId,
      darbuotojai: newDarbuotojai,
    };

    data.push(newObject);
  }

  document.querySelector("#naujaImoneIssaugoti").onclick = () => {
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

    const newDarbuotojai = [
      {
        darbuotojas: "Petras Petraitis",
        padalinys: "IT",
        pareigos: "Vadybininkas",
        vartotojas: "Admin",
      },
    ];

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

  function createHtmlStructure(data) {
    let imonesId = "";
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
      darbuotojuTable.setAttribute(
        "data-id",
        `darb-${company.id.split("-")[1]}`
      );
      darbuotojuTable.id = `darb-${company.id.split("-")[1]}`;
      darbuotojuTable.style.display =
        company.darbuotojai.length > 0 ? "none" : "grid";

      const naujasDarbBtn = document.createElement("div");
      naujasDarbBtn.className = "flex-center";
      naujasDarbBtn.innerHTML = `
        <button id="naujas-darbuotojas-btn" data-id="imone-${
          company.id.split("-")[1]
        }" class="btn btn-primary btn-extr-small">Pridėti darbuotoją</button>
      `;

      darbuotojuTable.appendChild(naujasDarbBtn);

      const tableHeader = document.createElement("div");
      tableHeader.className = "table-header";
      tableHeader.innerHTML = `
        <div class="cell">Darbuotojas</div>
        <div class="cell">Pareigos</div>
        <div class="cell">Padalinys</div>
        <div class="cell">Vartotojas</div>
      `;
      darbuotojuTable.appendChild(tableHeader);

      if (company.darbuotojai.length > 0) {
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
        imonesId = imoneDiv.id;

        document
          .querySelectorAll(".darbuotoju-table")
          .forEach((table) => (table.style.display = "none"));

        if (company.darbuotojai.length > 0) {
          darbuotojuTable.style.display = "grid";
        }
      });

      imoneDiv.querySelector(".edit-button").addEventListener("click", () => {
        showModal(company);
      });

      const addEmployeeButton = naujasDarbBtn.querySelector(
        `#naujas-darbuotojas-btn`
      );
      if (addEmployeeButton) {
        addEmployeeButton.addEventListener("click", () => {
          const naujasDarbModal = document.querySelector(
            "#naujasDarbuotojasModal"
          );
          naujasDarbModal.style.display = "block";

          document.querySelector("#naujasDarbuotojasVardas").value = "";
          document.querySelector("#naujasDarbuotojasPareigos").value = "";
          document.querySelector("#naujasDarbuotojasPadalinys").value = "";
          document.querySelector("#naujasDarbuotojasVartotojas").value = "";

          const saugotiDarbuotoja = document.querySelector(
            "#naujasDarbuotojasIssaugoti"
          );

          const existingSaveHandler =
            saugotiDarbuotoja.getAttribute("data-handler");
          if (existingSaveHandler) {
            saugotiDarbuotoja.removeEventListener(
              "click",
              window[existingSaveHandler]
            );
          }

          const saveHandler = () => {
            const vardas = document.querySelector(
              "#naujasDarbuotojasVardas"
            ).value;
            const pareigos = document.querySelector(
              "#naujasDarbuotojasPareigos"
            ).value;
            const padalinys = document.querySelector(
              "#naujasDarbuotojasPadalinys"
            ).value;
            const vartotojas = document.querySelector(
              "#naujasDarbuotojasVartotojas"
            ).value;

            const naujasDarbuotojas = {
              darbuotojas: vardas,
              pareigos: pareigos,
              padalinys: padalinys,
              vartotojas: vartotojas,
            };

            pridetiDarbuotoja(company.id, naujasDarbuotojas);

            naujasDarbModal.style.display = "none";

            createHtmlStructure(data);

            saugotiDarbuotoja.removeEventListener("click", saveHandler);
            saugotiDarbuotoja.removeAttribute("data-handler");
          };

          saugotiDarbuotoja.addEventListener("click", saveHandler);
          saugotiDarbuotoja.setAttribute("data-handler", saveHandler.name);
        });
      }
    });
  }

  createHtmlStructure(data);

  function pridetiDarbuotoja(companyId, newEmployee) {
    const company = data.find((company) => company.id === companyId);
    if (company) {
      company.darbuotojai.push(newEmployee);
    } else {
      console.error(`Company with id ${companyId} not found`);
    }
  }

  data.forEach((company) => {
    const dataId = company.id;
    const button = document.querySelector(`button[data-id="${dataId}"]`);

    if (button) {
      button.addEventListener("click", () => {
        const naujasDarbModal = document.querySelector(
          "#naujasDarbuotojasModal"
        );
        naujasDarbModal.style.display = "block";

        document.querySelector("#naujasDarbuotojasVardas").value = "";
        document.querySelector("#naujasDarbuotojasPareigos").value = "";
        document.querySelector("#naujasDarbuotojasPadalinys").value = "";
        document.querySelector("#naujasDarbuotojasVartotojas").value = "";

        const saugotiDarbuotoja = document.querySelector(
          "#naujasDarbuotojasIssaugoti"
        );

        const existingSaveHandler =
          saugotiDarbuotoja.getAttribute("data-handler");

        if (existingSaveHandler) {
          saugotiDarbuotoja.removeEventListener(
            "click",
            window[existingSaveHandler]
          );
        }

        const saveHandler = () => {
          const vardas = document.querySelector(
            "#naujasDarbuotojasVardas"
          ).value;
          const pareigos = document.querySelector(
            "#naujasDarbuotojasPareigos"
          ).value;
          const padalinys = document.querySelector(
            "#naujasDarbuotojasPadalinys"
          ).value;
          const vartotojas = document.querySelector(
            "#naujasDarbuotojasVartotojas"
          ).value;

          const naujasDarbuotojas = {
            darbuotojas: vardas,
            pareigos: pareigos,
            padalinys: padalinys,
            vartotojas: vartotojas,
          };

          pridetiDarbuotoja(dataId, naujasDarbuotojas);

          naujasDarbModal.style.display = "none";

          createHtmlStructure(data);

          saugotiDarbuotoja.removeEventListener("click", saveHandler);
          saugotiDarbuotoja.removeAttribute("data-handler");
        };

        saugotiDarbuotoja.addEventListener("click", saveHandler);
        saugotiDarbuotoja.setAttribute("data-handler", saveHandler.name);
      });
    }
  });
});
