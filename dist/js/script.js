// start: Navbar
(function() {
    const navbar = document.querySelector('.navbar');
    document.querySelectorAll('[data-toggle="navbar"]').forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            navbar.classList.toggle('navbar-active')
        })
    })
    document.querySelectorAll('[data-toggle="navbar-item-dropdown"]').forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            toggle.parentElement.classList.toggle('active')
        })
    })
})();
// end: Navbar



// start: Service
(function() {
    document.querySelectorAll('[data-service-for]').forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector('[data-service-value="'+toggle.dataset.serviceFor+'"]')
            document.querySelectorAll('[data-service-for]').forEach(function(i) {
                i.classList.remove('active')
            })
            document.querySelectorAll('[data-service-value]').forEach(function(i) {
                i.classList.remove('active')
            })
            toggle.classList.add('active')
            target.classList.add('active')
        })
    })
})();
// end: Service