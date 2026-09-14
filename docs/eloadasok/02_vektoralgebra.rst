.. _eloadas-02-vektoralgebra:

Vektoralgebra
=============

Ezen a héten a vektort koordináták nélkül, irányított szakaszok
ekvivalenciaosztályaként építjük fel. Ezután a geometriai műveleteket úgy
fogalmazzuk meg, hogy a vetület, a merőlegesség, a terület és a térfogat
algebrai számításokkal is kezelhető legyen.

.. topic:: Az előadás két 90 perces része

   **Első rész:** irányított szakaszok, relációk, setoidok, vektorösszeadás,
   számmal való szorzás és lineáris kombináció.

   **Második rész:** skaláris, vektoriális és vegyes szorzat, majd a sík és
   a tér kifeszítési tétele.


Első 90 perc: a vektor fogalma és műveletei
--------------------------------------------

Irányított egyenes szakaszok
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Egy **irányított egyenes szakasz** két pont rendezett párja. Az
:math:`(A,B)` pár jele :math:`\overrightarrow{AB}`; kezdőpontja :math:`A`,
végpontja :math:`B`, hossza pedig az :math:`AB` távolság. Az irányítás miatt
általában :math:`\overrightarrow{AB}` és :math:`\overrightarrow{BA}` nem
ugyanaz.

Két irányított szakaszt akkor tekintünk azonosnak, ha az egyik egy eltolással
a másikba vihető:

.. math::

   \overrightarrow{AB}\sim\overrightarrow{CD}
   \quad\Longleftrightarrow\quad
   \text{van olyan }T\text{ eltolás, hogy }T(A)=C\text{ és }T(B)=D.

Nem nulla szakaszok esetén ez pontosan azt jelenti, hogy

* a két szakasz hossza egyenlő;
* a tartóegyeneseik párhuzamosak;
* az irányításuk azonos.

A nulla hosszúságú irányított szakaszokat mind azonosnak tekintjük.

.. raw:: html

   <figure class="vector-figure" id="iranyitott-szakaszok">
     <svg id="equivalence-svg" class="vector-diagram" viewBox="0 0 760 390"
          role="img" aria-label="Három ekvivalens irányított szakasz mozgatható ábrája"></svg>
     <figcaption class="vector-caption">
       <span class="vector-formula">AB⃗ ∼ CD⃗ ∼ EF⃗</span>
       <span class="vector-reading"><span id="equiv-length">|v| = 3,2</span><span>azonos hossz és irány</span></span>
     </figcaption>
   </figure>


Relációk és setoidok
~~~~~~~~~~~~~~~~~~~~

Legyen :math:`U` a dolgok univerzuma. Egy kétváltozós reláció olyan

.. math::

   R:U\to U\to\mathsf{Prop}

típusú dolog, amely minden :math:`x,y:U` párhoz egy állítást rendel. Például

.. math::

   \operatorname{rágja}(x,y)
   \mathrel{:=}
   \text{„}x\text{ rágja az }y\text{ gittet”.}

Ez reláció, de nincs okunk azt várni tőle, hogy ekvivalenciareláció legyen.

.. admonition:: Definíció: ekvivalenciareláció és setoid

   Az :math:`X` halmazon értelmezett :math:`\sim` reláció
   **ekvivalenciareláció**, ha minden :math:`x,y,z\in X` esetén

   .. math::

      \begin{array}{lll}
      x\sim x, &
      x\sim y\Rightarrow y\sim x, &
      x\sim y\text{ és }y\sim z\Rightarrow x\sim z.
      \end{array}

   Ezek rendre a reflexivitás, a szimmetria és a tranzitivitás.
   Az :math:`(X,\sim)` párt **setoidnak** nevezzük. Röviden azt is mondjuk,
   hogy :math:`X` setoid, ha egy rögzített ekvivalenciarelációval együtt
   tekintjük.

Az :math:`x\in X` elem **ekvivalenciaosztálya**

.. math::

   [x]=\{y\in X:y\sim x\}.

Az összes ekvivalenciaosztály halmaza az :math:`X/{\sim}` faktorhalmaz.

.. admonition:: Tétel

   Egy setoidban

   .. math::

      x\sim y\quad\Longleftrightarrow\quad[x]=[y].

