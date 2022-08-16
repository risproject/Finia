        const save = document.querySelector('#save');
        let tema = localStorage.getItem('tema');

        if(!tema){
            localStorage.setItem('tema', 'light');
        }

        const darkMode = () => {
            document.body.classList.add('dark-mode');
            toggle.innerHTML = 'light mode';
            localStorage.setItem('tema', 'dark');
        }
        const lightMode = () => {
            document.body.classList.remove('dark-mode');
            toggle.innerHTML = 'light mode';
            localStorage.setItem('tema', 'light');
        }

        if(tema === 'dark'){
            darkMode();
        }

        save.addEventListener('click', function() {
            tema = localStorage.getItem('tema');
            if(tema === 'light') {
                darkMode();
            } else {
                lightMode();
            }

            e.preventDefault();
        });