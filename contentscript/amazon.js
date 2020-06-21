MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

const webPlayerObserver = new MutationObserver((mutations, observer) => {
    mutations.forEach(mutation => {
        const newNodes = mutation.addedNodes;
        if (newNodes.length == 0) {
            return;
        }

        const nextUp = Array.from(newNodes)
            .filter(node => node instanceof Element)
            .forEach(node => {
                const allDivs = Array.from(node.querySelectorAll('div'));
                const nextUp =  allDivs.find(node => node.textContent == 'Next Up');
                const skip = allDivs.find(node => node.textContent == 'Skip');
                if (!nextUp && !skip) {
                    return;
                }

                if (nextUp) {
                    nextUp.parentElement.nextElementSibling.click();
                }
                if (skip) {
                    skip.click();
                }
                observer.disconnect();
            });
    });
});

const webPlayer = document.querySelector('#dv-web-player');
if (webPlayer) {
    webPlayerObserver.observe(webPlayer, { childList: true, subtree: true });
}

