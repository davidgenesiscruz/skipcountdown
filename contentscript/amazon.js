MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

const nextUpObserver = new MutationObserver((mutations) => {
    const firstNewNode = mutations[0].addedNodes[0];
    if (!firstNewNode) {
        return;
    }

    const countdown = firstNewNode.querySelector('.countdown');
    if (countdown) {
        countdown.click();
        return;
    }
});

const apageObserver = new MutationObserver((mutations, observer) => {
    mutations.forEach(mutation => {
        const newNodes = mutation.addedNodes;
        if (newNodes.length == 0) {
            return;
        }

        Array.from(newNodes)
            .filter(node => node instanceof Element)
            .forEach(node => {
                const nextUp = node.querySelector('.nextUp');
                if (nextUp) {
                    nextUpObserver.observe(nextUp, { childList: true });
                    observer.disconnect();
                }
            });
    });
});

const apage = document.querySelector('#a-page');
if (apage) {
    apageObserver.observe(apage, { childList: true, subtree: true });
}

