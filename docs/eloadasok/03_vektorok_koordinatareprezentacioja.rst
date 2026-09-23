.. _eloadas-03-vektorok-koordinatareprezentacioja:

Vektorok koordinátareprezentációja
==================================

A koordináták a geometriai vektorokat rendezett számpárokkal, illetve
számhármasokkal írják le. Előbb három rövid vektoros feladatban felidézzük
az előző előadás műveleteit, majd bevezetjük a bázist és a koordinátákat.

.. topic:: A két 90 perces rész

   **Első előadás:** bevezető vektorfeladatok, bázis és koordináták, a
   műveletek koordinátaképlete, Levi--Civita-szimbólum, majd az egyenes
   egyenlete és két egyenes kölcsönös helyzete. **Második előadás:** egy
   közös merőleges irányú egyenes felírása, majd a sík egyenlete és a
   hozzá tartozó feladatok. A koszinusztételes levezetés a függelékbe
   kerül.

.. rubric:: Első előadás — 90 perc

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

A standard bázis teljes skaláris szorzási táblája

.. math::

   \begin{array}{c|ccc}
   \cdot&\mathbf i&\mathbf j&\mathbf k\\ \hline
   \mathbf i&1&0&0\\
   \mathbf j&0&1&0\\
   \mathbf k&0&0&1
   \end{array}

A teljes vektoriális szorzási tábla:

.. math::

   \begin{array}{c|ccc}
   \times&\mathbf i&\mathbf j&\mathbf k\\ \hline
   \mathbf i&\mathbf0&\mathbf k&-\mathbf j\\
   \mathbf j&-\mathbf k&\mathbf0&\mathbf i\\
   \mathbf k&\mathbf j&-\mathbf i&\mathbf0
   \end{array}

A skaláris szorzat táblája az ortonormáltságot, a vektoriális szorzat
táblája pedig a jobbkezességet és az antiszimmetriát foglalja össze.

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

   \mathbf a=a_1\mathbf i+a_2\mathbf j+a_3\mathbf k,
   \qquad
   \mathbf b=b_1\mathbf i+b_2\mathbf j+b_3\mathbf k,

akkor a vektorösszeadás disztributivitása miatt

.. math::

   \begin{aligned}
   \mathbf a+\mathbf b
   &=(a_1\mathbf i+a_2\mathbf j+a_3\mathbf k)
     +(b_1\mathbf i+b_2\mathbf j+b_3\mathbf k)\\
   &=(a_1+b_1)\mathbf i+(a_2+b_2)\mathbf j+(a_3+b_3)\mathbf k.
   \end{aligned}

A koordináták egyértelműségéből ezért

.. math::

   \mathbf a+\mathbf b=
   \begin{pmatrix}a_1+b_1\\a_2+b_2\\a_3+b_3\end{pmatrix}.

Hasonlóan

.. math::

   \lambda\mathbf a
   =(\lambda a_1)\mathbf i+(\lambda a_2)\mathbf j
     +(\lambda a_3)\mathbf k,

tehát

.. math::

   \lambda\mathbf a=
   \begin{pmatrix}\lambda a_1\\\lambda a_2\\\lambda a_3\end{pmatrix}.


A skaláris szorzat koordinátaképlete
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A bilinearitással először kilenc tagra bontunk:

.. math::

   \begin{aligned}
   \mathbf a\cdot\mathbf b
   ={}&a_1b_1(\mathbf i\cdot\mathbf i)
      +a_1b_2(\mathbf i\cdot\mathbf j)
      +a_1b_3(\mathbf i\cdot\mathbf k)\\
     &+a_2b_1(\mathbf j\cdot\mathbf i)
      +a_2b_2(\mathbf j\cdot\mathbf j)
      +a_2b_3(\mathbf j\cdot\mathbf k)\\
     &+a_3b_1(\mathbf k\cdot\mathbf i)
      +a_3b_2(\mathbf k\cdot\mathbf j)
      +a_3b_3(\mathbf k\cdot\mathbf k).
   \end{aligned}

A skaláris szorzási táblában csak a három átlóbeli tag nem nulla, ezért

