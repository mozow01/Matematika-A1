.. _eloadas-09:

9. előadás: A deriválás alkalmazásai – függvényvizsgálat
========================================================

Az előadás célja, hogy a deriváltból a függvény alakjára
következtessünk. Először azonban egy deriváltmentes történeti
ötletet nézünk meg: hogyan keresett Descartes szélsőértéket egy
egyenlet két gyökének egybeesésével?

Descartes-féle megközelítés
---------------------------

Vizsgáljuk az

.. math::

   f(x)=x+\frac1x,
   \qquad
   \operatorname{Dom}(f)=\mathbb R\setminus\{0\}

függvényt. A :math:`y=c` vízszintes egyenes és a grafikon
metszéspontjainak első koordinátái az

.. math::

   x+\frac1x=c

egyenlet gyökei. Mivel :math:`x\neq0`,

.. math::

   x^2-cx+1=0.

A vízszintes egyenes éppen akkor érinti a grafikont, amikor a
két metszéspont egybeesik, vagyis a másodfokú egyenletnek
kettős gyöke van:

.. math::

   \Delta=c^2-4=0
   \quad\Longleftrightarrow\quad
   c=\pm2.

A kettős gyök

.. math::

   x=\frac c2,

tehát a két érintési pont

.. math::

   (-1,-2)
   \qquad\text{és}\qquad
   (1,2).

Ez valóban megadja a két lokális szélsőértéket. Ha
:math:`x>0`, akkor :math:`x+1/x` nem vehet fel :math:`2`-nél
kisebb pozitív értéket, mert :math:`|c|<2` esetén az egyenletnek
nincs valós gyöke. Ezért :math:`f(1)=2` a pozitív ág minimuma.
Hasonlóan :math:`f(-1)=-2` a negatív ág maximuma.

.. raw:: html

   <figure class="l9-figure" data-l9-descartes>
     <svg viewBox="0 0 820 430" role="img" aria-label="Az x plusz egy per x függvény és az y egyenlő c szintegyenes metszéspontjai"></svg>
     <div class="l9-controls">
       <button type="button" data-level="-2">c = −2</button>
       <label>Szint: <input data-level-slider type="range" min="-3.4" max="3.4" step="0.1" value="2"></label>
       <output data-level-output>c = 2.0</output>
       <button type="button" data-level="2">c = 2</button>
     </div>
     <figcaption>A kettős gyök pillanatában a szintegyenes érinti a grafikont. A két kiemelt helyzet: c = −2 és c = 2.</figcaption>
   </figure>

Lokális szélsőérték
-------------------

.. admonition:: Definíció — lokális minimum és maximum

   Legyen :math:`u\in\operatorname{Dom}(f)`.

   * Az :math:`f` függvénynek **lokális minimuma** van
     :math:`u`-ban, ha

     .. math::

        \exists\delta>0\ \forall x\in
        \operatorname{Dom}(f)\cap B_\delta(u):
        \qquad f(u)\leq f(x).

   * Az :math:`f` függvénynek **lokális maximuma** van
     :math:`u`-ban, ha

     .. math::

        \exists\delta>0\ \forall x\in
        \operatorname{Dom}(f)\cap B_\delta(u):
        \qquad f(x)\leq f(u).

A minimum és a maximum közös neve **lokális szélsőérték**.
Ha az egyenlőség csak :math:`x=u` esetén állhat fenn, akkor
szigorú lokális minimumról, illetve maximumról beszélünk.

.. raw:: html

   <figure class="l9-figure" data-l9-extrema>
     <svg viewBox="0 0 820 300" role="img" aria-label="Lokális minimum és lokális maximum delta sugarú környezetben"></svg>
     <figcaption>A „lokális” szó azt jelenti, hogy az összehasonlítás csak egy megfelelő Bδ(u) környezeten belül történik.</figcaption>
   </figure>

Fermat-féle szélsőértéktétel
----------------------------

.. admonition:: Tétel — Fermat

   Tegyük fel, hogy

   #. :math:`u\in\operatorname{int}\operatorname{Dom}(f)`;
   #. :math:`f`-nek :math:`u`-ban lokális szélsőértéke van;
   #. :math:`f` deriválható :math:`u`-ban.

   Ekkor

   .. math::

      f'(u)=0.

