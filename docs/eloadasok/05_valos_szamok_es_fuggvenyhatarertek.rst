.. _eloadas-05-valos-szamok-es-fuggvenyhatarertek:

Valós számok és függvényhatárérték
===================================

A valós számok teljességétől jutunk a függvényhatárértékekig.
DE előtte, egy általánosabb fogalom. Az első, kétdimenziós ábra a környezetek képeinek alapgondolatát mutatja.

A bal oldali koordinátarendszerben :math:`(x_0,y_0)` egy pont. A rögzített :math:`f:\mathbb R^2\to\mathbb R^2` függvény képezi át a sík pontjait a
jobb oldalon ábrázolt példányába a síknak. Az összetartozó színes pontok egy-egy pont képe f által, így mozognak. A köralakú környzet f általi képe az ,,amőba'' alakú halmaz. :math:`(A_1,A_2)` egy pont az érkezési síkon. Legyen adva ekörül egy :math:`ε` sugarú kör!

.. raw:: html

   <figure class="rl-figure rl-map" data-rl-map>
     <div class="rl-map-panels">
       <div class="rl-map-panel">
         <h3>1. koordinátarendszer: kiinduló pontok</h3>
         <svg viewBox="0 0 440 360" role="img" aria-label="Az (x0, y0) pont delta sugarú környezete" data-rl-source></svg>
       </div>
       <span class="rl-map-arrow" aria-hidden="true">⟶ <i>f</i> ⟶</span>
       <div class="rl-map-panel">
         <h3>2. koordinátarendszer: képpontok</h3>
         <svg viewBox="0 0 440 360" role="img" aria-label="Az amőba alakú képhalmaz az (A1, A2) pont epszilon sugarú környezetében" data-rl-target></svg>
       </div>
     </div>
     <figcaption>
       <label for="rl-epsilon">ε sugár <output data-rl-epsilon-value>1,20</output>
         <input id="rl-epsilon" type="range" min="0.25" max="1.8" step="0.01" value="1.2" data-rl-epsilon>
       </label>
       <button type="button" data-rl-play>Lejátszás</button>
       <span data-rl-delta-value>δ = 0,80</span>
     </figcaption>
   </figure>


.. math::

   \forall \varepsilon>0 \exists \delta>0 \forall x\in B_\delta(x_0,y_0)\setminus\{(x_0,y_0)\}\;f(x)\in B_\varepsilon(A_1,A_2).

.. topic:: A két 90 perces rész

   **Első előadás:** rendezett test, korlátok, teljesség, környezetek,
   torlódási pontok, függvényhatárérték, rendőrelv és trigonometrikus
   nevezetes határértékek.

   **Második előadás:** exponenciális és logaritmus, kompozíció,
   inverz, egyoldali határérték, szakadás és folytonosság.

.. rubric:: Első előadás — 90 perc


Rendezett test, alsó és felső korlátok
--------------------------------------

A :math:`T` test **rendezett**, ha láncszerűen rendezezett és a rendezése kompatibilis a műveletekkel:

.. math::

   a\leq b\Longrightarrow a+c\leq b+c,\qquad
   a\leq b,\ 0\leq c\Longrightarrow a\cdot c\leq b\cdot c.

A racionális számok köre pl. rendezett test, de a komplex számok köre nem.

Nagyon fontos fogalom a korlát.

