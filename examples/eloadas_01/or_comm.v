(** A diszjunkció kommutativitása. *)

Section PropositionalLogic.

Variables A B : Prop.

Theorem or_comm_example : A \/ B -> B \/ A.
Proof.
  intros [HA | HB].
  - right. exact HA.
  - left. exact HB.
Qed.

End PropositionalLogic.
