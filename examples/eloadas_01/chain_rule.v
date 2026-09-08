(** Láncszabály. *)

Section PropositionalLogic.

Variables A B C : Prop.

Theorem chain_rule : (A -> B) -> (B -> C) -> A -> C.
Proof.
  intros HAB HBC HA.
  apply HBC.
  apply HAB.
  exact HA.
Qed.

End PropositionalLogic.

