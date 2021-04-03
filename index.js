// Create a class for the element
class InputGroup extends HTMLParagraphElement {
    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Create spans
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'div');

        const button = document.createElement('button');
        button.innerText = 'Click Me!';

        const input = document.createElement('input');

        // Create some CSS to apply to the shadow dom
        const style = document.createElement('style');
        console.log(style.isConnected);

        style.textContent = `
        .wrapper {
          position: relative;
        }
        .info {
          font-size: 0.8rem;
          width: 200px;
          display: inline-block;
          border: 1px solid black;
          padding: 10px;
          background: white;
          border-radius: 10px;
          opacity: 0;
          transition: 0.6s all;
          position: absolute;
          bottom: 20px;
          left: 10px;
          z-index: 3;
        }
        img {
          width: 1.2rem;
        }
        .icon:hover + .info, .icon:focus + .info {
          opacity: 1;
        }
      `;

        // Attach the created elements to the shadow dom
        shadow.appendChild(style);
        console.log(style.isConnected);
        shadow.appendChild(wrapper);
        wrapper.appendChild(button);
        wrapper.appendChild(input);

        button.addEventListener('click', e => {
            // Don't toggle the drawer if it's disabled.
            if (input.disabled)
                input.disabled = false;
            else
                input.disabled = true;
        });
    }
}

// Define the new element
customElements.define('input-group', InputGroup, { extends: 'p' });