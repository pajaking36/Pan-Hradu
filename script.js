
// Navigatin bar scripts
function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

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

// Script for moving user on website by buttons
    // Počkejte, až se načte celá stránka
    document.addEventListener('DOMContentLoaded', () => {
        
        // 1. Najdeme tlačítko podle jeho ID
        const tlacitko = document.getElementById('button-uni-level-1');
        
        // 2. Najdeme cílovou sekci podle jejího ID
        const cilovaSekce = document.getElementById('univerzita-level-1');

        // 3. Přidáme funkci, která se spustí při kliknutí
        if (tlacitko && cilovaSekce) {
            tlacitko.addEventListener('click', () => {
                cilovaSekce.scrollIntoView({ 
                    behavior: 'smooth', // Plynulý pohyb
                    block: 'start'      // Zarovnat na horní okraj obrazovky
                });
            });
        }

    });
    // Počkejte, až se načte celá stránka
    document.addEventListener('DOMContentLoaded', () => {
        
        // 1. Najdeme tlačítko podle jeho ID
        const tlacitko = document.getElementById('button-uni-level-2');
        
        // 2. Najdeme cílovou sekci podle jejího ID
        const cilovaSekce = document.getElementById('univerzita-level-2');

        // 3. Přidáme funkci, která se spustí při kliknutí
        if (tlacitko && cilovaSekce) {
            tlacitko.addEventListener('click', () => {
                cilovaSekce.scrollIntoView({ 
                    behavior: 'smooth', // Plynulý pohyb
                    block: 'start'      // Zarovnat na horní okraj obrazovky
                });
            });
        }

    });
    // Počkejte, až se načte celá stránka
    document.addEventListener('DOMContentLoaded', () => {
        
        // 1. Najdeme tlačítko podle jeho ID
        const tlacitko = document.getElementById('button-uni-level-3');
        
        // 2. Najdeme cílovou sekci podle jejího ID
        const cilovaSekce = document.getElementById('univerzita-level-3');

        // 3. Přidáme funkci, která se spustí při kliknutí
        if (tlacitko && cilovaSekce) {
            tlacitko.addEventListener('click', () => {
                cilovaSekce.scrollIntoView({ 
                    behavior: 'smooth', // Plynulý pohyb
                    block: 'start'      // Zarovnat na horní okraj obrazovky
                });
            });
        }

    });
    // Počkejte, až se načte celá stránka
    document.addEventListener('DOMContentLoaded', () => {
        
        // 1. Najdeme tlačítko podle jeho ID
        const tlacitko = document.getElementById('button-uni-level-4');
        
        // 2. Najdeme cílovou sekci podle jejího ID
        const cilovaSekce = document.getElementById('univerzita-level-4');

        // 3. Přidáme funkci, která se spustí při kliknutí
        if (tlacitko && cilovaSekce) {
            tlacitko.addEventListener('click', () => {
                cilovaSekce.scrollIntoView({ 
                    behavior: 'smooth', // Plynulý pohyb
                    block: 'start'      // Zarovnat na horní okraj obrazovky
                });
            });
        }

    });
    // Počkejte, až se načte celá stránka
    document.addEventListener('DOMContentLoaded', () => {
        
        // 1. Najdeme tlačítko podle jeho ID
        const tlacitko = document.getElementById('button-uni-level-5');
        
        // 2. Najdeme cílovou sekci podle jejího ID
        const cilovaSekce = document.getElementById('univerzita-level-5');

        // 3. Přidáme funkci, která se spustí při kliknutí
        if (tlacitko && cilovaSekce) {
            tlacitko.addEventListener('click', () => {
                cilovaSekce.scrollIntoView({ 
                    behavior: 'smooth', // Plynulý pohyb
                    block: 'start'      // Zarovnat na horní okraj obrazovky
                });
            });
        }

    });
    // Počkejte, až se načte celá stránka
    document.addEventListener('DOMContentLoaded', () => {
        
        // 1. Najdeme tlačítko podle jeho ID
        const tlacitko = document.getElementById('button-uni-back-1');
        
        // 2. Najdeme cílovou sekci podle jejího ID
        const cilovaSekce = document.getElementById('uni-back');

        // 3. Přidáme funkci, která se spustí při kliknutí
        if (tlacitko && cilovaSekce) {
            tlacitko.addEventListener('click', () => {
                cilovaSekce.scrollIntoView({ 
                    behavior: 'smooth', // Plynulý pohyb
                    block: 'start'      // Zarovnat na horní okraj obrazovky
                });
            });
        }

    });
    // Počkejte, až se načte celá stránka
    document.addEventListener('DOMContentLoaded', () => {
        
        // 1. Najdeme tlačítko podle jeho ID
        const tlacitko = document.getElementById('button-uni-back-2');
        
        // 2. Najdeme cílovou sekci podle jejího ID
        const cilovaSekce = document.getElementById('uni-back');

        // 3. Přidáme funkci, která se spustí při kliknutí
        if (tlacitko && cilovaSekce) {
            tlacitko.addEventListener('click', () => {
                cilovaSekce.scrollIntoView({ 
                    behavior: 'smooth', // Plynulý pohyb
                    block: 'start'      // Zarovnat na horní okraj obrazovky
                });
            });
        }

    });
    // Počkejte, až se načte celá stránka
    document.addEventListener('DOMContentLoaded', () => {
        
        // 1. Najdeme tlačítko podle jeho ID
        const tlacitko = document.getElementById('button-uni-back-3');
        
        // 2. Najdeme cílovou sekci podle jejího ID
        const cilovaSekce = document.getElementById('uni-back');

        // 3. Přidáme funkci, která se spustí při kliknutí
        if (tlacitko && cilovaSekce) {
            tlacitko.addEventListener('click', () => {
                cilovaSekce.scrollIntoView({ 
                    behavior: 'smooth', // Plynulý pohyb
                    block: 'start'      // Zarovnat na horní okraj obrazovky
                });
            });
        }

    });
    // Počkejte, až se načte celá stránka
    document.addEventListener('DOMContentLoaded', () => {
        
        // 1. Najdeme tlačítko podle jeho ID
        const tlacitko = document.getElementById('button-uni-back-4');
        
        // 2. Najdeme cílovou sekci podle jejího ID
        const cilovaSekce = document.getElementById('uni-back');

        // 3. Přidáme funkci, která se spustí při kliknutí
        if (tlacitko && cilovaSekce) {
            tlacitko.addEventListener('click', () => {
                cilovaSekce.scrollIntoView({ 
                    behavior: 'smooth', // Plynulý pohyb
                    block: 'start'      // Zarovnat na horní okraj obrazovky
                });
            });
        }

    });
    // Počkejte, až se načte celá stránka
    document.addEventListener('DOMContentLoaded', () => {
        
        // 1. Najdeme tlačítko podle jeho ID
        const tlacitko = document.getElementById('button-uni-back-5');
        
        // 2. Najdeme cílovou sekci podle jejího ID
        const cilovaSekce = document.getElementById('uni-back');

        // 3. Přidáme funkci, která se spustí při kliknutí
        if (tlacitko && cilovaSekce) {
            tlacitko.addEventListener('click', () => {
                cilovaSekce.scrollIntoView({ 
                    behavior: 'smooth', // Plynulý pohyb
                    block: 'start'      // Zarovnat na horní okraj obrazovky
                });
            });
        }

    });