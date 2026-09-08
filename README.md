# Matematika A1 villamosmérnököknek

Online előadásjegyzetek és interaktív bizonyítás-ellenőrzők a Matematika A1
kurzushoz.

## Online jegyzet

A GitHub Pages-oldal címe:
<https://mozow01.github.io/Matematika-A1/>

A `.github/workflows/pages.yml` munkafolyamat a `main` ágra küldött minden
változtatás után elkészíti a Sphinx-dokumentációt, majd publikálja az oldalt.
A tároló GitHub-oldalán egyszer ki kell választani a **Settings → Pages →
Build and deployment → Source → GitHub Actions** lehetőséget.

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