**Bizonyítás.** Tegyük fel, hogy :math:`x\sim y`. Ha :math:`z\in[x]`, akkor
:math:`z\sim x`, így a tranzitivitás miatt :math:`z\sim y`, tehát
:math:`z\in[y]`. Szimmetrikusan :math:`[y]\subseteq[x]`, ezért a két osztály
egyenlő.

Megfordítva: :math:`x\in[x]` a reflexivitás miatt. Ha :math:`[x]=[y]`, akkor
:math:`x\in[y]`, vagyis :math:`x\sim y`. :math:`\square`

Két halmaz **diszjunkt**, ha nincs közös elemük, azaz
:math:`A\cap B=\varnothing`.

.. admonition:: IMSc-feladat
   :class: imsc-task

   Igazolja, hogy egy setoid bármely két ekvivalenciaosztálya vagy egyenlő,
   vagy diszjunkt. Másként: ha
   :math:`[x]\cap[y]\ne\varnothing`, akkor :math:`[x]=[y]`.

.. note::

   Az osztályok lefedik :math:`X`-et, hiszen minden :math:`x\in X` benne van
   a saját :math:`[x]` osztályában. Az IMSc-feladattal együtt ez azt mondja,
   hogy az ekvivalenciaosztályok részekre bontják :math:`X`-et.


A vektor mint ekvivalenciaosztály
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Az irányított szakaszok között az előbb definiált :math:`\sim` reláció
ekvivalenciareláció. A reflexivitást az identitáseltolás, a szimmetriát az
eltolás megfordítása, a tranzitivitást pedig az eltolások egymás utáni
alkalmazása adja.

.. admonition:: Definíció: síkvektor és térvektor

   A síkvektorok, illetve a térvektorok az irányított síkbeli, illetve
   térbeli szakaszok ekvivalenciaosztályai. Az
   :math:`\overrightarrow{AB}` szakasz osztályát

   .. math::

      \mathbf a=[\overrightarrow{AB}]

   jelöli; :math:`\overrightarrow{AB}` a :math:`\mathbf a` vektor egy
   reprezentánsa.

Egy vektor bárhová eltolható anélkül, hogy megváltozna. Hossza bármely
reprezentánsának hossza. A nulla hosszúságú vektor a **nullvektor**, jele
:math:`\mathbf 0`.


Összeadás és számmal való szorzás
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Definíció: vektorösszeadás

   Mérjük fel :math:`\mathbf a`-t és :math:`\mathbf b`-t közös :math:`P`
   kezdőpontból, és egészítsük ki a két reprezentánst paralelogrammává. A
   :math:`P`-ből a szemközti csúcsba mutató átló reprezentálja az
   :math:`\mathbf a+\mathbf b` összeget.

Ugyanezt a fej-láb szabállyal is megfogalmazhatjuk: ha
:math:`\overrightarrow{PA}` a :math:`\mathbf a`, és
:math:`\overrightarrow{AB}` a :math:`\mathbf b` reprezentánsa, akkor
:math:`\overrightarrow{PB}` az :math:`\mathbf a+\mathbf b` reprezentánsa.

.. admonition:: Definíció: számmal való szorzás

   Ha :math:`\lambda\in\mathbb R`, akkor :math:`\lambda\mathbf a`
   párhuzamos :math:`\mathbf a`-val, hossza
   :math:`|\lambda|\,|\mathbf a|`; :math:`\lambda>0` esetén azonos,
   :math:`\lambda<0` esetén ellentétes irányú vele. Ha :math:`\lambda=0`,
   akkor :math:`\lambda\mathbf a=\mathbf0`.

   Ezt szemléletesen **nyúzsorításnak** is hívhatjuk.

.. raw:: html

   <figure class="vector-figure" id="vektormuveletek">
     <svg id="operations-svg" class="vector-diagram vector-diagram--tall" viewBox="0 0 760 430"
          role="img" aria-label="Vektorösszeadás és számmal való szorzás mozgatható ábrája"></svg>
     <figcaption class="vector-caption vector-caption--control">
       <span><span class="vector-formula">a + b</span><span class="vector-reading" id="sum-reading">a + b = (4,0; 3,1)</span></span>
       <label class="vector-range" for="lambda-range"><span>λ = <output id="lambda-output">1,25</output></span><input id="lambda-range" type="range" min="-2" max="2" value="1.25" step="0.05"></label>
     </figcaption>
   </figure>