.. math::

   \boxed{\mathbf a\cdot\mathbf b=a_1b_1+a_2b_2+a_3b_3}.

Ez pontosan egy sorvektor és egy oszlopvektor mátrixszorzata:

.. math::

   \mathbf a\cdot\mathbf b=
   \begin{pmatrix}a_1&a_2&a_3\end{pmatrix}
   \begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}.


A vektoriális szorzat koordinátaképlete
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Ugyanezeket a bázisfelbontásokat a vektoriális szorzás
disztributivitásával ismét kilenc tagra bontjuk:

.. math::

   \begin{aligned}
   \mathbf a\times\mathbf b
   ={}&a_1b_1(\mathbf i\times\mathbf i)
      +a_1b_2(\mathbf i\times\mathbf j)
      +a_1b_3(\mathbf i\times\mathbf k)\\
     &+a_2b_1(\mathbf j\times\mathbf i)
      +a_2b_2(\mathbf j\times\mathbf j)
      +a_2b_3(\mathbf j\times\mathbf k)\\
     &+a_3b_1(\mathbf k\times\mathbf i)
      +a_3b_2(\mathbf k\times\mathbf j)
      +a_3b_3(\mathbf k\times\mathbf k).
   \end{aligned}

A három átlóbeli tag nulla. A táblázatból a megmaradó hat tag:

.. math::

   \begin{aligned}
   \mathbf a\times\mathbf b
   ={}&a_1b_2\mathbf k-a_1b_3\mathbf j
      -a_2b_1\mathbf k+a_2b_3\mathbf i\\
     &+a_3b_1\mathbf j-a_3b_2\mathbf i.
   \end{aligned}

A bázisvektorok szerint csoportosítva:

.. math::

   \boxed{
   \mathbf a\times\mathbf b
   =(a_2b_3-a_3b_2)\mathbf i
    +(a_3b_1-a_1b_3)\mathbf j
    +(a_1b_2-a_2b_1)\mathbf k.}

.. raw:: html

   <figure class="vector-figure vector-figure--compact" id="koordinata-vektorialis-szorzat">
     <svg id="coordinate-cross-svg" class="vector-diagram vector-diagram--tall" viewBox="0 0 760 450"
          role="img" aria-label="Két vektor és a jobbkéz-szabály szerinti vektoriális szorzatuk a standard bázisban"></svg>
     <figcaption class="vector-caption">
       <span class="vector-formula">a × b ⟂ a, b</span>
       <span class="vector-reading"><span>i × j = k</span><span>irány: jobbkéz-szabály</span></span>
     </figcaption>
   </figure>

Az első koordináta, :math:`a_2b_3-a_3b_2`, az :math:`yz`-síkra vetített
paralelogramma előjeles területe. A második és harmadik koordináta
ugyanígy a :math:`zx`-, illetve az :math:`xy`-síkra vetített
paralelogramma előjeles területe. Így a három koordináta nem önkényes
képlet: a vektoriális szorzat három koordinátasík szerinti orientált
területét tartalmazza.

Koordinátaoszlopként:

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


Levi--Civita-szimbólum
----------------------

Legyen :math:`i,j,k\in\{1,2,3\}`. A háromdimenziós
**Levi--Civita-szimbólum**

.. math::

   \varepsilon_{ijk}=
   \begin{cases}
   +1,&(i,j,k)=(1,2,3),(2,3,1),(3,1,2),\\
   -1,&(i,j,k)=(1,3,2),(3,2,1),(2,1,3),\\
   0,&\text{ha két index megegyezik.}
   \end{cases}

Az első sor a :math:`(1,2,3)` páros, a második sor a páratlan
permutációit tartalmazza. Ha
:math:`\mathbf e_1=\mathbf i`, :math:`\mathbf e_2=\mathbf j` és
:math:`\mathbf e_3=\mathbf k`, akkor a teljes szorzótábla egyetlen
képletben:

.. math::

   \mathbf e_i\times\mathbf e_j
   =\sum_{k=1}^3\varepsilon_{ijk}\mathbf e_k.

