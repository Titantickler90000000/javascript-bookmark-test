javascript:
function run() {
    const elements = document.getElementsByTagName("*");
    for (i = 0; i < elements.length; i++) {
        let value = elements[i];
    if (value instanceof HTMLImageElement) {
        value.src = "https://media.tenor.com/sbfBfp3FeY8AAAAj/oia-uia.gif"
    }
}
}
run()
