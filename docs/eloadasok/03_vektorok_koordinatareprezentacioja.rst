.. _eloadas-03-vektorok-koordinatareprezentacioja:

Vektorok koordinátareprezentációja
==================================

A koordináták a geometriai vektorokat rendezett számpárokkal, illetve
számhármasokkal írják le. Előbb három rövid vektoros feladatban felidézzük
az előző előadás műveleteit, majd bevezetjük a bázist és a koordinátákat.

.. topic:: A két 90 perces rész

   **Első rész:** két ismétlő feladat, majd a paralelepipedon térfogata és
   a vegyes szorzat. **Második rész:** bázis, egyértelmű koordináták,
   standard bázis, valamint a skaláris és vektoriális szorzat
   koordinátaképlete.

.. important:: A vektornégyzet jelentése

   A :math:`\mathbf v^2` jelölés a vektor önmagával vett skaláris
   szorzatának rövidítése:

   .. math::

      \boxed{\mathbf v^2:=\mathbf v\cdot\mathbf v=|\mathbf v|^2}.

   Valóban, ha :math:`\mathbf v\ne\mathbf0`, akkor a két tényező szöge
   nulla, ezért
   :math:`\mathbf v\cdot\mathbf v=|\mathbf v|\,|\mathbf v|\cos0=|\mathbf v|^2`.
   A nullvektorra ugyanez közvetlenül igaz.


Ismétlés
--------

1. feladat: a háromszög magasságpontja
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Legyen a háromszög köré írt kör középpontja :math:`O`, és válasszuk
:math:`O`-t origónak. A csúcsok helyvektorai legyenek
:math:`\mathbf a,\mathbf b,\mathbf c`. Ekkor

.. math::

   \mathbf a^2=\mathbf b^2=\mathbf c^2=R^2.

.. raw:: html

   <figure class="vector-figure vector-figure--compact" id="koordinata-magassagpont">
     <svg id="coordinate-orthocenter-svg" class="vector-diagram vector-diagram--tall" viewBox="0 0 760 470"
          role="img" aria-label="A háromszög körülírt köre, helyvektorai és három magasságvonala"></svg>
     <figcaption class="vector-caption">
       <span class="vector-formula">m = a + b + c</span>
       <span class="vector-reading"><span>|a| = |b| = |c| = R</span><span>m<sub>a</sub> ∩ m<sub>b</sub> ∩ m<sub>c</sub> = {M}</span></span>
     </figcaption>
   </figure>

**Megoldás.** A :math:`BC` oldal egyik irányvektora
:math:`\mathbf b-\mathbf c`. Mivel

.. math::

   (\mathbf b+\mathbf c)\cdot(\mathbf b-\mathbf c)
   =\mathbf b^2-\mathbf c^2=R^2-R^2=0,

az :math:`A` csúcsból induló magasság irányvektora lehet
:math:`\mathbf b+\mathbf c`. Ciklikusan ugyanez igaz a másik két
magasságra is. Egy általános :math:`\mathbf r` helyvektorral:

.. math::

   \begin{aligned}
   m_a&:\quad \mathbf r=\mathbf a+(\mathbf b+\mathbf c)t,\\
   m_b&:\quad \mathbf r=\mathbf b+(\mathbf a+\mathbf c)t,\\
   m_c&:\quad \mathbf r=\mathbf c+(\mathbf a+\mathbf b)t.
   \end{aligned}

:math:`t=1` helyettesítéssel mindhárom egyenlet ugyanazt adja:

.. math::

   \mathbf r=\mathbf a+\mathbf b+\mathbf c=:\mathbf m.

Tehát a három magasságvonal a :math:`\mathbf m` helyvektorú :math:`M`
pontban metszi egymást.

.. note::

   Három különböző egyenes paraméterét általában nem kell ugyanazzal a
   betűvel jelölni. Itt ez nem okoz gondot: mindhárom egyenletben éppen az
   :math:`1` paraméterérték adja a közös pontot.

**Interaktív ellenőrzés.** A kód az egyenlő sugarakból következő
merőlegességet és a :math:`t=1` helyettesítés algebrai részét ellenőrzi.

.. raw:: html

   <iframe class="rocq-frame rocq-frame--proof"
     data-proof="orthocenter"
     src="../_static/rocq/vektor-playground.html?proof=orthocenter"
     title="A magasságpont vektoros bizonyításának interaktív ellenőrzése"
     loading="lazy" allow="clipboard-write"></iframe>


2. feladat: a koszinusztétel vektoros bizonyítása
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A háromszög két, közös kezdőpontú oldalának vektora legyen
:math:`\mathbf u` és :math:`\mathbf v`, közbezárt szögük
:math:`\gamma`. A harmadik oldal vektora
:math:`\mathbf w=\mathbf v-\mathbf u`. Jelölje