**1. példa.** :math:`\varepsilon_{231}=1`, mert a :math:`(2,3,1)` ciklikus
permutáció; :math:`\varepsilon_{132}=-1`, mert egyetlen felcseréléssel
kapjuk; :math:`\varepsilon_{223}=0`, mert két index megegyezik. Ezért

.. math::

   \mathbf e_2\times\mathbf e_3=\mathbf e_1,
   \qquad
   \mathbf e_3\times\mathbf e_2=-\mathbf e_1.

**2. példa.** A vektoriális szorzat :math:`i`-edik koordinátája

.. math::

   (\mathbf a\times\mathbf b)_i
   =\sum_{j=1}^3\sum_{k=1}^3
      \varepsilon_{ijk}a_jb_k.

Például :math:`i=2` esetén csak két nem nulla tag marad:

.. math::

   (\mathbf a\times\mathbf b)_2
   =\varepsilon_{231}a_3b_1+\varepsilon_{213}a_1b_3
   =a_3b_1-a_1b_3.

Ugyanígy a vegyes szorzat indexjelölése

.. math::

   \mathbf{abc}
   =\sum_{i,j,k=1}^3\varepsilon_{ijk}a_ib_jc_k.

**3. példa: a vegyes szorzat ciklikus cseréje.** A skalárok szorzásának
kommutativitása és :math:`\varepsilon_{ijk}=\varepsilon_{jki}` alapján

.. math::

   \begin{aligned}
   \mathbf{abc}
   &=\sum_{i,j,k=1}^3\varepsilon_{ijk}a_ib_jc_k\\
   &=\sum_{i,j,k=1}^3\varepsilon_{jki}b_jc_ka_i\\
   &=\mathbf{bca}.
   \end{aligned}

Az indexek néma összegzési indexek: a második sorban a
:math:`(j,k,i)` nevek rendre az új :math:`(i,j,k)` szerepét töltik be.
Ugyanezzel a ciklikus cserével
:math:`\mathbf{abc}=\mathbf{bca}=\mathbf{cab}`.

.. admonition:: iMSc-házi feladat
   :class: imsc-task

   A :math:`\varepsilon_{ikj}=-\varepsilon_{ijk}` azonosságból közvetlen
   indexszámolással igazolja, hogy

   .. math::

      \mathbf{acb}=-\mathbf{abc}.

   Vezesse le ebből azt is, hogy a vegyes szorzat nulla, ha két tényezője
   megegyezik.


Az egyenes paraméteres egyenlete
--------------------------------

A :math:`\mathbf r_0` helyvektorú ponton átmenő, :math:`\mathbf v`
irányvektorú egyenes vektoregyenlete

.. math::

   \mathbf r=\mathbf r_0+t\mathbf v\qquad(t\in\mathbb R).

Valóban, :math:`\mathbf r-\mathbf r_0` az egyenessel párhuzamos, ezért az
irányvektor skalárszorosa. Ezt az egyenes **paraméteres
vektoregyenletének** nevezzük.

Ha :math:`\mathbf r_0=(x_0,y_0,z_0)^{\mathsf T}` és
:math:`\mathbf v=(v_1,v_2,v_3)^{\mathsf T}`, akkor koordinátánként

.. math::

   \begin{cases}
   x=x_0+tv_1,\\
   y=y_0+tv_2,\\
   z=z_0+tv_3.
   \end{cases}


Feladat: két egyenes kölcsönös helyzete
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Határozzuk meg az

.. math::

   e:\begin{cases}
   x=3t+2,\\ y=-t,\\ z=1-2t,
   \end{cases}
   \qquad
   f:\begin{cases}
   x=2u-3,\\ y=-1,\\ z=3u+9
   \end{cases}

egyenesek kölcsönös helyzetét.

**Megoldás.** Irányvektoraik
:math:`(3,-1,-2)^{\mathsf T}` és :math:`(2,0,3)^{\mathsf T}`, ezért nem
párhuzamosak. Metszéspont esetén

.. math::

   \begin{cases}
   3t+2=2u-3,\\
   -t=-1,\\
   1-2t=3u+9
   \end{cases}

teljesülne. A második egyenletből :math:`t=1`. Az elsőből ekkor
:math:`u=4`, a harmadikból viszont :math:`u=-10/3`. Nincs közös pontjuk,
tehát az egyenesek **kitérők**.

