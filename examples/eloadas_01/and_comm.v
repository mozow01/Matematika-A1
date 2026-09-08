(** A konjunkció kommutativitása. *)

Section PropositionalLogic.

Variables A B : Prop.

Theorem and_comm_example : A /\ B -> B /\ A.
Proof.
  intros H.
  destruct H as [HA HB].
  split.
  - exact HB.
  - exact HA.
Qed.

End PropositionalLogic.

