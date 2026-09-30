.. _eloadas-04-komplex-szamok:

Komplex számok
==============

A komplex számokat nem új számjegyek bevezetésével, hanem a valós
együtthatós polinomokból konstruáljuk. A konstrukció után minden komplex
számot két valós koordináta ír le, és a polinomokat valóban elfelejthetjük.

.. topic:: A két 90 perces rész

   **Első előadás:** polinomok és maradékos osztás; a komplex számok
   konstrukciója; algebrai alak, műveletek és geometriai jelentés;
   konjugálás, abszolútérték és trigonometrikus alak. **Második előadás:**
   az n-edik gyökök, a konjugált gyökpárok tétele, az algebra alaptétele
   és a gyökök multiplicitása.

.. rubric:: Első előadás — 90 perc

Polinomok
---------

.. admonition:: Definíció

   A :math:`p` **valós együtthatós polinom**, ha

   .. math::

      p(x)=a_0+a_1x+\dots+a_nx^n
          =\sum_{k=0}^{n}a_kx^k,
      \qquad a_0,\dots,a_n\in\mathbb R,

   ahol csak véges sok együttható nem nulla. A valós együtthatós
   polinomok halmazát :math:`\mathbb R[x]` jelöli.

Ha :math:`p\ne0`, akkor a legnagyobb olyan :math:`k`, amelyre
:math:`a_k\ne0`, a polinom **foka**: :math:`\deg p=k`. A konstansok is
polinomok; a nullpolinom foka nem lesz fontos számunkra.

.. list-table:: Példák és ellenpéldák
   :header-rows: 1
   :widths: 34 18 48

   * - Kifejezés
     - Polinom?
     - Indok
   * - :math:`3-2x+5x^4`
     - igen
     - valós együtthatók, nemnegatív egész kitevők
   * - :math:`7` és :math:`0`
     - igen
     - konstans polinomok
   * - :math:`x^{-1}+2`
     - nem
     - negatív kitevőt tartalmaz
   * - :math:`\sqrt{x}+x`
     - nem
     - a :math:`\tfrac12` nem egész kitevő
   * - :math:`e^x`
     - nem
     - nem véges polinom
   * - :math:`1+x+x^2+x^3+\dots`
     - nem
     - végtelen sok nem nulla együtthatója van


Maradékos polinomosztás
-----------------------

Ha :math:`f,g\in\mathbb R[x]` és :math:`g\ne0`, akkor egyértelműen
léteznek :math:`q,r\in\mathbb R[x]` polinomok úgy, hogy

.. math::

   \boxed{f=gq+r},
   \qquad r=0\quad\text{vagy}\quad\deg r<\deg g.

:math:`q` a **hányados**, :math:`r` a **maradék**.

.. list-table:: Négy osztás
   :header-rows: 1
   :widths: 31 45 24

   * - Osztás
     - Az osztási azonosság
     - Maradék
   * - :math:`(x^3+1):(x+1)`
     - :math:`x^3+1=(x+1)(x^2-x+1)`
     - :math:`0`
   * - :math:`(x^3-1):(x-1)`
     - :math:`x^3-1=(x-1)(x^2+x+1)`
     - :math:`0`
   * - :math:`(x^4+x+1):(x^2+1)`
     - :math:`x^4+x+1=(x^2+1)(x^2-1)+(x+2)`
     - :math:`x+2`
   * - :math:`(x^4-1):(x^2+1)`
     - :math:`x^4-1=(x^2+1)(x^2-1)`
     - :math:`0`


A komplex számok konstrukciója
------------------------------

Két polinomot tekintsünk azonosnak, ha :math:`x^2+1`-gyel osztva
ugyanazt a maradékot adják. Ekvivalens megfogalmazásban

.. math::

   p\sim q
   \quad\Longleftrightarrow\quad
   x^2+1\mid p-q.

.. important:: Ugyanaz a szetoidos gondolat

   A geometriai vektorokat egyenlő irányított szakaszok
   ekvivalenciaosztályaiként definiáltuk. Most a komplex számok valós
   polinomok ekvivalenciaosztályai. Mindkét esetben reprezentánsokkal
   számolunk, de az objektumot az egész ekvivalenciaosztály jelenti.

.. math::

   \boxed{\mathbb C:=\mathbb R[x]/(x^2+1)}.

