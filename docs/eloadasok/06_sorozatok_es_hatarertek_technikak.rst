.. _eloadas-06-sorozatok-es-hatarertek-technikak:

Sorozatok és határérték-technikák
=================================

.. rubric:: Első előadás — 90 perc

A sorozat mint függvény
-----------------------

Egy **valós számsorozat** függvény: :math:`a:\mathbb N\to\mathbb R,\ n\mapsto a_n`,
ahol :math:`\mathbb N=\{1,2,\ldots\}`. A kibővített valós számokban
:math:`\mathbb N'=\{+\infty\}`: véges pont körül csak véges sok természetes
szám van. Ez az **argumentum** egyetlen torlódási pontja, nem a sorozat
lehetséges határértékeinek korlátozása.

.. math::

   \lim_{n\to+\infty}a_n=A
   \quad\Longleftrightarrow\quad
   \forall\varepsilon>0\ \exists N\in\mathbb N\
   \forall n\geq N:\ |a_n-A|<\varepsilon
   \qquad(A\in\mathbb R).

Ez az előző előadás függvényhatárérték-definíciója :math:`n\to+\infty` esetén.

Monoton, korlátos sorozat
~~~~~~~~~~~~~~~~~~~~~~~~~

Ha :math:`a_n\leq a_{n+1}` és a sorozat felülről korlátos, akkor
:math:`\lim_{n\to+\infty}a_n=S=\sup\{a_n:n\in\mathbb N\}`.
Minden :math:`\varepsilon>0`-hoz van :math:`a_N>S-\varepsilon`;
így :math:`n\geq N` esetén
:math:`S-\varepsilon<a_N\leq a_n\leq S`.
Csökkenő, alulról korlátos sorozatra az infimum adja a határértéket.

.. raw:: html

   <figure class="sl-figure" data-sl-monotone>
     <svg viewBox="0 0 700 270" role="img" aria-label="Monoton növekvő és felülről korlátos sorozat"></svg>
     <figcaption>
       <span>\(a_n=S-2/(n+1)^p\)</span>
       <label>S <output data-sl-out="limit"></output><input type="range" data-sl-input="limit" min="1" max="3" step="0.1" value="2"></label>
       <label>p <output data-sl-out="power"></output><input type="range" data-sl-input="power" min="0.4" max="2" step="0.1" value="0.8"></label>
       <label>Tagok <output data-sl-out="count"></output><input type="range" data-sl-input="count" min="8" max="40" step="1" value="24"></label>
     </figcaption>
   </figure>

Váltakozás és részsorozati határértékek
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A :math:`b_n=(-1)^n/n^p` sorozat :math:`p>0` esetén nullához tart, mert
:math:`|b_n|=1/n^p\to0`. **Ennek csak egy részsorozati határértéke van: 0.**

.. raw:: html

   <figure class="sl-figure" data-sl-alternating>
     <svg viewBox="0 0 700 270" role="img" aria-label="Váltakozó előjelű, nullához tartó sorozat"></svg>
     <figcaption>
       <span>\(b_n=(-1)^n/n^p\)</span>
       <label>p <output data-sl-out="power"></output><input type="range" data-sl-input="power" min="0.3" max="1.8" step="0.1" value="1"></label>
       <label>Tagok <output data-sl-out="count"></output><input type="range" data-sl-input="count" min="8" max="40" step="1" value="26"></label>
     </figcaption>
   </figure>

Két különböző részsorozati határértékhez változtassuk a paramétereket:

.. math::

   c_n=\mu+(-1)^n(d+n^{-p}),\qquad d\geq0,\ p>0.

.. math::

   \begin{aligned}
   \lim_{k\to+\infty}c_{2k}&=\mu+d,\\
   \lim_{k\to+\infty}c_{2k+1}&=\mu-d.
   \end{aligned}

Ha :math:`d>0`, a két határérték különböző, ezért :math:`(c_n)` nem konvergens.
Ha :math:`\mu=d=0,\ p=1`, a :math:`(-1)^n/n` példát kapjuk vissza.

.. raw:: html

   <figure class="sl-figure" data-sl-clusters>
     <svg viewBox="0 0 700 270" role="img" aria-label="Páros és páratlan részsorozatok különböző határértékei"></svg>
     <figcaption>
       <span>\(c_n=\mu+(-1)^n(d+n^{-p})\)</span>
       <label>μ <output data-sl-out="center"></output><input type="range" data-sl-input="center" min="-1" max="1" step="0.1" value="0"></label>
       <label>d <output data-sl-out="gap"></output><input type="range" data-sl-input="gap" min="0" max="1.5" step="0.1" value="0.7"></label>
       <label>p <output data-sl-out="power"></output><input type="range" data-sl-input="power" min="0.4" max="1.8" step="0.1" value="1"></label>
       <label>Tagok <output data-sl-out="count"></output><input type="range" data-sl-input="count" min="8" max="40" step="1" value="28"></label>
     </figcaption>
   </figure>