.. raw:: html

   <figure class="rl-bounds" data-rl-bounds>
     <div class="rl-bounds-grid">
       <div class="rl-bound-text">
         <h3>Felülről</h3>
         <p><strong><span>\(K\in T\)</span> felső korlátja a \(H\subseteq T\) halmaznak,</strong> ha minden \(x\in H\)-ra \(x\leq K\).</p>
         <p><strong>Maximum:</strong> \(M\in H\) felső korlát; ekkor \(M=\max H\).</p>
         <p><strong>Szuprémum:</strong> \(S\in T\) a felső korlátok legkisebbike; ekkor \(S=\sup H\).</p>
       </div>
       <svg viewBox="0 0 160 330" role="img" aria-label="A felső korlátok és a szuprémum függőleges számegyenesen" data-rl-upper></svg>
       <svg viewBox="0 0 160 330" role="img" aria-label="Az alsó korlátok és az infimum függőleges számegyenesen" data-rl-lower></svg>
       <div class="rl-bound-text">
         <h3>Alulról</h3>
         <p><strong><span>\(k\in T\)</span> alsó korlátja a \(H\subseteq T\) halmaznak,</strong> ha minden \(x\in H\)-ra \(k\leq x\).</p>
         <p><strong>Minimum:</strong> \(m\in H\) alsó korlát; ekkor \(m=\min H\).</p>
         <p><strong>Infimum:</strong> \(I\in T\) az alsó korlátok legnagyobbika; ekkor \(I=\inf H\).</p>
       </div>
     </div>
     <figcaption>A rajzon \(T=\mathbb R\), \(H=(-1,2)\), \(S=2\) és \(I=-1\). A kék \(H\) végpontjai nyitottak, ezért \(M\) és \(m\) nincs.</figcaption>
   </figure>

Ha a szuprémum :math:`S` létezik és :math:`S\in H`, akkor :math:`M=S`;
hasonlóan, ha az infimum :math:`I` létezik és :math:`I\in H`, akkor
:math:`m=I`.

A racionális számokból hiányzó felső határ
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Most legyen :math:`T=\mathbb Q`, és

.. math::

   H=\{q\in T:q\geq0,\ q^2<2\}.

:math:`H` nemüres és felülről korlátos :math:`T`-ben, még sincs ott szuprémuma.
A valós számok között :math:`S=\sup_{\mathbb R}H=\sqrt2`, de
:math:`S\notin T`.
Pozitív :math:`r\in T` esetén ha :math:`r^2<2`, egy kissé nagyobb racionális
szám is :math:`H`-ban van; ha :math:`r^2>2`, van kisebb racionális felső korlát.
Az :math:`r^2=2` eset :math:`T`-ben lehetetlen.

Teljesség, Arkhimédész és Cantor
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Felsőhatár-axióma:** :math:`T=\mathbb R` esetén minden nemüres, felülről
korlátos :math:`H\subseteq T` halmaznak van :math:`S\in T` szuprémuma.
Az :math:`I\in T` infimum létezése a :math:`-H` halmaz alkalmazásával következik.

Rendezett testekben ez az axióma ekvivalens az alábbi **két állítás
együttesével**:

* **Arkhimédészi tulajdonság:** minden valós :math:`x`-hez van
  :math:`n\in\mathbb N`, amelyre :math:`n>x`. Egyenértékűen minden
  :math:`ε>0`-hoz van :math:`n`, amelyre :math:`1/n<ε`.
* **Cantor közösrészállítása:** egymásba skatulyázott, nemüres,
  zárt, korlátos intervallumok metszete nemüres. Ha a hosszuk
  tetszőlegesen kicsivé válik, a közös pont egyetlen.

Az axiómából a bal végpontok szuprémuma közös pontot ad. Visszafelé
intervallumfelezéssel keresünk szuprémumot: Cantor biztosít közös
pontot, az arkhimédészi tulajdonság a felezett intervallumok
hosszának eltűnését.

Kibővített valós számok, környezetek
------------------------------------

.. math::

   \overline{\mathbb R}=\mathbb R\cup\{-\infty,+\infty\}.

Ez rendezett halmaz, de már nem test: például
:math:`+\infty-(+\infty)` nem értelmezett. Véges középpont, illetve a két
végtelen környezete (:math:`δ>0`, :math:`M\in\mathbb R`):

.. math::

   U_\delta(u)=(u-\delta,u+\delta),\qquad
   U_M(+\infty)=(M,+\infty],\qquad
   U_M(-\infty)=[-\infty,M).