.. raw:: html

   <div class="complex-quotient" role="img"
        aria-label="Azonos maradékú polinomok ugyanazt a komplex számot adják">
     <div class="complex-quotient__representatives">
       <span>p(x)</span>
       <span>p(x) + (x² + 1)q(x)</span>
       <span>p(x) + (x² + 1)s(x)</span>
     </div>
     <div class="complex-quotient__arrow" aria-hidden="true">⟶</div>
     <div class="complex-quotient__class">
       <strong>[p]</strong>
       <span>egyetlen maradék: a + bx</span>
     </div>
   </div>

Az :math:`x^2+1`-gyel vett maradék foka legfeljebb egy, ezért minden
osztálynak pontosan egy :math:`a+bx` alakú képviselője van. Jelöljük az
:math:`x` polinom osztályát :math:`i`-vel:

.. math::

   i:=[x],
   \qquad
   i^2=[x^2]=[-1],
   \qquad
   \boxed{i^2=-1}.

Innentől a polinomokat elfelejthetjük. Minden komplex szám egyértelmű
**algebrai**, más néven **kanonikus alakja**

.. math::

   \boxed{z=a+bi},\qquad a,b\in\mathbb R.

Itt :math:`\operatorname{Re}z=a` a valós rész és
:math:`\operatorname{Im}z=b` a képzetes rész. Ha a két koordinátát
:math:`x,y` jelöli, ugyanez az alak :math:`z=x+iy`.


Műveletek és geometriai jelentés
---------------------------------

Legyen :math:`z=a+bi`, :math:`w=c+di` és :math:`\lambda\in\mathbb R`.
Az összeadás és a valós számmal való szorzás koordinátánként történik:

.. math::

   z+w=(a+c)+(b+d)i,
   \qquad
   \lambda z=\lambda a+(\lambda b)i.

A szorzásnál csak :math:`i^2=-1`-et kell használni:

.. math::

   zw=(a+bi)(c+di)
     =(ac-bd)+(ad+bc)i.

Geometriailag az :math:`a+bi` komplex számot a sík :math:`(a,b)`
pontjával azonosítjuk. Ekkor az összeadás a síkvektorok összeadása, a
valós számmal való szorzás pedig nyújtás; negatív skalár esetén ehhez
egy origóra való tükrözés is társul.

Egy nem nulla :math:`w` komplex számmal való szorzás
:math:`\arg w` szögű forgatás és :math:`|w|` arányú nyújtás. Az alábbi
ábrán :math:`z` a kiinduló szám, :math:`w` a szorzó, a zöld vektor pedig
:math:`zw`.

.. raw:: html

   <figure class="complex-figure complex-multiplication-figure"
           data-complex-multiplication>
     <svg class="complex-plane complex-multiplication-plane"
          viewBox="0 0 760 460" role="img"
          aria-label="Komplex számmal való szorzás mint forgatás és nyújtás"></svg>
     <figcaption class="complex-multiplication-controls">
       <div class="complex-multiplication-fields">
         <label>Hatás
           <select data-comp-mult-mode>
             <option value="rotation">Forgatás</option>
             <option value="scaling">Nyújtás</option>
             <option value="combined">Forgatás és nyújtás</option>
           </select>
         </label>
         <label>Re(z)
           <input type="number" min="-2" max="2" step="0.25" value="2"
                  data-comp-mult-z-a>
         </label>
         <label>Im(z)
           <input type="number" min="-2" max="2" step="0.25" value="1"
                  data-comp-mult-z-b>
         </label>
         <label data-comp-mult-angle-control>arg(w)
           <input type="range" min="-180" max="180" step="5" value="60"
                  data-comp-mult-w-angle>
         </label>
         <label data-comp-mult-modulus-control>|w|
           <input type="range" min="0" max="1.5" step="0.05" value="1.25"
                  data-comp-mult-w-modulus>
         </label>
       </div>
       <div class="complex-readout complex-multiplication-readout"
            data-comp-mult-readout aria-live="polite"></div>
     </figcaption>
   </figure>


Konjugálás, abszolútérték és osztás
-----------------------------------

Az :math:`z=a+bi` komplex szám **konjugáltja**

.. math::

   \overline z=a-bi.

A konjugálás a komplex síkon a valós tengelyre való tükrözés. Közvetlen
számolással

.. math::

   z\overline z=(a+bi)(a-bi)=a^2+b^2.

Ez a :math:`z`-hez tartozó síkvektor hosszának négyzete, ezért