.. math::

   a=|\mathbf w|,\qquad b=|\mathbf v|,\qquad c=|\mathbf u|.

.. raw:: html

   <figure class="vector-figure vector-figure--compact" id="koordinata-koszinusztetel">
     <svg id="coordinate-cosine-svg" class="vector-diagram" viewBox="0 0 760 400"
          role="img" aria-label="Háromszög a koszinusztétel vektoros jelöléseivel"></svg>
     <figcaption class="vector-caption">
       <span class="vector-formula">w = v − u</span>
       <span class="vector-reading"><span>a = |w|</span><span>b = |v|</span><span>c = |u|</span></span>
     </figcaption>
   </figure>

**Megoldás.** Az előzőleg rögzített négyzetjelölést és a skaláris szorzat
disztributivitását használva

.. math::

   \begin{aligned}
   a^2
   &=\mathbf w^2=(\mathbf v-\mathbf u)^2\\
   &=\mathbf v^2-2\mathbf u\cdot\mathbf v+\mathbf u^2\\
   &=b^2+c^2-2bc\cos\gamma.
   \end{aligned}

Ez a koszinusztétel.

.. raw:: html

   <iframe class="rocq-frame rocq-frame--proof"
     data-proof="cosine_theorem"
     src="../_static/rocq/vektor-playground.html?proof=cosine_theorem"
     title="A koszinusztétel algebrai magjának interaktív ellenőrzése"
     loading="lazy" allow="clipboard-write"></iframe>


3. feladat: a paralelepipedon térfogata
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A paralelepipedon egy csúcsból induló élvektorai legyenek
:math:`\mathbf a,\mathbf b,\mathbf c`. Válasszuk alapnak a
:math:`\mathbf b,\mathbf c` által kifeszített paralelogrammát.

.. raw:: html

   <figure class="vector-figure vector-figure--compact" id="koordinata-paralelepipedon">
     <svg id="coordinate-volume-svg" class="vector-diagram vector-diagram--tall" viewBox="0 0 760 470"
          role="img" aria-label="Paralelepipedon élvektorokkal, alapnormálissal és magassággal"></svg>
     <figcaption class="vector-caption">
       <span class="vector-formula">V = |abc| = |a · (b × c)|</span>
       <span class="vector-reading"><span>T<sub>alap</sub> = |b × c|</span><span>h = |a · n|</span></span>
     </figcaption>
   </figure>

Az alap területe :math:`|\mathbf b\times\mathbf c|`. Ha

.. math::

   \mathbf n=\frac{\mathbf b\times\mathbf c}
   {|\mathbf b\times\mathbf c|}

az alap egységnyi normálvektora, akkor a magasság
:math:`|\mathbf a\cdot\mathbf n|`. Ezért

.. math::

   V=|\mathbf b\times\mathbf c|\,|\mathbf a\cdot\mathbf n|
    =\left|\mathbf a\cdot(\mathbf b\times\mathbf c)\right|.

Magyar jelölésben a **vegyes szorzatot** gyakran egyszerűen
:math:`\mathbf{abc}` jelöli:

.. math::

   \boxed{\mathbf{abc}:=\mathbf a\cdot(\mathbf b\times\mathbf c)},
   \qquad V=|\mathbf{abc}|.

Az előjel az :math:`\mathbf a,\mathbf b,\mathbf c` vektorhármas
irányításától függ; a geometriai térfogat ezért az abszolút érték.

.. raw:: html

   <iframe class="rocq-frame rocq-frame--proof"
     data-proof="triple_product"
     src="../_static/rocq/vektor-playground.html?proof=triple_product"
     title="A vegyes szorzat koordinátaképletének interaktív ellenőrzése"
     loading="lazy" allow="clipboard-write"></iframe>


Bázis és koordináták
--------------------

Az egyértelműségi lemmák felidézése
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Kifeszítési és egyértelműségi lemma a síkban

   Ha :math:`\mathbf b_1,\mathbf b_2` nem párhuzamos síkvektorok, akkor
   minden :math:`\mathbf v` síkvektorhoz egyértelműen léteznek
   :math:`\lambda_1,\lambda_2` skalárok úgy, hogy

   .. math::

      \mathbf v=\lambda_1\mathbf b_1+\lambda_2\mathbf b_2.

.. admonition:: Kifeszítési és egyértelműségi lemma a térben

   Ha :math:`\mathbf b_1,\mathbf b_2,\mathbf b_3` nem esik egy síkba,
   akkor minden :math:`\mathbf v` térvektorhoz egyértelműen léteznek
   :math:`\lambda_1,\lambda_2,\lambda_3` skalárok úgy, hogy

   .. math::

      \mathbf v=\lambda_1\mathbf b_1+
      \lambda_2\mathbf b_2+\lambda_3\mathbf b_3.

