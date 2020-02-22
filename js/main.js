(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const flippers = document.querySelectorAll('.flip-container');

    [...flippers].forEach(el => {
      el.addEventListener('click', e => {
        // [...flippers].forEach(el => {
        //   el.classList.remove('flipped');
        // });
        e.target.closest('.flip-container').classList.toggle('flipped');
      });
    })
  });
})();
