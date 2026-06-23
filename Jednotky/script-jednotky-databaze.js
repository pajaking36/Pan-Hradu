// Ukázková herní data
const items = [
    {
        name: "Hrdina",
        image: "Jednotky/Images Jednotky/icm_1.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/kn_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge hrdinove'>Hrdinové</span><span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>4000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>1000&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "20&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp20&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            strelbaObrana: "0&nbsp<img class='ikona' src='Jednotky/Images/arrow.gif'>&nbsp&nbsp4&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "600&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+30&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>", icon: "<img src='Jednotky/Images/s.gif'>", name: "Střelba", desc: "Na poslední úrovni Hrdina dostřelí na vzdálenost 3 pole, a má zvýšenou střelbu o +8&nbsp<img class='ikona' src='Jednotky/Images/arrow.gif'>. Musí u sebe ale nést střelecký artefakt" },
            { cost: "",icon: "<img src='Jednotky/Images/isa.gif'>", name: "Zuření", desc: "Na poslední úrovni se Hrdina rozzuří po dobu 40 minut." },
            { cost: "",icon: "<img src='Jednotky/Images/b-big1.gif'>", name: "Obří Hrdina", desc: "Hrdina se na 60 minut změní na obřího Hrdinu 2x2 pole velkého." }
        ],
    
    },
    {
        name: "Hrdina Bílý",
        image: "Jednotky/Images Jednotky/icm_2.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/kb_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge hrdinove'>Hrdinové</span><span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>4000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>1000&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "20&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp20&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            strelbaObrana: "0&nbsp<img class='ikona' src='Jednotky/Images/arrow.gif'>&nbsp&nbsp4&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "600&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+30&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+2&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>", icon: "<img src='Jednotky/Images/s.gif'>", name: "Střelba", desc: "Na poslední úrovni Hrdina dostřelí na vzdálenost 3 pole, a má zvýšenou střelbu o +8&nbsp<img class='ikona' src='Jednotky/Images/arrow.gif'>. Musí u sebe ale nést střelecký artefakt" },
            { cost: "",icon: "<img src='Jednotky/Images/isa.gif'>", name: "Zuření", desc: "Na poslední úrovni se Hrdina rozzuří po dobu 40 minut." },
            { cost: "",icon: "<img src='Jednotky/Images/b-big1.gif'>", name: "Obří Hrdina", desc: "Hrdina se na 60 minut změní na obřího Hrdinu 2x2 pole velkého." }
        ],
        dodatecneInfo: "Bílý hrdina je vylepšení na klasického hrdinu, které lze ve hře koupit za 40&nbsp<img class='ikona' src='Jednotky/Images/credits.gif'> na půl roku. Hrdina se rychleji uzdravuje (+2<img class='ikona' src='Jednotky/Images/hea.gif'>), a má přídavnou kapsu na artefakt. V případě smrti hrdiny je na rozdíl od obyčejného hrdiny šance na ztrátu artefaktu minimální (náhoda je 1 z 10). Artefakty, které nese, budou přeneseny do nové hry, nemusíš tedy stavět 9. level hradu."
    },
    {
        name: "Zbrojnoš Bílý",
        image: "Jednotky/Images Jednotky/icm_4.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/zbb_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>550&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "18&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp16&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "2&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "2&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "500&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+25&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+2&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>8&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "",icon: "<img src='Jednotky/Images/b_defense_add.gif'>", name: "Modlitba k Bohu", desc: "Zvýší obranu +3<img class='ikona' src='Jednotky/Images/sh.gif'> sám sobě na 27 minut. Cooldwn: 2 hodiny" },      
        ],

    },
    {
        name: "Zbrojnoš Panoš",
        image: "Jednotky/Images Jednotky/icm_5.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/zbp_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "110",
        hodnost9: "1.100",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>530&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "15&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp13&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "2&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "2&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "500&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+25&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+1&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>7&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "",icon: "<img src='Jednotky/Images/b_defense_add.gif'>", name: "Zvolání: Za Krále!", desc: "Zvýší obranu +2<img class='ikona' src='Jednotky/Images/sh.gif'> sám sobě na 27 minut. Cooldwn: 2 hodiny" },      
        ],

    },
    {
        name: "Zbrojnoš",
        image: "Jednotky/Images Jednotky/icm_6.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/zb_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "",
        hodnost9: "",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>520&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "15&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp12&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "2&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "2&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "500&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+25&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>6&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
        ],

    },
    {
        name: "Zbrojnoš Modrý",
        image: "Jednotky/Images Jednotky/icm_7.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/zbm_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>540&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "18&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp13&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "5&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "2&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "500&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+25&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>8&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "",icon: "<img src='Jednotky/Images/b_defense_add.gif'>", name: "Bojová Píseň", desc: "Zvýší obranu +3<img class='ikona' src='Jednotky/Images/sh.gif'> sám sobě na 27 minut. Cooldwn: 2 hodiny" },      
        ],

    },
    {
        name: "Zbrojnoš Zelenáč",
        image: "Jednotky/Images Jednotky/icm_8.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/zbz_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "",
        hodnost9: "",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>500&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "12&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp10&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "3&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "2&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "500&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+25&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>4&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
        ],

    },
    {
        name: "Černý Král",
        image: "Jednotky/Images Jednotky/icm_11.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/bk_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge bratrstvo'>Černé bratrstvo</span>",
        stats: {
            energie: "<span class='energie'>4000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>4500&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "42&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp60&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            obranaStrely: "15&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "27&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "3000&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+50&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+10&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>5&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>5&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>5&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
        { cost: "",icon: "", name: "", desc: "Shopnosti této jednotky jsou neznámé" },
        ],
        dodatecneInfo: "POZOR: Nejedná se o černého Rytíře, ale o Černé Krále. Jsou si velice podobní, ale mají trochu odlišné staty. Černého Krále můžete najít např. na mapách ZD6 nebo KÚ Hrad Černého Bratrstva a Záchrana Kostela."
    },
    {
        name: "Střelec",
        image: "Jednotky/Images Jednotky/icm_12.png", // Obrázek v TABULCE JEDNOTEK
        gif: "Jednotky/Images Jednotky gifs/ar_3_3.gif", // Gif ve vyskakovacím okně
        hodnost0: "-",
        hodnost9: "-",
        kategorie: "<span class='badge lide'>Lidé</span>",
        stats: {
            energie: "<span class='energie'>3000&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            zdravi: "<span class='zdravi'>300&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            mezera: "",
            utokObrana: "9&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>&nbsp&nbsp7&nbsp<img class='ikona' src='Jednotky/Images/sh.gif'>",
            strelbaObrana: "5&nbsp<img class='ikona' src='Jednotky/Images/arrow.gif'>&nbsp&nbsp0&nbsp<img class='ikona' src='Jednotky/Images/sh_shot.gif'>",
            budovy: "1&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            uneseSurovin: "500&nbsp<img class='ikona' src='Jednotky/Images/bag.gif'>",
            prirustekEnergie: "+30&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>",
            prirustekLeceni: "+0&nbsp<img class='ikona' src='Jednotky/Images/hea.gif'>",
            bonusLide: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusSkreti: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>",
            bonusTrpaslici: "<span class='bonus'>0&nbsp<img class='ikona' src='Jednotky/Images/m2.gif'>"
        },
        schopnosti: [
            { cost: "600&nbsp<img class='ikona' src='Jednotky/Images/eng.gif'>", icon: "<img src='Jednotky/Images/s.gif'>", name: "Střelba", desc: "Jenotka může střílet na vzdálenost 1 až 3 pole (podle její hodnosti)." },          
        ],

    },

];