Az ilyen rendezett vektorpár, illetve vektorhármas **bázis**. A bázisban
szereplő egyértelmű skalárok a vektor **koordinátái**:

.. math::

   [\mathbf v]_{\mathcal B}
   =\begin{pmatrix}\lambda_1\\\lambda_2\end{pmatrix},
   \qquad
   [\mathbf v]_{\mathcal B}
   =\begin{pmatrix}\lambda_1\\\lambda_2\\\lambda_3\end{pmatrix}.

Az egyértelműség lényeges: nélküle ugyanazt a vektort több különböző
számoszloppal jelölnénk.


A standard bázis
~~~~~~~~~~~~~~~~

A tér **standard bázisa** a jobbkezes, egységnyi hosszúságú, páronként
merőleges vektorhármas

.. math::

   \mathbf i=\begin{pmatrix}1\\0\\0\end{pmatrix},\qquad
   \mathbf j=\begin{pmatrix}0\\1\\0\end{pmatrix},\qquad
   \mathbf k=\begin{pmatrix}0\\0\\1\end{pmatrix}.

.. raw:: html

   <figure class="vector-figure vector-figure--compact" id="koordinata-standard-bazis">
     <svg id="coordinate-basis-svg" class="vector-diagram vector-diagram--tall" viewBox="0 0 760 450"
          role="img" aria-label="A standard bázis és egy vektor koordináták szerinti felbontása"></svg>
     <figcaption class="vector-caption">
       <span class="vector-formula">v = x i + y j + z k</span>
       <span class="vector-reading"><span>[v]<sub>std</sub> = (x, y, z)<sup>T</sup></span><span>jobbkezes ortonormált bázis</span></span>
     </figcaption>
   </figure>

Minden :math:`\mathbf v` vektor egyértelműen írható

.. math::

   \mathbf v=x\mathbf i+y\mathbf j+z\mathbf k,
   \qquad
   [\mathbf v]_{\mathrm{std}}=
   \begin{pmatrix}x\\y\\z\end{pmatrix}.

A standard bázis skaláris szorzási táblája

.. math::

   \mathbf i^2=\mathbf j^2=\mathbf k^2=1,
   \qquad
   \mathbf i\cdot\mathbf j=
   \mathbf j\cdot\mathbf k=
   \mathbf k\cdot\mathbf i=0,

vektoriális szorzási táblája pedig

.. math::

   \mathbf i\times\mathbf j=\mathbf k,\qquad
   \mathbf j\times\mathbf k=\mathbf i,\qquad
   \mathbf k\times\mathbf i=\mathbf j.

A fordított sorrendű szorzatok ezek ellentettjei, egy bázisvektor
önmagával vett vektoriális szorzata pedig :math:`\mathbf0`.

.. raw:: html

   <iframe class="rocq-frame rocq-frame--proof"
     data-proof="standard_coordinates"
     src="../_static/rocq/vektor-playground.html?proof=standard_coordinates"
     title="A standard koordináták létezésének és egyértelműségének interaktív ellenőrzése"
     loading="lazy" allow="clipboard-write"></iframe>


Műveletek koordinátákkal
------------------------

Ha

.. math::

   \mathbf a=\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix},\qquad
   \mathbf b=\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix},

akkor az összeadás és a skalárral való szorzás koordinátánként történik:

.. math::

   \mathbf a+\mathbf b=
   \begin{pmatrix}a_1+b_1\\a_2+b_2\\a_3+b_3\end{pmatrix},
   \qquad
   \lambda\mathbf a=
   \begin{pmatrix}\lambda a_1\\\lambda a_2\\\lambda a_3\end{pmatrix}.


A skaláris szorzat koordinátaképlete
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Az ortonormált standard koordinátákban a Pitagorasz-tétel kétszeri
alkalmazása adja

.. math::

   |\mathbf a|^2=a_1^2+a_2^2+a_3^2,
   \qquad
   |\mathbf b|^2=b_1^2+b_2^2+b_3^2.

Alkalmazzuk a koszinusztételt arra a háromszögre, amelynek oldalai
:math:`\mathbf a`, :math:`\mathbf b` és :math:`\mathbf a-\mathbf b`.
Ha :math:`\gamma` az első két vektor szöge, akkor

.. math::

   |\mathbf a-\mathbf b|^2
   =|\mathbf a|^2+|\mathbf b|^2
    -2|\mathbf a|\,|\mathbf b|\cos\gamma.

Mivel
:math:`\mathbf a\cdot\mathbf b=|\mathbf a|\,|\mathbf b|\cos\gamma`, ezért

