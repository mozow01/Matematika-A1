.. _eloadas-10:

10. előadás: A deriváltfüggvény tulajdonságai
================================================

Ebben az előadásban nem egy konkrét függvény deriváltját
számítjuk ki, hanem azt vizsgáljuk, hogy milyen függvény lehet
egyáltalán derivált. Először a derivált korlátosságának
következményeit, majd a derivált folytonosságát és
Darboux-tulajdonságát tárgyaljuk. Végül az egyenletes
folytonossághoz jutunk.

A derivált korlátossága
-----------------------

Lipschitz-folytonosság
~~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Definíció — Lipschitz-folytonosság

   Legyen :math:`I\subseteq\mathbb R` intervallum. Az
   :math:`y:I\to\mathbb R` függvény **Lipschitz-folytonos**,
   ha van olyan :math:`L\geq0`, hogy minden :math:`s,t\in I`
   esetén

   .. math::

      |y(t)-y(s)|\leq L|t-s|.

   Ilyenkor azt is mondjuk, hogy :math:`y`
   :math:`L`-Lipschitz-folytonos.

A feltétel azt mondja, hogy a függvény két pontja közötti
szelő meredekségének abszolút értéke legfeljebb :math:`L`.
A grafikon az egyik pontjából induló, :math:`L` és
:math:`-L` meredekségű egyenesek közé szorul.

.. raw:: html

   <figure class="l10-figure" data-l10-lipschitz>
     <svg viewBox="0 0 820 370" role="img" aria-label="Lipschitz-folytonos függvény grafikonja két egyenesből álló kúpban"></svg>
     <figcaption>A korlátos derivált a grafikon minden szelőjének meredekségét ugyanazzal az L számmal korlátozza.</figcaption>
   </figure>

.. admonition:: Tétel — korlátos derivált és Lipschitz-tulajdonság

   Legyen :math:`y:I\to\mathbb R` deriválható az
   :math:`I` intervallumon, és legyen :math:`L\geq0`. Ekkor
   ekvivalensek:

   #. :math:`|y'(x)|\leq L` az intervallum minden belső
      pontjában;
   #. :math:`y` :math:`L`-Lipschitz-folytonos az
      :math:`I` intervallumon.

**Bizonyítás.** Tegyük fel először, hogy :math:`|y'|\leq L`.
Ha :math:`s<t`, akkor a Lagrange-féle középértéktétel szerint
van olyan :math:`\xi\in(s,t)`, amelyre

.. math::

   \frac{y(t)-y(s)}{t-s}=y'(\xi).

Ezért

.. math::

   |y(t)-y(s)|
   =|y'(\xi)|\,|t-s|
   \leq L|t-s|.

Fordítva tegyük fel, hogy :math:`y`
:math:`L`-Lipschitz-folytonos. Minden belső :math:`x`
pontban és minden elegendően kicsi :math:`h\neq0` esetén

.. math::

   \left|\frac{y(x+h)-y(x)}{h}\right|\leq L.

A :math:`h\to0` határátmenettel :math:`|y'(x)|\leq L`
adódik.

Alkalmazás az :math:`y'=f(x)` differenciálegyenletre
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Tekintsük az

.. math::

   y'(x)=f(x)

differenciálegyenletet egy :math:`I` intervallumon. Ha
:math:`|f(x)|\leq M` minden :math:`x\in I` esetén, akkor
minden deriválható megoldásra

.. math::

   |y'(x)|\leq M,

tehát minden megoldás :math:`M`-Lipschitz-folytonos. A
megoldás így nem változhat tetszőlegesen gyorsan:

.. math::

   |y(t)-y(s)|\leq M|t-s|.

.. important:: Egyértelműséghez kezdeti feltétel kell

   Az :math:`y'=f(x)` egyenlet megoldásai kezdeti feltétel
   nélkül additív konstansban különbözhetnek. Ha azonban
   rögzítjük az

   .. math::

      y(x_0)=y_0

   feltételt, akkor a megoldás — ha létezik — egyértelmű.
   Ha :math:`y_1` és :math:`y_2` két ilyen megoldás, akkor

   .. math::

      (y_1-y_2)'=0.

   A Lagrange-féle középértéktétel miatt :math:`y_1-y_2`
   konstans, az :math:`x_0`-beli egyezés miatt pedig ez a
   konstans nulla.

