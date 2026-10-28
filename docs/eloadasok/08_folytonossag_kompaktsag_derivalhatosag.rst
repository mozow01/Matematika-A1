.. _eloadas-08:

8. előadás
==========

Bolzano tétele
--------------

.. admonition:: Tétel — Bolzano

   Legyen :math:`f:[a,b]\to\mathbb R` folytonos. Ha
   :math:`f(a)f(b)<0`, akkor van olyan :math:`c\in(a,b)`,
   amelyre :math:`f(c)=0`.

**Bizonyítás egymásba skatulyázott intervallumokkal.**
Az előjelek felcserélésével feltehető, hogy
:math:`f(a)<0<f(b)`. Legyen :math:`I_0=[a_0,b_0]=[a,b]`.
Felezzük meg az intervallumot a
:math:`m_0=(a_0+b_0)/2` pontban. Ha :math:`f(m_0)=0`,
készen vagyunk. Ellenkező esetben azt a félintervallumot
választjuk :math:`I_1=[a_1,b_1]`-nek, amelynek végpontjaiban
a függvényértékek előjele különböző. Ezt ismételve vagy
véges sok lépésben gyököt találunk, vagy

.. math::

   I_0\supset I_1\supset I_2\supset\cdots,\qquad
   f(a_n)<0<f(b_n),\qquad
   |I_n|=\frac{b-a}{2^n}\longrightarrow0.

A Cantor-féle közösrészállítás szerint
:math:`\bigcap_{n=0}^{\infty}I_n=\{c\}`. Ekkor
:math:`a_n\to c` és :math:`b_n\to c`. A folytonosság miatt

.. math::

   f(c)=\lim_{n\to\infty}f(a_n)\leq0,
   \qquad
   f(c)=\lim_{n\to\infty}f(b_n)\geq0,

tehát :math:`f(c)=0`.

.. raw:: html

   <figure class="l8-figure" data-l8-bolzano>
     <svg viewBox="0 0 800 370" role="img" aria-label="Bolzano tételének intervallumfelezéses bizonyítása egymásba skatulyázott intervallumokkal"></svg>
     <figcaption>Mindig azt a felet tartjuk meg, amelynek végpontjaiban ellentétes előjelűek a függvényértékek.</figcaption>
   </figure>

Darboux-tulajdonság
-------------------

.. admonition:: Definíció — Darboux-tulajdonság

   Az :math:`I\subseteq\mathbb R` intervallumon értelmezett
   :math:`f:I\to\mathbb R` függvény **Darboux-tulajdonságú**, ha
   bármely :math:`x_1<x_2` és az :math:`f(x_1)`, :math:`f(x_2)`
   közé eső :math:`y` szám esetén van olyan
   :math:`c\in[x_1,x_2]`, amelyre :math:`f(c)=y`.

Másképpen: egyetlen közbülső értéket sem ugorhat át.

.. admonition:: Tétel — Bolzano–Darboux

   Intervallumon értelmezett folytonos függvény
   Darboux-tulajdonságú.

**Bizonyítás.** Legyen például
:math:`f(x_1)<y<f(x_2)`, és alkalmazzuk Bolzano tételét a
:math:`h(x)=f(x)-y` folytonos függvényre az
:math:`[x_1,x_2]` intervallumon. Mivel
:math:`h(x_1)<0<h(x_2)`, van :math:`c`, amelyre
:math:`h(c)=0`, vagyis :math:`f(c)=y`.

.. important::

   **Folytonos, de nem Darboux-tulajdonságú függvény
   intervallumon nem létezik.** Ezt éppen a
   Bolzano–Darboux-tétel mondja ki.

**Nem Darboux-példa.** A szignumfüggvény nem folytonos
:math:`0`-ban, és például a :math:`1/2` értéket átugorja,
ezért nem Darboux-tulajdonságú.

**Nem folytonos, mégis Darboux-példa.** Az

.. math::

   f(x)=
   \begin{cases}
      \sin(1/x),&x\neq0,\\
      0,&x=0
   \end{cases}
   \qquad (x\in[-1,1])

