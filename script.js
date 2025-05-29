function isElementVisible(el) {
    if (!el) {
        return false;
    }
    return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}

function findModalWrapper(buttonEl) {
    let current = buttonEl;
    while (current && current !== document.body) {
        if (
            current.matches('.modal') ||
            current.className?.toLowerCase().includes('modal')
        ) {
            return current;
        }
        current = current.parentElement;
    }
    return null;
}

function handleTimeoutPopup(mutations) {
    try {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (!(node instanceof HTMLElement)) { 
                    continue;
                }
                const button = node.id === 'modalSubmitBtn'
                    ? node
                    : node.querySelector?.('#modalSubmitBtn');
                if (button) {
                    const modal = findModalWrapper(button);
                    if (modal && isElementVisible(modal)) {
                        button.click();
                        console.log("Ok button clicked at " + new Date().toLocaleString());
                        return;
                    }
                }
            }
        }
    } catch (error) {
        console.error("Error in O'Reilly Auto Clicker:", error);
    }
}

try {
    const observer = new MutationObserver(handleTimeoutPopup);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    console.log("O'Reilly Auto Clicker extension is running!");
} catch (error) {
    console.error("Failed to initialize O'Reilly Auto Clicker:", error);
}