Az egyértelműséghez ebben a speciális, csak :math:`x`-től
függő egyenletben nem szükséges :math:`f` korlátossága; a
korlátosság a megoldás Lipschitz-tulajdonságát adja.


Két szakadásos derivált
~~~~~~~~~~~~~~~~~~~~~~~

**Korlátos, de nem folytonos derivált.** Legyen

.. math::

   p(x)=
   \begin{cases}
   x^2\sin\frac1x,&x\neq0,\\
   0,&x=0.
   \end{cases}

A függvény deriválható, és

.. math::

   p'(x)=
   \begin{cases}
   2x\sin\frac1x-\cos\frac1x,&x\neq0,\\
   0,&x=0.
   \end{cases}

A derivált nem folytonos :math:`0`-ban, de
:math:`[-1,1]`-en korlátos, mert :math:`|p'(x)|\leq3`.
Ezért :math:`p` ezen az intervallumon Lipschitz-folytonos.

**Nem korlátos, nem folytonos derivált.** Legyen

.. math::

   q(x)=
   \begin{cases}
   x^2\sin\frac1{x^2},&x\neq0,\\
   0,&x=0.
   \end{cases}

Ekkor

.. math::

   q'(x)=
   \begin{cases}
   2x\sin\frac1{x^2}-\dfrac2x\cos\frac1{x^2},&x\neq0,\\
   0,&x=0.
   \end{cases}

Ha :math:`x_n=1/\sqrt{2\pi n}`, akkor
:math:`x_n\to0` és

.. math::

   q'(x_n)=-\frac2{x_n}=-2\sqrt{2\pi n}\longrightarrow-\infty.

Tehát :math:`q'` nem korlátos :math:`0` egyetlen
környezetében sem, és :math:`q` nem Lipschitz-folytonos
egyetlen :math:`0`-t tartalmazó intervallumon sem.

.. raw:: html

   <figure class="l10-figure" data-l10-derivative-examples>
     <svg viewBox="0 0 820 390" role="img" aria-label="Korlátos és nem korlátos szakadásos derivált összehasonlítása"></svg>
     <figcaption>Mindkét derivált oszcillál a 0 közelében; balra az oszcilláció korlátos, jobbra az amplitúdó korlátlanul nő.</figcaption>
   </figure>

A derivált folytonossága
------------------------

Folytonos differenciálhatóság
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Definíció

   Az :math:`f:I\to\mathbb R` függvény **folytonosan
   differenciálható** az :math:`I` intervallumon, ha
   deriválható, és :math:`f'` folytonos :math:`I`-n.
   Jelölése:

   .. math::

      f\in C^1(I).

.. admonition:: Következmény — kompakt intervallumon

   Ha :math:`f\in C^1([a,b])`, akkor :math:`f`
   Lipschitz-folytonos :math:`[a,b]`-n.

Valóban, :math:`f'` folytonos a kompakt :math:`[a,b]`
intervallumon, ezért a Weierstrass-tétel szerint felveszi
abszolútértékének maximumát:

.. math::

   M=\max_{x\in[a,b]}|f'(x)|<+\infty.

Az előző tétel alapján :math:`f` :math:`M`-Lipschitz-folytonos.

A folytonos differenciálhatóság valóban erősebb a puszta
deriválhatóságnál. Az előző :math:`p` és :math:`q` függvény
deriválható :math:`0`-ban is, deriváltjuk mégsem folytonos ott.


Darboux tétele a deriváltra
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Tétel — Darboux

   Legyen :math:`I\subseteq\mathbb R` intervallum, és legyen
   :math:`f:I\to\mathbb R` deriválható. Ha
   :math:`a<b` az :math:`I` két pontja, és :math:`m` az
   :math:`f'(a)` és :math:`f'(b)` közötti szám, akkor van
   olyan :math:`\xi\in(a,b)`, amelyre

   .. math::

      f'(\xi)=m.

Vagyis a derivált két értéke között minden közbülső értéket
felvesz, még akkor is, ha maga a derivált nem folytonos.

