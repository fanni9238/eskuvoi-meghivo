/* ==================================================
   ÜLŐHELYEK KOORDINÁTÁI
================================================== */

/*
    chairX / chairY:
    a szék vagy farönk középpontja

    nameX / nameY:
    a zöld HTML-névtábla helye

    Minden érték a háttérkép százalékában értendő.
*/

window.SEATS = Object.freeze({

    /* ==================================================
       FŐASZTAL – BALRÓL JOBBRA
    ================================================== */

    HEAD_1: {
        chairX: 28.4,
        chairY: 18.0,

        nameX: 28.4,
        nameY: 6.4,

        label: "Főasztal – 1. hely"
    },

    HEAD_2: {
        chairX: 37.0,
        chairY: 18.0,

        nameX: 37.0,
        nameY: 6.4,

        label: "Főasztal – 2. hely"
    },

    HEAD_3: {
        chairX: 45.6,
        chairY: 18.0,

        nameX: 45.6,
        nameY: 6.4,

        label: "Főasztal – 3. hely"
    },

    HEAD_4: {
        chairX: 54.3,
        chairY: 18.0,

        nameX: 54.3,
        nameY: 6.4,

        label: "Főasztal – 4. hely"
    },

    HEAD_5: {
        chairX: 63.0,
        chairY: 18.0,

        nameX: 63.0,
        nameY: 6.4,

        label: "Főasztal – 5. hely"
    },

    HEAD_6: {
        chairX: 71.6,
        chairY: 18.0,

        nameX: 71.6,
        nameY: 6.4,

        label: "Főasztal – 6. hely"
    },


    /* ==================================================
       BAL ASZTAL – KÜLSŐ OLDAL
    ================================================== */

    LEFT_OUT_01: {
        chairX: 15.3,
        chairY: 37.3,

        nameX: 11.8,
        nameY: 37.3,

        label: "Bal oldali asztal – külső oldal, 1. hely"
    },

    LEFT_OUT_02: {
        chairX: 15.1,
        chairY: 42.0,

        nameX: 11.8,
        nameY: 42.0,

        label: "Bal oldali asztal – külső oldal, 2. hely"
    },


    /* ==================================================
       BAL ASZTAL – BELSŐ OLDAL
    ================================================== */

    LEFT_IN_01: {
        chairX: 30.5,
        chairY: 37.3,

        nameX: 38.9,
        nameY: 37.3,

        label: "Bal oldali asztal – belső oldal, 1. hely"
    },

    LEFT_IN_02: {
        chairX: 30.7,
        chairY: 42.0,

        nameX: 38.9,
        nameY: 42.0,

        label: "Bal oldali asztal – belső oldal, 2. hely"
    },


    /* ==================================================
       JOBB ASZTAL – BELSŐ OLDAL
    ================================================== */

    RIGHT_IN_01: {
        chairX: 69.4,
        chairY: 37.3,

        nameX: 61.1,
        nameY: 37.3,

        label: "Jobb oldali asztal – belső oldal, 1. hely"
    },

    RIGHT_IN_02: {
        chairX: 69.2,
        chairY: 42.0,

        nameX: 61.1,
        nameY: 42.0,

        label: "Jobb oldali asztal – belső oldal, 2. hely"
    },


    /* ==================================================
       JOBB ASZTAL – KÜLSŐ OLDAL
    ================================================== */

    RIGHT_OUT_01: {
        chairX: 84.8,
        chairY: 37.3,

        nameX: 88.2,
        nameY: 37.3,

        label: "Jobb oldali asztal – külső oldal, 1. hely"
    },

    RIGHT_OUT_02: {
        chairX: 85.0,
        chairY: 42.0,

        nameX: 88.2,
        nameY: 42.0,

        label: "Jobb oldali asztal – külső oldal, 2. hely"
    }

});