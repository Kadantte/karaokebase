import os
import json

# Dossiers et fichiers
folder_path = "." 
output_file = "liste_noms_type_2.txt"

# On ouvre le fichier texte en mode écriture ("w")
with open(output_file, "w", encoding="utf-8") as out_f:
    
    for filename in os.listdir(folder_path):
        # On ne traite que les fichiers de tags
        if filename.endswith(".tag.json"):
            try:
                with open(filename, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    
                    tag = data.get("tag", {})
                    types = tag.get("types", [])
                    
                    # Si 2 est présent (type singer)
                    if 2 in types:
                        name = tag.get("name")
                        if name:
                            out_f.write(name + "\n")
                            
            except Exception as e:
                print(f"Erreur avec le fichier {filename}: {e}")

print(f"Terminé ! La liste a été sauvegardée dans '{output_file}'.")