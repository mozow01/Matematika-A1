(** 3. feladat: az üres halmaz minden halmaznak részhalmaza. *)

Section SetAlgebraExercise3.

Variable U : Type.
Variable A : SetU U.

Theorem empty_set_is_subset :
  (∅ : SetU U) ⊆ A.
Proof.
  unfold subset, isin, empty.
  intros x HEmpty.
  contradiction.
Qed.

End SetAlgebraExercise3.