Az ellentett vektor :math:`-\mathbf a=(-1)\mathbf a`, a kivonás pedig
:math:`\mathbf a-\mathbf b:=\mathbf a+(-\mathbf b)`.

.. admonition:: A vektorműveletek tulajdonságai

   Minden :math:`\mathbf a,\mathbf b,\mathbf c` vektorra és
   :math:`\lambda,\mu\in\mathbb R`-re

   .. math::

      \begin{aligned}
      \mathbf a+\mathbf b&=\mathbf b+\mathbf a,
      & (\mathbf a+\mathbf b)+\mathbf c&=\mathbf a+(\mathbf b+\mathbf c),\\
      \mathbf a+\mathbf0&=\mathbf a,
      & \mathbf a+(-\mathbf a)&=\mathbf0,\\
      \lambda(\mathbf a+\mathbf b)&=\lambda\mathbf a+\lambda\mathbf b,
      & (\lambda+\mu)\mathbf a&=\lambda\mathbf a+\mu\mathbf a,\\
      (\lambda\mu)\mathbf a&=\lambda(\mu\mathbf a),
      & 1\mathbf a&=\mathbf a.
      \end{aligned}

**A kommutativitás geometriai igazolása.** Mérjük fel
:math:`\mathbf a`-t és :math:`\mathbf b`-t ugyanabból a :math:`P` pontból.
Az összeadás definíciójában mind :math:`\mathbf a+\mathbf b`, mind
:math:`\mathbf b+\mathbf a` ugyanannak a paralelogrammának ugyanaz a
:math:`P`-ből induló átlója. Ezért
:math:`\mathbf a+\mathbf b=\mathbf b+\mathbf a`. :math:`\square`


Szabályos hatszög
~~~~~~~~~~~~~~~~~

.. raw:: html

   <figure class="vector-figure vector-figure--compact">
     <svg id="hexagon-svg" class="vector-diagram" viewBox="0 0 760 360"
          role="img" aria-label="Szabályos hatszög az a és b vektorral"></svg>
   </figure>

.. admonition:: Feladat

   Az :math:`ABCDEF` szabályos hatszögben legyen
   :math:`\mathbf a=\overrightarrow{AB}` és
   :math:`\mathbf b=\overrightarrow{AF}`. Fejezze ki :math:`\mathbf a` és
   :math:`\mathbf b` segítségével az alábbi vektorokat:

   .. math::

      \overrightarrow{ED},\qquad
      \overrightarrow{DE},\qquad
      \overrightarrow{AD},\qquad
      \overrightarrow{BE}.

.. admonition:: Ellenőrzés
   :class: dropdown

   .. math::

      \overrightarrow{ED}=\mathbf a,\qquad
      \overrightarrow{DE}=-\mathbf a,

   .. math::

      \overrightarrow{AD}=2\mathbf a+2\mathbf b,
      \qquad
      \overrightarrow{BE}=2\mathbf b.


Lineáris kombináció és lineáris tér
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Definíció: lineáris kombináció

   Az :math:`\mathbf a_1,\ldots,\mathbf a_n` vektorok lineáris kombinációja
   minden

   .. math::

      \lambda_1\mathbf a_1+\cdots+\lambda_n\mathbf a_n,
      \qquad \lambda_1,\ldots,\lambda_n\in\mathbb R

   alakú vektor. Az összes ilyen kombináció halmaza a vektorok által
   kifeszített lineáris tér:

   .. math::

      \operatorname{span}(\mathbf a_1,\ldots,\mathbf a_n)
      =\left\{
        \lambda_1\mathbf a_1+\cdots+\lambda_n\mathbf a_n:
        \lambda_i\in\mathbb R
      \right\}.

A sík és a tér vektorai az összeadással és a valós számmal való szorzással
**valós lineáris teret**, más néven vektorteret alkotnak. Ennek absztrakt
változata később a Számítástechnika alapjai lineárisalgebrai számításainak
egyik alapja lesz.


