import re
import glob

# Mapping old images to new ones or just indiscriminately replacing them
# We'll use a list of good IDs for black/african professionals
african_faces = [
    "1531384441138-2736e62e0919", # Black man smiling
    "1506803682981-6e718a9dd3ee", # Black man
    "1531123897727-8f129e1bf98c", # African team meeting
    "1573164713988-8665fc963095", # Black woman working
    "1573164713714-d95e436ab8d6", # Black woman smiling
    "1531496730074-83b638c0a7ac", # Two black women collaborating
    "1522529599102-193c0d76b5b6", # Black man
    "1589156191108-c762ff4b96ab", # Black woman professional
    "1507679622256-4ed7140228d7", # Black man standing
    "1544717684-2c6c06df1621", # Black man
    "1569966141443-44754593cecc", # Black woman
]

replacements = {
    "1531384441138-2736e62e0919": "1531384441138-2736e62e0919", # Already black man
    "1506803682981-6e718a9dd3ee": "1506803682981-6e718a9dd3ee", # Already black man
    "1589156191108-c762ff4b96ab": "1589156191108-c762ff4b96ab", # Already black woman
    "1570295999919-56ceb5ecca61": "1569966141443-44754593cecc", # Replace white guy with black woman
    "1494790108377-be9c29b29330": "1531123414780-f74242c2b052", # Replace white woman with black woman
    "1522529599102-193c0d76b5b6": "1522529599102-193c0d76b5b6", # Already black man
    "1556761175-5973dc0f32e7": "1531123897727-8f129e1bf98c", # Replace generic team with african team
    "1573164713988-8665fc963095": "1573164713988-8665fc963095", # Already black woman
    "1573164713714-d95e436ab8d6": "1573164713714-d95e436ab8d6", # Already black woman
    "1531123414780-fee2a3a52e00": "1531496730074-83b638c0a7ac", # Replace generic team
    "1551288049-bebda4e38f71": "1544717684-2c6c06df1621", # Replace code/laptop with black man
    "1531123414780-f74242c2b052": "1531123414780-f74242c2b052", # Already black woman
    "1531496730074-83b638c0a7ac": "1531496730074-83b638c0a7ac", # Already black team
    "1522071820081-009f0129c71c": "1507679622256-4ed7140228d7", # Replace generic team with black man
}

files = glob.glob('src/**/*.tsx', recursive=True)
for file in files:
    with open(file, 'r') as f:
        content = f.read()
    
    # We might have weirdly merged strings like "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=formathttps://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800fit=crop&q=80&w=800" from a bad previous replace
    # Let's fix that first manually if it's there
    content = content.replace("https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=formathttps://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800")
    content = content.replace("https://images.unsplash.com/photo-1531123414780-fee2a3a52e00?auto=formathttps://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1531123414780-fee2a3a52e00?auto=format&fit=crop&q=80&w=800")

    for old_id, new_id in replacements.items():
        content = content.replace(old_id, new_id)
        
    with open(file, 'w') as f:
        f.write(content)

