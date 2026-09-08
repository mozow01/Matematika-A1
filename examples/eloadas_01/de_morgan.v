(** De Morgan egyik iránya. *)

Section PropositionalLogic.

Variables A B : Prop.

Theorem de_morgan_one_way : ~(A \/ B) -> ~A /\ ~B.
Proof.
  intros HNotOr.
  split.
  - intros HA.
    apply HNotOr.
    left.
    exact HA.
  - intros HB.
    apply HNotOr.
    right.
    exact HB.
Qed.

End PropositionalLogic.

