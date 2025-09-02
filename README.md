## Reader

A simple and efficient Python application that reads aloud text from various sources using text-to-speech (TTS) technology. Ideal for accessibility, productivity, and multitasking.

## Badges
[![DeepScan grade](https://deepscan.io/api/teams/27925/projects/30249/branches/969941/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=27925&pid=30249&bid=969941)


## 🔊 Features

- 📄 Read aloud plain text files
- 📋 Instantly read copied clipboard content
- 🔁 Continuous reading with customizable delay
- 🎤 Converts text to natural-sounding voice using `pyttsx3`
- ⚙️ Easy to customize voice, rate, and volume

## 🛠️ Technologies Used

- Python 3.x
- `pyttsx3` (offline TTS engine)
- `pyperclip` (clipboard content access)
- `tkinter` (GUI for file selection, optional)

## 🚀 Getting Started

### Prerequisites

Make sure you have Python installed. You can download it from [python.org](https://www.python.org/downloads/).

Install dependencies:

```bash
pip install pyttsx3 pyperclip
````

### Clone the Repository

```bash
git clone https://github.com/janithsuraweera/Auto-text-to-voice-reader.git
cd Auto-text-to-voice-reader
```

### Run the Application

```bash
python main.py
```

## 📂 Project Structure

```
Auto-text-to-voice-reader/
├── main.py           # Main logic for reading and voice output
├── requirements.txt  # Optional: list of required Python packages
└── README.md         # Project documentation
```

## ⚙️ Customization

You can modify the TTS properties such as rate, volume, and voice in the `main.py` file:

```python
engine.setProperty('rate', 150)   # Speed of speech
engine.setProperty('volume', 0.9) # Volume (0.0 to 1.0)
```

To list available voices:

```python
voices = engine.getProperty('voices')
for voice in voices:
    print(voice.id)
```

## 📌 Use Cases

* Screen reader for visually impaired users
* Background text reading while multitasking
* Review written content audibly
* Proofreading assistant

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙌 Acknowledgements

* Developed by [Janith Suraweera](https://github.com/janithsuraweera)
* Built with ❤️ using Python and open-source libraries