Ez a lokális szélsőérték létezésének **analitikus szükséges
feltétele**. Nem azt állítja, hogy minden
:math:`f'(u)=0` hely szélsőértékhely.

**Bizonyítás az átviteli elvvel.**
Tegyük fel először, hogy :math:`u` lokális minimumhely. Mivel
:math:`u` belső pont, az

.. math::

   x_n=u+\frac{(-1)^n}{n}

sorozat tagjai elég nagy :math:`n`-re az értelmezési
tartományba és a minimumot biztosító környezetbe esnek. Legyen

.. math::

   q_n=\frac{f(x_n)-f(u)}{x_n-u}.

A differenciálhatóság és az átviteli elv miatt

.. math::

   q_n\longrightarrow f'(u).

Páros indexnél :math:`x_{2n}>u`, ezért a számláló és a nevező
is nemnegatív:

.. math::

   q_{2n}\geq0
   \quad\Longrightarrow\quad
   f'(u)\geq0.

Páratlan indexnél :math:`x_{2n+1}<u`. A számláló továbbra is
nemnegatív, a nevező viszont negatív:

.. math::

   q_{2n+1}\leq0
   \quad\Longrightarrow\quad
   f'(u)\leq0.

Így :math:`0\leq f'(u)\leq0`, tehát :math:`f'(u)=0`.
Lokális maximum esetén az egyenlőtlenségek megfordulnak, de a
következtetés ugyanaz.

.. raw:: html

   <figure class="l9-figure" data-l9-fermat>
     <svg viewBox="0 0 820 370" role="img" aria-label="A Fermat-tétel bizonyítása az u körül váltakozó sorozattal"></svg>
     <figcaption>A páros tagok jobbról nemnegatív, a páratlan tagok balról nempozitív különbségi hányadosokat adnak; közös határértékük csak 0 lehet.</figcaption>
   </figure>

Mi történik, ha egy Fermat-feltétel hiányzik?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A három legfontosabb ellenpélda:

* **Nem belső pont:** :math:`f(x)=x` az :math:`[0,1]`
  intervallumon. A :math:`0` pont minimumhely, de a jobboldali
  derivált :math:`1`.
* **Nem deriválható:** :math:`f(x)=|x|`. A :math:`0` belső
  minimumhely, de :math:`f'(0)` nem létezik.
* **A megfordítás hamis:** :math:`f(x)=x^3` esetén
  :math:`f'(0)=0`, de :math:`0` nem szélsőértékhely.

.. raw:: html

   <figure class="l9-figure" data-l9-fermat-counterexamples>
     <div class="l9-cards l9-cards-3">
       <div><h3>Végpont</h3><svg viewBox="0 0 250 210" data-l9-endpoint></svg><p>Minimum, de nem belső pont.</p></div>
       <div><h3>Csúcs</h3><svg viewBox="0 0 250 210" data-l9-corner></svg><p>Minimum, de nincs derivált.</p></div>
       <div><h3>Stacionárius átmenet</h3><svg viewBox="0 0 250 210" data-l9-cubic></svg><p>f′(0)=0, de nincs szélsőérték.</p></div>
     </div>
   </figure>

A Lagrange-féle középértéktétel
-------------------------------

.. admonition:: Tétel — Lagrange

   Legyen :math:`f:[a,b]\to\mathbb R` folytonos az
   :math:`[a,b]` zárt intervallumon és deriválható az
   :math:`(a,b)` nyílt intervallumon. Ekkor létezik olyan
   :math:`\xi\in(a,b)`, amelyre

   .. math::

      f'(\xi)=\frac{f(b)-f(a)}{b-a}.

Geometriailag: a grafikon valamelyik érintője párhuzamos a két
végpontot összekötő szelővel.

**Bizonyítás.** Jelölje a szelő meredekségét

.. math::

   m=\frac{f(b)-f(a)}{b-a},

és vonjuk ki :math:`f`-ből ezt a lineáris növekményt:

