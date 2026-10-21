.. _eloadas-07:

7. előadás
==========

Határérték: emlékeztető
-----------------------

Legyen :math:`f:\mathbb R\supset\!\to\mathbb R`, vagyis
:math:`D:=\operatorname{Dom}(f)\subseteq\mathbb R`, és legyen
:math:`u\in D'`. Azt mondjuk, hogy :math:`f` határértéke az
:math:`u` pontban :math:`A\in\overline{\mathbb R}`, ha

.. math::

   \forall\varepsilon>0\ \exists\delta>0\ \forall x\in D:
   \quad x\in B_\delta(u)\setminus\{u\}
   \Longrightarrow f(x)\in B_\varepsilon(A).

Itt :math:`B_\rho(t)=(t-\rho,t+\rho)`, ha :math:`t\in\mathbb R`.
A két végtelen környezeteit a korábbi jelöléssel összeegyeztetve
:math:`B_\rho(+\infty)=(1/\rho,+\infty]` és
:math:`B_\rho(-\infty)=[-\infty,-1/\rho)` jelöli
(:math:`\rho>0`). Így a fenti állítás a végtelenben vett
argumentumra és határértékre is értelmes.

A folytonosság különböző jellemzései
------------------------------------

**1. Epszilonos definíció.** Legyen :math:`u\in D`.
Az :math:`f\in C(u)` jelölés azt jelenti, hogy :math:`f`
folytonos :math:`u`-ban; definíció szerint

.. math::

   f\in C(u)\ \overset{\mathrm{def}}{\Longleftrightarrow}\
   \forall\varepsilon>0\ \exists\delta>0\ \forall x\in D:
   \quad x\in B_\delta(u)\Longrightarrow f(x)\in B_\varepsilon(f(u)).

**2. Határértékes jellemzés.** Ha ezenfelül :math:`u\in D'` is,
akkor

.. math::

   f\in C(u)\quad\Longleftrightarrow\quad
   \lim_{x\to u}f(x)=f(u).

Az :math:`u` pontot az első definícióban nem hagyjuk ki a
környezetből; a határérték definíciójában viszont igen.
Izolált tartománybeli pontban az első definíció alapján
a folytonosság automatikus, a lyukas határérték azonban
nem alkalmazható.

**3. Sorozatos jellemzés (Heine-féle alak, átviteli elv).**
Minden :math:`u\in D` esetén

.. math::

   f\in C(u)\quad\Longleftrightarrow\quad
   \forall (x_n)\in D^{\mathbb N\setminus\{0\}}:
   \quad x_n\to u\Longrightarrow f(x_n)\to f(u).

Az egyik irány az epszilonos definíció közvetlen alkalmazása.
Ha a folytonosság nem teljesül, valamely
:math:`\varepsilon_0>0`-hoz minden :math:`n` esetén
választható :math:`x_n\in D\cap B_{1/n}(u)` úgy, hogy
:math:`f(x_n)\notin B_{\varepsilon_0}(f(u))`;
ez a sorozatos feltételnek mond ellent.

Mire használjuk a sorozatos jellemzést?
---------------------------------------

Az  **átviteli elv** határrétékre is igaz: ha
:math:`\lim_{x\to u}h(x)=L` és
:math:`t_n\in\operatorname{Dom}(h)\setminus\{u\}`,
:math:`t_n\to u`, akkor :math:`h(t_n)\to L`.
Ez a függvényhatárérték sorozatos jellemzése, ha
:math:`h(u)=L` folytonos kiterjesztést ad, a Heine-féle
jellemzés is pontosan ugyanezt mondja.

**1. példa.** Legyen :math:`a_n=n\sin(1/n)`. A nevezetes
:math:`\lim_{t\to0}\sin t/t=1` határértékhez
:math:`t_n=1/n\to0`-t választunk, és átalakítjuk a tagokat:

.. math::

   a_n=n\sin(1/n)=\frac{\sin t_n}{t_n}
   \xrightarrow[n\to+\infty]{}1.

Az **átviteli elvet** abban a lépésben használtuk, amely
:math:`\sin t/t` függvény :math:`t\to0` határértékéből
a :math:`t_n` helyeken vett értékek határértékére következtet.

**2. példa.** Legyen :math:`b_n=(1+1/n)^n`.
A :math:`t_n=1/n` helyettesítéssel és az
:math:`\lim_{t\to0}\ln(1+t)/t=1` nevezetes határértékkel

.. math::

   n\ln(1+1/n)
   =\frac{\ln(1+t_n)}{t_n}
   \xrightarrow[n\to+\infty]{}1.

Itt alkalmaztuk először az **átviteli elvet**.
Ezután az exponenciális függvény folytonossága
(újabb sorozatos átviteli lépés) adja:

.. math::

   b_n=\exp\bigl(n\ln(1+1/n)\bigr)
   \xrightarrow[n\to+\infty]{}\exp(1)=e.

Szakadás és cáfoló sorozatok
----------------------------

