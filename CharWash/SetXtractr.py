import re
import unicodedata
import string
import os.path

def is_cyrillic(char):
    return (
        '\u0400' <= char <= '\u04FF' or      # Cyrillic
        '\u0500' <= char <= '\u052F' or      # Cyrillic Supplement
        '\u2DE0' <= char <= '\u2DFF' or      # Cyrillic Extended-A
        '\uA640' <= char <= '\uA69F' or      # Cyrillic Extended-B
        '\u1C80' <= char <= '\u1C8F' or      # Cyrillic Extended-C
        '\u1E030' <= char <= '\u1E08F'       # Cyrillic Extended-D
        )

def extract_unique_characters(text):
    unique_chars = set(text)
    filtered_chars = set()
    for c in unique_chars:
        if is_cyrillic(c):
            continue
        filtered_chars.add(c)
    sorted_chars = sorted(filtered_chars, key=lambda c: ord(c))
    return sorted_chars

def main():
    language = input("What is the name of your language? (e.g. arz, lij, etc.) ").strip()
    data_filename = f"{language}_data.txt"
    unique_filename = f"{language}_unique_characters.txt"

    input_choice = input("Do you want to (1) paste text directly or (2) provide a .txt file path? Enter 1 or 2: ").strip()
    if input_choice == "1":
        print(f"Please paste the dataset for your language below. To end the input, write a single line containing only 'END':")
        lines = []
        while True:
            line = input()
            if line.strip() == 'END':
                break
            lines.append(line)
        data = '\n'.join(lines)
    elif input_choice == "2":
        while True:
            file_path = input("Enter the path to your .txt file: ").strip()
            if os.path.isfile(file_path) and file_path.endswith(('.txt')):
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        data = f.read()
                    break
                except Exception as e:
                    print(f"Error reading the file: {e}")
            else:
                print("The path is not valid. Retry.")
    else:
        print("Invalid choice.")
        return

    normalized_text = unicodedata.normalize('NFC', data)
    unique_chars = extract_unique_characters(normalized_text)
    with open(unique_filename, 'w', encoding='utf-8') as f:
        for char in unique_chars:
            f.write(char + '\n')
    print(f"Extracted characters successfully saved to {unique_filename}!")

if __name__ == "__main__":
    main()