import urllib.request

ids = [
    "1531384441138-2736e62e0919", 
    "1506803682981-6e718a9dd3ee", 
    "1573164713988-8665fc963095", 
    "1573164713714-d95e436ab8d6", 
    "1531123414780-f74242c2b052", 
    "1531496730074-83b638c0a7ac", 
    "1522529599102-193c0d76b5b6", 
    "1544717684-2c6c06df1621", 
    "1569966141443-44754593cecc",
    "1573164574572-cb89e39749b4",
    "1573165231977-3d0e32f91753",
    "1556761175-5973dc0f32e7",
    "1570295999919-56ceb5ecca61",
    "1494790108377-be9c29b29330",
    "1589156191108-c762ff4b96ab"
]

for i in ids:
    try:
        urllib.request.urlopen("https://images.unsplash.com/photo-" + i)
        print(i, "OK")
    except Exception as e:
        print(i, "ERR")