.. math::

   g(x)=f(x)-m(x-a).

Ekkor

.. math::

   g(a)=f(a)=g(b),
   \qquad
   g'(x)=f'(x)-m.

A :math:`g` folytonos :math:`[a,b]`-n, ezért a
**Weierstrass-tétel** szerint felveszi minimumát és maximumát.
Két eset van.

#. Ha :math:`\min g=\max g`, akkor :math:`g` konstans.
   Bármely :math:`\xi\in(a,b)` megfelel, mert
   :math:`g'(\xi)=0`.
#. Ha :math:`\min g\neq\max g`, akkor a két szélsőérték közül
   legalább az egyik különbözik a közös
   :math:`g(a)=g(b)` végpontértéktől. Ez a szélsőérték nem
   vétethet fel a végpontokban, tehát van egy
   :math:`\xi\in(a,b)` belső szélsőértékhely. A
   **Fermat-tétel** miatt :math:`g'(\xi)=0`.

Mindkét esetben

.. math::

   0=g'(\xi)=f'(\xi)-m,
   \qquad\text{vagyis}\qquad
   f'(\xi)=\frac{f(b)-f(a)}{b-a}.

.. important::

   A bizonyítás két korábbi eredményt kapcsol össze:

   * a **Weierstrass-tétel** biztosítja, hogy a szélsőérték
     létezik a zárt intervallumon;
   * a **Fermat-tétel** a belső szélsőértékhelyen lenullázza a
     deriváltat.

.. raw:: html

   <figure class="l9-figure" data-l9-lagrange>
     <svg viewBox="0 0 820 380" role="img" aria-label="A Lagrange-féle középértéktétel szelője és vele párhuzamos érintője"></svg>
     <figcaption>A szelő meredeksége megegyezik legalább egy belső pontbeli érintő meredekségével.</figcaption>
   </figure>

A monotonitás differenciális jellemzése
---------------------------------------

A továbbiakban a „monoton növekvő” kifejezés a nem szigorúan
növekvő, azaz nemcsökkenő függvényt jelenti.

.. admonition:: Tétel — monotonitás és a derivált előjele

   Legyen :math:`I\subseteq\mathbb R` intervallum. Tegyük fel,
   hogy :math:`f:I\to\mathbb R` folytonos :math:`I`-n és
   deriválható :math:`\operatorname{int}I`-n. Ekkor

   .. math::

      f\text{ monoton növekvő }I\text{-n}
      \quad\Longleftrightarrow\quad
      f'(x)\geq0
      \quad(x\in\operatorname{int}I).

**A monotonitásból következik a derivált előjele.**
Rögzítsünk egy :math:`x\in\operatorname{int}I` pontot. Ha
:math:`h>0`, akkor a monotonitás miatt
:math:`f(x+h)-f(x)\geq0`; ha :math:`h<0`, akkor a számláló
és a nevező is nempozitív. Ezért mindkét oldalról

.. math::

   \frac{f(x+h)-f(x)}h\geq0.

A határérték is nemnegatív, tehát :math:`f'(x)\geq0`.

**A derivált előjeléből következik a monotonitás.**
Legyen :math:`x<y`, :math:`x,y\in I`. A Lagrange-tétel
szerint van :math:`\xi\in(x,y)`, amelyre

.. math::

   f(y)-f(x)=f'(\xi)(y-x)\geq0.

Tehát :math:`f(x)\leq f(y)`.

.. raw:: html

   <figure class="l9-figure" data-l9-monotonicity>
     <svg viewBox="0 0 820 330" role="img" aria-label="Monoton növekvő függvény, nemnegatív érintő- és szelőmeredekségek"></svg>
     <figcaption>A Lagrange-tétel a globális f(y)−f(x) növekményt egy belső deriváltértékkel köti össze.</figcaption>
   </figure>

Szigorú monotonitás
~~~~~~~~~~~~~~~~~~~

.. admonition:: Elégséges feltétel

   Ha :math:`f:I\to\mathbb R` folytonos az :math:`I`
   intervallumon, deriválható :math:`\operatorname{int}I`-n, és

   .. math::

      f'(x)>0
      \qquad(x\in\operatorname{int}I),

   akkor :math:`f` szigorúan monoton növekvő.

