window.onload = function () {
    const arrLinks = document.querySelectorAll('.menu__link');
    const ScrollToBottomBtn = document.querySelector('.scroll-button');

    ScrollToBottomBtn.addEventListener('click', function () {

        scrollMenu(this.getAttribute('href'));
    })

    for (let i = 0; i < arrLinks.length; i++) {

        arrLinks[i].addEventListener('click', function () {

            scrollMenu(this.getAttribute('href'));
        })

    }
};


// scroll function
function scrollMenu(blockId) {
    let temp, start, from, to;
    //scroll animation
    cancelAnimationFrame(temp);
    start = performance.now();
    from = window.pageYOffset || document.documentElement.scrollTop;
    to = document.querySelector(blockId).getBoundingClientRect().top - 33;
    if (blockId === "#lab") {
        duration = 1000 * Math.abs(to) / 1000;
    } else
        duration = 1000 * Math.abs(to) / 4000;

    // scroll
    requestAnimationFrame(function step(timestamp, e) {
        var progress = (timestamp - start) / duration;
        1 <= progress && (progress = 1);
        window.scrollTo(0, from + to * progress | 0);
        (1 > progress) ? temp = requestAnimationFrame(step) : (document.location.hash = blockId);
        document.addEventListener("wheel", function () {
            cancelAnimationFrame(temp);
        })
    })
}