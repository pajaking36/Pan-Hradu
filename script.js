

// Script for filtering all tables
function filterAllTables() {
    // Získání vybrané hodnoty z filtru
    const filterValue = document.getElementById("globalCategoryFilter").value.toLowerCase();
                
    // Výběr všech tabulek, které mají třídu "filterable-table"
    const tables = document.querySelectorAll(".filterable-table");

    // Procházení každé tabulky zvlášť
    tables.forEach(table => {
        const tbody = table.querySelector("tbody");
        const rows = tbody.getElementsByTagName("tr");

        // Procházení všech řádků v aktuální tabulce
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const cells = row.getElementsByTagName("td");
                        
            if (cells.length > 0) {
                // Výběr úplně posledního sloupce (index se dynamicky přizpůsobí počtu sloupců)
                const lastCell = cells[cells.length - 1];
                const cellText = (lastCell.textContent || lastCell.innerText).toLowerCase();

                // Podmínka pro zobrazení nebo skrytí řádku
                if (filterValue === "all" || cellText.includes(filterValue)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            }
        }
    });
}