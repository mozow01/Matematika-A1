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


Lipschitz-folytonosság és folytonos kiterjesztés
-----------------------------------------------------

A továbbiakban a három folytonossági fogalom közül elsősorban
a **Lipschitz-folytonosságot** használjuk.

.. admonition:: Tétel — :math:`\operatorname{Lip}(I)\subseteq C(I)`

   Legyen :math:`I\subseteq\mathbb R` intervallum. Minden
   :math:`I`-n Lipschitz-folytonos függvény folytonos
   :math:`I`-n.

**Bizonyítás.** Tegyük fel, hogy

.. math::

   |f(x)-f(y)|\leq L|x-y|
   \qquad(x,y\in I).

Ha :math:`L=0`, akkor :math:`f` konstans, tehát folytonos.
Ha :math:`L>0`, rögzítsünk egy :math:`u\in I` pontot és
egy :math:`\varepsilon>0` számot, majd válasszuk

.. math::

   \delta=\frac{\varepsilon}{L}.

Ha :math:`x\in I` és :math:`|x-u|<\delta`, akkor

.. math::

   |f(x)-f(u)|
   \leq L|x-u|
   <L\delta
   =\varepsilon.

Tehát :math:`f` minden :math:`u\in I` pontban folytonos.

.. admonition:: Tétel — kiterjesztés a véges intervallumvégpontra

   Legyen :math:`a\in\mathbb R` az :math:`I` intervallum
   egy véges, :math:`I`-hez nem tartozó végpontja. Ha
   :math:`f:I\to\mathbb R` Lipschitz-folytonos, akkor
   :math:`f` egyértelműen és folytonosan kiterjeszthető az
   :math:`I\cup\{a\}` halmazra.

**Bizonyítás.** Az :math:`L=0` eset azonnali, ezért tegyük
fel, hogy :math:`L>0`. Válasszunk egy tetszőleges
:math:`x_n\in I` sorozatot úgy, hogy :math:`x_n\to a`.
Ekkor :math:`f(x_n)` Cauchy-sorozat. Valóban, elég nagy
:math:`m,n` indexekre

.. math::

   |f(x_n)-f(x_m)|
   \leq L|x_n-x_m|
   \leq L|x_n-a|+L|x_m-a|,

és a jobb oldal nullához tart. A valós számok teljessége miatt
létezik az

.. math::

   A=\lim_{n\to\infty}f(x_n)

véges határérték. Definiáljuk

.. math::

   \overline f(x)=f(x)\quad(x\in I),
   \qquad
   \overline f(a)=A.

Megmutatjuk, hogy az :math:`A` érték nem függ a választott
:math:`(x_n)` sorozattól, és :math:`\overline f` folytonos
:math:`a`-ban. Legyen :math:`y_n\in I` tetszőleges,
:math:`a`-hoz tartó sorozat. Ekkor

.. math::

   \begin{aligned}
   |f(y_n)-A|
   &\leq |f(y_n)-f(x_n)|+|f(x_n)-A|\\
   &\leq L|y_n-x_n|+|f(x_n)-A|\\
   &\leq L|y_n-a|+L|x_n-a|+|f(x_n)-A|.
   \end{aligned}

Adott :math:`\varepsilon>0` számhoz válasszunk olyan
:math:`N` indexet, hogy :math:`n>N` esetén egyszerre

.. math::

   |y_n-a|<\frac{\varepsilon}{3L},
   \qquad
   |x_n-a|<\frac{\varepsilon}{3L},
   \qquad
   |f(x_n)-A|<\frac{\varepsilon}{3}.

