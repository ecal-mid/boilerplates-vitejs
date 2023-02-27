

export class TextInput {
    constructor(options) {

        const defaults = {
            type: 'text',
            placeholder: 'Enter text',
            parent: document.body,
            buttonText: 'Submit',
        }

        Object.assign(this, defaults, options);

        this.elem = document.createElement('form');

        this.elem.innerHTML = /*html*/`
        <fieldset class="textInput__field">
            <legend>Text Input</legend>
            <input name="textInput" type="${this.type}" placeholder="${this.placeholder}">
            <button class="textInput__btn" type="submit">${this.buttonText}</button>
        </fieldset>
        `

        this.elem.addEventListener('submit', async (e) => {
            e.preventDefault();
            const form = new FormData(this.elem);
            this.loading(true);
            await this.onSubmit(form.get('textInput'));
            this.loading(false);
        });

        this.elem.classList.add('textInput');
        this.parent.appendChild(this.elem)
    }

    destroy() {
        return this.input;
    }

    // callbacks
    onSubmit() { }

    loading(isLoading) {
        const fieldElem = this.elem.querySelector('.textInput__field')
        const fieldBtn = this.elem.querySelector('.textInput__btn')
        fieldElem.disabled = isLoading;
        fieldBtn.textContent = isLoading ? 'Loading...' : this.buttonText;
    }
}