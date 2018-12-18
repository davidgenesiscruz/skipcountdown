MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

const mountPointObserver = new MutationObserver((mutations) => {
    Array.from(mutations).find((mutation) => {
        const found = Array.from(mutation.addedNodes)
            .filter((node) => node instanceof Element)
            .find((node) => {
                const playIcon = node.querySelector('.PlayIcon');
                const nextLink = node.querySelector('[data-uia="next-episode-seamless-button"]');

                if (playIcon || nextLink) {
                    const button = playIcon || nextLink;
                    button.click();
                    return true;
                }
            });

        return found != undefined;
    });
});

const mountPoint = document.querySelector('#appMountPoint');
 if (mountPoint) {
    mountPointObserver.observe(mountPoint, { childList: true, subtree: true });
}

