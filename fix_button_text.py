#!/usr/bin/env python3
"""
Fix button text formatting issues.
"""

import re

def fix_button_text(content):
    """Fix common button text issues."""

    def fix_text(match):
        span_content = match.group(1)

        # Remove duplicate "Comprar" words
        if span_content.startswith('Comprar Entradas Comprar'):
            span_content = span_content.replace('Comprar Entradas Comprar', 'Comprar Entradas', 1)

        # Remove duplicate "Reservar" words after Comprar Entradas
        if 'Comprar Entradas Reservar' in span_content:
            span_content = span_content.replace('Comprar Entradas Reservar', 'Comprar Entradas', 1)

        # Remove duplicate "Ver" words
        if 'Comprar Entradas Ver' in span_content:
            span_content = span_content.replace('Comprar Entradas Ver', 'Ver', 1)

        # Fix "Ver en Booking" that got "Comprar Entradas" added
        if 'Comprar Entradas Ver en Booking' in span_content:
            span_content = 'Ver en Booking'

        # Fix empty or just whitespace after "Comprar Entradas"
        if span_content.strip() == 'Comprar Entradas':
            # This should not happen, but if it does, we'll leave it as is for manual review
            pass

        # Remove "Entradas" if it appears twice
        if 'Comprar Entradas Entradas' in span_content:
            span_content = span_content.replace('Comprar Entradas Entradas', 'Comprar Entradas', 1)

        # Remove "Web oficial" redundancy
        if span_content.endswith('Web oficial'):
            span_content = span_content.replace(' Web oficial', '')

        # Clean up "Tour con guía a" -> "Tour"
        span_content = span_content.replace('Comprar Entradas con guía a', 'Comprar Entradas')
        span_content = span_content.replace('Comprar Entradas con guía al', 'Comprar Entradas')
        span_content = span_content.replace('Comprar Entradas con subida a torres y museo', 'Comprar Entradas')

        # Fix "Comprar Entradas traslado" -> "Comprar Traslado"
        if 'traslado privado' in span_content.lower():
            span_content = 'Comprar Traslado Privado'

        # Normalize "Horarios y rutas" type buttons
        if 'Horarios y rutas' in span_content:
            span_content = span_content.replace('Comprar Entradas Horarios y rutas', 'Ver Horarios y Rutas')

        # Fix information/web type buttons
        if 'Información' in span_content or 'información' in span_content:
            span_content = span_content.replace('Comprar Entradas Información', 'Ver Información')

        if 'Web oficial y reservas' in span_content:
            span_content = span_content.replace('Comprar Entradas Web oficial y reservas', 'Ver Información y Reservas')

        if 'Reservas y menú' in span_content:
            span_content = span_content.replace('Comprar Entradas Reservas y menú', 'Ver Menú y Reservas')

        # Fix "oficial" sites that should be "Ver"
        if 'oficial' in span_content.lower() and 'Comprar Entradas' in span_content:
            # These are usually informational, not purchase links
            attraction = span_content.replace('Comprar Entradas', '').replace('oficial', '').strip()
            if attraction:
                span_content = f'Ver {attraction} Oficial'

        return f'<span>{span_content}</span>'

    # Match all span tags within btn-attraction buttons
    pattern = r'<span>([^<]+)</span>'
    content = re.sub(pattern, fix_text, content)

    return content

def process_file(file_path):
    """Process a single file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    content_fixed = fix_button_text(content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content_fixed)

    print(f"✓ {file_path.split('/')[-1]}")

if __name__ == '__main__':
    files = [
        '/tmp/cc-agent/54594504/project/src/components/PragueGuideArticle.tsx',
        '/tmp/cc-agent/54594504/project/src/components/BudapestGuideArticle.tsx',
        '/tmp/cc-agent/54594504/project/src/components/ViennaGuideArticle.tsx',
        '/tmp/cc-agent/54594504/project/src/components/AmsterdamGuideArticle.tsx',
    ]

    print("Fixing button text formatting...")
    for file_path in files:
        process_file(file_path)
    print("Done!")