Második 90 perc: szorzatok és kifeszítés
----------------------------------------

Skaláris szorzás
~~~~~~~~~~~~~~~~

.. admonition:: Definíció: skaláris szorzat

   Két nem nulla vektor hajlásszöge legyen
   :math:`0\leq\gamma\leq\pi`. A skaláris szorzatuk

   .. math::

      \mathbf a\cdot\mathbf b
      :=|\mathbf a|\,|\mathbf b|\cos\gamma.

   Ha valamelyik vektor nulla, a skaláris szorzat definíció szerint nulla.

.. raw:: html

   <figure class="vector-figure" id="skalaris-szorzat">
     <svg id="dot-svg" class="vector-diagram" viewBox="0 0 760 390"
          role="img" aria-label="Skaláris szorzat és merőleges vetület mozgatható ábrája"></svg>
     <figcaption class="vector-caption">
       <span class="vector-formula">a · b = |a||b| cos γ</span>
       <span class="vector-reading"><span id="dot-angle">γ = 54,0°</span><span id="dot-value">a · b = 5,4</span><span id="dot-state">hegyesszög</span></span>
     </figcaption>
   </figure>

.. admonition:: Geometriai tulajdonságok

   Ha :math:`\mathbf e` egységvektor, akkor
   :math:`\mathbf v\cdot\mathbf e` a :math:`\mathbf v`-nek az
   :math:`\mathbf e` egyenesére eső merőleges vetületének előjeles hossza.
   Nem nulla vektorokra

   .. math::

      \mathbf a\perp\mathbf b
      \quad\Longleftrightarrow\quad
      \mathbf a\cdot\mathbf b=0.

**Bizonyítás.** Mivel :math:`|\mathbf e|=1`, a definíció szerint
:math:`\mathbf v\cdot\mathbf e=|\mathbf v|\cos\gamma`, ami éppen a vetület
előjeles hossza. Nem nulla :math:`\mathbf a,\mathbf b` mellett a szorzat
pontosan akkor nulla, ha :math:`\cos\gamma=0`, vagyis ha
:math:`\gamma=\pi/2`. :math:`\square`

Az algebrai tulajdonságokat most bizonyítás nélkül soroljuk fel:

.. math::

   \begin{aligned}
   \mathbf a\cdot\mathbf b&=\mathbf b\cdot\mathbf a,
   & \mathbf a\cdot(\mathbf b+\mathbf c)
     &=\mathbf a\cdot\mathbf b+\mathbf a\cdot\mathbf c,\\
   (\lambda\mathbf a)\cdot\mathbf b
     &=\lambda(\mathbf a\cdot\mathbf b),
   & \mathbf a\cdot\mathbf a&=|\mathbf a|^2\geq0.
   \end{aligned}

Az utolsó kifejezés pontosan akkor nulla, ha :math:`\mathbf a=\mathbf0`.


Kidolgozott példa: egyenlő szárú háromszög
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Az :math:`ABC` háromszögben legyen
:math:`|\overrightarrow{AB}|=|\overrightarrow{AC}|`, és legyen :math:`M`
a :math:`BC` oldal felezőpontja. Igazoljuk, hogy az :math:`AM` súlyvonal
egyben magasságvonal is.

.. raw:: html

   <figure class="vector-figure vector-figure--compact">
     <svg id="isosceles-svg" class="vector-diagram" viewBox="0 0 760 360"
          role="img" aria-label="Egyenlő szárú háromszög súlyvonala"></svg>
   </figure>

Legyen :math:`\mathbf u=\overrightarrow{AB}` és
:math:`\mathbf v=\overrightarrow{AC}`. Ekkor

.. math::

   \overrightarrow{AM}=\frac{\mathbf u+\mathbf v}{2},
   \qquad
   \overrightarrow{BC}=\mathbf v-\mathbf u.

Ezért

.. math::

   \begin{aligned}
   \overrightarrow{AM}\cdot\overrightarrow{BC}
   &=\frac12(\mathbf u+\mathbf v)\cdot(\mathbf v-\mathbf u)\\
   &=\frac12\bigl(|\mathbf v|^2-|\mathbf u|^2\bigr)=0.
   \end{aligned}