függvény nem folytonos :math:`0`-ban. Mégis
Darboux-tulajdonságú: ha egy részintervallum nem tartalmazza
:math:`0`-t, ott a függvény folytonos; ha tartalmazza,
akkor a :math:`0` minden egyoldali környezetében felveszi
a teljes :math:`[-1,1]` intervallum minden értékét.

.. raw:: html

   <figure class="l8-figure" data-l8-darboux>
     <div class="l8-cards">
       <div>
         <h3>Ugrás: nem Darboux</h3>
         <svg viewBox="0 0 380 250" data-l8-step role="img" aria-label="A szignumfüggvény átugorja a közbülső értékeket"></svg>
         <p>A szaggatott közbülső értéket a függvény nem veszi fel.</p>
       </div>
       <div>
         <h3>Oszcilláció: Darboux</h3>
         <svg viewBox="0 0 380 250" data-l8-oscillation role="img" aria-label="A sin egy per x függvény minden közbülső értéket felvesz"></svg>
         <p>A függvény nem folytonos a nullában, de nem ugrik át értéket.</p>
       </div>
     </div>
   </figure>

Nyílt halmazok
--------------

.. admonition:: Definíció — nyílt halmaz :math:`\mathbb R`-ben

   A :math:`G\subseteq\mathbb R` halmaz **nyílt**, ha minden
   :math:`x\in G` ponthoz van olyan :math:`\varepsilon>0`,
   amelyre

   .. math::

      B_\varepsilon(x)=(x-\varepsilon,x+\varepsilon)\subseteq G.

.. admonition:: Definíció — nyílt halmaz :math:`\mathbb R^2`-ben

   A :math:`G\subseteq\mathbb R^2` halmaz **nyílt**, ha minden
   :math:`p\in G` ponthoz van olyan :math:`\varepsilon>0`,
   amelyre a nyílt körlap

   .. math::

      B_\varepsilon(p)
      =\{q\in\mathbb R^2:\|q-p\|<\varepsilon\}

   teljes egészében :math:`G`-ben van.

.. raw:: html

   <figure class="l8-figure" data-l8-open>
     <svg viewBox="0 0 800 330" role="img" aria-label="Nyílt halmaz és egy pont környezete a valós számegyenesen és a síkon"></svg>
     <figcaption>A pont körül elfér egy teljes nyílt intervallum, illetve nyílt körlap.</figcaption>
   </figure>

Kompakt halmazok
----------------

.. admonition:: Definíció — topológiai kompaktság

   A :math:`K\subseteq\mathbb R` halmaz **kompakt**, ha minden
   nyílt fedéséből kiválasztható véges részfedés. Tehát ha
   :math:`U_i` nyílt halmazok és

   .. math::

      K\subseteq\bigcup_{i\in J}U_i,

   akkor vannak :math:`i_1,\ldots,i_m\in J` indexek, amelyekre

   .. math::

      K\subseteq U_{i_1}\cup\cdots\cup U_{i_m}.

**Alappéldák.**

* Minden **véges halmaz kompakt**: minden pontjához válasszunk
  egy őt tartalmazó halmazt a fedésből.
* :math:`\mathbb N` **nem kompakt**. Az
  :math:`U_m=(-m,m)` nyílt halmazok lefedik
  :math:`\mathbb N`-et, de véges sok közülük nem.
* :math:`S=\{1/n:n\geq1\}` **nem kompakt**. Az
  :math:`U_m=(1/(m+1),2)` halmazok lefedik :math:`S`-t,
  de véges sok kiválasztott halmaz, ha legnagyobb indexük
  :math:`M`, nem tartalmazza az :math:`1/(M+1)` pontot.
* :math:`S\cup\{0\}` **kompakt**. Egy nyílt fedés valamely
  tagja tartalmazza :math:`0` egy környezetét, és így az
  :math:`1/n` pontok közül az összes elég nagy indexűt.
  A véges sok kimaradó ponthoz véges sok további fedő
  halmaz elegendő.

