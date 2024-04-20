const ANIM_STATES = {
    open: {
        opacity: 0,
    },
    close: {
        width: ['0%', '100%'],
        x: ['0%', '70%'],
        opacity: [1, 0],
        transition: {
            duration: 1,
            type: 'easeInOut',
        },
    },
};

export default ANIM_STATES;