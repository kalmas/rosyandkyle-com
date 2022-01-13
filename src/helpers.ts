const ourNames = () => {
    if (Math.random() < 0.5) {
        return "Kyle and Rosy";
    } else {
        return "Rosy and Kyle";
    }
};

const ourInitials = () => {
    if (Math.random() < 0.5) {
        return "K + R";
    } else {
        return "R + K";
    }
};
const helpers = {
    ourNames,
    ourInitials
}

export default helpers;