(** Ha nem iszik senki, akkor mindenki nem iszik. *)

Section QuantifierLogic.

Variable U : Type.
Variable P : U -> Prop.

Theorem nobody_drinks :
  ~ (exists x : U, P x) -> forall y : U, ~ P y.
Proof.
  intros HNoOne y Hy.
  apply HNoOne.
  exists y.
  exact Hy.
Qed.

End QuantifierLogic.