.. raw:: html

   <figure class="l8-figure" data-l8-compact>
     <svg viewBox="0 0 800 410" role="img" aria-label="Véges halmaz, a természetes számok, az egy per n pontok és az egy per n pontok a nullával"></svg>
     <figcaption>A hiányzó torlódási pontot üres, a halmazhoz tartozó pontot kitöltött kör jelöli.</figcaption>
   </figure>

Heine–Borel- és Borel–Lebesgue-tétel
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A valós egyenesen a következő két megfogalmazás ugyanazt fejezi ki.

.. admonition:: Tétel

   **Heine–Borel:** :math:`K\subseteq\mathbb R` pontosan akkor
   kompakt, ha zárt és korlátos.

   **Borel–Lebesgue befedési tétel:** minden zárt és korlátos
   valós halmaz minden nyílt fedéséből kiválasztható véges
   részfedés.

**A lényegi lépés: :math:`[a,b]` kompakt.**
Tegyük fel indirekten, hogy egy nyílt fedéséből nem választható
véges részfedés. Felezzük meg :math:`[a,b]`-t. Legalább az egyik
zárt félintervallumnak sincs véges részfedése; különben a két
fél véges részfedése együtt lefedné :math:`[a,b]`-t.
Ezt a felet továbbfelezve olyan intervallumokat kapunk, amelyekre

.. math::

   I_0\supset I_1\supset I_2\supset\cdots,\qquad
   |I_n|=\frac{b-a}{2^n}\longrightarrow0,

és egyik :math:`I_n`-nek sincs véges részfedése.
A Cantor-féle közösrészállítás egyetlen közös
:math:`c` pontot ad. A fedés valamely :math:`U` tagja tartalmazza
:math:`c`-t. Mivel :math:`U` nyílt, valamely
:math:`\delta>0`-ra :math:`B_\delta(c)\subseteq U`.
Elég nagy :math:`n`-re
:math:`I_n\subseteq B_\delta(c)\subseteq U`, tehát
:math:`I_n`-nek még egyetlen halmazból álló véges részfedése is
van. Ez ellentmondás.

Ha :math:`K\subseteq[a,b]` zárt, akkor egy :math:`K`-t fedő
nyílt családhoz hozzávéve a nyílt
:math:`\mathbb R\setminus K` halmazt, :math:`[a,b]` fedését
kapjuk. Ennek véges részfedéséből
:math:`\mathbb R\setminus K` elhagyható. Így minden zárt és
korlátos :math:`K` kompakt.

Megfordítva, kompakt :math:`K` korlátossága az
:math:`(-m,m)` fedésből következik. A kompaktság azt is adja,
hogy :math:`K` zárt: minden :math:`x\notin K` pont elválasztható
a :math:`K` pontjaitól diszjunkt környezetekkel, és a
:math:`K`-t fedő környezetekből véges sok elegendő.

Weierstrass tétele
------------------

.. admonition:: Tétel — Weierstrass

   Kompakt halmazon értelmezett folytonos valós függvény
   korlátos, és felveszi a maximumát és a minimumát.

Legyen :math:`f:K\to\mathbb R` folytonos, ahol :math:`K` kompakt.

**I. A függvény korlátos.**
Minden :math:`x\in K` ponthoz a folytonosságot
:math:`\varepsilon=1`-gyel alkalmazva van olyan nyílt
:math:`U_x` környezet, hogy

.. math::

   y\in K\cap U_x\quad\Longrightarrow\quad
   |f(y)-f(x)|<1.

Az :math:`U_x` halmazok lefedik :math:`K`-t. A kompaktság miatt
véges sok, :math:`U_{x_1},\ldots,U_{x_m}` is elegendő. Ezért

.. math::

   |f(y)|\leq 1+\max_{1\leq j\leq m}|f(x_j)|
   \qquad(y\in K).

**II. A szuprémum maximum.**
Az első rész miatt létezik
:math:`S=\sup\operatorname{Ran}(f)`. Tegyük fel, hogy
:math:`S` nem maximum, tehát :math:`S-f(x)>0` minden
:math:`x\in K` esetén. Ekkor

