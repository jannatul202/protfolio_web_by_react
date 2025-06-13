// common animations variants
export const fadeInUp = {
    initial: {
        y: 20,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    }
}

export const fadeIn = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    }
}

export const transitions ={
    default: {
        duration: 0.5
    },
    delayed: {
        duration: 0.5,
        delay: 0.3
    },
    slow: {
        duration: 0.8
    }
}

// name tag animation
export const fadeUpDown = {
    initial: {
        x: -20,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: [0, -10, 0, 10, 0],
    },
    transition: {
        x: {duration: 0.5, delay: 0.3},
        y : {duration: 2, repeat: Infinity, ease: "easeInOut"}
    }
}

//up down constanly
export const floatingNameTagAnimation = {
    initial: {
        x: -20,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: [0, -10, 0, 10, 0]
    },
    transition: {
        y: { 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
        },
        rotate: { duration: 0.5 }
    }
}


//up down constanly
export const fbgAnimation = {
    initial: {
        x: -20,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: [0, 10, 0, -10, 10],
    },
    transition: {
        y: { 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatType: "reverse"
        },
    }
}


// button animation

export const buttonHover = {
    whileHover: {scale: 1.05},
    whileTap: {scale: 0.95}
}

// partners logo animation