A **lyukas környezetből** a középpontot kihagyjuk:
:math:`\dot U(u)=U(u)\setminus\{u\}`.

Legyen :math:`H\subseteq\mathbb R`, és jelölje :math:`\mathcal U(u)` az
:math:`u\in\overline{\mathbb R}` környezeteinek családját.
Az :math:`u` a :math:`H` **torlódási pontja**, ha minden környezetében van
tőle különböző :math:`H`-beli pont. A torlódási pontok halmazának jele
:math:`H'`; pontosan

.. math::

   H'=\left\{u\in\overline{\mathbb R}:
   \forall U\in\mathcal U(u),\quad
   (U\setminus\{u\})\cap H\ne\varnothing\right\}.

* Ha :math:`H=(0,1)`, akkor :math:`H'=[0,1]`.
  :math:`0` és :math:`1` nem elemei :math:`H`-nak; :math:`2` nem torlódási pont.
* Ha :math:`H=\{1/n:n\geq1\}`, akkor :math:`H'=\{0\}`.
  Az egyes :math:`1/n` pontok izoláltak.
* A kibővített valós számok között :math:`H=\mathbb N` esetén
  :math:`H'=\{+\infty\}`; véges torlódási pont nincs.

.. raw:: html

   <figure class="rl-figure" data-rl-cluster>
     <svg viewBox="0 0 760 215" role="img" aria-label="Az egy per n pontjai a nulla torlódási pont felé sűrűsödnek"></svg>
     <figcaption>Az 1/n pontok közelítenek a hiányzó 0-hoz; mindegyik 1/n izolált.</figcaption>
   </figure>

Függvényhatárérték
------------------

Legyen :math:`f:D\to\mathbb R`, ahol :math:`D\subseteq\mathbb R`, és
:math:`u\in D'`.
Azt mondjuk, hogy :math:`f(x)` határértéke :math:`A\in\overline{\mathbb R}`,
ha :math:`A` minden :math:`V` környezetéhez van :math:`u` olyan :math:`U` környezete,
amelyre

.. math::

   f\bigl((D\cap U)\setminus\{u\}\bigr)\subseteq V.

Jele: :math:`\lim_{x\to u}f(x)=A`. Ha :math:`u,A\in\mathbb R`,
ez a szokásos :math:`ε`–:math:`δ` állítás:

.. math::

   \forall\varepsilon>0\ \exists\delta>0\ \forall x\in D:
   \quad 0<|x-u|<\delta\Longrightarrow |f(x)-A|<\varepsilon.

A :math:`u`-ban felvett függvényérték ebben nem szerepel.

Határérték és műveletek — HIA
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Jelölje :math:`\ast` a négy alapművelet
(:math:`+,-,\cdot,/`) egyikét. Ha :math:`u\in D'`,
:math:`\lim_{x\to u}f(x)=A` és :math:`\lim_{x\to u}g(x)=B`,
ahol :math:`A,B\in\overline{\mathbb R}`, és :math:`A\ast B` értelmezett,
akkor

.. math::

   \lim_{x\to u}(f\ast g)(x)=A\ast B.

Az :math:`f\ast g` műveletet pontonként értjük. Hányados esetén a
nevező a vizsgált lyukas környezetben nem lehet nulla.
Például :math:`+\infty-(+\infty)` és :math:`0\cdot(+\infty)`
nem értelmezett, ezért ezekre az állítás nem alkalmazható.

Határérték és rendezés
~~~~~~~~~~~~~~~~~~~~~~

Ha :math:`f(x)\leq g(x)` az :math:`u` körüli lyukas környezetben,
és véges határértékeik léteznek, akkor
:math:`\lim_{x\to u}f(x)\leq\lim_{x\to u}g(x)`. Szigorú egyenlőtlenségre ez
általában nem igaz.