.. math::

   g(x)=\frac{1}{S-f(x)}

folytonos :math:`K`-n, ezért az első rész szerint korlátos.
A szuprémum definíciója miatt viszont minden
:math:`n\geq1`-hez van :math:`x_n\in K`, amelyre
:math:`S-1/n<f(x_n)\leq S`, így

.. math::

   g(x_n)=\frac1{S-f(x_n)}>n.

Ez ellentmond :math:`g` korlátosságának. Tehát :math:`f`
felveszi maximumát. A minimum létezését :math:`-f`-re
alkalmazva kapjuk.

Deriválhatóság
--------------

Legyen :math:`D=\operatorname{Dom}(f)\subseteq\mathbb R` és
:math:`u\in D\cap D'`.

.. admonition:: Definíció — lineáris főrész és maradéktag

   Az :math:`f:D\to\mathbb R` függvény **deriválható**
   :math:`u`-ban, ha van :math:`m\in\mathbb R` és
   :math:`\varepsilon:D\to\mathbb R` függvény úgy, hogy

   .. math::

      f(x)=f(u)+m(x-u)+\varepsilon(x)(x-u)
      \qquad(x\in D),

   továbbá :math:`\varepsilon` folytonos :math:`u`-ban és
   :math:`\varepsilon(u)=0`. Ekkor :math:`m=f'(u)`.

A felbontásban :math:`m(x-u)` a **lineáris főrész**,
:math:`\varepsilon(x)(x-u)` pedig ennél kisebb rendű hiba.

.. raw:: html

   <figure class="l8-figure" data-l8-leibniz>
     <svg viewBox="0 0 800 410" role="img" aria-label="Leibniz-háromszög a függvény növekményének lineáris főrészével és hibájával"></svg>
     <figcaption>A teljes függvénynövekmény a lineáris rész és a maradéktag összege.</figcaption>
   </figure>

Gyakorlati definíció: differenciahányados
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A fenti egyenletet :math:`x\neq u` esetén :math:`x-u`-val
elosztva

.. math::

   \frac{f(x)-f(u)}{x-u}=m+\varepsilon(x).

Ezért a deriválhatóság ekvivalens azzal, hogy létezik a véges
határérték

.. math::

   f'(u)=\lim_{x\to u}\frac{f(x)-f(u)}{x-u}
        =\lim_{h\to0}\frac{f(u+h)-f(u)}{h},

ahol csak az értelmezési tartományba eső pontokat vesszük.

.. admonition:: Következmény

   Ha :math:`f` deriválható :math:`u`-ban, akkor folytonos
   :math:`u`-ban.

Valóban,
:math:`f(x)-f(u)=[m+\varepsilon(x)](x-u)\to0`, ha
:math:`x\to u`. A megfordítás nem igaz: az
:math:`f(x)=|x|` függvény folytonos :math:`0`-ban, de a jobb
oldali differenciahányados határértéke :math:`1`, a bal oldalié
:math:`-1`.

Elméleti definíció: Carathéodory-függvény
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A deriválhatóság ekvivalens azzal, hogy létezik
:math:`u`-ban folytonos :math:`C_u^f:D\to\mathbb R` függvény,
amelyre

.. math::

   f(x)-f(u)=C_u^f(x)(x-u)\qquad(x\in D).

Ekkor :math:`f'(u)=C_u^f(u)`. Ha a derivált már ismert, a
kanonikus Carathéodory-függvény

.. math::

   C_u^f(x)=
   \begin{cases}
      \dfrac{f(x)-f(u)}{x-u},&x\neq u,\\[6pt]
      f'(u),&x=u.
   \end{cases}

Ez a megfogalmazás azért hasznos, mert nem kell külön
:math:`x-u`-val osztani; a deriválási szabályok közvetlen
algebrai azonosságokból következnek.

A deriváltfüggvény
~~~~~~~~~~~~~~~~~~

Legyen

.. math::

   D_{f'}=\{u\in D\cap D': f\text{ deriválható }u\text{-ban}\}.