Valóban, :math:`x<y` esetén a Lagrange-tétellel

.. math::

   f(y)-f(x)=f'(\xi)(y-x)>0.

A megfordítás nem igaz. Az :math:`f(x)=x^3` függvény
szigorúan monoton növekvő, miközben :math:`f'(0)=0`.

.. raw:: html

   <figure class="l9-figure" data-l9-strict>
     <svg viewBox="0 0 820 310" role="img" aria-label="Az x köb függvény szigorúan növekszik, de az origóban vízszintes az érintője"></svg>
     <figcaption>A szigorú növekedés nem követeli meg, hogy a derivált minden pontban szigorúan pozitív legyen.</figcaption>
   </figure>

Elégséges feltételek lokális szélsőértékre
---------------------------------------------

Az első derivált előjelváltása
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Tétel — első derivált próba

   Legyen :math:`u\in\operatorname{int}\operatorname{Dom}(f)`,
   és tegyük fel, hogy :math:`f` folytonos :math:`u`-ban.
   Ha valamely :math:`\delta>0` mellett

   .. math::

      f'(x)<0\quad(u-\delta<x<u),
      \qquad
      f'(x)>0\quad(u<x<u+\delta),

   akkor :math:`u` szigorú lokális minimumhely.

   Ha az előjelek fordítottak, akkor :math:`u` szigorú
   lokális maximumhely.

**Bizonyítás.** Legyen először :math:`u-\delta<x<u`. A
függvény folytonos :math:`[x,u]`-n és deriválható
:math:`(x,u)`-n, ezért a Lagrange-féle középértéktétel szerint
van olyan :math:`\xi\in(x,u)`, hogy

.. math::

   \frac{f(u)-f(x)}{u-x}=f'(\xi)<0.

Mivel :math:`u-x>0`, ezért :math:`f(u)<f(x)`.

Ha :math:`u<x<u+\delta`, akkor hasonlóan van olyan
:math:`\eta\in(u,x)`, amelyre

.. math::

   \frac{f(x)-f(u)}{x-u}=f'(\eta)>0,

tehát ismét :math:`f(x)>f(u)`. Így :math:`u` szigorú lokális
minimumhely. A maximum esete ugyanígy következik, fordított
előjelekkel.

Az :math:`u`-beli folytonosságot pontosan a középértéktétel
zárt intervallumán használjuk; :math:`u`-ban nem szükséges a
deriválhatóság.

.. important::

   A **negatívból pozitívba** váltó derivált lokális
   **minimumot**, nem maximumot jelent. Ez az előjelváltási
   feltétel a folytonossággal együtt önmagában elégséges; nem
   szükséges hozzá a második derivált próba.

A második derivált próba
~~~~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Tétel — második derivált próba

   Legyen :math:`u\in\operatorname{int}\operatorname{Dom}(f)`,
   és legyen :math:`f` kétszer deriválható :math:`u` egy
   környezetében. Tegyük fel, hogy :math:`f'(u)=0`.

   * Ha :math:`f''(u)>0`, akkor :math:`u` szigorú lokális
     minimumhely.
   * Ha :math:`f''(u)<0`, akkor :math:`u` szigorú lokális
     maximumhely.

**Bizonyítás.** Tegyük fel, hogy :math:`f''(u)>0`. A második
derivált definíciója és :math:`f'(u)=0` miatt