A **rendőrelv** szerint ha :math:`h(x)\leq g(x)\leq f(x)` és
:math:`\lim_{x\to u}h(x)=\lim_{x\to u}f(x)=A`, akkor
:math:`\lim_{x\to u}g(x)=A`. Következmény: korlátos
:math:`b(x)` és nullához tartó :math:`v(x)` esetén :math:`b(x)v(x)\to0`;
:math:`b`-nek nem kell határértékkel rendelkeznie.

.. raw:: html

   <figure class="rl-figure" data-rl-squeeze>
     <svg viewBox="0 0 760 280" role="img" aria-label="Az alsó h és a felső f görbe között hullámzó g görbe ugyanahhoz az A értékhez tart"></svg>
     <figcaption>A felső f és az alsó h az (u,A) pontban ér össze; a közrezárt g hullámzása is eltűnik.</figcaption>
   </figure>

**Példa:** a körgeometriai :math:`|\sin t|\leq|t|` becslésből

.. math::

   0\leq1-\cos x=2\sin^2(x/2)\leq x^2/2\longrightarrow0,

így :math:`\lim_{x\to0}\cos x=1`. Az itt használt
:math:`x^2\to0` közvetlen igazolása: adott :math:`ε>0`-hoz válasszuk
:math:`δ=\sqrt ε`-t; ekkor :math:`|x|<δ` esetén :math:`|x^2|<ε`.

A szinusz nevezetes határértéke
--------------------------------

Az egységkörben, :math:`0<x<\pi/2` esetén a belső háromszög,
a körcikk és az érintőháromszög területe rendre

.. math::

   \tfrac12\sin x<\tfrac12 x<\tfrac12\tan x.

.. raw:: html

   <figure class="rl-figure" data-rl-unit>
     <svg viewBox="0 0 760 420" role="img" aria-label="Egységkör: belső háromszög, körcikk és érintőháromszög"></svg>
     <figcaption>
       <label for="rl-angle">Szög (radián) <output data-rl-angle-value>0,70</output>
         <input id="rl-angle" type="range" min="0.08" max="1.25" step="0.01" value="0.7" data-rl-angle>
       </label>
       <span>háromszög &lt; körcikk &lt; érintőháromszög</span>
     </figcaption>
   </figure>

Osztás és a rendőrelv adja

.. math::

   \cos x<\frac{\sin x}{x}<1,\qquad
   \lim_{x\to0+}\frac{\sin x}{x}=1.

A hányados páros, így a bal oldali határérték is :math:`1`. Az ábra
és a területképlet radiánban mért szöget használ.

A koszinusz másodrendű közelítése
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. math::

   \frac{1-\cos x}{x^2}
   =\frac12\left(\frac{\sin(x/2)}{x/2}\right)^2
   \longrightarrow\frac12.

Ezért origó közelében :math:`\cos x\approx1-x^2/2`.
A két görbe közös ábrája nagyítható:

.. raw:: html

   <figure class="rl-figure" data-rl-cos>
     <svg viewBox="0 0 760 330" role="img" aria-label="A koszinusz és az egy mínusz x négyzet per kettő parabola összehasonlítása"></svg>
     <figcaption>
       <label for="rl-cos-window">A látható x-tartomány fele <output data-rl-cos-value>2,00</output>
         <input id="rl-cos-window" type="range" min="0.35" max="2.5" step="0.01" value="2" data-rl-cos-window>
       </label>
       <span>folytonos: cos x · szaggatott: 1 − x²/2</span>
     </figcaption>
   </figure>

.. raw:: html

   <div class="lecture-boundary" role="separator" aria-label="A második előadás kezdete">
     <span>Második előadás — 90 perc</span>
   </div>

Az exponenciális függvény és az Euler-szám
------------------------------------------

Az :math:`a^x` görbék közül az :math:`e^x`-é az, amelynek a
:math:`(0,1)` pontbeli érintőmeredeksége :math:`1`. Szelők határértékével:

.. math::

   \boxed{\lim_{x\to0}\frac{e^x-1}{x}=1},
   \qquad\text{az érintő }y=1+x.