Általában két térbeli egyenes párhuzamos irányvektorok esetén egybeeső
vagy különböző párhuzamos; nem párhuzamos irányvektorok esetén metsző
vagy kitérő lehet.

.. raw:: html

   <div class="lecture-boundary" role="separator" aria-label="A második előadás kezdete">
     <span>Második előadás — 90 perc</span>
   </div>


Feladat: közös merőleges irány
------------------------------

Írjuk fel annak a :math:`g` egyenesnek a paraméteres egyenletrendszerét,
amely merőleges mind az :math:`e`, mind az :math:`f` egyenesre, és áthalad
a :math:`P_0=(1,2,0)` ponton, ahol

.. math::

   e:\begin{cases}
   x=2+3t,\\ y=1-2t,\\ z=8,
   \end{cases}
   \qquad
   f:\begin{cases}
   x=-3+2u,\\ y=4,\\ z=2-u.
   \end{cases}

**Megoldás.** Az irányvektorok
:math:`\mathbf v_e=(3,-2,0)^{\mathsf T}` és
:math:`\mathbf v_f=(2,0,-1)^{\mathsf T}`. Mindkettőre merőleges irányt a
vektoriális szorzat ad:

.. math::

   \mathbf v_g=\mathbf v_e\times\mathbf v_f
   =\begin{pmatrix}2\\3\\4\end{pmatrix}.

A keresett egyenes tehát

.. math::

   g:\begin{cases}
   x=1+2s,\\
   y=2+3s,\\
   z=4s.
   \end{cases}


A sík egyenlete
---------------

A :math:`\mathbf r_0` helyvektorú ponton átmenő, :math:`\mathbf n\ne0`
normálvektorú sík vektoregyenlete

.. math::

   (\mathbf r-\mathbf r_0)\cdot\mathbf n=0.

Ha :math:`\mathbf n=(A,B,C)^{\mathsf T}`, akkor

.. math::

   A(x-x_0)+B(y-y_0)+C(z-z_0)=0,

vagyis :math:`Ax+By+Cz=D`, ahol
:math:`D=Ax_0+By_0+Cz_0`.


3. síkfeladat: két párhuzamos egyenes síkja
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Írjuk fel annak a :math:`P=(3,0,1)` ponton átmenő síknak az egyenletét,
amely párhuzamos az :math:`e` és :math:`f` egyenesek által kifeszített
síkkal, ahol

.. math::

   e:\begin{cases}
   x=1-2t,\\ y=2+t,\\ z=-2t,
   \end{cases}
   \qquad
   f:\begin{cases}
   x=-2+2u,\\ y=-u,\\ z=2u.
   \end{cases}

**Megoldás.** Az irányvektorok
:math:`\mathbf v_e=(-2,1,-2)^{\mathsf T}` és
:math:`\mathbf v_f=(2,-1,2)^{\mathsf T}=-\mathbf v_e`, ezért szorzatuk
nullvektor: önmagukban nem feszítenek ki síkot. Vegyük az
:math:`A=(1,2,0)` és :math:`B=(-2,0,0)` pontokat a két egyenesen. Ekkor

.. math::

   \overrightarrow{AB}=(-3,-2,0)^{\mathsf T},
   \qquad
   \mathbf n=\mathbf v_e\times\overrightarrow{AB}
   =(-4,6,7)^{\mathsf T}.

A keresett sík:

.. math::

   -4(x-3)+6y+7(z-1)=0,

azaz :math:`-4x+6y+7z+5=0`.


4. síkfeladat: két sík metszésvonala
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Írjuk fel az

.. math::

   s_1:\ x-y-4z-5=0,
   \qquad
   s_2:\ 2x+y-2z-4=0

síkok metszésvonalának egyenletét.

**Megoldás.** A metszésvonal pontjai mindkét egyenletet, ezért az
összegüket is kielégítik:

.. math::

   3x-6z-9=0,
   \qquad x=2z+3.

Válasszuk paraméternek :math:`z=t`-t. Az :math:`s_1` egyenletből ekkor
:math:`y=-2t-2`, tehát

