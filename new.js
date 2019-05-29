anime.timeline({loop: true})
.add({
  targets: '.ml15 .word',
  scale: [14,1],
  opacity: [0,1],
  easing: "easeOutCirc",
  duration: 800,
  delay: function(el, i) {
    return 800 * i;
  }
}).add({
  targets: '.ml15',
  opacity: 0,
  duration: 30000,
  easing: "easeOutExpo",
  delay: 10000
});