Tehát :math:`AM\perp BC`. Következésképpen az egyenlő szárú háromszög
csúcsból induló súlyvonala és magasságvonala egybeesik.


Feladat: merőleges szakaszok egy téglalapban
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Legyen :math:`ABCD` egy :math:`5\times4`-es téglalap. Az :math:`E` pont
felezze az :math:`AD` oldalt, az :math:`F` és :math:`G` pont pedig az
:math:`AB` oldal :math:`A`-tól mért :math:`3/5`, illetve :math:`4/5`
osztópontja. Igazolja, hogy :math:`GE\perp FC`.

.. raw:: html

   <figure class="vector-figure" id="teglalap-merolegesek">
     <svg id="rectangle-svg" class="vector-diagram vector-diagram--tall" viewBox="0 0 760 450"
          role="img" aria-label="Öt a négyhez arányú forgatható téglalap a GE és FC merőleges szakaszokkal"></svg>
     <figcaption class="vector-caption">
       <span class="vector-formula">GE⃗ · FC⃗ = 0</span>
       <span class="vector-reading"><span>AB : AD = 5 : 4</span><span id="rect-angle">∠(GE, FC) = 90,0°</span></span>
     </figcaption>
   </figure>

**Vektoros megoldás.** Legyen :math:`\mathbf a` az :math:`AB`,
:math:`\mathbf b` az :math:`AD` irányú egységvektor. Ekkor
:math:`\mathbf a\perp\mathbf b`, továbbá

.. math::

   \overrightarrow{GE}=2\mathbf b-4\mathbf a,
   \qquad
   \overrightarrow{FC}=2\mathbf a+4\mathbf b.

Így

.. math::

   \begin{aligned}
   \overrightarrow{GE}\cdot\overrightarrow{FC}
   &=(2\mathbf b-4\mathbf a)\cdot(2\mathbf a+4\mathbf b)\\
   &=8-8=0,
   \end{aligned}

tehát :math:`GE\perp FC`.

.. note::

   Ugyanez a feladat megfelelő segédszakaszok behúzásával és háromszögek
   egybevágóságával is megoldható. A mozgatható ábra forgatás és nagyítás
   közben is megőrzi az :math:`5:4` oldalarányt és a merőlegességet.


Vektoriális szorzás
~~~~~~~~~~~~~~~~~~~

.. admonition:: Definíció: vektoriális szorzat

   Az :math:`\mathbf a` és :math:`\mathbf b` térvektorok vektoriális
   szorzata az a :math:`\mathbf a\times\mathbf b` vektor, amely

   #. merőleges :math:`\mathbf a`-ra és :math:`\mathbf b`-re;
   #. hossza
      :math:`|\mathbf a\times\mathbf b|=|\mathbf a|\,|\mathbf b|\sin\gamma`;
   #. irányát a
      :math:`(\mathbf a,\mathbf b,\mathbf a\times\mathbf b)` jobbrendszer
      határozza meg.

   Ha a két vektor párhuzamos, a szorzatuk :math:`\mathbf0`.

.. raw:: html

   <figure class="vector-figure" id="vektorialis-szorzat">
     <svg id="cross-svg" class="vector-diagram" viewBox="0 0 760 410"
          role="img" aria-label="Vektoriális szorzat és paralelogramma mozgatható ábrája"></svg>
     <figcaption class="vector-caption">
       <span class="vector-formula">|a × b| = |a||b| sin γ</span>
       <span class="vector-reading"><span id="cross-area">terület = 8,4</span><span id="cross-direction">irány: kifelé ⊙</span></span>
     </figcaption>
   </figure>

Geometriailag :math:`|\mathbf a\times\mathbf b|` az :math:`\mathbf a` és
:math:`\mathbf b` által kifeszített paralelogramma területe. Továbbá

.. math::

   \mathbf a\parallel\mathbf b
   \quad\Longleftrightarrow\quad
   \mathbf a\times\mathbf b=\mathbf0.

Az algebrai szabályok közül

