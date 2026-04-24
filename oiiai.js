javascript:
function run() {
    const items = [
        "https://media.tenor.com/sbfBfp3FeY8AAAAj/oia-uia.gif",
        "https://media.tenor.com/Jojpr9QgMLoAAAAM/maxwell-maxwell-spin.gif",
        "https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyZGdlNzJnNDgyd3Bxd2YxbzZ5YmxlcXk2eGw3bjhreHRueTg1OXdsZyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/2Tx2smt0cqbCUhmKBQ/source.gif",
        "https://usagif.com/wp-content/uploads/gify/chipi-chipi-chapa-chapa-cat-hd-version-full.gif",
        "https://media.tenor.com/4wKwMtHSDr0AAAAM/music-listening-to-music.gif"
        ];
    const elements = document.getElementsByTagName("img");
    for (let i = 0; i < elements.length; i++) {
        let value = elements[i];
        setTimeout(() => {
    if (value instanceof HTMLImageElement) {
        let src = Math.floor(Math.random() * items.length);
        let src2 = items[src];
        value.src = src2;
    }
    }, i * 50);
    }
}
run()