**Bizonyítás.** Tegyük fel, hogy

.. math::

   f'(a)<m<f'(b);

a másik sorrendben :math:`-f`-re alkalmazzuk ugyanezt.
Tekintsük a

.. math::

   g(x)=f(x)-mx

függvényt :math:`[a,b]`-n. Ekkor

.. math::

   g'(x)=f'(x)-m,

tehát :math:`g'(a)<0` és :math:`g'(b)>0`. A
:math:`g'(a)<0` egyenlőtlenség miatt :math:`a`-tól jobbra
található olyan pont, ahol :math:`g(x)<g(a)`; így :math:`a`
nem lehet minimumhely. Hasonlóan, :math:`g'(b)>0` miatt
:math:`b`-től balra található olyan pont, ahol
:math:`g(x)<g(b)`; így :math:`b` sem minimumhely.

A folytonos :math:`g` a Weierstrass-tétel szerint felveszi
minimumát :math:`[a,b]`-n. Ez a minimum tehát valamely
:math:`\xi\in(a,b)` belső pontban van. A Fermat-féle
szélsőértéktétel alapján

.. math::

   0=g'(\xi)=f'(\xi)-m,

vagyis :math:`f'(\xi)=m`.

.. raw:: html

   <figure class="l10-figure" data-l10-darboux>
     <svg viewBox="0 0 820 370" role="img" aria-label="A Darboux-tétel bizonyítása az f mínusz mx függvény belső minimumával"></svg>
     <figcaption>Az mx lineáris rész levonása után a keresett f′(ξ)=m egyenlőség a g függvény belső stacionárius pontjává válik.</figcaption>
   </figure>

.. admonition:: Következmény — a derivált szakadásai

   A deriváltfüggvénynek az értelmezési tartománya egy belső
   pontjában csak **másodfajú szakadása** lehet, ha egyáltalán
   szakadása van.

Ugrásszerű szakadás nem lehet, mert az ellentmondana a
Darboux-tulajdonságnak. Megszüntethető szakadás sem lehet.
Ha ugyanis valamely :math:`u` pontban létezne a véges

.. math::

   \lim_{x\to u}f'(x)=A,

akkor a Lagrange-féle középértéktétel szerint minden
:math:`x\neq u` pont és :math:`u` között volna olyan
:math:`\xi_x`, hogy

.. math::

   \frac{f(x)-f(u)}{x-u}=f'(\xi_x).

Az :math:`x\to u` határátmenetben :math:`\xi_x\to u`, ezért
a jobb oldal :math:`A`-hoz tart. A bal oldal definíció szerint
:math:`f'(u)`-hoz tart, tehát :math:`A=f'(u)`. A derivált
ebben az esetben folytonos volna :math:`u`-ban.


Heine–Borel és Heine tétele
---------------------------

Miért kell egyenletes folytonosság?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A folytonosság pontonkénti tulajdonság. Egy nyílt intervallumon
folytonos függvény nem feltétlenül terjeszthető ki folytonosan
az intervallum lezártjára. Például

.. math::

   f(x)=\sin\frac1x,\qquad x\in(0,1]

folytonos a saját értelmezési tartományán, de :math:`0`-ban
nincs határértéke, ezért nem egészíthető ki folytonosan
:math:`[0,1]`-re.

A problémát az okozza, hogy a folytonosság definíciójában a
megfelelő :math:`\delta` függhet a vizsgált ponttól. Olyan
globális tulajdonságot keresünk, amelyben ugyanaz a
:math:`\delta` az értelmezési tartomány minden pontpárjára
működik.

.. admonition:: Definíció — egyenletes folytonosság

   Az :math:`f:H\to\mathbb R` függvény **egyenletesen
   folytonos** a :math:`H\subseteq\mathbb R` halmazon, ha

   .. math::

      \forall\varepsilon>0\ \exists\delta>0\
      \forall x,y\in H:
      \quad
      |x-y|<\delta
      \Longrightarrow
      |f(x)-f(y)|<\varepsilon.

A kvantorok sorrendje a lényeg: :math:`\delta` függhet
:math:`\varepsilon`-tól, de nem függhet sem :math:`x`-től,
sem :math:`y`-tól.

