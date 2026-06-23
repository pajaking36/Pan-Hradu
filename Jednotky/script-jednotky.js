// Definice přesného pořadí statistik na levé a pravé straně podle předlohy
const leftStatKeys = ['energie', 'zdravi', 'mezera', 'utokObrana', 'magickaSila', 'strelbaObrana', 'obranaStrely', 'budovy'];
const rightStatKeys = ['uneseSurovin', 'prirustekEnergie', 'prirustekLeceni', 'bonusLide', 'bonusSkreti', 'bonusTrpaslici'];

const statLabels = {
    energie: "Energie:",
    zdravi: "Zdraví:",
    mezera: "",
    utokObrana: "Útok, obrana:",
    magickaSila: "Magická síla:",
    strelbaObrana: "Střelba, obrana:",
    obranaStrely: "Obrana střely:",
    budovy: "Budovy:",
    uneseSurovin: "Unese surovin:",
    prirustekEnergie: "Přírůstek energie:",
    prirustekLeceni: "Přírůstek léčení:",
    bonusLide: "Bonus na lidi:",
    bonusSkreti: "Bonus na skřety:",
    bonusTrpaslici: "Bonus na trpaslíky:"
};

document.addEventListener("DOMContentLoaded", () => {
    loadMainTable();
    setupEventListeners();
});

function loadMainTable() {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";
    
    items.forEach((item, index) => {
        const row = `
            <tr>
                <td class="zakladmale">
                    <div class="item-info">
                        <img class="item-img" src="${item.image}" alt="${item.name}" data-index="${index}"><br>${item.name}
                    </div>
                </td>
                <td class="odhaleni">${item.hodnost0}</td>
                <td class="vyzkum">${item.hodnost9}</td>
                <td class="zaklad">${item.kategorie}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function setupEventListeners() {
    document.getElementById("table-body").addEventListener("click", (e) => {
        e.stopPropagation();
        if (e.target.classList.contains("item-img")) {
            const index = e.target.getAttribute("data-index");
            showDetails(index);
        }
    });
    document.getElementById("close-modal-btn").addEventListener("click", closeModal);
    window.addEventListener("click", (e) => {
        if (e.target === document.getElementById("itemModal")) closeModal();
    });
}

function showDetails(index) {
    const item = items[index];
    
    document.getElementById("modal-title").innerHTML = item.name;
    document.getElementById("modal-image").src = item.gif;
    
    // --- 1. Generování dvousloupcové tabulky statistik ---
    const statsGridBody = document.getElementById("stats-grid-body");
    statsGridBody.innerHTML = "";
    
    // Vybereme z definovaných klíčů pouze ty vlastnosti, které hrdina reálně má
    const activeLeftStats = leftStatKeys.filter(key => item.stats && item.stats[key] !== undefined);
    const activeRightStats = rightStatKeys.filter(key => item.stats && item.stats[key] !== undefined);
    
    // Maximální počet řádků určíme podle skutečně nalezených vlastností
    const maxRows = Math.max(activeLeftStats.length, activeRightStats.length);
    
    for (let i = 0; i < maxRows; i++) {
        const leftKey = activeLeftStats[i];
        const rightKey = activeRightStats[i];
        
        // Příprava dat pro levý sloupec (pokud existuje na tomto indexu)
        let leftLabel = leftKey ? statLabels[leftKey] : "";
        let leftValue = leftKey ? item.stats[leftKey] : "";
        
        // Příprava dat pro pravý sloupec (pokud existuje na tomto indexu)
        let rightLabel = rightKey ? statLabels[rightKey] : "";
        let rightValue = rightKey ? item.stats[rightKey] : "";
        
        // Vykreslíme řádek – prázdné buňky budou případně až úplně dole, nikoliv uprostřed tabulky
        statsGridBody.innerHTML += `
            <tr>
                <td>${leftLabel}</td>
                <td>${leftValue}</td>
                <td>${rightLabel}</td>
                <td>${rightValue}</td>
            </tr>
        `;
    }

    // Pokud by hrdina neměl vůbec žádné statistiky, zobrazíme info řádek
    if (maxRows === 0) {
        statsGridBody.innerHTML = "<tr><td colspan='4' style='color:#666; text-align:center;'>Žádné statistiky</td></tr>";
    }

    // --- 2. Generování SCHOPNOSTÍ ---
    const skillsBody = document.getElementById("skills-table-body");
    skillsBody.innerHTML = "";
    
    if (item.schopnosti && item.schopnosti.length > 0) {
        item.schopnosti.forEach(schopnost => {
            skillsBody.innerHTML += `
                <tr>
                    <td class="skill-cost-cell">${schopnost.cost}</td>
                    <td class="skill-icon-cell">${schopnost.icon}</td>
                    <td class="skill-name-cell">${schopnost.name}</td>
                    <td class="skill-desc-cell">${schopnost.desc}</td>
                </tr>
            `;
        });
    } else {
        skillsBody.innerHTML = "<tr><td colspan='3' style='color:#666; text-align: center;'>Tato jednotka nemá žádné speciální schopnosti</td></tr>";
    }

    // --- 3. Generování DODATEČNÉHO INFA ---
    const extraSection = document.getElementById("extra-info-section");
    const extraBox = document.getElementById("extra-info-text");
    
    if (item.dodatecneInfo && item.dodatecneInfo.trim() !== "") {
        extraBox.innerHTML = item.dodatecneInfo;
        extraSection.style.display = "block";
    } else {
        extraSection.style.display = "none";
    }
    
    document.getElementById("itemModal").style.display = "block";
}

function closeModal() {
    document.getElementById("itemModal").style.display = "none";
}