Azonos tengelylépték mellett ez :math:`45^\circ`-os érintő.
Az ilyen :math:`a>1` alap létezik és egyetlen; ezt tételként használjuk.
Az alapot és a szelőpontot az ábrán külön csúszka állítja.

.. raw:: html

   <figure class="rl-figure" data-rl-exp>
     <svg viewBox="0 0 760 360" role="img" aria-label="Az exponenciális görbe szelője az e alapú görbe negyvenöt fokos érintője felé tart"></svg>
     <figcaption>
       <label for="rl-base">Alap <output data-rl-base-value>2,72</output>
         <input id="rl-base" type="range" min="1.2" max="4" step="0.01" value="2.72" data-rl-base>
       </label>
       <label for="rl-secant">Szelőpont x-értéke <output data-rl-secant-value>0,60</output>
         <input id="rl-secant" type="range" min="0.03" max="1.1" step="0.01" value="0.6" data-rl-secant>
       </label>
       <span data-rl-slope-value></span>
     </figcaption>
   </figure>

Kompozíció és inverz
--------------------

Ha :math:`f:D\to E` és :math:`g:E\to F`, akkor
:math:`(g\circ f)(x)=g(f(x))` a **kompozíció**.
Ha :math:`f:D\to E` bijekció, akkor az :math:`f^{-1}:E\to D` inverzt
mindkét azonosság jellemzi:

.. math::

   f^{-1}\circ f=\operatorname{id}_D,\qquad
   f\circ f^{-1}=\operatorname{id}_E.

Grafikonjaik az azonos léptékű :math:`y=x` egyenesre tükrözöttek.
Az ábrán :math:`f(x)=2x+1` és :math:`f^{-1}(x)=(x-1)/2` szerepel.

.. raw:: html

   <figure class="rl-figure" data-rl-inverse>
     <svg viewBox="0 0 760 370" role="img" aria-label="Függvény és inverze: a pontok az y egyenlő x egyenesre tükröződnek"></svg>
     <figcaption>
       <label for="rl-inverse-x">Kiinduló x <output data-rl-inverse-value>0,50</output>
         <input id="rl-inverse-x" type="range" min="-1.4" max="1.4" step="0.05" value="0.5" data-rl-inverse-x>
       </label>
       <span data-rl-inverse-readout></span>
     </figcaption>
   </figure>

Logaritmus és a negyedik nevezetes határérték
---------------------------------------------

Az :math:`e^x:\mathbb R\to(0,+\infty)` inverze
:math:`\ln:(0,+\infty)\to\mathbb R`. Ha :math:`t=\ln(1+x)`,
akkor :math:`x=e^t-1`, és :math:`x\to0` esetén :math:`t\to0`. Ezért

.. math::

   \boxed{\lim_{x\to0}\frac{\ln(1+x)}x
   =\lim_{t\to0}\frac{t}{e^t-1}=1}.

Az ábrán a :math:`\ln(1+x)` görbéje az origóban az :math:`y=x`
egyenest érinti.

.. raw:: html

   <figure class="rl-figure" data-rl-log>
     <svg viewBox="0 0 760 340" role="img" aria-label="A logaritmus görbéjének szelője és az y egyenlő x érintő"></svg>
     <figcaption>
       <label for="rl-log-x">Szelőpont x-értéke <output data-rl-log-value>0,80</output>
         <input id="rl-log-x" type="range" min="-0.75" max="1.4" step="0.01" value="0.8" data-rl-log-x>
       </label>
       <span data-rl-log-slope></span>
     </figcaption>
   </figure>

A négy nevezetes határérték
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Mindegyikben :math:`x\to0`:

.. list-table::
   :header-rows: 1
   :widths: 70 30

   * - Kifejezés
     - Határérték
   * - :math:`\dfrac{\sin x}{x}`
     - :math:`1`
   * - :math:`\dfrac{1-\cos x}{x^2}`
     - :math:`\tfrac12`
   * - :math:`\dfrac{e^x-1}{x}`
     - :math:`1`
   * - :math:`\dfrac{\ln(1+x)}{x}`
     - :math:`1`