.. math::

   \ell:\begin{cases}
   x=3+2t,\\
   y=-2-2t,\\
   z=t.
   \end{cases}

Az irányvektor :math:`(2,-2,1)^{\mathsf T}`; valóban merőleges mindkét
sík normálvektorára.


5. síkfeladat: pont tükrözése síkra
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Tükrözzük a :math:`P=(4,-3,5)` pontot az
:math:`s:\ x-y+z-6=0` síkra.

**Megoldás.** A sík normálvektora :math:`\mathbf n=(1,-1,1)^{\mathsf T}`.
A :math:`P` pontból a síkra állított merőleges:

.. math::

   e:\begin{cases}
   x=4+t,\\
   y=-3-t,\\
   z=5+t.
   \end{cases}

A síkegyenletbe helyettesítve :math:`3t+6=0`, tehát :math:`t=-2`. A
döféspont :math:`D=(2,-1,3)`. A tükörkép helyvektora

.. math::

   \mathbf p'=\mathbf p+2(\mathbf d-\mathbf p)
   =\begin{pmatrix}0\\1\\1\end{pmatrix},

vagyis :math:`P'=(0,1,1)`.


6. síkfeladat: ponton átmenő, adott vektorra merőleges egyenes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Határozzuk meg annak az :math:`e` egyenesnek az egyenletét, amely
illeszkedik a :math:`P=(-1,2,3)` pontra, merőleges az
:math:`\mathbf a=(6,-2,-3)^{\mathsf T}` vektorra, és metszi az

.. math::

   f:\begin{cases}
   x=2t+1,\\
   y=2t-2,\\
   z=-4t+3
   \end{cases}

egyenest.

**Megoldás.** Az :math:`e` egyenes az :math:`\mathbf a` normálvektorú,
:math:`P`-n átmenő

.. math::

   s:\ 6(x+1)-2(y-2)-3(z-3)=0

síkban fekszik. Az :math:`f` egyenes és :math:`s` döféspontját az
:math:`f` koordinátáinak behelyettesítésével kapjuk:

.. math::

   6(2t+2)-2(2t-4)-3(-4t)=0,
   \qquad t=-1.

Így :math:`D=(-1,-4,7)`, és
:math:`\overrightarrow{PD}=(0,-6,4)^{\mathsf T}`, amely egyszerűsíthető
:math:`(0,-3,2)^{\mathsf T}`-re. A keresett egyenes:

.. math::

   e:\begin{cases}
   x=-1,\\
   y=2-3s,\\
   z=3+2s.
   \end{cases}


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


Függelék: a koszinusztétel és a skaláris szorzat
-------------------------------------------------

A koszinusztétel vektoros bizonyítása
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

Az előzőleg rögzített négyzetjelölést és a skaláris szorzat
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


A skaláris szorzat koordinátaképlete a koszinusztételből
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Legyen
:math:`\mathbf a=(a_1,a_2,a_3)^{\mathsf T}` és
:math:`\mathbf b=(b_1,b_2,b_3)^{\mathsf T}`. Az ortonormált koordináta-
rendszerben a Pitagorasz-tétel adja

.. math::

   |\mathbf a|^2=\sum_{i=1}^3a_i^2,
   \qquad
   |\mathbf b|^2=\sum_{i=1}^3b_i^2,
   \qquad
   |\mathbf a-\mathbf b|^2=\sum_{i=1}^3(a_i-b_i)^2.

Alkalmazzuk a koszinusztételt arra a háromszögre, amelynek két oldalát
:math:`\mathbf a` és :math:`\mathbf b`, harmadik oldalát pedig
:math:`\mathbf a-\mathbf b` adja. Ha :math:`\gamma` az első két vektor
szöge, akkor

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
   &=\frac{\sum_{i=1}^3a_i^2+
      \sum_{i=1}^3b_i^2-
      \sum_{i=1}^3(a_i-b_i)^2}{2}\\
   &=a_1b_1+a_2b_2+a_3b_3.
   \end{aligned}

Ez ugyanaz a koordinátaképlet, amelyet a főszövegben közvetlenül a
standard bázis skaláris szorzási táblájából vezettünk le.
