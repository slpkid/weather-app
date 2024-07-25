function deleteChildren(parentDOMElement) {
    while (parentDOMElement.firstChild) {
        parentDOMElement.removeChild(parentDOMElement.firstChild)
    }
    return
}

export { deleteChildren }