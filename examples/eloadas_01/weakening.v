(** Gyengítés: egy feltevést nem kötelező felhasználni. *)

Section PropositionalLogic.

Variables A B : Prop.

Theorem weakening : A -> B -> A.
Proof.
  intros HA HB.
  exact HA.
Qed.

End PropositionalLogic.

