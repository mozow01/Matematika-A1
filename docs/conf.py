project = "Matematika A1 villamosmérnököknek"
copyright = "2026, Molnár Zoltán"
author = "Molnár Zoltán"

extensions = [
    "sphinx.ext.autosectionlabel",
    "sphinx.ext.mathjax",
    "sphinx_copybutton",
    "myst_parser",
]

myst_enable_extensions = [
    "colon_fence",
    "deflist",
    "fieldlist",
]

language = "hu"
templates_path = ["_templates"]
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]

html_theme = "sphinx_rtd_theme"
html_title = project
html_baseurl = "https://mozow01.github.io/Matematika-A1/"
html_static_path = ["_static"]
html_css_files = ["css/custom.css", "css/vector-algebra.css"]
html_js_files = [
    "js/interactive-frames.js",
    "js/vector-algebra.js",
    "js/vector-coordinates.js",
]

mathjax3_config = {
    "loader": {"load": ["[tex]/bussproofs"]},
    "tex": {
        "packages": {"[+]": ["bussproofs"]},
        "macros": {
            "hyp": [r"\color{#2e7d32}{[#1]^{#2}}", 2],
            "llbracket": r"[\![",
            "rrbracket": r"]\!]",
        },
    },
}

html_context = {
    "display_github": True,
    "github_user": "mozow01",
    "github_repo": "Matematika-A1",
    "github_version": "main",
    "conf_py_path": "/docs/",
}

html_theme_options = {
    "collapse_navigation": False,
    "navigation_depth": 4,
    "titles_only": False,
}

autosectionlabel_prefix_document = True
numfig = True

copybutton_selector = "div.highlight-text pre, div.highlight-coq pre"
copybutton_exclude = ".linenos, .gp, .go"
