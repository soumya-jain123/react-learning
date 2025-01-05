function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);

    if (reactElement.children) {
        domElement.innerHTML = reactElement.children;
    }
    if (reactElement.props.href) {
        domElement.setAttribute('href', reactElement.props.href);
    }
    if (reactElement.props.target) {
        domElement.setAttribute('target', reactElement.props.target);
    }
    
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank'
    },
    children: 'Click here to visit Google' 
};

const mainContainer = document.querySelector("#root"); 
customRender(reactElement, mainContainer);
