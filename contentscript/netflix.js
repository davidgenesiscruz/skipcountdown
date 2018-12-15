MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

const mountPointObserver = new MutationObserver((mutations) => {
    Array.from(mutations).find((mutation) => {
        const found = Array.from(mutation.addedNodes).find((node) => {
            const button = node.querySelector('.PlayIcon');
            if (button) {
                button.click();
            }

            return button != null;
        });

        return found != undefined;
    });
});

const mountPoint = document.querySelector('#appMountPoint');
 if (mountPoint) {
    mountPointObserver.observe(mountPoint, { childList: true, subtree: true });
}
