import os
from pathlib import Path

# home = Path.home()
folder = Path("Day15Folder-file-handling_flask")
folder.mkdir(exist_ok=True)

def write_text(text):
    with open(folder / "day_15_file", "w") as file:
        file.write(f"{text}")
    file.close()
    return "Text file write successfully."
    
def append_file(text):
    with open(folder / "day_15_file", "a") as file:
        file.write(f"\n{text}")
    file.close()
    return "Text file append successfully."
    
def delete_file(file_name):
    file_path = folder / f"{file_name}"
    
    if file_path.exists():
        os.remove(file_path)
        return f"{file_name} has been successfully deleted.", True
    else: 
        return f"{file_name} not found.", False