.. math::

   \boxed{|z|=\sqrt{a^2+b^2}=\sqrt{z\overline z}},
   \qquad z\overline z=|z|^2.

Ha :math:`z\ne0`, akkor :math:`z\overline z=|z|^2>0`, így

.. math::

   \boxed{\frac1z=\frac{\overline z}{z\overline z}
   =\frac{a-bi}{a^2+b^2}}.

Ez adja a nevező **i-telenítésének** általános módszerét. Ha
:math:`c+di\ne0`, akkor

.. math::

   \frac{a+bi}{c+di}
   =\frac{(a+bi)(c-di)}{c^2+d^2}
   =\frac{ac+bd}{c^2+d^2}
    +i\frac{bc-ad}{c^2+d^2}.

**Példa.**

.. math::

   \frac{4+i}{2-i}
   =\frac{(4+i)(2+i)}{(2-i)(2+i)}
   =\frac{7+6i}{5}
   =\frac75+\frac65i.


A komplex sík
-------------

Az :math:`a+bi\leftrightarrow(a,b)` megfeleltetésben a vízszintes
tengely a valós, a függőleges a képzetes tengely. Az alábbi ábrán
:math:`z` és :math:`\overline z` egymás tükörképei; a csúszkákkal a két
koordináta változtatható.

.. raw:: html

   <figure class="complex-figure" data-complex-plane>
     <svg class="complex-plane" viewBox="0 0 760 440" role="img"
          aria-label="Interaktív komplex sík a komplex szám és konjugáltja ábrázolásával"></svg>
     <figcaption class="complex-controls">
       <label>a
         <input type="range" min="-4" max="4" step="0.25" value="3" data-complex-a>
       </label>
       <label>b
         <input type="range" min="-3" max="3" step="0.25" value="2" data-complex-b>
       </label>
       <span class="complex-readout" data-complex-readout></span>
     </figcaption>
   </figure>


Trigonometrikus alak
--------------------

Legyen :math:`z\ne0`, :math:`r=|z|` és :math:`\varphi` a hozzá tartozó
vektor irányszöge. Ekkor

.. math::

   a=r\cos\varphi,
   \qquad b=r\sin\varphi,

tehát

.. math::

   \boxed{z=r(\cos\varphi+i\sin\varphi)}.

:math:`r` egyértelmű, :math:`\varphi` pedig :math:`2\pi` egész számú
többszörösétől eltekintve egyértelmű. Röviden
:math:`z=re^{i\varphi}` is írható.

Legyen

.. math::

   z=r(\cos\varphi+i\sin\varphi),
   \qquad
   w=s(\cos\psi+i\sin\psi).

Az addíciós képletekből

.. math::

   \boxed{zw=rs\bigl(\cos(\varphi+\psi)
   +i\sin(\varphi+\psi)\bigr)}.

A szorzás tehát a hosszakat összeszorozza, a szögeket összeadja.
Hasonlóan, :math:`w\ne0` esetén

.. math::

   \frac zw=\frac rs
   \bigl(\cos(\varphi-\psi)+i\sin(\varphi-\psi)\bigr).

Ebből egész :math:`n\ge0` esetén következik a **Moivre-formula**:

.. math::

   \bigl(r(\cos\varphi+i\sin\varphi)\bigr)^n
   =r^n\bigl(\cos(n\varphi)+i\sin(n\varphi)\bigr).


Rövid alkalmazások
------------------

1. feladat: egyenlet algebrai alakban
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Oldjuk meg a komplex számok között:

.. math::

   z^3+2z^2+5z=0.

**Megoldás.**

.. math::

   z(z^2+2z+5)=0,
   \qquad
   z=0\quad\text{vagy}\quad(z+1)^2=-4.

Ezért

.. math::

   \boxed{z\in\{0,-1+2i,-1-2i\}}.


2. feladat: konjugált és trigonometrikus alak
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Oldjuk meg:

.. math::

   z\overline z=z^3.

**Megoldás.** :math:`z=0` megoldás. Ha :math:`z\ne0` és
:math:`z=r(\cos\varphi+i\sin\varphi)`, akkor
:math:`z\overline z=r^2`, míg
:math:`z^3=r^3(\cos3\varphi+i\sin3\varphi)`. Így

.. math::

   r=1,
   \qquad
   3\varphi\equiv0\pmod{2\pi}.

Tehát

