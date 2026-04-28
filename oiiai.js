javascript:
function run() {
    const items = [
        "https://media.tenor.com/1a6RFI10-oYAAAAM/butter-dog.gif",
        "https://media.tenor.com/nISJ36XP3wQAAAAM/butta-dawg.gif",
        "https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyNWtjNDNib2Rma3Jxb2VjcWU4eWZ6OWNodm1kMDNjaHBnbGU5Z3J0ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Dg4TxjYikCpiGd7tYs/giphy.gif",
        "https://media.tenor.com/TE-4ME76MXsAAAAj/maxwell-the-cat.gif",
        ];
    const elements = document.getElementsByTagName("img");
    for (let i = 0; i < elements.length; i++) {
        let value = elements[i];
    if (value instanceof HTMLImageElement) {
        let src = Math.floor(Math.random() * items.length);
        let src2 = items[src];
        if (!items.includes(value.src)) {
        value.src = src2;
        }
    }
    }
}
run();
setInterval(run, 1000);
