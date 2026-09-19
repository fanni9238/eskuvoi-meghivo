const sealButton = document.querySelector(".seal-button");
const openingScreen = document.querySelector(".opening-screen");

const sealImageCurrent =
    document.querySelector(".seal-image-current");

const sealImageNext =
    document.querySelector(".seal-image-next");

const sealBranch =
    document.querySelector(".seal-branch");
const openingText = document.querySelector(".opening-text");

const invitation = document.querySelector(".invitation");
const informationSection = document.querySelector(".information-section");
const programSection = document.querySelector(".program-section");

const informationButtons = document.querySelectorAll(".information-button");
const programButtons = document.querySelectorAll(".program-button");
const backButtons = document.querySelectorAll(".back-button");
const sectionTabs = document.querySelectorAll(".section-tab");



/* Összes belső oldal elrejtése */

function hideAllSections() {
    invitation?.classList.add("hidden");
    informationSection?.classList.add("hidden");
    programSection?.classList.add("hidden");
}

/* Oldal tetejére görgetés */

function scrollToTop(section = null) {
    if (section) {
        section.scrollTop = 0;
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* Meghívó megjelenítése */

function showInvitation() {
    hideAllSections();

    invitation?.classList.remove("hidden");

    scrollToTop();
}

/* Aktív felső fül beállítása */

function setActiveTab(activeSection) {

    sectionTabs.forEach((tab) => {
        tab.classList.remove("active");
    });

    if (activeSection === "information") {
        document
            .querySelectorAll(".section-tab.information-button")
            .forEach((tab) => {
                tab.classList.add("active");
            });
    }

    if (activeSection === "program") {
        document
            .querySelectorAll(".section-tab.program-button")
            .forEach((tab) => {
                tab.classList.add("active");
            });
    }

}

/* Információk oldal megjelenítése */

function showInformation() {
    hideAllSections();

    informationSection?.classList.remove("hidden");

    setActiveTab("information");

    scrollToTop(informationSection);


    /* Zárt fülek finom figyelemfelhívó animációja */

    informationSection?.classList.remove(
        "highlight-accordions"
    );

    void informationSection?.offsetWidth;

    informationSection?.classList.add(
        "highlight-accordions"
    );


    /* Az animáció után eltávolítjuk */

    window.setTimeout(() => {
        informationSection?.classList.remove(
            "highlight-accordions"
        );
    }, 2300);
}


/* Programoldal megjelenítése */

function showProgram() {
    hideAllSections();

    programSection?.classList.remove("hidden");

    setActiveTab("program");

    scrollToTop(programSection);
}

/* ==================================================
   BORÍTÉK MEGNYITÁSA – ELEGÁNS PECSÉTTÖRÉS
================================================== */

if (
    sealButton &&
    sealImageCurrent &&
    sealImageNext &&
    openingScreen &&
    invitation
) {

    let envelopeOpening = false;


    const sealFrames = [
        "assets/images/envelope/seal-intact.png",
        "assets/images/envelope/seal-crack-1.png",
        "assets/images/envelope/seal-crack-2.png"
    ];


    /* ==================================================
       KÉPEK ELŐTÖLTÉSE
    ================================================== */

    [
        ...sealFrames,
        "assets/images/envelope/seal-broken.png"
    ].forEach((src) => {

        const image = new Image();

        image.src = src;

    });


    /* ==================================================
       PECSÉT FRAME FINOM ÁTÚSZTATÁSA
    ================================================== */

    function changeSealFrame(frameIndex, duration = 420) {

        return new Promise((resolve) => {

            const nextSrc =
                sealFrames[frameIndex];


            sealImageNext.src =
                nextSrc;


            sealImageNext
                .getAnimations()
                .forEach((animation) => {
                    animation.cancel();
                });


            sealImageNext.style.opacity =
                "0";


            const fade =
                sealImageNext.animate(
                    [
                        {
                            opacity: 0
                        },

                        {
                            opacity: 1
                        }
                    ],

                    {
                        duration: duration,

                        easing:
                            "cubic-bezier(.22,.61,.36,1)",

                        fill:
                            "forwards"
                    }
                );


            fade.onfinish = () => {

                sealImageCurrent.src =
                    nextSrc;


                fade.cancel();


                sealImageNext.style.opacity =
                    "0";


                resolve();

            };

        });

    }


    /* ==================================================
       KATTINTÁS
    ================================================== */

    sealButton.addEventListener(
        "click",

        async () => {

            if (envelopeOpening) {
                return;
            }


            envelopeOpening = true;

            sealButton.disabled = true;


            /* Felirat finom eltűnése */

            openingText?.classList.add(
                "is-hiding"
            );


            /* Mindig ép pecsétből indulunk */

            sealImageCurrent.src =
                sealFrames[0];


            /*
                1.
                Rövid nyugalmi pillanat.
                Ettől nem érződik kapkodósnak.
            */

            await wait(180);


            /*
                2.
                A viasz nagyon enyhén megfeszül.
            */

            sealButton.classList.add(
                "is-tensing"
            );


            await wait(160);


            /*
                3.
                Első hajszálrepedés.
            */

            await changeSealFrame(
                1,
                430
            );


            /*
                Nem rögtön jön a következő.
                Ez nagyon fontos a természetes hatáshoz.
            */

            await wait(110);


            /*
                4.
                A repedés továbbfut.
            */

            await changeSealFrame(
                2,
                480
            );


            await wait(150);


            /*
                5.
                A növény először elkezd kiszabadulni.
            */

            sealBranch?.classList.add(
                "is-released"
            );


            await wait(90);


            /*
                6.
                A pecsét ténylegesen két darabra válik.
            */

            sealButton.classList.add(
                "is-breaking"
            );


            /*
                Hagyni kell látni a mozgást.
            */

            await wait(820);


            /*
                7.
                A pecsét szétesése után
                a kezdőképernyő finoman eltűnik.
            */

            openingScreen.classList.add(
                "opening"
            );

            await wait(720);


            /*
                8.
                A fő meghívó megjelenik.
            */

            openingScreen.style.display =
                "none";

            showInvitation();

        }
    );

}


/* ==================================================
   SEGÉDFÜGGVÉNY ANIMÁCIÓS IDŐZÍTÉSHEZ
================================================== */

function wait(milliseconds) {

    return new Promise((resolve) => {

        window.setTimeout(
            resolve,
            milliseconds
        );

    });

}


/* Információk gombok */

informationButtons.forEach((button) => {
    button.addEventListener("click", showInformation);
});


/* Program gombok */

programButtons.forEach((button) => {
    button.addEventListener("click", showProgram);
});

/* Vissza a meghívóhoz gombok */

backButtons.forEach((button) => {
    button.addEventListener("click", showInvitation);
});


/* ==================================================
   INFORMÁCIÓS KÁRTYÁK – TÖBB IS NYITVA MARADHAT
================================================== */

const infoItems =
    document.querySelectorAll(".info-item");

infoItems.forEach((item) => {

    const summary =
        item.querySelector(".info-summary");

    const panel =
        item.querySelector(".info-panel");

    if (!summary || !panel) {
        return;
    }

const isDressCode =
    item.classList.contains("dress-code-item");

if (isDressCode) {
    item.classList.add("is-open");
} else {
    item.classList.remove("is-open");
}
    summary.setAttribute(
        "role",
        "button"
    );

    summary.setAttribute(
        "tabindex",
        "0"
    );

    summary.setAttribute(
        "aria-expanded",
        isDressCode ? "true" : "false"
    );


    function toggleInfoItem() {

        const isOpen =
            item.classList.contains("is-open");

        if (isOpen) {

            item.classList.remove("is-open");

            summary.setAttribute(
                "aria-expanded",
                "false"
            );

        } else {

            item.classList.add("is-open");

            summary.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    }


    summary.addEventListener(
        "click",
        toggleInfoItem
    );


    summary.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                toggleInfoItem();

            }

        }
    );

});