A :math:`\sin(1/x)` nem egyenletesen folytonos
:math:`(0,1]`-en. Valóban, válasszuk

.. math::

   x_n=\frac{1}{\frac{\pi}{2}+2\pi n},
   \qquad
   y_n=\frac{1}{\frac{3\pi}{2}+2\pi n}.

Ekkor :math:`|x_n-y_n|\to0`, miközben
:math:`f(x_n)=1` és :math:`f(y_n)=-1`.

.. raw:: html

   <figure class="l10-figure" data-l10-uniform>
     <svg viewBox="0 0 820 380" role="img" aria-label="Pontbeli és egyenletes folytonosság összehasonlítása"></svg>
     <figcaption>Pontbeli folytonosságnál a megengedett vízszintes eltérés pontról pontra változhat; egyenletes folytonosságnál egyetlen δ működik mindenütt.</figcaption>
   </figure>

.. admonition:: Elégséges feltétel

   Minden Lipschitz-folytonos függvény egyenletesen folytonos.

Ha :math:`|f(x)-f(y)|\leq L|x-y|` és :math:`L>0`, akkor az
adott :math:`\varepsilon>0` számhoz válasszuk

.. math::

   \delta=\frac{\varepsilon}{L}.

Ekkor :math:`|x-y|<\delta` esetén

.. math::

   |f(x)-f(y)|
   \leq L|x-y|
   <L\delta
   =\varepsilon.

Ha :math:`L=0`, akkor :math:`f` konstans, és az állítás
azonnali.


Heine–Borel-tétel
~~~~~~~~~~~~~~~~~

A következő tételt most bizonyítjuk először; ez lesz a
Heine-tétel kompaktsági alapja.

.. admonition:: Tétel — Heine–Borel az intervallumra

   Minden korlátos és zárt :math:`[a,b]` intervallum kompakt:
   minden nyílt fedéséből kiválasztható véges részfedés.

**Bizonyítás indirekten, intervallumfelezéssel.** Legyen
:math:`\mathcal U` az :math:`[a,b]` egy nyílt fedése. Tegyük
fel, hogy nem választható ki belőle véges részfedés. Felezzük
meg az :math:`I_0=[a,b]` intervallumot. Legalább az egyik
zárt félintervallum nem fedhető le véges sok
:math:`\mathcal U`-beli halmazzal, különben a két véges
részfedés együtt lefedné :math:`I_0`-t. Jelöljük ezt a felet
:math:`I_1`-gyel, majd folytassuk ugyanígy.

Így egymásba skatulyázott zárt intervallumokat kapunk:

.. math::

   I_0\supseteq I_1\supseteq I_2\supseteq\cdots,
   \qquad
   |I_n|=\frac{b-a}{2^n}\longrightarrow0,

és egyik :math:`I_n` sem fedhető le véges sok
:math:`\mathcal U`-beli halmazzal. A Cantor-féle közösrész
tétele szerint van egyetlen

.. math::

   c\in\bigcap_{n=0}^{\infty}I_n.

Mivel :math:`\mathcal U` lefedi :math:`[a,b]`-t, van olyan
:math:`U\in\mathcal U`, amelyre :math:`c\in U`. Az
:math:`U` halmaz nyílt, ezért tartalmazza :math:`c` valamely
teljes környezetét. Az :math:`I_n` intervallumok hossza
nullához tart, így egy elég nagy :math:`n`-re

.. math::

   I_n\subseteq U.

Ekkor :math:`I_n` már egyetlen fedő halmazzal lefedhető, ami
ellentmond :math:`I_n` megválasztásának.

.. raw:: html

   <figure class="l10-figure" data-l10-heine-borel>
     <svg viewBox="0 0 820 390" role="img" aria-label="A Heine–Borel-tétel intervallumfelezéses bizonyítása"></svg>
     <figcaption>A mindig „rossz” félintervallumok egyetlen c pontra szűkülnek, de a c-t tartalmazó nyílt fedő halmaz végül az egész kis intervallumot elnyeli.</figcaption>
   </figure>


Heine tétele
~~~~~~~~~~~~

