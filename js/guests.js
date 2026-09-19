/* ==================================================
   VENDÉGLISTA ÉS ÜLŐHELYEK
================================================== */

/*
    A seat mező kapcsolja össze a vendéget
    a seats.js fájlban található ülőhellyel.

    Az üresen hagyott helyek:
    - LEFT_OUT_20
    - LEFT_IN_20
    - RIGHT_OUT_18
*/

window.SEATING_GUESTS = [

    /* ==================================================
       FŐASZTAL – BALRÓL JOBBRA
    ================================================== */

    {
        name: "Szilárd",
        side: "Fanni",
        seat: "HEAD_1",
        note: "Heni mellett"
    },

    {
        name: "Heni",
        side: "Fanni",
        seat: "HEAD_2",
        note: "Szilárd és Fanni között"
    },

    {
        name: "Fanni",
        side: "Fanni",
        seat: "HEAD_3",
        role: "Menyasszony",
        note: "Heni és Zsombi között"
    },

    {
        name: "Zsombi",
        side: "Zsombi",
        seat: "HEAD_4",
        role: "Vőlegény",
        note: "Fanni és Erika között"
    },

    {
        name: "Erika",
        side: "Zsombi",
        seat: "HEAD_5",
        note: "Zsombi és Máriusz között"
    },

    {
        name: "Máriusz",
        side: "Zsombi",
        seat: "HEAD_6",
        note: "Erika mellett"
    },


    /* ==================================================
       BAL ASZTAL – KÜLSŐ OLDAL
       Felülről lefelé
    ================================================== */

    {
        name: "Bence",
        side: "Fanni",
        seat: "LEFT_OUT_01",
        note: "A bal oldali asztal külső oldalán"
    },

    {
        name: "Rozi",
        side: "Fanni",
        seat: "LEFT_OUT_02",
        note: "A bal oldali asztal külső oldalán"
    },

    {
        name: "Bius",
        side: "Fanni",
        seat: "LEFT_OUT_03",
        note: "A bal oldali asztal külső oldalán"
    },

    {
        name: "Bius mukija",
        side: "Fanni",
        seat: "LEFT_OUT_04",
        note: "A bal oldali asztal külső oldalán"
    },

    {
        name: "Adél",
        side: "Fanni",
        seat: "LEFT_OUT_05",
        note: "A bal oldali asztal külső oldalán"
    },

    {
        name: "Anita",
        side: "Fanni",
        seat: "LEFT_OUT_06",
        note: "A bal oldali asztal külső oldalán"
    },

    {
        name: "Attila",
        side: "Fanni",
        seat: "LEFT_OUT_07",
        note: "A bal oldali asztal külső oldalán"
    },

    {
        name: "Évike",
        side: "Fanni",
        seat: "LEFT_OUT_08",
        note: "A bal oldali asztal külső oldalán"
    },

    {
        name: "Évike fia",
        side: "Fanni",
        seat: "LEFT_OUT_09",
        note: "A bal oldali asztal külső oldalán"
    },

    {
        name: "Ildikó",
        side: "Fanni",
        seat: "LEFT_OUT_10",
        note: "A bal oldali asztal külső oldalán"
    },

    {
        name: "Bandika",
        side: "Fanni",
        seat: "LEFT_OUT_11",
        note: "A bal oldali asztal külső oldalán"
    },

    {
        name: "Másik bácsi",
        side: "Fanni",
        seat: "LEFT_OUT_12",
        note: "A bal oldali asztal külső oldalán"
    },

    {
        name: "Edit néni",
        side: "Fanni",
        seat: "LEFT_OUT_13",
        note: "A bal oldali asztal külső oldalán"
    },

    {
        name: "Kinga",
        side: "Fanni",
        seat: "LEFT_OUT_14",
        note: "A bal oldali asztal külső oldalán"
    },

    {
        name: "Kinga barátja",
        side: "Fanni",
        seat: "LEFT_OUT_15",
        note: "A bal oldali asztal külső oldalán"
    },

    {
        name: "Ilona",
        side: "Fanni",
        seat: "LEFT_OUT_16",
        note: "A bal oldali asztal külső oldalán"
    },

    {
        name: "Barnus",
        side: "Fanni",
        seat: "LEFT_OUT_17",
        note: "A bal oldali asztal külső oldalán"
    },

    {
        name: "Panna",
        side: "Fanni",
        seat: "LEFT_OUT_18",
        note: "A bal oldali asztal külső oldalán"
    },

    {
        name: "Martin",
        side: "Fanni",
        seat: "LEFT_OUT_19",
        note: "Panna mellett, a bal oldali asztal külső oldalán"
    },


    /* ==================================================
       BAL ASZTAL – BELSŐ OLDAL
       Felülről lefelé
    ================================================== */

    {
        name: "Mami",
        side: "Fanni",
        seat: "LEFT_IN_01",
        note: "A bal oldali asztal belső oldalán"
    },

    {
        name: "Batyo",
        side: "Fanni",
        seat: "LEFT_IN_02",
        note: "A bal oldali asztal belső oldalán"
    },

    {
        name: "Piri mama",
        side: "Fanni",
        seat: "LEFT_IN_03",
        note: "A bal oldali asztal belső oldalán"
    },

    {
        name: "Józsi papa",
        side: "Fanni",
        seat: "LEFT_IN_04",
        note: "A bal oldali asztal belső oldalán"
    },

    {
        name: "Dante",
        side: "Fanni",
        seat: "LEFT_IN_05",
        note: "A bal oldali asztal belső oldalán"
    },

    {
        name: "Éva",
        side: "Fanni",
        seat: "LEFT_IN_06",
        note: "A bal oldali asztal belső oldalán"
    },

    {
        name: "Imi",
        side: "Fanni",
        seat: "LEFT_IN_07",
        note: "A bal oldali asztal belső oldalán"
    },

    {
        name: "Laura",
        side: "Fanni",
        seat: "LEFT_IN_08",
        note: "A bal oldali asztal belső oldalán"
    },

    {
        name: "Lajos",
        side: "Fanni",
        seat: "LEFT_IN_09",
        note: "A bal oldali asztal belső oldalán"
    },

    {
        name: "Gabi bácsi",
        side: "Fanni",
        seat: "LEFT_IN_10",
        note: "A bal oldali asztal belső oldalán"
    },

    {
        name: "Kul Éva",
        side: "Fanni",
        seat: "LEFT_IN_11",
        note: "A bal oldali asztal belső oldalán"
    },

    {
        name: "Nono",
        side: "Fanni",
        seat: "LEFT_IN_12",
        note: "A bal oldali asztal belső oldalán"
    },

    {
        name: "Nono barátnője",
        side: "Fanni",
        seat: "LEFT_IN_13",
        note: "A bal oldali asztal belső oldalán"
    },

    {
        name: "Csilla",
        side: "Fanni",
        seat: "LEFT_IN_14",
        note: "A bal oldali asztal belső oldalán"
    },

    {
        name: "Csilla párja",
        side: "Fanni",
        seat: "LEFT_IN_15",
        note: "A bal oldali asztal belső oldalán"
    },

    {
        name: "Márk",
        side: "Fanni",
        seat: "LEFT_IN_16",
        note: "A bal oldali asztal belső oldalán"
    },

    {
        name: "Abi",
        side: "Fanni",
        seat: "LEFT_IN_17",
        note: "A bal oldali asztal belső oldalán"
    },

    {
        name: "Bius (meló)",
        side: "Fanni",
        seat: "LEFT_IN_18",
        note: "A bal oldali asztal belső oldalán"
    },

    {
        name: "Bius (meló) párja",
        side: "Fanni",
        seat: "LEFT_IN_19",
        note: "A bal oldali asztal belső oldalán"
    },


    /* ==================================================
       JOBB ASZTAL – BELSŐ OLDAL
       Felülről lefelé
    ================================================== */

    {
        name: "Bianka",
        side: "Zsombi",
        seat: "RIGHT_IN_01",
        note: "A jobb oldali asztal belső oldalán"
    },

    {
        name: "Dorina",
        side: "Zsombi",
        seat: "RIGHT_IN_02",
        note: "A jobb oldali asztal belső oldalán"
    },

    {
        name: "Aliz",
        side: "Zsombi",
        seat: "RIGHT_IN_03",
        note: "A jobb oldali asztal belső oldalán"
    },

    {
        name: "Keresztmama",
        side: "Zsombi",
        seat: "RIGHT_IN_04",
        note: "A jobb oldali asztal belső oldalán"
    },

    {
        name: "Keresztapa",
        side: "Zsombi",
        seat: "RIGHT_IN_05",
        note: "A jobb oldali asztal belső oldalán"
    },

    {
        name: "Feri báttya",
        side: "Zsombi",
        seat: "RIGHT_IN_06",
        note: "A jobb oldali asztal belső oldalán"
    },

    {
        name: "Rózángyó",
        side: "Zsombi",
        seat: "RIGHT_IN_07",
        note: "A jobb oldali asztal belső oldalán"
    },

    {
        name: "Rosszcsont 1",
        side: "Zsombi",
        seat: "RIGHT_IN_08",
        note: "A jobb oldali asztal belső oldalán"
    },

    {
        name: "Rosszcsont 2",
        side: "Zsombi",
        seat: "RIGHT_IN_09",
        note: "A jobb oldali asztal belső oldalán"
    },

    {
        name: "Őrs",
        side: "Zsombi",
        seat: "RIGHT_IN_10",
        note: "A jobb oldali asztal belső oldalán"
    },

    {
        name: "Zsuzsi",
        side: "Zsombi",
        seat: "RIGHT_IN_11",
        note: "A jobb oldali asztal belső oldalán"
    },

    {
        name: "Lányuk",
        side: "Zsombi",
        seat: "RIGHT_IN_12",
        note: "A jobb oldali asztal belső oldalán"
    },

    {
        name: "Zalán",
        side: "Zsombi",
        seat: "RIGHT_IN_13",
        note: "A jobb oldali asztal belső oldalán"
    },

    {
        name: "Nina",
        side: "Zsombi",
        seat: "RIGHT_IN_14",
        note: "A jobb oldali asztal belső oldalán"
    },

    {
        name: "Nyedo",
        side: "Zsombi",
        seat: "RIGHT_IN_15",
        note: "A jobb oldali asztal belső oldalán"
    },

    {
        name: "Attila gelence gyerek 1",
        side: "Zsombi",
        seat: "RIGHT_IN_16",
        note: "A jobb oldali asztal belső oldalán"
    },

    {
        name: "Attila gelence gyerek 2",
        side: "Zsombi",
        seat: "RIGHT_IN_17",
        note: "A jobb oldali asztal belső oldalán"
    },

    {
        name: "Attila gelence gyerek 3",
        side: "Zsombi",
        seat: "RIGHT_IN_18",
        note: "A jobb oldali asztal belső oldalán"
    },


    /* ==================================================
       JOBB ASZTAL – KÜLSŐ OLDAL
       Felülről lefelé
    ================================================== */

    {
        name: "Pityu",
        side: "Zsombi",
        seat: "RIGHT_OUT_01",
        note: "A jobb oldali asztal külső oldalán"
    },

    {
        name: "Annamari",
        side: "Zsombi",
        seat: "RIGHT_OUT_02",
        note: "A jobb oldali asztal külső oldalán"
    },

    {
        name: "Tibi",
        side: "Zsombi",
        seat: "RIGHT_OUT_03",
        note: "A jobb oldali asztal külső oldalán"
    },

    {
        name: "Tibi párja",
        side: "Zsombi",
        seat: "RIGHT_OUT_04",
        note: "A jobb oldali asztal külső oldalán"
    },

    {
        name: "Eszti néni",
        side: "Zsombi",
        seat: "RIGHT_OUT_05",
        note: "A jobb oldali asztal külső oldalán"
    },

    {
        name: "Margit néni",
        side: "Zsombi",
        seat: "RIGHT_OUT_06",
        note: "A jobb oldali asztal külső oldalán"
    },

    {
        name: "Emőke",
        side: "Zsombi",
        seat: "RIGHT_OUT_07",
        note: "A jobb oldali asztal külső oldalán"
    },

    {
        name: "Ferkó",
        side: "Zsombi",
        seat: "RIGHT_OUT_08",
        note: "A jobb oldali asztal külső oldalán"
    },

    {
        name: "Koppány",
        side: "Zsombi",
        seat: "RIGHT_OUT_09",
        note: "A jobb oldali asztal külső oldalán"
    },

    {
        name: "Reni",
        side: "Zsombi",
        seat: "RIGHT_OUT_10",
        note: "A jobb oldali asztal külső oldalán"
    },

    {
        name: "1 gyerek",
        side: "Zsombi",
        seat: "RIGHT_OUT_11",
        note: "A jobb oldali asztal külső oldalán"
    },

    {
        name: "Lóri",
        side: "Zsombi",
        seat: "RIGHT_OUT_12",
        note: "A jobb oldali asztal külső oldalán"
    },

    {
        name: "Lóri párja",
        side: "Zsombi",
        seat: "RIGHT_OUT_13",
        note: "A jobb oldali asztal külső oldalán"
    },

    {
        name: "Lóri gyerek 1",
        side: "Zsombi",
        seat: "RIGHT_OUT_14",
        note: "A jobb oldali asztal külső oldalán"
    },

    {
        name: "Lóri gyerek 2",
        side: "Zsombi",
        seat: "RIGHT_OUT_15",
        note: "A jobb oldali asztal külső oldalán"
    },

    {
        name: "Attila gelence",
        side: "Zsombi",
        seat: "RIGHT_OUT_16",
        note: "A jobb oldali asztal külső oldalán"
    },

    {
        name: "Attila gelence párja",
        side: "Zsombi",
        seat: "RIGHT_OUT_17",
        note: "A jobb oldali asztal külső oldalán"
    }

];