Határérték és kompozíció
~~~~~~~~~~~~~~~~~~~~~~~~

Ha :math:`f(x)\to b` és :math:`g` folytonos :math:`b`-ben, akkor
:math:`g(f(x))\to g(b)`. Ha csak :math:`g(y)\to c` ismert
:math:`y\to b` mellett, akkor :math:`g(f(x))\to c` biztosan akkor
következik, ha :math:`f(x)\ne b` a vizsgált lyukas környezetben,
vagy :math:`g(b)=c`. A :math:`g` határértéke önmagában nem ír elő
semmit :math:`g(b)`-ről.

Egyoldali határérték és szakadás
--------------------------------

A :math:`\lim_{x\to u-}f(x)` csak :math:`x<u`, a
:math:`\lim_{x\to u+}f(x)` csak :math:`x>u` pontokat vizsgál.
Ha a tartomány mindkét oldalról torlódik :math:`u`-ban,
a kétoldali véges határérték akkor és csak akkor létezik,
ha az egyoldaliak végesek és egyenlők.

.. raw:: html

   <figure class="rl-figure" data-rl-one-sided>
     <svg viewBox="0 0 760 320" role="img" aria-label="Ugrás: a bal és jobb oldali határérték különbözik"></svg>
     <figcaption>Balról 1, jobbról 2 felé tart a görbe. A pontbeli érték külön jelölve látható.</figcaption>
   </figure>

Véges, két oldalról torlódási pontban **szakadás** van,
ha a függvény nincs ott értelmezve, vagy a határértéke
nem létezik, vagy eltér a pontbeli értéktől.

* **Elsőfajú:** mindkét egyoldali határérték véges.
  Ha egyenlők, de a pont hiányzik vagy más értéke van,
  a szakadás **megszüntethető**. Ha eltérnek, **ugrás**.
* **Másodfajú:** legalább az egyik egyoldali határérték
  nem létezik véges számként.

Tartomány végpontján a hiányzó másik oldalt nem tekintjük szakadásnak:
a tartomány felőli közelítés számít.

Folytonosság
------------

Ha :math:`u\in D` és a :math:`D` torlódási pontja, akkor
:math:`f` **folytonos** :math:`u`-ban pontosan akkor, ha

.. math::

   \lim_{\substack{x\to u\\x\in D}}f(x)=f(u).

Az epszilonos megfogalmazás minden :math:`u\in D`-re használható,
és csak tartománybeli pontokat vizsgál:

.. math::

   \forall\varepsilon>0\ \exists\delta>0\ \forall x\in D:
   \quad |x-u|<\delta\Longrightarrow |f(x)-f(u)|<\varepsilon.

Izolált tartománybeli pontban a folytonosság automatikus.
A határértékes alakot csak torlódási pontban használjuk.

Oszcilláló ellenpélda
~~~~~~~~~~~~~~~~~~~~~

Az :math:`f(x)=\sin(1/x)`, :math:`x\ne0` függvénynek nincs
határértéke :math:`0`-ban, mert

.. math::

   x_n=\frac1{\pi/2+2n\pi}\to0,\quad f(x_n)=1,
   \qquad
   y_n=\frac1{3\pi/2+2n\pi}\to0,\quad f(y_n)=-1.

A két értéksorozat eltérő. Az ábrán a hozzájuk
tartozó pontok külön színnel láthatók.

.. raw:: html

   <figure class="rl-figure" data-rl-wild>
     <svg viewBox="0 0 760 330" role="img" aria-label="A sin egy per x oszcillációi, két eltérő értékhez tartó pontsorozattal"></svg>
     <figcaption>Az 1-et és −1-et adó pontok egyaránt a 0 felé sűrűsödnek.</figcaption>
   </figure>
