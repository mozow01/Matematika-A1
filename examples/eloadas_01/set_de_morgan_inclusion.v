(** 2. feladat: a De Morgan-azonosság egyik tartalmazási iránya. *)

Section SetAlgebraExercise2.

Variable U : Type.
Variables A B : SetU U.

Theorem set_de_morgan_inclusion :
  ((∁ A) ∩ (∁ B)) ⊆ (∁ (A ∪ B)).
Proof.
  unfold subset, isin, intersection, complementer, union.
  intros x [HNotA HNotB] [HA | HB].
  - exact (HNotA HA).
  - exact (HNotB HB).
Qed.

End SetAlgebraExercise2.
