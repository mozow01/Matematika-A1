(** Pisti a kocsmában. *)

Require Import Coq.Logic.Classical_Prop.

Section QuantifierLogic.

Variable U : Type.
Variable p : U.
Variable I : U -> Prop.

Theorem pisti_pub :
  exists x : U, ((exists y : U, I y) -> I x).
Proof.
  destruct (classic (exists y : U, I y)) as [HSomeone | HNoOne].
  - destruct HSomeone as [y Hy].
    exists y.
    intros _.
    exact Hy.
  - exists p.
    intros HSomeone.
    contradiction.
Qed.

End QuantifierLogic.
