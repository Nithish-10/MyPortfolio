function toggleMode() {
    const body = document.body;
    const modeToggle = document.getElementById('mode-toggle');
    
    // Toggle the body class between dark-mode and light-mode
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    // Toggle the moon and sun icons inside the mode toggle button
    const moonIcon = modeToggle.querySelector('.bi-moon');
    const sunIcon = modeToggle.querySelector('.bi-sun');
    moonIcon.classList.toggle('hidden');
    sunIcon.classList.toggle('hidden');
}



function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

/*function toggleMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode'); // Toggle dark mode class on the body element
}
*/