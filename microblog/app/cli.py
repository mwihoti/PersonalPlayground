from app import app
import os

@app.cli.group()
def translate():
    """Translation and localization commands."""
    pass

@translate.command()
def update():
    """Update all languages"""
    if os.system('pybabel extract -F babel.cfg -k -l -o message.pot'):
        raise RuntimeError('extract command failed')
    if os.system('pybabel update -i message.pot -d app/translations'):
        raise RuntimeError('extract command failed')
    os.remove('message.pot')

@translate.command()
def compile():
    """Compile all languages"""
    if os.system('pybabel compile -d app/translations'):
        raise RuntimeError('Compile command failed')