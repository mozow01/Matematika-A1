(** A [~A \/ B] állításból [A -> B] következik. *)

Section PropositionalLogic.

Variables A B : Prop.

Theorem or_to_imp : (~A \/ B) -> A -> B.
Proof.
  intros H HA.
  destruct H as [HNotA | HB].
  - exfalso.
    apply HNotA.
    exact HA.
  - exact HB.
Qed.

End PropositionalLogic.

