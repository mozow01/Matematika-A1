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

Az itt használt **átviteli elv**: ha
:math:`\lim_{x\to u}h(x)=L` és
:math:`t_n\in\operatorname{Dom}(h)\setminus\{u\}`,
:math:`t_n\to u`, akkor :math:`h(t_n)\to L`.
Ez a függvényhatárérték sorozatos jellemzése; ha
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

tehát :math:`\lim_{n\to+\infty}\sin n/n=0`.

.. note::

   Valóban **minden** :math:`c\in[-1,1]` részsorozati
   határértéke :math:`(\sin n)`-nek: van növekvő
   :math:`(n_k)`, amelyre :math:`\sin n_k\to c`.
   Az ok az, hogy :math:`1/(2\pi)` irracionális,
   ezért az :math:`n\bmod 2\pi` szögek sűrűek a körön
   (az irracionális forgás sűrűségi tétele);
   a szinusz folytonos, és a kör képe alatta :math:`[-1,1]`.
   A forgási pálya minden farokrésze is sűrű, ezért a
   közelítő indexek növekvőre választhatók.
   Ez nem mond ellent az előző határértéknek:
   az :math:`1/n` tényező minden ingadozást nullára szorít.
