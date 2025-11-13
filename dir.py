import os

def print_directory_tree(startpath, exclude_dirs=None):
    if exclude_dirs is None:
        exclude_dirs = ['.git', '__pycache__', 'node_modules', '.venv', 'venv']
    
    for root, dirs, files in os.walk(startpath):
        # Remove excluded directories
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        
        level = root.replace(startpath, '').count(os.sep)
        indent = '  ' * level
        print(f"{indent}|-{os.path.basename(root)}/")
        subindent = '  ' * (level + 1)
        
        for file in files:
            if not any(exclude in root for exclude in exclude_dirs):
                print(f"{subindent}|- {file}")

if __name__ == "__main__":
    print_directory_tree('.')