.. math::

   \begin{aligned}
   \mathbf a\times\mathbf b&=-(\mathbf b\times\mathbf a),\\
   \mathbf a\times(\mathbf b+\mathbf c)
     &=\mathbf a\times\mathbf b+\mathbf a\times\mathbf c,\\
   (\lambda\mathbf a)\times\mathbf b
     &=\lambda(\mathbf a\times\mathbf b).
   \end{aligned}

A vektoriális szorzás nem kommutatív és nem asszociatív.

.. admonition:: Feladatok

   #. Mutassa meg, hogy az :math:`ABC` háromszög területe

      .. math::

         \frac12\left|
         \overrightarrow{AB}\times\overrightarrow{AC}
         \right|.

   #. Legyen :math:`F` az :math:`AB` felezőpontja, :math:`S` pedig az
      :math:`ABC` háromszög súlypontja. Határozza meg, hogy az :math:`AFS`
      háromszög területe hányadrésze az :math:`ABC` háromszög területének.

   #. Döntse el, igazak-e az alábbi állítások:

      .. math::

         \begin{array}{ll}
         \text{a)}&\mathbf a\times\mathbf b=\mathbf0
           \Rightarrow \mathbf a=\mathbf0\text{ vagy }\mathbf b=\mathbf0,\\[2pt]
         \text{b)}&\mathbf a\times\mathbf b=\mathbf a\times\mathbf c,
           \ \mathbf a\ne\mathbf0\Rightarrow\mathbf b=\mathbf c,\\[2pt]
         \text{c)}&\mathbf a+\mathbf b+\mathbf c=\mathbf0
           \Rightarrow
           \mathbf a\times\mathbf b=\mathbf b\times\mathbf c
           =\mathbf c\times\mathbf a.
         \end{array}


Vegyes szorzás
~~~~~~~~~~~~~~

.. admonition:: Definíció: vegyes szorzat

   Három térvektor vegyes szorzata

   .. math::

      [\mathbf a,\mathbf b,\mathbf c]
      :=\mathbf a\cdot(\mathbf b\times\mathbf c).

   Abszolút értéke az általuk kifeszített paralelepipedon térfogata, előjele
   pedig a három vektor irányítását jelzi.

.. raw:: html

   <figure class="vector-figure" id="vegyes-szorzat">
     <svg id="triple-svg" class="vector-diagram vector-diagram--tall" viewBox="0 0 760 460"
          role="img" aria-label="Paralelepipedon változtatható magassággal"></svg>
     <figcaption class="vector-caption vector-caption--control">
       <span><span class="vector-formula">[a,b,c] = a · (b × c)</span><span class="vector-reading" id="triple-volume">|[a,b,c]| = 6,9</span></span>
       <label class="vector-range" for="height-range"><span>magasság = <output id="height-output">1,7</output></span><input id="height-range" type="range" min="0" max="2.6" value="1.7" step="0.05"></label>
     </figcaption>
   </figure>

A vegyes szorzat ciklikus cserére nem változik, két tényező felcserélésére
előjelet vált:

.. math::

   [\mathbf a,\mathbf b,\mathbf c]
   =[\mathbf b,\mathbf c,\mathbf a]
   =[\mathbf c,\mathbf a,\mathbf b],

.. math::

   [\mathbf b,\mathbf a,\mathbf c]
   =-[\mathbf a,\mathbf b,\mathbf c].

Három vektor pontosan akkor koplanáris, ha a vegyes szorzatuk nulla.

.. admonition:: Feladat

   Egy paralelepipedon egy csúcsból induló élei
   :math:`\mathbf a,\mathbf b,\mathbf c`. Fejezze ki vektoriális és vegyes
   szorzattal

   #. az :math:`\mathbf a,\mathbf b` által kifeszített lap területét;
   #. a :math:`\mathbf c`-hez tartozó magasságot;
   #. a test térfogatát.

.. admonition:: További feladatok

   #. Legyen :math:`\mathbf a,\mathbf b` két nem párhuzamos síkvektor.
      Mutassa meg, hogy :math:`\mathbf a+\mathbf b` és
      :math:`\mathbf a-\mathbf b` pontosan akkor merőlegesek, ha
      :math:`|\mathbf a|=|\mathbf b|`. Milyen paralelogramma jelenik meg?
   #. Bizonyítsa a koszinusztételt skaláris szorzattal.
   #. Bizonyítsa a Thalész-tételt a merőlegesség skaláris szorzatos
      feltételével.


