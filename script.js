function lobitus() {
    const redationIframe = document.querySelector('iframe');

    if (redationIframe) {
        location.href = redationIframe.src;
    }

    const floatingButton = document.createElement('div');
    floatingButton.style.position = 'fixed';
    floatingButton.style.top = '20px';
    floatingButton.style.right = '20px';
    floatingButton.style.width = '60px';
    floatingButton.style.height = '60px';
    floatingButton.style.borderRadius = '50%';
    floatingButton.style.background = 'linear-gradient(135deg, #007bff, #00c6ff)';
    floatingButton.style.display = 'flex';
    floatingButton.style.alignItems = 'center';
    floatingButton.style.justifyContent = 'center';
    floatingButton.style.cursor = 'pointer';
    floatingButton.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    floatingButton.style.transition = 'background 0.3s ease, transform 0.3s ease';

    const img = document.createElement('img');
    img.src = 'data:image/png;base64,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';
    img.style.width = '40px';
    img.style.height = '40px';
    img.style.borderRadius = '50%'; 
    img.style.objectFit = 'cover'; 
    floatingButton.appendChild(img);

    document.body.appendChild(floatingButton);

    const createMenu = () => {
        const menu = document.createElement('div');
        menu.style.position = 'fixed';
        menu.style.top = '80px';
        menu.style.right = '20px';
        menu.style.width = '320px';
        menu.style.backgroundColor = '#ffffff';
        menu.style.padding = '20px';
        menu.style.borderRadius = '15px';
        menu.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        menu.style.display = 'none';
        menu.style.zIndex = '1000';
        menu.style.transition = 'all 0.3s ease';
        menu.style.transform = 'translateY(-20px)';
        menu.style.opacity = '0';

        setTimeout(() => {
            menu.style.transform = 'translateY(0)';
            menu.style.opacity = '1';
        }, 100);

        const title = document.createElement('h2');
        title.innerText = 'RedaçãoLobitus';
        title.style.marginBottom = '20px';
        title.style.fontSize = '20px';
        title.style.color = '#007bff';
        title.style.textAlign = 'center';
        menu.appendChild(title);

        const textLabel = document.createElement('label');
        textLabel.innerText = 'Texto a ser digitado:';
        textLabel.style.fontWeight = 'bold';
        textLabel.style.color = '#333';
        textLabel.style.marginBottom = '8px';
        menu.appendChild(textLabel);

        const textInput = document.createElement('textarea');
        textInput.style.width = '100%';
        textInput.style.height = '120px';
        textInput.style.padding = '12px';
        textInput.style.border = '1px solid #ccc';
        textInput.style.borderRadius = '8px';
        textInput.style.fontSize = '14px';
        textInput.style.color = '#333';
        textInput.style.transition = 'all 0.3s ease';
        textInput.style.boxSizing = 'border-box';
        textInput.style.resize = 'none';
        textInput.style.background = '#f9f9f9';
        textInput.style.outline = 'none';
        textInput.addEventListener('focus', () => {
            textInput.style.borderColor = '#007bff';
            textInput.style.background = '#f1f9ff';
        });
        textInput.addEventListener('blur', () => {
            textInput.style.borderColor = '#ccc';
            textInput.style.background = '#f9f9f9';
        });
        menu.appendChild(textInput);

        const speedLabel = document.createElement('label');
        speedLabel.innerText = 'Velocidade (segundos por caractere):';
        speedLabel.style.fontWeight = 'bold';
        speedLabel.style.color = '#333';
        speedLabel.style.marginTop = '20px';
        speedLabel.style.marginBottom = '8px';
        menu.appendChild(speedLabel);

        const speedInput = document.createElement('input');
        speedInput.type = 'number';
        speedInput.value = 0.01;
        speedInput.step = 0.01;
        speedInput.min = 0.01;
        speedInput.style.width = '100%';
        speedInput.style.padding = '10px';
        speedInput.style.border = '1px solid #ccc';
        speedInput.style.borderRadius = '8px';
        speedInput.style.fontSize = '14px';
        speedInput.style.color = '#333';
        speedInput.style.transition = 'all 0.3s ease';
        speedInput.style.boxSizing = 'border-box';
        speedInput.style.background = '#f9f9f9';
        speedInput.style.outline = 'none';
        speedInput.addEventListener('focus', () => {
            speedInput.style.borderColor = '#007bff';
            speedInput.style.background = '#f1f9ff';
        });
        speedInput.addEventListener('blur', () => {
            speedInput.style.borderColor = '#ccc';
            speedInput.style.background = '#f9f9f9';
        });
        menu.appendChild(speedInput);

        const startButton = document.createElement('button');
        startButton.innerText = 'Iniciar';
        startButton.style.marginTop = '20px';
        startButton.style.width = '100%';
        startButton.style.padding = '12px';
        startButton.style.background = 'linear-gradient(135deg, #007bff, #00c6ff)';
        startButton.style.color = 'white';
        startButton.style.border = 'none';
        startButton.style.borderRadius = '8px';
        startButton.style.fontSize = '16px';
        startButton.style.cursor = 'pointer';
        startButton.style.transition = 'background 0.3s ease, transform 0.2s ease';
        startButton.style.boxSizing = 'border-box';
        startButton.addEventListener('mouseenter', () => {
            startButton.style.transform = 'scale(1.05)';
            startButton.style.background = 'linear-gradient(135deg, #00c6ff, #007bff)';
        });
        startButton.addEventListener('mouseleave', () => {
            startButton.style.transform = 'scale(1)';
            startButton.style.background = 'linear-gradient(135deg, #007bff, #00c6ff)';
        });
        menu.appendChild(startButton);

        const footer = document.createElement('div');
        footer.style.marginTop = '20px';
        footer.style.textAlign = 'center';
        footer.style.fontSize = '12px';
        footer.style.color = '#666';

        const link = document.createElement('a');
        link.href = 'https://discord.com/users/452563077683216395';
        link.target = '_blank';
        link.style.textDecoration = 'none';
        link.style.color = '#007bff';
        link.style.fontWeight = 'bold';
        link.innerText = 'juniorschueller';

        footer.innerHTML = 'made by ';
        footer.appendChild(link);
        menu.appendChild(footer);

        document.body.appendChild(menu);

        const simulateTyping = (text, speed) => {
            const textarea = document.querySelector('textarea');
            if (textarea) {
                let i = 0;
                const interval = setInterval(() => {
                    textarea.value += text[i];
                    i++;
                    if (i >= text.length) {
                        clearInterval(interval);
                        startButton.disabled = false;
                        startButton.innerText = 'Iniciar';
                    }
                }, speed * 1000); 

                startButton.disabled = true;
                startButton.innerText = 'Escrevendo...';
            } else {
                console.log('[RedaçãoLobitus] User isn\'t in a redaction page.');
            }
        };

        startButton.addEventListener('click', () => {
            const userText = textInput.value;
            const speed = parseFloat(speedInput.value);
            if (userText !== '' && speed > 0) {
                simulateTyping(userText, speed);
            } else {
                console.log('[RedaçãoLobitus] Missing user text and speed.');
            }
        });

        floatingButton.addEventListener('click', () => {
            menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
        });
    };

    createMenu();
}

if (location.hostname !== 'cmspweb.ip.tv' && location.hostname !== 'cmsp.ip.tv') {
    window.alert('[RedaçãoLobitus] Você deve usar o script no CMSP.');
    window.open('https://cmspweb.ip.tv/');
} else {
    lobitus();
}
