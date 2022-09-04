const buttonElement = document.getElementById('button');

if (buttonElement) {
    const buttonLabel = document.getElementById('button-label');
    buttonLabel.addEventListener('input', (event) => buttonElement.innerText = event.target.value);

    const buttonBgColor = document.getElementById('button-bg-color');
    buttonBgColor.addEventListener('input', (event) => {
        buttonElement.style.backgroundColor = event.target.value;
        exportRules();
    });

    const buttonFontColor = document.getElementById('button-font-color');
    buttonFontColor.addEventListener('input', (event) => {
        buttonElement.style.color = event.target.value;
        exportRules();
    });

    const buttonFontSize = document.getElementById('button-font-size');
    buttonFontSize.addEventListener('input', (event) => {
        buttonElement.style.fontSize = `${event.target.value}px`;
        exportRules();
    });

    const buttonPadding = document.getElementById('button-padding');
    buttonPadding.addEventListener('input', (event) => {
        const value = event.target.value;
        buttonElement.style.padding = `${value}px`;
        buttonPaddingTop.value = value;
        buttonPaddingRight.value = value;
        buttonPaddingBottom.value = value;
        buttonPaddingLeft.value = value;

        exportRules();
    });

    const buttonPaddingTop = document.getElementById('button-padding-top');
    buttonPaddingTop.addEventListener('input', (event) => {
        buttonElement.style.paddingTop = `${event.target.value}px`;
        exportRules();
    });

    const buttonPaddingRight = document.getElementById('button-padding-right');
    buttonPaddingRight.addEventListener('input', (event) => {
        buttonElement.style.paddingRight = `${event.target.value}px`;
        exportRules();
    });

    const buttonPaddingBottom = document.getElementById('button-padding-bottom');
    buttonPaddingBottom.addEventListener('input', (event) => {
        buttonElement.style.paddingBottom = `${event.target.value}px`;
        exportRules();
    });

    const buttonPaddingLeft = document.getElementById('button-padding-left');
    buttonPaddingLeft.addEventListener('input', (event) => {
        buttonElement.style.paddingLeft = `${event.target.value}px`;
        exportRules();
    });

    const buttonBorderRadius = document.getElementById('button-border-radius');
    buttonBorderRadius.addEventListener('input', (event) => {
        buttonElement.style.borderRadius = `${event.target.value}px`;
        exportRules();
    });

    const buttonBorderColor = document.getElementById('button-border-color');
    buttonBorderColor.addEventListener('input', (event) => {
        buttonElement.style.borderColor = event.target.value;
        exportRules();
    });

    const buttonBorderWidth = document.getElementById('button-border-width');
    buttonBorderWidth.addEventListener('input', (event) => {
        buttonElement.style.borderWidth = `${event.target.value}px`;
        exportRules();
    });

    const buttonBorderStyle = document.getElementById('button-border-style');
    buttonBorderStyle.addEventListener('input', (event) => {
        buttonElement.style.borderStyle = event.target.value;
        exportRules();
    });

    document.addEventListener('DOMContentLoaded', () => {
        buttonElement.innerText = buttonLabel.value;
        buttonElement.style.backgroundColor = buttonBgColor.value;
        buttonElement.style.color = buttonFontColor.value;
        buttonElement.style.fontSize = `${buttonFontSize.value}px`;
        buttonElement.style.paddingTop = `${buttonPaddingTop.value}px`;
        buttonElement.style.paddingRight = `${buttonPaddingRight.value}px`;
        buttonElement.style.paddingBottom = `${buttonPaddingBottom.value}px`;
        buttonElement.style.paddingLeft = `${buttonPaddingLeft.value}px`;
        buttonElement.style.borderRadius = `${buttonBorderRadius.value}px`;
        buttonElement.style.borderColor = buttonBorderColor.value;
        buttonElement.style.borderWidth = `${buttonBorderWidth.value}px`;
        buttonElement.style.borderStyle = buttonBorderStyle.value;
    });

    const exportRulesEl = document.getElementById('rules-code');
    const exportRules = () => {
        const extraSpaces = '\u00A0\u00A0\u00A0\u00A0';
        exportRulesEl.innerText = `#button {
            ${extraSpaces}background-color: ${buttonBgColor.value};
            ${extraSpaces}color: ${buttonFontColor.value};
            ${extraSpaces}font-size: ${buttonFontSize.value}px;
            ${extraSpaces}padding: ${buttonPaddingTop.value}px ${buttonPaddingRight.value}px ${buttonPaddingBottom.value}px ${buttonPaddingLeft.value}px;
            ${extraSpaces}border: ${buttonBorderWidth.value}px ${buttonBorderStyle.value} ${buttonBorderColor.value};
            ${extraSpaces}border-radius: ${buttonBorderRadius.value}px;
        }`;
    };

    exportRules();

    const copyRulesBtn = document.getElementById('copy-rules');
    const copyRulesPopup = document.getElementById('copy-successful-popup');
    copyRulesBtn.addEventListener('click', () => {
        const range = document.createRange();
        range.selectNode(exportRulesEl);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        copyRulesPopup.style.display = "block";

        setTimeout(() => copyRulesPopup.style.display = "none", 2000);
    });

    const paddingCollapseBtn = document.getElementById('padding-individual-controls');
    const paddingCollapseEl = document.getElementById('padding-collapse-group');
    paddingCollapseBtn.addEventListener('click', () => paddingCollapseEl.style.display = window.getComputedStyle(paddingCollapseEl).getPropertyValue('display') === 'grid'
        ? 'none'
        : 'grid');
}