A **deriváltfüggvény** az

.. math::

   f':D_{f'}\to\mathbb R,\qquad u\longmapsto f'(u).

Deriválási szabályok
--------------------

Ha :math:`f` és :math:`g` deriválható :math:`u`-ban, és
:math:`\lambda\in\mathbb R`, akkor a deriválható függvények
zártak az alapműveletekre:

.. math::

   \begin{aligned}
   (f+g)'(u)&=f'(u)+g'(u),&
   (\lambda f)'(u)&=\lambda f'(u),\\
   (fg)'(u)&=f'(u)g(u)+f(u)g'(u),&
   \left(\frac fg\right)'(u)
     &=\frac{f'(u)g(u)-f(u)g'(u)}{g(u)^2}
       \quad(g(u)\neq0).
   \end{aligned}

A láncszabály:

.. math::

   (g\circ f)'(u)=g'(f(u))\,f'(u).

Elemi deriváltak
~~~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   :widths: 44 56

   * - :math:`f(x)`
     - :math:`f'(x)`
   * - :math:`c`
     - :math:`0`
   * - :math:`x^\alpha`
     - :math:`\alpha x^{\alpha-1}`, ahol értelmezett
   * - :math:`e^x`
     - :math:`e^x`
   * - :math:`a^x`
     - :math:`a^x\ln a`, :math:`a>0`
   * - :math:`\ln x`
     - :math:`1/x`, :math:`x>0`
   * - :math:`\sin x`
     - :math:`\cos x`
   * - :math:`\cos x`
     - :math:`-\sin x`
   * - :math:`\tan x`
     - :math:`1/\cos^2x`, ahol értelmezett

Az exponenciális függvény érintési tulajdonságából

.. math::

   (e^x)'=\lim_{h\to0}\frac{e^{x+h}-e^x}{h}
   =e^x\lim_{h\to0}\frac{e^h-1}{h}=e^x.

Ha :math:`x>0`, akkor a logaritmus nevezetes határértékével

.. math::

   (\ln x)'
   =\lim_{h\to0}\frac{\ln(x+h)-\ln x}{h}
   =\frac1x\lim_{t\to0}\frac{\ln(1+t)}t
   =\frac1x,
   \qquad t=\frac hx.

L’Hospital-szabály
------------------

.. admonition:: Nulladik változat

   Legyen :math:`f,g:D\to\mathbb R`, továbbá
   :math:`u\in D\cap D'`. Tegyük fel, hogy :math:`f` és
   :math:`g` deriválható :math:`u`-ban,

   .. math::

      f(u)=g(u)=0,\qquad g'(u)\neq0.

   Ekkor

   .. math::

      \lim_{x\to u}\frac{f(x)}{g(x)}
      =\frac{f'(u)}{g'(u)}.

**Bizonyítás.** A Carathéodory-felbontással

.. math::

   f(x)=C_u^f(x)(x-u),\qquad
   g(x)=C_u^g(x)(x-u).

Mivel :math:`C_u^g(u)=g'(u)\neq0` és :math:`C_u^g` folytonos,
a nevező egy elég kicsi lyukas környezetben nem nulla. Ezért

.. math::

   \lim_{x\to u}\frac{f(x)}{g(x)}
   =\lim_{x\to u}\frac{C_u^f(x)}{C_u^g(x)}
   =\frac{C_u^f(u)}{C_u^g(u)}
   =\frac{f'(u)}{g'(u)}.

.. admonition:: Magasabb rendű változat — kimondás

   Legyen :math:`f` és :math:`g` :math:`(n+1)`-szer
   deriválható :math:`u` egy környezetében, és

   .. math::

      f^{(k)}(u)=g^{(k)}(u)=0
      \quad(k=0,1,\ldots,n),\qquad
      g^{(n+1)}(u)\neq0.

   Ekkor

   .. math::

      \lim_{x\to u}\frac{f(x)}{g(x)}
      =\frac{f^{(n+1)}(u)}{g^{(n+1)}(u)}.
