#!/usr/bin/env python3
"""
Final fixes for button text issues across all files.
"""

import re

# Define specific fixes for each file
FIXES = {
    'AmsterdamGuideArticle.tsx': [
        ('Ver Casa de Ana Frank Web Oficial Oficial', 'Ver Casa de Ana Frank Web Oficial'),
        ('Comprar Entradas billetes de tren', 'Comprar Billetes de Tren'),
        ('Comprar Entradas billetes de bus', 'Comprar Billetes de Bus'),
    ],
    'ViennaGuideArticle.tsx': [
        ('Comprar Entradas CAT online', 'Comprar Billetes CAT'),
        ('Comprar Entradas Dom', 'Comprar Entradas Catedral de San Esteban'),
        ('Comprar Entradas Tour con guía a Palacio y Jardines', 'Comprar Entradas Schönbrunn'),
        ('Comprar Entradas Tour con guía al Palacio Belvedere', 'Comprar Entradas Palacio Belvedere'),
        ('Comprar Entradas Museo Sisí Hofburg y Jardines', 'Comprar Entradas Hofburg'),
        ('Ver Información Prater completo', 'Ver Información Prater'),
    ],
    'BudapestGuideArticle.tsx': [
        ('Comprar Entradas con guía local', 'Comprar Tour Parlamento'),
    ],
    'PragueGuideArticle.tsx': [
        ('Comprar Entradas Consigue tu Tarjeta Revolut', 'Ver Tarjeta Revolut'),
        ('Comprar Entradas Contratar Seguro IATI con 5 Descuento', 'Ver Seguro IATI'),
    ],
}

def apply_fixes(file_path):
    """Apply specific fixes to a file."""
    filename = file_path.split('/')[-1]

    if filename not in FIXES:
        print(f"  No specific fixes for {filename}")
        return 0

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    count = 0
    for old, new in FIXES[filename]:
        if old in content:
            content = content.replace(f'<span>{old}</span>', f'<span>{new}</span>')
            count += 1
            print(f"    ✓ Fixed: {old[:50]}...")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    return count

if __name__ == '__main__':
    files = [
        '/tmp/cc-agent/54594504/project/src/components/PragueGuideArticle.tsx',
        '/tmp/cc-agent/54594504/project/src/components/BudapestGuideArticle.tsx',
        '/tmp/cc-agent/54594504/project/src/components/ViennaGuideArticle.tsx',
        '/tmp/cc-agent/54594504/project/src/components/AmsterdamGuideArticle.tsx',
    ]

    print("Applying final button text fixes...")
    print("="*60)

    total = 0
    for file_path in files:
        print(f"\n{file_path.split('/')[-1]}:")
        count = apply_fixes(file_path)
        total += count
        if count == 0:
            print("    No fixes needed")

    print("\n" + "="*60)
    print(f"Total fixes applied: {total}")
