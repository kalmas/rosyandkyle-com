const ourNames = () => {
    if (Math.random() < 0.5) {
        return "Kyle and Rosy";
    } else {
        return "Rosy and Kyle";
    }
};

const helpers = {
    ourNames
}

export default helpers;