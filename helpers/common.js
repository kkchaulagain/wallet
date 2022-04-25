const mobilePrefix = {
    "984": "ntc",
    "985": "postpaid",
    "986": "ntc",
    "980": "ncell",
    "981": "ncell",
    "982": "ncell",
    "961": "smartcell",
    "962": "smartcell",
    "988": "smartcell",
}

const findServiceByNumber = (number) => {
    //get the first 3 digits of the number
    const firstThreeDigits = number.substring(0, 3);
    //find the service
    const serviceConfig = mobilePrefix[firstThreeDigits];
    //return the service
    return serviceConfig;


}

module.exports = {
    findServiceByNumber
}