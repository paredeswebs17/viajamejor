#!/usr/bin/env python3
"""
Clean up excessive whitespace in button blocks.
"""

import re

def cleanup_button_whitespace(content):
    """Remove excessive blank lines within button blocks."""

    # Pattern to match button blocks with extra newlines
    # Match from <a to </a> and clean up internal whitespace
    def clean_button(match):
        button = match.group(0)
        # Replace multiple newlines with single newlines within the button
        cleaned = re.sub(r'\n\s*\n', '\n', button)
        return cleaned

    # Match button blocks
    pattern = r'<a\s+href="https://[^"]+"\s+target="_blank"\s+rel="noopener noreferrer"\s+className="btn-attraction"\s*>.*?</a>'
    content = re.sub(pattern, clean_button, content, flags=re.DOTALL)

    return content

def process_file(file_path):
    """Process a single file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_length = len(content)
    content_cleaned = cleanup_button_whitespace(content)
    new_length = len(content_cleaned)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content_cleaned)

    removed = original_length - new_length
    print(f"✓ {file_path.split('/')[-1]}: Removed {removed} characters")

if __name__ == '__main__':
    files = [
        '/tmp/cc-agent/54594504/project/src/components/PragueGuideArticle.tsx',
        '/tmp/cc-agent/54594504/project/src/components/BudapestGuideArticle.tsx',
        '/tmp/cc-agent/54594504/project/src/components/ViennaGuideArticle.tsx',
        '/tmp/cc-agent/54594504/project/src/components/AmsterdamGuideArticle.tsx',
    ]

    print("Cleaning up whitespace...")
    for file_path in files:
        process_file(file_path)
