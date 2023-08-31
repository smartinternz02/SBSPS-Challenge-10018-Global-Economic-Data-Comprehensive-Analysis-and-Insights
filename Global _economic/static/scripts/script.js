const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content, .home-tab-content');

tabLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetTab = link.getAttribute('data-tab');
    
    // remove the "active" class from all links
    tabLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    // add the "active" class to the clicked link
    link.classList.add('active');
    
    tabContents.forEach(content => {
      content.classList.add('hidden');
    });

    const selectedContent = document.getElementById(targetTab);
    selectedContent.classList.remove('hidden');
  });
});