.. math::

   \boxed{z\in\left\{0,1,
   -\frac12+\frac{\sqrt3}{2}i,
   -\frac12-\frac{\sqrt3}{2}i\right\}}.


3. feladat: valós és képzetes rész összehasonlítása
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Keressük a valós :math:`x,y` számokat, ha

.. math::

   3x+2iy-ix+5y=7+5i.

A valós és képzetes részek egyenlőségéből

.. math::

   \begin{cases}
   3x+5y=7,\\
   -x+2y=5,
   \end{cases}
   \qquad\Longrightarrow\qquad
   \boxed{x=-1,\quad y=2}.


.. raw:: html

   <div class="lecture-boundary" role="separator" aria-label="A második előadás kezdete">
     <span>Második előadás — 90 perc</span>
   </div>


Az n-edik gyökök
----------------

Használjuk a rövid

.. math::

   \operatorname{cis}\varphi:=\cos\varphi+i\sin\varphi

jelölést. Legyen

.. math::

   z=r\operatorname{cis}\varphi\ne0,
   \qquad n\in\mathbb N,\quad n\ge1.

.. admonition:: Az n-edik gyökök képlete

   A :math:`w^n=z` egyenletnek pontosan :math:`n` különböző megoldása van:

   .. math::

      \boxed{
      w_k=\sqrt[n]{r}\,
      \operatorname{cis}\left(\frac{\varphi+2k\pi}{n}\right)},
      \qquad k=0,1,\dots,n-1.

Valóban, ha :math:`w=\rho\operatorname{cis}\vartheta`, akkor a
Moivre-formula szerint

.. math::

   w^n=\rho^n\operatorname{cis}(n\vartheta).

Ez pontosan akkor egyenlő :math:`r\operatorname{cis}\varphi`-vel, ha

.. math::

   \rho=\sqrt[n]{r},
   \qquad
   n\vartheta=\varphi+2k\pi.

A :math:`k=0,\dots,n-1` értékek különböző gyököket adnak; minden további
egész :math:`k` ezek egyikét ismétli. A :math:`z=0` eset külön kezelendő:
annak egyetlen n-edik gyöke :math:`0`.


A gyökök szabályos n-szöge
~~~~~~~~~~~~~~~~~~~~~~~~~~

A szomszédos gyökök argumentuma között mindig :math:`2\pi/n` a
különbség. Ezért a gyökök a
:math:`\sqrt[n]{r}` sugarú körbe írt szabályos :math:`n`-szög csúcsai.
A :math:`\varphi` argumentum csak együtt forgatja az egész sokszöget.

.. raw:: html

   <figure class="complex-figure" data-root-polygon>
     <svg class="complex-plane complex-root-plane" viewBox="0 0 760 500"
          role="img"
          aria-label="Egy komplex szám n-edik gyökei szabályos n-szög csúcsaiként"></svg>
     <figcaption class="complex-controls complex-root-controls">
       <label>n
         <input type="range" min="2" max="10" step="1" value="5" data-root-n>
       </label>
       <label>φ
         <input type="range" min="-180" max="180" step="15" value="60" data-root-phi>
       </label>
       <span class="complex-readout" data-root-readout></span>
     </figcaption>
   </figure>



1. példa: az egység köbgyökei
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A :math:`w^3=1` egyenletben :math:`r=1` és :math:`\varphi=0`. Így

.. math::

   w_k=\operatorname{cis}\frac{2k\pi}{3},
   \qquad k=0,1,2,

azaz

.. math::

   \boxed{
   w_0=1,\qquad
   w_1=-\frac12+\frac{\sqrt3}{2}i,\qquad
   w_2=-\frac12-\frac{\sqrt3}{2}i}.

Ez a három pont egy origó középpontú szabályos háromszög csúcsa.


2. példa: a mínusz tizenhat negyedik gyökei
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A :math:`w^4=-16` egyenletben
:math:`-16=16\operatorname{cis}\pi`, ezért

.. math::

   w_k=2\operatorname{cis}\left(\frac{\pi+2k\pi}{4}\right),
   \qquad k=0,1,2,3.

Tehát

.. math::

   \boxed{
   w\in\left\{
   \sqrt2+i\sqrt2,\,
   -\sqrt2+i\sqrt2,\,
   -\sqrt2-i\sqrt2,\,
   \sqrt2-i\sqrt2
   \right\}}.

