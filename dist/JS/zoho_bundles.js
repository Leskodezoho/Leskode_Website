// Zoho Bundles Animation Sequence
document.addEventListener('DOMContentLoaded', function () {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    const animationContainer = document.getElementById('animationContainer');
    const centerLogo = document.getElementById('centerLogo');
    const circlingBundles = document.getElementById('circlingBundles');
    const finalState = document.getElementById('finalState');

    // Dynamic bundle positioning - auto-space based on number of bundles
    const bundleIcons = document.querySelectorAll('.bundle-icon');
    const totalBundles = bundleIcons.length;
    const angleStep = 360 / totalBundles; // Equal spacing

    console.log(`Total bundles: ${totalBundles}, Angle step: ${angleStep}°`);

    // Apply dynamic positioning to each bundle
    bundleIcons.forEach((bundle, index) => {
        const angle = index * 58;
        bundle.style.setProperty('--start-angle', `${angle}deg`);
        bundle.style.setProperty('--end-angle', `${angle + 360}deg`);
        console.log(`Bundle ${index}: Start angle = ${angle}°, End angle = ${angle + 360}°`);
    });

    // Animation sequence timing
    setTimeout(() => {
        // Step 1: Logo appears (already animated via CSS)
        console.log('Logo appeared');
    }, 0);

    setTimeout(() => {
        // Step 2: Bundles start circling (already animated via CSS)
        console.log('Bundles circling');
    }, 1000);

    setTimeout(() => {
        // Step 3: After circling for 4 seconds, move logo to top and blur other elements
        centerLogo.classList.add('move-to-top');
        circlingBundles.classList.add('blur-bundles');
        console.log('Logo moving to top, blurring bundles');
    }, 3000);

    setTimeout(() => {
        // Step 4: Hide animation container and show final state
        animationContainer.classList.add('hidden');
        finalState.classList.add('visible');
        console.log('Showing final state with cards');
    }, 5000);
});
