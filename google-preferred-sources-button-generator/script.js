document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const websiteUrlInput = document.getElementById('website-url');
    const lightThemeRadio = document.getElementById('light-theme');
    const darkThemeRadio = document.getElementById('dark-theme');
    const previewContainer = document.getElementById('preview-container');
    const embedCodeTextarea = document.getElementById('embed-code');

    // Customization elements
    const fontFamilySelect = document.getElementById('font-family');
    const fontBoldCheckbox = document.getElementById('font-bold');
    const fontItalicCheckbox = document.getElementById('font-italic');
    const sizeSlider = document.getElementById('size-slider');

    const googleLogoSvg = `
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            <path d="M1 1h22v22H1z" fill="none"/>
        </svg>
    `;

    function generateBadge() {
        const url = websiteUrlInput.value;
        if (!url) {
            alert('Please enter a website URL.');
            return;
        }

        let domain;
        try {
            domain = new URL(url).origin;
        } catch (error) {
            alert('Please enter a valid URL.');
            return;
        }

        const googlePrefUrl = `https://www.google.com/preferences/source?q=${domain}`;
        const theme = lightThemeRadio.checked ? 'light' : 'dark';
        const scale = sizeSlider.value;
        const fontFamily = fontFamilySelect.value;
        const isBold = fontBoldCheckbox.checked;
        const isItalic = fontItalicCheckbox.checked;

        const colors = {
            light: { bg: '#FFFFFF', text: '#000000' },
            dark: { bg: '#000000', text: '#FFFFFF' }
        };
        const currentColors = colors[theme];

        const width = 270 * scale;
        const height = 70 * scale;
        const logoScale = 1.5 * scale;
        const fontSize = 18 * scale;

        const svg = `
            <svg loading="lazy" decoding="async" fetchpriority="low" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="${width}" height="${height}" rx="${12 * scale}" ry="${12 * scale}" fill="${currentColors.bg}" stroke="${theme === 'light' ? '#E0E0E0' : '#333'}" stroke-width="1"/>
                <g transform="translate(${15 * scale}, ${17 * scale}) scale(${logoScale})">
                    ${googleLogoSvg}
                </g>
                <g style="font-family: ${fontFamily}; font-size: ${fontSize}px; font-weight: ${isBold ? 'bold' : 'normal'}; font-style: ${isItalic ? 'italic' : 'normal'}; fill: ${currentColors.text};">
                    <text x="${65 * scale}" y="${32 * scale}">Add as a preferred</text>
                    <text x="${65 * scale}" y="${54 * scale}">source on Google</text>
                </g>
            </svg>
        `;

        const embedCode = `<a href="${googlePrefUrl}" target="_blank" rel="noopener noreferrer">${svg.trim()}</a>`;

        previewContainer.innerHTML = embedCode;
        embedCodeTextarea.value = embedCode;
    }

    generateBtn.addEventListener('click', generateBadge);
    lightThemeRadio.addEventListener('change', generateBadge);
    darkThemeRadio.addEventListener('change', generateBadge);
    fontFamilySelect.addEventListener('change', generateBadge);
    fontBoldCheckbox.addEventListener('change', generateBadge);
    fontItalicCheckbox.addEventListener('change', generateBadge);
    sizeSlider.addEventListener('input', generateBadge);

    // Initial generation on load if there's a value
    if (websiteUrlInput.value) {
        generateBadge();
    }
});