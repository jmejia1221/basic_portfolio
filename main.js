if (document.readyState == 'loading') {
    document.addEventListener("DOMContentLoaded", load);
} else {
    load();
}

function load() {
    var openBtns = document.querySelectorAll('.portfolio-button');
    openBtns.forEach(function(btn) {
        btn.onclick = function(e) {
            e.preventDefault();
            var modal = btn.dataset.modal;
            document.getElementById(modal).style.display = 'block';
        }
    })

    var closeBtns = document.querySelectorAll('.close-modal');
    closeBtns.forEach(function(btn) {
        btn.onclick = function(e) {
            e.preventDefault();
            var modal = btn.closest('.modal');
            modal.style.display = 'none';
        }
    })

    window.onclick = function(e) {
        if (e.target.className === 'modal') {
            event.target.style.display = 'none';
        }
    }
}