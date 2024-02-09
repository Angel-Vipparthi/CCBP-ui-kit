let sections = document.querySelectorAll('[id^="section"]');
let sectionWithClass = [];

if (sections.length > 1) {
    let sectionOne = sections[0];
    sections.forEach((section) => {
        if ($(section).hasClass('d-flex')) {
            sectionWithClass.push(section.id);
        }
        if (section != sectionOne) {
            $(section).addClass("d-none").removeClass("d-flex");
        }
    });
}

const display = (sectionId) => {
    makeRemainingScreensInvisible(sectionId);
    let section = document.getElementById(sectionId);
    if (sectionWithClass.includes(sectionId)) {
        $(section).addClass('d-flex');
    }
    $(section).removeClass("d-none");
    window.scrollTo(0, 0);
};

const makeRemainingScreensInvisible = (sectionId) => {
    let sections = document.querySelectorAll('[id^="section"]');
    sections.forEach((section) => {
        let $section = $(section);
        if ($section.attr("id") != sectionId) {
            $section.addClass("d-none").removeClass("d-flex");
        }
    });
};
