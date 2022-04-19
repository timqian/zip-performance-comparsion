# Comparing performance of jszip and adm-zip

### How to compare

```bash
npm i

node index.mjs

# Result(on GitHub codespace(4 Core; 8G RAM))
# Time cost to compress 65530 files
# adm-zip: 5.672s
# jszip: 4.571s
```

### Result

1. adm-zip(latest version@0.5.9) is not able to compress more than 65535 files([ref](https://github.com/cthackers/adm-zip/issues/320))
2. To compress 65530 files, jszip(latest version@3.9.1) is faster than adm-zip