Kifeszítés a síkban és a térben
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. admonition:: Kifeszítési tétel

   A sík bármely két nem párhuzamos :math:`\mathbf a,\mathbf b` vektora
   segítségével minden síkvektor egyértelműen előállítható

   .. math::

      \mathbf v=\alpha\mathbf a+\beta\mathbf b

   alakban. A tér bármely három nem koplanáris
   :math:`\mathbf a,\mathbf b,\mathbf c` vektora segítségével minden
   térvektor egyértelműen előállítható

   .. math::

      \mathbf v=\alpha\mathbf a+\beta\mathbf b+\gamma\mathbf c

   alakban.

.. raw:: html

   <div class="vector-mode-switch" role="group" aria-label="Dimenzió">
     <button class="vector-mode-button is-active" type="button" data-basis-mode="plane" aria-pressed="true">Sík</button>
     <button class="vector-mode-button" type="button" data-basis-mode="space" aria-pressed="false">Tér</button>
   </div>
   <figure class="vector-figure" id="kifeszites">
     <svg id="basis-svg" class="vector-diagram vector-diagram--tall" viewBox="0 0 760 440"
          role="img" aria-label="Vektor kifeszítése síkbeli vagy térbeli vektorokkal"></svg>
     <figcaption class="vector-caption" id="basis-caption"></figcaption>
   </figure>

**Bizonyítás a síkban.** Legyen :math:`O` közös kezdőpont és :math:`V` a
:math:`\mathbf v` végpontja. A :math:`V`-n át :math:`\mathbf b`-vel
párhuzamos egyenes az :math:`\mathbf a` tartóegyenesét egyetlen pontban
metszi, mert :math:`\mathbf a` és :math:`\mathbf b` nem párhuzamos. A
metszéspontba mutató vektor :math:`\alpha\mathbf a`, a megmaradó szakasz
pedig :math:`\beta\mathbf b`. Így
:math:`\mathbf v=\alpha\mathbf a+\beta\mathbf b`.

Ha két ilyen előállítás volna, kivonás után

.. math::

   (\alpha-\alpha')\mathbf a=(\beta'-\beta)\mathbf b

adódna. A két oldal csak akkor lehet egyszerre párhuzamos
:math:`\mathbf a`-val és :math:`\mathbf b`-vel, ha mindkettő nulla. Ezért
:math:`\alpha=\alpha'` és :math:`\beta=\beta'`.

**Bizonyítás a térben.** A :math:`\mathbf b,\mathbf c` által kifeszített
síkkal párhuzamos, :math:`V`-n átmenő sík az :math:`\mathbf a` egyenesét
egyetlen :math:`A_\alpha` pontban metszi, mert :math:`\mathbf a` nincs a
:math:`\mathbf b,\mathbf c` síkjában. Ekkor
:math:`\overrightarrow{OA_\alpha}=\alpha\mathbf a`, és
:math:`\mathbf v-\alpha\mathbf a` a :math:`\mathbf b,\mathbf c` síkjában
van. A síkbeli rész szerint ez egyértelműen
:math:`\beta\mathbf b+\gamma\mathbf c` alakú.

Az egyértelműséghez tegyük fel, hogy

.. math::

   \alpha\mathbf a+\beta\mathbf b+\gamma\mathbf c=\mathbf0.

Ha :math:`\alpha\ne0`, akkor
:math:`\mathbf a\in\operatorname{span}(\mathbf b,\mathbf c)` volna, ami
ellentmond a nem koplanaritásnak. Tehát :math:`\alpha=0`, majd a síkbeli
egyértelműségből :math:`\beta=\gamma=0`.

Ha :math:`\tau=[\mathbf a,\mathbf b,\mathbf c]\ne0`, az együtthatók
koordináták választása nélkül is leolvashatók:

.. math::

   \alpha=\frac{[\mathbf v,\mathbf b,\mathbf c]}{\tau},
   \qquad
   \beta=\frac{[\mathbf a,\mathbf v,\mathbf c]}{\tau},
   \qquad
   \gamma=\frac{[\mathbf a,\mathbf b,\mathbf v]}{\tau}.
