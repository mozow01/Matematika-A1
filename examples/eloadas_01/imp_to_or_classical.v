(** A másik irányhoz szükség van a kizárt harmadik elvére. *)

Section PropositionalLogic.

Variables A B : Prop.
Variable excluded_middle : forall P : Prop, P \/ ~P.

Theorem imp_to_or_with_lem : (A -> B) -> ~A \/ B.
Proof.
  intros HAB.
  destruct (excluded_middle A) as [HA | HNotA].
  - right.
    apply HAB.
    exact HA.
  - left.
    exact HNotA.
Qed.

End PropositionalLogic.

