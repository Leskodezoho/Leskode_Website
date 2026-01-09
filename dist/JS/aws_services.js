// AWS Services Animation Sequence
document.addEventListener('DOMContentLoaded', function () {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    const animationContainer = document.getElementById('animationContainer');
    const centerLogo = document.getElementById('centerLogo');
    const circlingServices = document.getElementById('circlingServices');
    const finalState = document.getElementById('finalState');

    // Dynamic service positioning - auto-space based on number of services
    const serviceIcons = document.querySelectorAll('.service-icon');
    const totalServices = serviceIcons.length;
    const angleStep = 360 / totalServices; // Equal spacing

    console.log(`Total services: ${totalServices}, Angle step: ${angleStep}°`);

    // Apply dynamic positioning to each service
    serviceIcons.forEach((service, index) => {
        const angle = index * angleStep;
        service.style.setProperty('--start-angle', `${angle}deg`);
        service.style.setProperty('--end-angle', `${angle + 360}deg`);
        console.log(`Service ${index}: Start angle = ${angle}°, End angle = ${angle + 360}°`);
    });

    // Animation sequence timing
    setTimeout(() => {
        // Step 1: Logo appears (already animated via CSS)
        console.log('Logo appeared');
    }, 0);

    setTimeout(() => {
        // Step 2: Services start circling (already animated via CSS)
        console.log('Services circling');
    }, 1000);

    setTimeout(() => {
        // Step 3: After circling for 4 seconds, move logo to top and blur other elements
        centerLogo.classList.add('move-to-top');
        circlingServices.classList.add('blur-services');
        console.log('Logo moving to top, blurring services');
    }, 3000);

    setTimeout(() => {
        // Step 4: Hide animation container and show final state
        animationContainer.classList.add('hidden');
        finalState.classList.add('visible');
        console.log('Showing final state with cards');
    }, 5000);
});