.. admonition:: Definíció — szakadási hely

   Legyen :math:`D=\operatorname{Dom}(f)` és
   :math:`u\in D'\cap\mathbb R`. Azt mondjuk, hogy
   :math:`f` **szakad** :math:`u`-ban, ha
   :math:`u\notin D`, vagy :math:`u\in D`, de
   :math:`f\notin C(u)`.

Ha :math:`u\in D`, a sorozatos jellemzés tagadása pontosan ezt adja:

.. math::

   f\notin C(u)
   \quad\Longleftrightarrow\quad
   \exists (x_n)\in D^{\mathbb N\setminus\{0\}}:
   \quad x_n\to u,\qquad f(x_n)\not\to f(u).

Az ilyen :math:`(x_n)` **cáfoló sorozat**. Ha :math:`u\notin D`,
a szakadás már a hiányzó függvényértékből következik; cáfoló
sorozattal külön azt mutathatjuk meg, hogy a függvény
**folytonosan sem terjeszthető ki** :math:`u`-ra. Ehhez elég
két, :math:`u`-hoz tartó sorozat, amelyek mentén a függvényértékek
határértéke különbözik.

**A szignumfüggvény szakadása.** Legyen
:math:`\operatorname{sgn}(x)=-1` negatív :math:`x`-re,
:math:`\operatorname{sgn}(0)=0`, és
:math:`\operatorname{sgn}(x)=1` pozitív :math:`x`-re.
Az :math:`x_n=1/n\to0` és :math:`y_n=-1/n\to0` sorozatokra

.. math::

   \operatorname{sgn}(x_n)=1,\qquad
   \operatorname{sgn}(y_n)=-1
   \quad(n\geq1).

Mindkettő cáfolja a :math:`0`-beli folytonosságot, mert
:math:`\operatorname{sgn}(0)=0`; eltérő határértékeik miatt
a :math:`\lim_{x\to0}\operatorname{sgn}(x)` sem létezik.

.. raw:: html

   <figure class="sl-figure sl-discontinuity" data-sl-counterexample="sign">
     <svg viewBox="0 0 700 270" role="img" aria-label="A szignumfüggvény és a nullához jobbról, illetve balról tartó két cáfoló sorozat"></svg>
     <figcaption>A jobb és a bal oldali sorozat is a nullához tart, de a függvényértékek rendre +1-hez és −1-hez.</figcaption>
   </figure>

**A** :math:`\sin(1/x)` **szakadása.** Legyen
:math:`f(x)=\sin(1/x)` a :math:`D=\mathbb R\setminus\{0\}`
tartományon. A :math:`0\in D'\setminus D` pontban a függvény
definíció szerint szakad. Ráadásul
:math:`x_n=1/(\pi/2+2\pi n)` és
:math:`y_n=1/(3\pi/2+2\pi n)` esetén
:math:`x_n\to0^+`, :math:`y_n\to0^+`, de
:math:`f(x_n)=1`, :math:`f(y_n)=-1` minden :math:`n\geq0`-ra.
Tehát még a jobboldali határérték sem létezik, és a
:math:`0`-beli folytonos kiterjesztés lehetetlen.

.. raw:: html

   <figure class="sl-figure sl-discontinuity" data-sl-counterexample="sin">
     <svg viewBox="0 0 700 270" role="img" aria-label="A sin(1/x) oszcillációja és két nullához jobbról tartó sorozat plusz egy, illetve mínusz egy függvényértékekkel"></svg>
     <figcaption>A két, jobbról nullához tartó sorozat képe végig két különböző érték: +1 és −1.</figcaption>
   </figure>

**3. példa: a sorozatok rendőrelve.** Ha minden elég nagy
:math:`n`-re :math:`\alpha_n\leq\beta_n\leq\gamma_n` és

.. math::

   \lim_{n\to+\infty}\alpha_n
   =\lim_{n\to+\infty}\gamma_n=L,

akkor :math:`\lim_{n\to+\infty}\beta_n=L`.
Ez a függvényhatárértékes rendőrelv következménye:
a három sorozatot az :math:`\mathbb N\setminus\{0\}`
halmazon értelmezett függvénynek tekintjük, és
:math:`n\to+\infty`-t veszünk. Most

.. math::

   -\frac1n\leq\frac{\sin n}{n}\leq\frac1n,
   \qquad
   \lim_{n\to+\infty}\left(-\frac1n\right)
   =\lim_{n\to+\infty}\frac1n=0,

tehát :math:`\lim_{n\to+\infty}\frac{\sin n}{n}=0`.

.. note::

   Valóban **minden** :math:`c\in[-1,1]` van olyan szigorúan monoton növekvő
   :math:`(n_k)`, amelyre :math:`\sin n_k\to c`.
   Az ok az, hogy :math:`1/(2\pi)` irracionális,
   ezért az :math:`n\bmod 2\pi` szögek sűrűek a körön;
   a szinusz folytonos, és a kör képe rajta :math:`[-1,1]`.