Határozatlan alakok
-------------------

A :math:`0/0`, :math:`\infty/\infty` és :math:`\infty-\infty`
**nem számok**: a részek határértéke önmagában nem dönti el az egészét.

.. list-table:: Ugyanaz az alak, eltérő eredmény
   :header-rows: 1
   :widths: 18 41 41

   * - Alak
     - Egyik példa
     - Másik példa
   * - :math:`0/0`
     - :math:`\lim_{x\to0}x/x=1`
     - :math:`\lim_{x\to0}x^2/x=0`
   * - :math:`\infty/\infty`
     - :math:`\lim_{n\to+\infty}n/n=1`
     - :math:`\lim_{n\to+\infty}n/n^2=0`
   * - :math:`\infty-\infty`
     - :math:`\lim_{n\to+\infty}(n-n)=0`
     - :math:`\lim_{n\to+\infty}((n+1)-n)=1`

A :math:`0\cdot\infty`, :math:`1^\infty` és :math:`\infty^0` is
határozatlan alak. Mindig az adott kifejezést alakítjuk át.

Racionális törtek a végtelenben
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A nevező legmagasabb fokú tagjának hatványával osztunk:

.. math::

   \lim_{x\to+\infty}\frac{x^4-7x+1}{4x^4+4x+5}
   =\lim_{x\to+\infty}\frac{1-7/x^3+1/x^4}{4+4/x^3+5/x^4}
   =\frac14.

Sorozatnál ugyanígy:

.. math::

   \lim_{n\to+\infty}\frac{n^3+8n-3}{n^4+7n+1}
   =\lim_{n\to+\infty}
    \frac{1/n+8/n^3-3/n^4}{1+7/n^3+1/n^4}=0.

Gyökök különbsége
~~~~~~~~~~~~~~~~~

A konjugálttal szorzás feloldja a :math:`+\infty-(+\infty)` alakot:

.. math::

   0<\sqrt{n+5}-\sqrt{n+2}
    =\frac3{\sqrt{n+5}+\sqrt{n+2}}
    \leq\frac3{2\sqrt n}\xrightarrow[n\to+\infty]{}0.

A rendőrelv adja a határértéket. Közvetlenül: ha
:math:`\varepsilon>0` és :math:`N>(3/(2\varepsilon))^2`, akkor
:math:`n\geq N` esetén
:math:`0<\sqrt{n+5}-\sqrt{n+2}<\varepsilon`.
A :math:`1/\infty=0` csak emlékeztető, nem végtelennel végzett osztás.

Miért elegendők a sorozatok?
----------------------------

**A függvényhatárérték sorozatos jellemzése.**
Legyen :math:`f:D\to\mathbb R`, :math:`u\in D'`, :math:`A\in\mathbb R`. Ekkor

.. math::

   \lim_{x\to u}f(x)=A
   \quad\Longleftrightarrow\quad
   \text{minden }x_n\in D\setminus\{u\},\
   x_n\to u\text{ esetén }f(x_n)\to A.

A balról jobbra irány a határérték definíciója. Megfordítva, ha
a függvény nem tartana :math:`A`-hoz, lenne :math:`\varepsilon_0>0`,
és minden :math:`1/n` sugarú lyukas környezetben választhatnánk
:math:`x_n\in D`-t, amelyre :math:`|f(x_n)-A|\geq\varepsilon_0`.
Ez ellentmondás. :math:`u=+\infty` esetén :math:`x_n>n`-t,
:math:`u=-\infty` esetén :math:`x_n<-n`-t választunk.
**Egyetlen** kiválasztott sorozat csak szükséges próbát ad;
a megfordításhoz minden odatartó sorozat kell.

Az előző előadás
:math:`\lim_{x\to0}(e^x-1)/x=1` határértékébe
:math:`x_n=1/n`-t helyettesítve:

.. math::

   \lim_{n\to+\infty}n(e^{1/n}-1)=1.

A szokásos Euler-sorozathoz **még** a logaritmus határértéke kell:
:math:`\lim_{x\to0}\ln(1+x)/x=1` miatt

