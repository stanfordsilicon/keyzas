import csv
import os
import sys
from typing import Set, Dict, List

def load_characters_from_file(file_path: str) -> Set[str]:
    chars = set()
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                if line:
                    chars.add(line)
                    
    except FileNotFoundError:
        print(f"Error: File not found: {file_path}")
        return set()
    except Exception as e:
        print(f"Error reading file: {e}")
        return set()
    
    return chars

def load_all_keyboards() -> List[Dict]:
    base_dir = os.path.dirname(os.path.abspath(__file__))
    keyboard_file = os.path.join(base_dir, "keyboard_metadata.csv")
    keyboards = []
    
    try:
        with open(keyboard_file, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                keyboards.append({
                    'id': row['id'],
                    'name': row['name'],
                    'locale': row['locale'],
                    'source_file': row['source_file'],
                    'all_characters': row['all_characters']
                })
    except FileNotFoundError:
        print(f"Error: Keyboard metadata file not found: {keyboard_file}")
        return []
    except Exception as e:
        print(f"Error reading keyboard metadata: {e}")
        return []
    
    return keyboards

def analyze_keyboard_match(language_chars: Set[str], keyboard: Dict) -> Dict:
    chars_str = keyboard['all_characters']
    if chars_str:
        keyboard_chars = set(char.strip() for char in chars_str.split(',') if char.strip())
    else:
        keyboard_chars = set()
    
    overlap = language_chars.intersection(keyboard_chars)
    missing = language_chars - keyboard_chars
    excess = keyboard_chars - language_chars
    
    return {
        'keyboard_id': keyboard['id'],
        'keyboard_name': keyboard['name'],
        'locale': keyboard['locale'],
        'source_file': keyboard['source_file'],
        'language_char_count': len(language_chars),
        'keyboard_char_count': len(keyboard_chars),
        'overlap_count': len(overlap),
        'missing_count': len(missing),
        'excess_count': len(excess),
        'coverage_percentage': (len(overlap) / len(language_chars)) * 100 if language_chars else 0,
        'overlap_percentage': (len(overlap) / len(keyboard_chars)) * 100 if keyboard_chars else 0,
        'overlap_chars': ','.join(sorted(overlap)),
        'missing_chars': ','.join(sorted(missing)),
        'excess_chars': ','.join(sorted(excess))
    }

def main():
    if len(sys.argv) > 1:
        input_file = sys.argv[1]
    else:
        input_file = input("Enter the path to your character file: ").strip()
    
    if not input_file:
        print("No input file specified")
        return
    
    language_chars = load_characters_from_file(input_file)
    
    if not language_chars:
        print("No characters found in the file")
        return
    
    print(f"Loaded {len(language_chars)} unique characters from: {input_file}")
    
    keyboards = load_all_keyboards()
    

    results = []
    
    for keyboard in keyboards:
        analysis = analyze_keyboard_match(language_chars, keyboard)
        results.append(analysis)

    coverage_sorted = sorted(results, key=lambda x: (x['coverage_percentage'], x['overlap_percentage']), reverse=True)
    overlap_sorted = sorted(results, key=lambda x: (x['overlap_percentage'], x['coverage_percentage']), reverse=True)
    

    top_10_by_coverage = coverage_sorted[:10]
    top_10_by_overlap = overlap_sorted[:10]

    base_name = os.path.splitext(os.path.basename(input_file))[0]
    output_file = f"{base_name}_most_similar_keyboards.csv"
    

    fieldnames = [
        'rank', 'keyboard_id', 'keyboard_name', 'locale', 'source_file',
        'language_char_count', 'keyboard_char_count', 'overlap_count', 'missing_count', 'excess_count',
        'coverage_percentage', 'overlap_percentage',
        'overlap_chars', 'missing_chars', 'excess_chars'
    ]
    
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()

        coverage_label_row = {key: '' for key in fieldnames}
        coverage_label_row['keyboard_id'] = 'Top 10 Keyboards Ranked by Coverage Rate'
        writer.writerow(coverage_label_row)

        for i, result in enumerate(top_10_by_coverage, 1):
            row = result.copy()
            row['rank'] = i
            writer.writerow(row)

        overlap_label_row = {key: '' for key in fieldnames}
        overlap_label_row['keyboard_id'] = 'Top 10 Keyboards Ranked by Overlapping Rate'
        writer.writerow(overlap_label_row)

        for i, result in enumerate(top_10_by_overlap, 1):
            row = result.copy()
            row['rank'] = i
            writer.writerow(row)
    
    print(f"Analysis complete! Results saved to: {output_file}")

if __name__ == "__main__":
    main() 