.. math::

   \lim_{x\to u}\frac{f'(x)}{x-u}=f''(u)>0.

Ezért a hányados egy megfelelő lyukas környezetben pozitív. Ha
:math:`x<u`, akkor :math:`x-u<0`, tehát :math:`f'(x)<0`;
ha :math:`x>u`, akkor :math:`f'(x)>0`. Az első derivált
próba lokális minimumot ad. A :math:`f''(u)<0` esetben az
előjelek megfordulnak, ezért lokális maximumot kapunk.

A feltételek szerepe:

* :math:`f(x)=x+x^2` esetén :math:`f''(0)=2>0`, de
  :math:`f'(0)=1`, és :math:`0` nem szélsőértékhely.
* :math:`f(x)=x^4` esetén :math:`f'(0)=f''(0)=0`, mégis
  szigorú lokális minimum van. A második derivált próba itt
  nem alkalmazható, de az első derivált előjelváltása dönt.
* :math:`f(x)=|x|` esetén az első derivált próba a két
  félegyenesen működik, noha :math:`f'(0)` nem létezik.

.. admonition:: Lapos minimum — az előjelváltás többet lát

   Tekintsük a

   .. math::

      f(x)=
      \begin{cases}
      e^{-1/x^2},&x\neq 0,\\
      0,&x=0
      \end{cases}

   függvényt. Ha :math:`x\neq 0`, akkor

   .. math::

      f'(x)=\frac{2}{x^3}e^{-1/x^2}.

   Ez :math:`x<0` esetén negatív, :math:`x>0` esetén pozitív,
   tehát az első derivált előjelváltása alapján :math:`0`
   szigorú lokális minimumhely. Ugyanakkor

   .. math::

      f^{(k)}(0)=0\qquad (k=1,2,3,\ldots),

   így a minimumot egyetlen véges rendű deriváltpróba sem
   ismeri fel. Valóban, :math:`x\neq0` esetén minden
   :math:`f^{(k)}(x)` egy :math:`1/x`-ben vett polinom és az
   :math:`e^{-1/x^2}` szorzata; az exponenciális tényező
   :math:`x\to0` esetén minden ilyen hatványt legyőz.

.. note:: Magasabb rendű deriváltpróba

   Ha :math:`f'(u)=\cdots=f^{(m-1)}(u)=0`, és
   :math:`f^{(m)}(u)` az első nem nulla derivált, akkor páros
   :math:`m` esetén a pozitív előjel minimumot, a negatív
   előjel maximumot ad; páratlan :math:`m` esetén nincs
   lokális szélsőérték. A fenti lapos függvénynél ilyen véges
   :math:`m` nem létezik.

.. raw:: html

   <figure class="l9-figure" data-l9-extremum-tests>
     <svg viewBox="0 0 820 390" role="img" aria-label="Az első és a második derivált szélsőértékpróbáinak előjelábrái"></svg>
     <figcaption>Az első derivált próba közvetlenül az előjelváltást figyeli; a második derivált próba ezt az előjelváltást kényszeríti ki a stacionárius pont körül.</figcaption>
   </figure>

Konvexitás, konkávitás és inflexió
----------------------------------

.. admonition:: Definíció

   Legyen :math:`I\subseteq\mathbb R` intervallum és
   :math:`f:I\to\mathbb R`.

   A függvény **konvex** az :math:`I` intervallumon, ha minden
   :math:`x,y\in I` és :math:`\lambda\in[0,1]` esetén

   .. math::

      f\bigl((1-\lambda)x+\lambda y\bigr)
      \leq
      (1-\lambda)f(x)+\lambda f(y).

   A függvény **konkáv**, ha az egyenlőtlenség fordított
   irányú. Geometriailag a konvex függvény grafikonja a
   húr alatt, a konkáv függvény grafikonja a húr felett
   helyezkedik el.

.. raw:: html

   <figure class="l9-figure" data-l9-convexity>
     <svg viewBox="0 0 820 330" role="img" aria-label="Konvex és konkáv függvény húrjának összehasonlítása a grafikonnal"></svg>
     <figcaption>Konvex esetben a húr a grafikon fölött, konkáv esetben a grafikon alatt fut.</figcaption>
   </figure>

.. admonition:: Tétel — jellemzés deriváltakkal

   Legyen :math:`f` kétszer deriválható az :math:`I`
   intervallum belsejében és folytonos az esetleges
   végpontokban. Ekkor

   .. math::

      f\text{ konvex }I\text{-n}
      \quad\Longleftrightarrow\quad
      f''(x)\geq0
      \quad(x\in\operatorname{int}I),

   és

   .. math::

      f\text{ konkáv }I\text{-n}
      \quad\Longleftrightarrow\quad
      f''(x)\leq0
      \quad(x\in\operatorname{int}I).

**Bizonyítási gondolat.** A :math:`f''\geq0` feltétel pontosan
azt jelenti, hogy :math:`f'` monoton nő. Ha :math:`x<z<y`,
a Lagrange-féle középértéktétel két alkalmazásával

.. math::

   \frac{f(z)-f(x)}{z-x}
   \leq
   \frac{f(y)-f(z)}{y-z}.

Ez átrendezve éppen azt mondja, hogy a grafikon :math:`z`-hez
tartozó pontja az :math:`x` és :math:`y` fölötti pontokat
összekötő húr alatt van. A fordított irányban a húrok
meredekségeinek rendezéséből :math:`f'` monotonitása, majd
:math:`f''\geq0` következik. A konkáv esetet :math:`-f`
konvexitására alkalmazva kapjuk.

.. admonition:: Definíció — inflexiós pont

   Az :math:`u\in\operatorname{int}I` pont **inflexiós pont**,
   ha :math:`f` konvexitása :math:`u`-ban megváltozik:
   az egyik oldalon konvex, a másikon konkáv.

Ha :math:`f''` előjelet vált :math:`u`-ban, akkor :math:`u`
inflexiós pont. A :math:`f''(u)=0` egyenlőség önmagában nem
elegendő: :math:`x^3`-nak inflexiós pontja van :math:`0`-ban,
:math:`x^4`-nek nincs.

Három függvényvizsgálati példa
------------------------------

1. Nem triviális trigonometrikus példa
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Vizsgáljuk a

.. math::

   f(x)=\sin x+\frac12\sin 2x,
   \qquad x\in[0,2\pi]

függvényt. Az első derivált

.. math::

   f'(x)=\cos x+\cos2x
        =2\cos^2x+\cos x-1
        =(2\cos x-1)(\cos x+1).

Ezért a stacionárius pontok

.. math::

   x=\frac{\pi}{3},\qquad x=\pi,\qquad
   x=\frac{5\pi}{3}.

A derivált pozitív :math:`(0,\pi/3)` és
:math:`(5\pi/3,2\pi)` intervallumokon, negatív
:math:`(\pi/3,\pi)` és :math:`(\pi,5\pi/3)` intervallumokon.
Ezért :math:`f` szigorúan nő :math:`[0,\pi/3]`-on, szigorúan
csökken :math:`[\pi/3,5\pi/3]`-on, majd ismét szigorúan nő
:math:`[5\pi/3,2\pi]`-on. A :math:`\pi` pontban eltűnő
derivált nem szakítja meg a csökkenést.
Tehát

.. math::

   f\left(\frac{\pi}{3}\right)=\frac{3\sqrt3}{4}
   \quad\text{maximum},\qquad
   f\left(\frac{5\pi}{3}\right)=-\frac{3\sqrt3}{4}
   \quad\text{minimum}.

Az :math:`x=\pi` pontban az érintő vízszintes, de nincs
szélsőérték, mert :math:`f'` nem vált előjelet.

A második derivált

.. math::

   f''(x)=-\sin x-2\sin2x
         =-\sin x(1+4\cos x).

Ha :math:`\alpha=\arccos(-1/4)`, akkor az intervallum belső
inflexiós pontjai

.. math::

   \alpha,\qquad \pi,\qquad 2\pi-\alpha.

A függvény konkáv :math:`(0,\alpha)` és
:math:`(\pi,2\pi-\alpha)` intervallumokon, konvex
:math:`(\alpha,\pi)` és :math:`(2\pi-\alpha,2\pi)`
intervallumokon.

.. raw:: html

   <figure class="l9-figure" data-l9-trig-example>
     <svg viewBox="0 0 820 390" role="img" aria-label="A szinusz x plusz egyketted szinusz 2x függvény vizsgálata"></svg>
     <figcaption>A π-beli vízszintes érintő nem jelent szélsőértéket; ugyanitt a konvexitás viszont megváltozik.</figcaption>
   </figure>

2. Exponenciális példa
~~~~~~~~~~~~~~~~~~~~~~

Legyen

.. math::

   f(x)=(x+2)e^x.

Mivel :math:`e^x>0`,

.. math::

   f'(x)=(x+3)e^x

előjelét kizárólag :math:`x+3` határozza meg. A függvény
szigorúan csökken :math:`(-\infty,-3)`-on és szigorúan nő
:math:`(-3,\infty)`-n, ezért

.. math::

   f(-3)=-e^{-3}

az abszolút minimuma. Továbbá

.. math::

   f''(x)=(x+4)e^x.

Így :math:`f` konkáv :math:`(-\infty,-4)`-en, konvex
:math:`(-4,\infty)`-n, és

.. math::

   \left(-4,-2e^{-4}\right)

inflexiós pont.

.. raw:: html

   <figure class="l9-figure" data-l9-exp-example>
     <svg viewBox="0 0 820 350" role="img" aria-label="Az x plusz 2 szer e az x-ediken függvény vizsgálata"></svg>
     <figcaption>Az inflexiós pont x-koordinátája −4, a minimumhelyé −3.</figcaption>
   </figure>

3. Polinom vízszintes érintővel és minimummal
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Legyen

.. math::

   p(x)=3x^4-4x^3.

Ekkor

.. math::

   p'(x)=12x^2(x-1).

A derivált :math:`x<1` esetén negatív, kivéve, hogy
:math:`p'(0)=0`; :math:`x>1` esetén pozitív. Ezért
:math:`p` szigorúan csökken :math:`(-\infty,1)`-en és
szigorúan nő :math:`(1,\infty)`-n. Következésképpen

.. math::

   p(1)=-1

az abszolút minimum. Az :math:`x=0` pontban a minimumon
kívül egy másik vízszintes érintőt kapunk, de ott nincs
szélsőérték.

A második derivált

.. math::

   p''(x)=12x(3x-2).

Innen :math:`p` konvex :math:`(-\infty,0)`-n, konkáv
:math:`(0,2/3)`-on, majd ismét konvex
:math:`(2/3,\infty)`-n. Az inflexiós pontok:

.. math::

   (0,0),\qquad
   \left(\frac23,-\frac{16}{27}\right).

Az első közülük **vízszintes érintőjű inflexiós pont**.

.. raw:: html

   <figure class="l9-figure" data-l9-polynomial-example>
     <svg viewBox="0 0 820 370" role="img" aria-label="A 3x a negyediken mínusz 4x a köbön polinom vizsgálata"></svg>
     <figcaption>A 0-beli vízszintes érintő inflexiós pontot, az 1-beli vízszintes érintő abszolút minimumot jelez.</figcaption>
   </figure>

Függvényvizsgálati vázlat
-------------------------

Egy valós függvény grafikonjának felrajzolásakor célszerű az
alábbi sorrendet követni:

#. :math:`\operatorname{Dom}(f)`, szimmetriák, zérushelyek és
   előjel;
#. határértékek az értelmezési tartomány határpontjaiban;
#. :math:`f'` zérushelyei és előjele: monotonitási
   intervallumok, lokális szélsőértékek;
#. :math:`f''` előjele: konvex és konkáv intervallumok,
   inflexiós pontok;
#. a kapott adatok egyeztetése és a grafikon vázlata.

Az előadás eleji példánál

.. math::

   f'(x)=1-\frac1{x^2}
        =\frac{x^2-1}{x^2},

így :math:`f'(x)=0` pontosan :math:`x=\pm1` esetén.
Az :math:`f'` pozitív :math:`(-\infty,-1)` és
:math:`(1,\infty)` intervallumokon, negatív pedig
:math:`(-1,0)` és :math:`(0,1)` intervallumokon. A függvény
tehát :math:`(-\infty,-1]`-en nő, :math:`[-1,0)`-n csökken,
:math:`(0,1]`-en csökken, végül :math:`[1,\infty)`-n nő.
Így :math:`-1` lokális maximumhely,
:math:`1` lokális minimumhely. Ugyanazt kaptuk, mint Descartes
a kettős gyök keresésével.
