const textInput = document.getElementById('textInput');
const previewText = document.getElementById('previewText');
const fontSizeSlider = document.getElementById('fontSizeSlider');
const fontSizeValue = document.getElementById('fontSizeValue');
const clearBtn = document.getElementById('clearBtn');

// Actualitza text i mida
textInput.addEventListener('input', () => {
  previewText.textContent = textInput.value || 'Lorem ipsum';
});

fontSizeSlider.addEventListener('input', () => {
  const size = fontSizeSlider.value + 'px';
  previewText.style.fontSize = size;
  fontSizeValue.textContent = size;
});

clearBtn.addEventListener('click', () => {
  textInput.value = '';
  previewText.textContent = 'Lorem ipsum';
});