A négy gyök egy origó középpontú, elforgatott négyzet csúcsa.


Valós polinomok konjugált gyökpárjai
------------------------------------

.. admonition:: Tétel

   Ha :math:`p\in\mathbb R[x]` és :math:`\alpha\in\mathbb C` gyöke
   :math:`p`-nek, akkor :math:`\overline\alpha` is gyöke.

**Bizonyítás.** Mivel a polinom minden :math:`a_k` együtthatója valós,

.. math::

   p(\overline\alpha)
   =\sum_{k=0}^n a_k\overline\alpha^{\,k}
   =\overline{\sum_{k=0}^n a_k\alpha^k}
   =\overline{p(\alpha)}
   =0.

A nem valós gyökök tehát konjugált párokban jelennek meg.

**Példa.**

.. math::

   p(x)=x^2-2x+5
       =(x-(1+2i))(x-(1-2i)).

A két gyök :math:`1+2i` és :math:`1-2i`.

.. note::

   A valós együttható feltétel lényeges. A
   :math:`p(x)=x-i` komplex együtthatós polinomnak :math:`i` gyöke, de
   :math:`-i` nem gyöke.



Az algebra alaptétele
---------------------

.. admonition:: Az algebra alaptétele

   Minden legalább elsőfokú komplex együtthatós polinomnak van komplex
   gyöke.

A tétel állítása létezési állítás; itt nem bizonyítjuk. Ha
:math:`p(\alpha)=0`, akkor :math:`x-\alpha` osztója :math:`p`-nek.
A hányadosra ismét alkalmazva az algebra alaptételét egy
:math:`n`-edfokú polinom végül :math:`n` lineáris tényezőre bontható, ha
az ismétlődéseket is megszámoljuk.

**Példák.**

* Az :math:`x^2+1` polinomnak nincs valós gyöke, de
  :math:`\mathbb C`-ben :math:`x^2+1=(x-i)(x+i)`.
* Az :math:`x^5-1` öt komplex gyöke az egység ötödik gyöke; ezek egy
  szabályos ötszög csúcsai.


A gyök multiplicitása
---------------------

.. admonition:: Definíció

   Az :math:`\alpha` szám a :math:`p` polinom **m-szeres gyöke**, ha

   .. math::

      p(x)=(x-\alpha)^m q(x),
      \qquad q(\alpha)\ne0.

   Az :math:`m` pozitív egész a gyök **multiplicitása**.

Másképpen: :math:`(x-\alpha)^m` osztja :math:`p`-t, de
:math:`(x-\alpha)^{m+1}` már nem.


3. példa: a multiplicitások leolvasása
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Legyen

.. math::

   p(x)=(x-2)^3(x+1)^2(x^2+1).

A komplex gyökök és multiplicitásaik:

.. list-table::
   :header-rows: 1
   :widths: 45 30

   * - Gyök
     - Multiplicitás
   * - :math:`2`
     - :math:`3`
   * - :math:`-1`
     - :math:`2`
   * - :math:`i`
     - :math:`1`
   * - :math:`-i`
     - :math:`1`

A multiplicitások összege
:math:`3+2+1+1=7=\deg p`.


Konjugált gyökök multiplicitása
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Valós együtthatós polinomban a konjugált gyökök multiplicitása is
azonos. Ha
:math:`p(x)=(x-\alpha)^m q(x)` és :math:`q(\alpha)\ne0`, akkor az
együtthatók konjugálásával
:math:`p(x)=(x-\overline\alpha)^m\overline q(x)`, ahol
:math:`\overline q(\overline\alpha)\ne0`.

**Példa.**

.. math::

   q(x)=(x^2+1)^2(x-3)
       =(x-i)^2(x+i)^2(x-3).

Itt :math:`i` és :math:`-i` egyaránt kétszeres, :math:`3` pedig
egyszeres gyök.


Az algebra alaptételének faktorizált alakja
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Ha :math:`p` egy :math:`n`-edfokú komplex polinom, akkor a tényezők
sorrendjétől eltekintve egyértelműen felírható

.. math::

   \boxed{
   p(x)=a_n\prod_{j=1}^{s}(x-\alpha_j)^{m_j}},
   \qquad
   m_1+\dots+m_s=n,

ahol :math:`\alpha_1,\dots,\alpha_s` a különböző gyökök, az
:math:`m_j` számok pedig a hozzájuk tartozó multiplicitások.
