const ANIM_STATE_SECTION = {
    initial: {
        opacity: 0,
        y: 50,
    },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
        },
    }
}

export default ANIM_STATE_SECTION;