.. math::

   \lim_{n\to+\infty}n\ln(1+1/n)=1,\qquad
   \lim_{n\to+\infty}(1+1/n)^n=e.

Tört hatványok összehasonlítása
-------------------------------

A gyökök miatt nullában jobb oldali határértéket veszünk:

.. math::

   F(x)=\frac{\sqrt x+\sqrt[3]x}{\sqrt[5]x+3\sqrt x},\qquad x>0.

A végtelenben a legnagyobb kitevővel, :math:`x^{1/2}`-del osztunk;
nullában a legkisebb, :math:`x^{1/5}` a célszerű:

.. math::

   \lim_{x\to+\infty}F(x)
    =\lim_{x\to+\infty}\frac{1+x^{-1/6}}{x^{-3/10}+3}
    =\frac13,

.. math::

   \lim_{x\to0+}F(x)
    =\lim_{x\to0+}\frac{x^{3/10}+x^{2/15}}{1+3x^{3/10}}
    =0.

Egyoldali határértékek: hat különböző viselkedés
------------------------------------------------

A csúszkával a nulla környezetét nagyíthatják.
Az üres kör azt jelzi, hogy a függvény ott nincs értelmezve.

.. raw:: html

   <figure class="sl-figure sl-one-sided" data-sl-one-sided>
     <div class="sl-cards">
       <div><h3>\((1-\cos x)/x^2\)</h3><svg viewBox="0 0 320 190" data-sl-fn="cos" role="img" aria-label="Folytonossá tehető szakadási hely"></svg><p>Mindkét oldalról \(1/2\); folytonossá tehető.</p></div>
       <div><h3>\(\operatorname{sgn}x\)</h3><svg viewBox="0 0 320 190" data-sl-fn="sign" role="img" aria-label="Balról mínusz egy, jobbról plusz egy"></svg><p>Balról −1, jobbról +1: ugrás.</p></div>
       <div><h3>\(e^{1/x}\)</h3><svg viewBox="0 0 320 190" data-sl-fn="exp" role="img" aria-label="Balról nulla, jobbról plusz végtelen"></svg><p>Balról 0, jobbról \(+\infty\).</p></div>
       <div><h3>\(\sin(1/x)\)</h3><svg viewBox="0 0 320 190" data-sl-fn="sin" role="img" aria-label="Sűrűsödő oszcilláció a nulla közelében"></svg><p>Egyik oldali határérték sem létezik.</p></div>
       <div><h3>\(1/x\)</h3><svg viewBox="0 0 320 190" data-sl-fn="reciprocal" role="img" aria-label="Balról mínusz végtelen, jobbról plusz végtelen"></svg><p>Balról \(−\infty\), jobbról \(+\infty\).</p></div>
       <div><h3>\(1/x^2\)</h3><svg viewBox="0 0 320 190" data-sl-fn="square" role="img" aria-label="Mindkét oldalról plusz végtelen"></svg><p>Mindkét oldalról \(+\infty\); véges kiterjesztés nincs.</p></div>
     </div>
     <figcaption><label>Vízszintes tartomány: ±<output data-sl-out="zoom"></output><input type="range" data-sl-input="zoom" min="0.25" max="2.5" step="0.05" value="1.5"></label></figcaption>
   </figure>

Nevezetes határértékek átírással
--------------------------------

Ha :math:`t=3x`, akkor
:math:`\lim_{x\to0}\sin(3x)/x=3\lim_{t\to0}\sin t/t=3`.
Más példáknál is az a cél, hogy a számláló és a nevező ugyanarra
a belső változóra épüljön.

.. admonition:: Házi feladat — a 6. gyakorlat 3. feladata

   Számítsák ki átírással, a négy nevezetes határérték segítségével:

   .. math::

      \begin{aligned}
      \mathrm{a)}\;&\lim_{x\to0}\frac{\sin(3x)}{x},&
      \mathrm{b)}\;&\lim_{x\to0}\frac{1-\cos(3x^2)}{x^2},\\
      \mathrm{c)}\;&\lim_{x\to0}\frac{e^{\sin(5x)}-1}{x},&
      \mathrm{d)}\;&\lim_{x\to0}\frac{\ln(1+x^2)}{\sin(x^2)}.
      \end{aligned}

   Az a) megoldása fent látható; a többi önálló gyakorlás.
   `Az eredeti feladatsor PDF-je
   <https://github.com/mozow01/A1-vill-2026/blob/main/Gyakorlatok/6_a1_vill_26.pdf>`_.

Az előadás itt ér véget; a második 90 percben csak további példákat
dolgoznak fel.
