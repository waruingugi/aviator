
window.onload = function() {
    // Delay the modal pop-up by 10 seconds (10000 milliseconds)
    setTimeout(function() {
      const myModal = new bootstrap.Modal('#opt-in-modal');
      myModal.show();
    }, 10000);
  };