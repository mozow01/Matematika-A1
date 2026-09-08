# Matematika A1 villamosmérnököknek

Online előadásjegyzetek és interaktív bizonyítás-ellenőrzők a Matematika A1
kurzushoz.

## Helyi ellenőrzés

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
npm ci
npm run docs:html
npm run proofs:check
```

A lefordított oldal az `_build/html/index.html` fájlban található. Az interaktív
jsCoq-próbapadot HTTP-kiszolgálón keresztül kell megnyitni, például:

```bash
python3 -m http.server --directory _build/html 8000
```

Ezután az oldal címe: <http://localhost:8000/>.
