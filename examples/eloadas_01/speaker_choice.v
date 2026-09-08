(** Egy felszólaló kiválasztása. *)

Section QuantifierLogic.

Variable U : Type.
Variables P Q : U -> Prop.

Theorem speaker_choice :
  (forall x : U, P x -> exists y : U, Q y) ->
  ((exists x : U, P x) -> exists y : U, Q y).
Proof.
  intros everyone_rule [speaker speaker_speaks].
  exact (everyone_rule speaker speaker_speaks).
Qed.

End QuantifierLogic.
