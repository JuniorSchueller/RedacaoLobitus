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
    img.src = 'https://github.com/JuniorSchueller/RedacaoLobitus/blob/main/lobitus.png?raw=true';
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