Ekkor :math:`|f(y_n)-A|<\varepsilon\), tehát
:math:`f(y_n)\to A`. Az átviteli elv, vagyis a folytonosság
sorozatos jellemzése alapján :math:`\overline f` folytonos
:math:`a`-ban. Ugyanez azt is mutatja, hogy bármely más
:math:`a`-hoz tartó sorozat ugyanazt az :math:`A` értéket
adja, ezért a kiterjesztés egyértelmű.

.. warning::

   Az állítás a **véges** intervallumvégpontokra vonatkozik.
   Végtelenben egy Lipschitz-folytonos függvénynek nem kell
   véges határértékkel rendelkeznie; például
   :math:`f(x)=x` Lipschitz-folytonos :math:`\mathbb R`-en.


.. note:: Megjegyzés — egyenletes folytonosság, Heine–Borel és Heine tétele

   Jelölje :math:`\operatorname{Lip}(I)` az :math:`I`-n
   Lipschitz-folytonos, :math:`U(I)` az egyenletesen
   folytonos, :math:`C(I)` pedig a folytonos függvények
   osztályát. A helyes tartalmazási irány:

   .. math::

      \boxed{
      \operatorname{Lip}(I)\subseteq U(I)\subseteq C(I).
      }

   Az első tartalmazásnál, ha
   :math:`|f(x)-f(y)|\leq L|x-y|` és :math:`L>0`, akkor az
   adott :math:`\varepsilon>0` számhoz ugyanaz a

   .. math::

      \delta=\frac{\varepsilon}{L}

   működik az :math:`I` intervallum minden pontpárjára.
   Ezért minden Lipschitz-folytonos függvény egyenletesen
   folytonos. Az egyenletes folytonosságból pedig közvetlenül
   következik a pontonkénti folytonosság.

   Egy függvény egyenletesen folytonos :math:`I`-n, ha

   .. math::

      \forall\varepsilon>0\ \exists\delta>0\
      \forall x,y\in I:
      \quad
      |x-y|<\delta
      \Longrightarrow
      |f(x)-f(y)|<\varepsilon.

   A kvantorok sorrendje a lényeg: :math:`\delta` nem
   függhet :math:`x` és :math:`y` megválasztásától.

   .. raw:: html

      <figure class="l10-figure" data-l10-uniform>
        <svg viewBox="0 0 820 380" role="img" aria-label="Pontbeli és egyenletes folytonosság összehasonlítása"></svg>
        <figcaption>Pontbeli folytonosságnál a megengedett vízszintes eltérés pontról pontra változhat; egyenletes folytonosságnál egyetlen δ működik mindenütt.</figcaption>
      </figure>

   **Heine–Borel-tétel.** Minden korlátos és zárt
   :math:`[a,b]` intervallum kompakt: minden nyílt
   fedéséből kiválasztható véges részfedés.

   **Bizonyítás.** Tegyük fel indirekten, hogy az
   :math:`[a,b]` intervallum valamely nyílt fedéséből nem
   választható ki véges részfedés. Felezzük meg az
   intervallumot, és válasszuk azt a zárt felet, amely szintén
   nem fedhető le véges sok fedő halmazzal. Ezt ismételve

   .. math::

      I_0\supseteq I_1\supseteq I_2\supseteq\cdots,
      \qquad
      |I_n|=\frac{b-a}{2^n}\longrightarrow0

   egymásba skatulyázott intervallumokat kapunk. A Cantor-féle
   közösrész-tétel szerint egyetlen

   .. math::

      c\in\bigcap_{n=0}^{\infty}I_n

   pont marad. A fedés valamely :math:`U` nyílt halmaza
   tartalmazza :math:`c`-t, ezért tartalmazza annak egy
   teljes környezetét is. Elég nagy :math:`n` esetén már
   :math:`I_n\subseteq U`, tehát :math:`I_n` egyetlen
   fedő halmazzal lefedhető. Ez ellentmond
   :math:`I_n` megválasztásának.

   .. raw:: html

      <figure class="l10-figure" data-l10-heine-borel>
        <svg viewBox="0 0 820 390" role="img" aria-label="A Heine–Borel-tétel intervallumfelezéses bizonyítása"></svg>
        <figcaption>A mindig „rossz” félintervallumok egyetlen c pontra szűkülnek, de a c-t tartalmazó nyílt fedő halmaz végül az egész kis intervallumot elnyeli.</figcaption>
      </figure>

   **Heine tétele.** Korlátos és zárt intervallumon
   értelmezett folytonos függvény egyenletesen folytonos.

   **Bizonyítás.** Legyen :math:`f:[a,b]\to\mathbb R`
   folytonos, és rögzítsünk egy :math:`\varepsilon>0`
   számot. Minden :math:`u\in[a,b]` ponthoz válasszunk
   olyan :math:`r_u>0` sugarat, hogy

   .. math::

      x\in[a,b],\quad |x-u|<r_u
      \quad\Longrightarrow\quad
      |f(x)-f(u)|<\frac{\varepsilon}{2}.

   A :math:`B_{r_u/2}(u)` intervallumok lefedik
   :math:`[a,b]`-t. A Heine–Borel-tétel szerint véges sok
   is elegendő:

   .. math::

      [a,b]\subseteq
      B_{r_{u_1}/2}(u_1)\cup\cdots\cup
      B_{r_{u_N}/2}(u_N).

   Legyen

   .. math::

      \delta=\frac12\min_{1\leq j\leq N}r_{u_j}>0.

   Ha :math:`x,y\in[a,b]` és :math:`|x-y|<\delta`, akkor
   :math:`x` valamely :math:`B_{r_{u_j}/2}(u_j)`
   intervallumba esik, továbbá

   .. math::

      |y-u_j|
      \leq |y-x|+|x-u_j|
      <r_{u_j}.

   Ezért

   .. math::

      |f(x)-f(y)|
      \leq |f(x)-f(u_j)|+|f(u_j)-f(y)|
      <\frac{\varepsilon}{2}+\frac{\varepsilon}{2}
      =\varepsilon.

   A kapott :math:`\delta` csak :math:`\varepsilon`-tól
   függ, a pontpártól nem.

   **Példa a két módszer együttes használatára.** Legyen

   .. math::

      F(x)=\sin\sqrt[3]{x},
      \qquad x\in\mathbb R.

   A :math:`F` függvény folytonos a :math:`[-2,2]`
   intervallumon, ezért ott a Heine-tétel szerint egyenletesen
   folytonos. A szélső részeken

   .. math::

      F'(x)=\frac{\cos\sqrt[3]{x}}{3|x|^{2/3}},
      \qquad
      |F'(x)|\leq\frac13
      \quad\text{ha }x\leq-1\text{ vagy }x\geq1.

   A korlátos deriváltra vonatkozó tétel miatt :math:`F`
   :math:`1/3`-Lipschitz-folytonos mindkét szélső
   félegyenesen. A középső és a szélső tartományok átfedése
   miatt a Heine-tételből kapott :math:`\delta_0` mellett

   .. math::

      \delta=\min\{\delta_0,\,3\varepsilon,\,1\}

   az egész valós egyenesen megfelelő. Tehát :math:`F`
   egyenletesen folytonos :math:`\mathbb R`-en.

   Ugyanakkor :math:`F` :math:`0` egyetlen környezetében
   sem Lipschitz-folytonos, mert :math:`h=t^3` mellett

   .. math::

      \frac{|F(h)-F(0)|}{|h|}
      =
      \frac{|\sin t|}{|t|^3}
      \longrightarrow+\infty
      \qquad(t\to0).

   Ez mutatja, hogy az első tartalmazás megfordítása általában
   nem igaz.

   .. raw:: html

      <figure class="l10-figure" data-l10-cuberoot>
        <svg viewBox="0 0 820 360" role="img" aria-label="A szinusz köbgyök x függvény grafikonja és a nullához közeli meredek viselkedése"></svg>
        <figcaption>A középső kompakt részt a Heine-tétel, a két szélső félegyenest a Lipschitz-becslés kezeli.</figcaption>
      </figure>

   A továbbiakban ezek közül csak a
   **Lipschitz-folytonosságot** használjuk.
