var loadLine = new TimelineLite;

loadLine.to("#load-slide", 1.5,
    {
        width: "100%",
        easing: Power4.easing
    }, 0);
loadLine.to("#load-slide", 1.5,
    {
        right: '0',
        display: 'none',
        width: "0%",
    }, 1.5);
loadLine.to("#load-slide-title", 3,
    {
        display: 'none',
    }, 0);

loadLine.fromTo("#main-body", 1, {
        opacity: 0,
        display: "none"
    },
    {
        opacity: 1,
        display: "block"
    });
loadLine.add("slide");

loadLine.fromTo('.nav_link', 1, {display: "none"}, {rotation: 360, transformOrigin: "left top", display: "block"})

loadLine.from('.slide-up', 1, {autoAlpha: 0, y: 100}, "slide");
loadLine.from('.slide-right', 1, {autoAlpha: 0, x: 100}, "slide");
loadLine.from('.nav_line', 1, {height: 0}, "slide");
loadLine.staggerFrom(".menu_point_button", 0.5, {autoAlpha: 0, x: 100}, 0.1, "slide");
