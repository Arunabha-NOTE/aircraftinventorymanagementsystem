const ANIM_STATES = {
    open: {
        height: '0%',
        transition: {
            duration: 0.5, // Adjust the duration as needed
            ease: 'easeIn', // Use an easing function that accelerates towards the end
        },
    },
    int: {
        height: '100%',
        transition: {
            duration: 0.3,
            ease: 'easeOut', // You can adjust the easing function for the intermediate state if needed
        },
    },
    close: {
        height: '100%',
        transition: {
            duration: 0.5,
            ease: 'easeIn', // Use an easing function that accelerates towards the end
        },
    },
};

export default ANIM_STATES;