.. admonition:: Tétel — Heine

   Korlátos és zárt intervallumon értelmezett folytonos
   függvény egyenletesen folytonos.

**Bizonyítás.** Legyen :math:`f:[a,b]\to\mathbb R` folytonos,
és rögzítsünk egy :math:`\varepsilon>0` számot. Minden
:math:`u\in[a,b]` ponthoz a folytonosság miatt választható
olyan :math:`r_u>0`, hogy

.. math::

   x\in[a,b],\quad |x-u|<r_u
   \quad\Longrightarrow\quad
   |f(x)-f(u)|<\frac{\varepsilon}{2}.

A

.. math::

   B_{r_u/2}(u),
   \qquad u\in[a,b],

nyílt intervallumok lefedik :math:`[a,b]`-t. A
Heine–Borel-tétel miatt véges sok is elegendő:

.. math::

   [a,b]\subseteq
   B_{r_{u_1}/2}(u_1)\cup\cdots\cup
   B_{r_{u_N}/2}(u_N).

Legyen

.. math::

   \delta=\frac12\min_{1\leq j\leq N}r_{u_j}>0.

Ha :math:`x,y\in[a,b]` és :math:`|x-y|<\delta`, akkor
:math:`x` valamely :math:`B_{r_{u_j}/2}(u_j)` halmazba esik.
Ekkor

.. math::

   |x-u_j|<\frac{r_{u_j}}2,
   \qquad
   |y-u_j|
   \leq |y-x|+|x-u_j|
   <r_{u_j}.

Ezért

.. math::

   |f(x)-f(y)|
   \leq |f(x)-f(u_j)|+|f(u_j)-f(y)|
   <\frac{\varepsilon}{2}+\frac{\varepsilon}{2}
   =\varepsilon.

A kapott :math:`\delta` csak :math:`\varepsilon`-tól függ,
:math:`x`-től és :math:`y`-tól nem.

.. note:: Kapcsolat a folytonos kiterjesztéssel

   Egy intervallumon egyenletesen folytonos függvény
   egyértelműen és folytonosan kiterjeszthető az intervallum
   lezártjára. Fordítva, ha a lezártra van folytonos
   kiterjesztése és a lezárt intervallum korlátos, akkor a
   Heine-tétel miatt az eredeti függvény egyenletesen
   folytonos.

Példa: :math:`\sin\sqrt[3]{x}`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Legyen

.. math::

   F(x)=\sin\sqrt[3]{x},
   \qquad x\in\mathbb R.

A függvény az egész valós egyenesen egyenletesen folytonos,
noha nem Lipschitz-folytonos. A szinusz
:math:`1`-Lipschitz-folytonos, továbbá minden
:math:`x,y\in\mathbb R` esetén

.. math::

   \left|\sqrt[3]{x}-\sqrt[3]{y}\right|
   \leq
   \sqrt[3]{4}\,|x-y|^{1/3}.

Ezért

.. math::

   |F(x)-F(y)|
   \leq
   \sqrt[3]{4}\,|x-y|^{1/3}.

Az adott :math:`\varepsilon>0` számhoz például

.. math::

   \delta=\frac{\varepsilon^3}{4}

megfelelő, tehát :math:`F` egyenletesen folytonos.

Ugyanakkor :math:`F` nem Lipschitz-folytonos :math:`0`
egyetlen környezetében sem. Ha :math:`h=t^3`, akkor

.. math::

   \frac{|F(h)-F(0)|}{|h|}
   =
   \frac{|\sin t|}{|t|^3}
   \longrightarrow+\infty
   \qquad(t\to0).

Vagyis az egyenletes folytonosság gyengébb tulajdonság a
Lipschitz-folytonosságnál.

.. raw:: html

   <figure class="l10-figure" data-l10-cuberoot>
     <svg viewBox="0 0 820 360" role="img" aria-label="A szinusz köbgyök x függvény grafikonja és a nullához közeli meredek viselkedése"></svg>
     <figcaption>A függvény 0 közelében túl meredek a Lipschitz-tulajdonsághoz, de a köbgyökös Hölder-becslés egyetlen globális δ-t ad.</figcaption>
   </figure>