.. math::

   \begin{aligned}
   \mathbf a\cdot\mathbf b
   &=\frac{|\mathbf a|^2+|\mathbf b|^2-|\mathbf a-\mathbf b|^2}{2}\\
   &=\frac{\sum_{i=1}^3a_i^2+\sum_{i=1}^3b_i^2
      -\sum_{i=1}^3(a_i-b_i)^2}{2}\\
   &=\boxed{a_1b_1+a_2b_2+a_3b_3}.
   \end{aligned}

Tehát a skaláris szorzat sorvektor és oszlopvektor szorzataként is
olvasható:

.. math::

   \mathbf a\cdot\mathbf b=
   \begin{pmatrix}a_1&a_2&a_3\end{pmatrix}
   \begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}.


A vektoriális szorzat koordinátaképlete
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A disztributivitás és a standard bázis szorzási táblája alapján

.. math::

   \begin{aligned}
   \mathbf a\times\mathbf b
   &=(a_1\mathbf i+a_2\mathbf j+a_3\mathbf k)
     \times(b_1\mathbf i+b_2\mathbf j+b_3\mathbf k)\\
   &=(a_2b_3-a_3b_2)\mathbf i
     +(a_3b_1-a_1b_3)\mathbf j
     +(a_1b_2-a_2b_1)\mathbf k.
   \end{aligned}

.. raw:: html

   <figure class="vector-figure vector-figure--compact" id="koordinata-vektorialis-szorzat">
     <svg id="coordinate-cross-svg" class="vector-diagram vector-diagram--tall" viewBox="0 0 760 450"
          role="img" aria-label="Két vektor és a jobbkéz-szabály szerinti vektoriális szorzatuk a standard bázisban"></svg>
     <figcaption class="vector-caption">
       <span class="vector-formula">a × b ⟂ a, b</span>
       <span class="vector-reading"><span>i × j = k</span><span>irány: jobbkéz-szabály</span></span>
     </figcaption>
   </figure>

Összevonva:

.. math::

   \boxed{
   \mathbf a\times\mathbf b=
   \begin{pmatrix}
   a_2b_3-a_3b_2\\
   a_3b_1-a_1b_3\\
   a_1b_2-a_2b_1
   \end{pmatrix}}

A szokásos determinánsos írásmód ennek tömör emlékeztetője:

.. math::

   \mathbf a\times\mathbf b=
   \begin{vmatrix}
   \mathbf i&\mathbf j&\mathbf k\\
   a_1&a_2&a_3\\
   b_1&b_2&b_3
   \end{vmatrix}.

.. raw:: html

   <iframe class="rocq-frame rocq-frame--proof"
     data-proof="coordinate_products"
     src="../_static/rocq/vektor-playground.html?proof=coordinate_products"
     title="A skaláris és vektoriális szorzat koordinátaképletének interaktív ellenőrzése"
     loading="lazy" allow="clipboard-write"></iframe>


Egyenes és sík koordinátákkal
-----------------------------

A :math:`\mathbf r_0` helyvektorú ponton átmenő, :math:`\mathbf v`
irányvektorú egyenes vektoregyenlete

.. math::

   \mathbf r=\mathbf r_0+t\mathbf v\qquad(t\in\mathbb R).

Ha :math:`\mathbf r_0=(x_0,y_0,z_0)^{\mathsf T}` és
:math:`\mathbf v=(v_1,v_2,v_3)^{\mathsf T}`, akkor

.. math::

   x=x_0+tv_1,\qquad y=y_0+tv_2,\qquad z=z_0+tv_3.

A :math:`\mathbf r_0` helyvektorú ponton átmenő, :math:`\mathbf n`
normálvektorú sík vektoregyenlete

.. math::

   (\mathbf r-\mathbf r_0)\cdot\mathbf n=0.

:math:`\mathbf n=(A,B,C)^{\mathsf T}` esetén ez

.. math::

   A(x-x_0)+B(y-y_0)+C(z-z_0)=0,

vagyis :math:`Ax+By+Cz=D`, ahol
:math:`D=Ax_0+By_0+Cz_0`.


Gépi ellenőrzés
---------------

Az interaktív ablakok egyetlen közös, valós koordinátás vektordefiníciót
használnak. A jsCoq a levezetések algebrai magját ellenőrzi: a
disztributív átalakításokat, a koordináták egyértelműségét, az
ortogonalitást és a vegyes szorzat képletét. A geometriai definíciókat és
az ábrák jelentését nem helyettesíti.

Egyelőre azért maradunk jsCoq-nál, mert már közvetlenül be van építve az
oldalba, és ezekhez a polinomiális azonosságokhoz elegendő. Lean és a
``mathlib`` akkor ad majd érdemi többletet, amikor teljes euklideszi
geometriai tételeket akarunk könyvtári fogalmakra építve formalizálni.
