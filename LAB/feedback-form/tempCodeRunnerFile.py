        if re.search(r'<\s*script\s*>|<\s*\/\s*script\s*>|<\s*[^>]*>', message):
            # Render the same page with a flag indicating validation failure
            return render_template('trybg.html', validation_failed=True)