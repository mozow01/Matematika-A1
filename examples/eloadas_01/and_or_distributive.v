(** A disztributivitás egyik iránya. *)

Section PropositionalLogic.

Variables A B C : Prop.

Theorem and_or_distributive :
  A /\ (B \/ C) -> (A /\ B) \/ (A /\ C).
Proof.
  intros H.
  destruct H as [HA HBC].
  destruct HBC as [HB | HC].
  - left.
    split.
    + exact HA.
    + exact HB.
  - right.
    split.
    + exact HA.
    + exact HC.
Qed.

End PropositionalLogic.

